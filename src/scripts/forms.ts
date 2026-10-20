// Håndterer alle formularer med data-form="navn".
// Er site.formEndpoint sat (fx Formspree), sendes formularen dertil, og først når serveren har
// svaret OK, vises en tak.
// Ellers åbnes brugerens mailprogram med en udfyldt mail som fallback. Statusbeskeden er ærlig: intet er
// sendt endnu, så den beder brugeren trykke send i mailen (ingen "Tak" før noget er afsendt) og nævner
// e-mailadressen, hvis mailprogrammet ikke åbner.
// Uden JS bruger formularerne deres egen action (formEndpoint eller mailto) og browserens validering.

import { site } from '../data/site';

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const success: Record<string, string> = {
  kontakt: 'Tak for jeres besked! Vi svarer inden for én hverdag.',
  karriere: 'Tak for din ansøgning! Vi læser den grundigt og vender tilbage.',
  newsletter: 'Tak for din tilmelding!',
};

/** Successtekst pr. formulartype. Opkald følger det valgte tidspunkt ("Hurtigst muligt" er standard). */
function successText(form: HTMLFormElement, type: string): string {
  if (type !== 'opkald') return success[type] ?? success.kontakt;
  const tid = form.elements.namedItem('tidspunkt');
  // Et valgt tidsrum kan allerede være passeret i dag – så lover vi ikke samme dag
  if (tid instanceof HTMLSelectElement && tid.value && tid.value !== 'Hurtigst muligt') {
    return 'Tak! Vi ringer jer op i det valgte tidsrum. Er det allerede passeret i dag, ringer vi næste hverdag.';
  }
  const sameDay = site.callbackCutoff
    ? ` – samme dag, hvis I skriver på en hverdag inden kl. ${site.callbackCutoff}`
    : '';
  return `Tak! Vi ringer jer op hurtigst muligt${sameDay}.`;
}

const messages = {
  sending: 'Sender …',
  error: `Noget gik galt. Prøv igen, eller skriv direkte til ${site.email}.`,
};

/** Status i mailto-fallbacken pr. formulartype: intet er sendt, før brugeren trykker send i mailen */
const mailtoText: Record<string, string> = {
  kontakt: 'Jeres mailprogram åbner nu med beskeden udfyldt. Tryk send i mailen – så vender vi tilbage inden for én hverdag.',
  opkald: 'Jeres mailprogram åbner nu med opkaldsønsket udfyldt. Tryk send i mailen – så ringer vi jer op.',
  karriere: 'Dit mailprogram åbner nu med ansøgningen udfyldt. Tryk send i mailen – så læser vi den og vender tilbage.',
  newsletter: 'Dit mailprogram åbner nu med tilmeldingen udfyldt. Tryk send i mailen for at blive tilmeldt.',
};

/** Felter, der må forudfyldes fra URL'en pr. formulartype, fx /kontakt/?pakke=gold eller /karriere/?rolle=Praktikant */
const PREFILL: Record<string, string[]> = { kontakt: ['pakke', 'emne'], karriere: ['rolle'] };

const isField = (el: unknown): el is Field =>
  el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const clean = (s: string) => s.replace(/\s+/g, ' ').trim();

// ---------- Forudfyldning ----------

function prefillFromUrl(form: HTMLFormElement, type: string): boolean {
  const allowed = PREFILL[type];
  if (!allowed) return false;

  const params = new URLSearchParams(window.location.search);
  const filled = new Set<string>();

  for (const key of allowed) {
    const value = params.get(key);
    if (!value) continue;
    const field = form.elements.namedItem(key);
    if (field instanceof HTMLSelectElement) {
      if (!Array.from(field.options).some((o) => o.value === value && !o.disabled)) continue;
      field.value = value;
      filled.add(key);
    } else if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.value = value;
      filled.add(key);
    }
  }

  // ?pakke=gold uden emne: sæt emnet til "Pakkeløsning"
  if (type === 'kontakt' && filled.has('pakke') && !params.get('emne')) {
    const emne = form.elements.namedItem('emne');
    if (emne instanceof HTMLSelectElement && !emne.value) emne.value = 'pakkeloesning';
  }

  return filled.size > 0;
}

// ---------- Validering med fejltekster ved felterne ----------

function errorText(el: Field): string {
  if (el instanceof HTMLInputElement && el.type === 'checkbox') return 'Sæt flueben for at fortsætte.';
  if (el instanceof HTMLSelectElement) return 'Vælg en mulighed.';
  if (el instanceof HTMLInputElement && el.type === 'email') {
    return el.validity.typeMismatch
      ? 'Skriv en gyldig e-mailadresse, fx navn@firma.dk.'
      : 'Skriv din e-mailadresse.';
  }
  if (el instanceof HTMLInputElement && el.type === 'tel') return 'Skriv dit telefonnummer.';
  return 'Udfyld feltet.';
}

const errorId = (form: HTMLFormElement, el: Field) => `${el.id || `${form.dataset.form}-${el.name}`}-fejl`;

function setDescribedBy(el: Field, id: string, add: boolean) {
  const ids = (el.getAttribute('aria-describedby') ?? '').split(/\s+/).filter((t) => t && t !== id);
  if (add) ids.push(id);
  if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
  else el.removeAttribute('aria-describedby');
}

function showError(form: HTMLFormElement, el: Field) {
  const id = errorId(form, el);
  let error = document.getElementById(id);
  if (!error) {
    error = document.createElement('p');
    error.className = 'field-error';
    error.id = id;
    const anchor = (el instanceof HTMLInputElement && el.type === 'checkbox' && el.closest('label')) || el;
    anchor.insertAdjacentElement('afterend', error);
  }
  error.textContent = errorText(el);
  el.setAttribute('aria-invalid', 'true');
  setDescribedBy(el, id, true);
}

function clearError(form: HTMLFormElement, el: Field) {
  el.setCustomValidity('');
  if (!el.hasAttribute('aria-invalid')) return;
  const id = errorId(form, el);
  el.removeAttribute('aria-invalid');
  document.getElementById(id)?.remove();
  setDescribedBy(el, id, false);
}

/** Validerer formularen, viser fejl ved felterne og returnerer de ugyldige felter */
function validate(form: HTMLFormElement): Field[] {
  const fields = Array.from(form.elements).filter(isField).filter((el) => el.willValidate);

  // Felter med kun mellemrum tæller som tomme
  for (const el of fields) {
    const isText =
      el instanceof HTMLTextAreaElement ||
      (el instanceof HTMLInputElement && ['text', 'email', 'tel'].includes(el.type));
    if (isText && el.required) el.setCustomValidity(el.value.trim() ? '' : 'Udfyld feltet.');
  }

  const invalid: Field[] = [];
  for (const el of fields) {
    if (el.checkValidity()) {
      clearError(form, el);
    } else {
      showError(form, el);
      invalid.push(el);
    }
  }
  return invalid;
}

// ---------- Mailto-fallback ----------

function mailLabel(form: HTMLFormElement, key: string): string {
  const field = form.elements.namedItem(key);
  if (!isField(field)) return capitalize(key);
  if (field.dataset.mailLabel) return field.dataset.mailLabel;
  if (field instanceof HTMLInputElement && field.type === 'checkbox') return capitalize(key);
  const label = field.id ? form.querySelector(`label[for="${CSS.escape(field.id)}"]`) : null;
  const text = label?.textContent?.replace(/\s+/g, ' ').replace(/[*?:\s]+$/, '').trim();
  return text || capitalize(key);
}

function mailValue(form: HTMLFormElement, key: string, value: string): string {
  const field = form.elements.namedItem(key);
  if (field instanceof HTMLSelectElement) return clean(field.selectedOptions[0]?.text ?? value);
  return value.trim();
}

/** Kort navn på et valgt punkt i en select, fx "Gold" fra "Gold – 10.995 kr./md." */
function selectedName(form: HTMLFormElement, key: string): string {
  const field = form.elements.namedItem(key);
  if (!(field instanceof HTMLSelectElement) || !field.value) return '';
  return clean(field.selectedOptions[0]?.text ?? '').split(' – ')[0];
}

function mailSubject(form: HTMLFormElement, data: FormData): string {
  const base = String(data.get('_subject') || `Henvendelse via ${site.name}`);
  const pakke = selectedName(form, 'pakke');
  const emneField = form.elements.namedItem('emne');
  const emne = pakke && emneField instanceof HTMLSelectElement && emneField.value === 'pakkeloesning' ? '' : selectedName(form, 'emne');
  const details = [pakke, emne, selectedName(form, 'rolle')].filter(Boolean);
  return details.length ? `${base} – ${details.join(', ')}` : base;
}

// ---------- Opsætning ----------

document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
  form.noValidate = true; // JS står for valideringen; uden JS bruges browserens egen
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
  const type = form.dataset.form ?? 'kontakt';
  const setStatus = (text: string) => {
    if (status) status.textContent = text;
  };

  if (prefillFromUrl(form, type) && type === 'kontakt' && !window.location.hash) {
    document.getElementById('skriv')?.scrollIntoView({ block: 'start' });
  }

  const onEdit = (event: Event) => {
    if (isField(event.target)) clearError(form, event.target);
  };
  form.addEventListener('input', onEdit);
  form.addEventListener('change', onEdit);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const invalid = validate(form);
    if (invalid.length) {
      setStatus(
        invalid.length === 1
          ? '1 felt skal udfyldes eller rettes.'
          : `${invalid.length} felter skal udfyldes eller rettes.`,
      );
      invalid[0].focus();
      return;
    }

    const data = new FormData(form);
    if (data.get('_gotcha')) return; // spam-felt

    if (!site.formEndpoint) {
      const body = [...data.entries()]
        .filter(([key, value]) => !key.startsWith('_') && String(value).trim() !== '')
        .map(([key, value]) => `${mailLabel(form, key)}: ${mailValue(form, key, String(value))}`)
        .join('\n');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(mailSubject(form, data))}&body=${encodeURIComponent(body)}`;
      setStatus(`${mailtoText[type] ?? mailtoText.kontakt} Åbnede der ikke en mail? Skriv direkte til ${site.email}.`);
      return;
    }

    submit?.setAttribute('disabled', '');
    setStatus(messages.sending);
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(String(response.status));
      const done = successText(form, type); // læses før reset, da opkaldsteksten følger det valgte tidspunkt
      form.reset();
      setStatus(done);
    } catch {
      setStatus(messages.error);
    } finally {
      submit?.removeAttribute('disabled');
    }
  });
});
