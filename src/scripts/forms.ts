// Håndterer alle formularer med data-form="navn".
// Er site.formEndpoint sat (fx Formspree/Web3Forms), sendes formularen dertil.
// Ellers åbnes brugerens mailprogram med en udfyldt mail som fallback.

import { site } from '../data/site';

const messages = {
  sending: 'Sender …',
  success: 'Tak! Vi vender tilbage hurtigst muligt – senest inden for én hverdag.',
  newsletter: 'Tak for din tilmelding!',
  error: `Noget gik galt. Prøv igen, eller skriv direkte til ${site.email}.`,
  mailto: 'Dit mailprogram åbner nu med beskeden udfyldt – tryk send for at sende den til os.',
};

const labelFor = (form: HTMLFormElement, name: string) => {
  const field = form.elements.namedItem(name);
  if (field instanceof HTMLElement && field.id) {
    const label = form.querySelector(`label[for="${field.id}"]`);
    if (label?.textContent) return label.textContent.replace('*', '').trim();
  }
  return name;
};

function prefillFromUrl(form: HTMLFormElement) {
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    const field = form.elements.namedItem(key);
    if (field instanceof HTMLSelectElement || field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      if (field instanceof HTMLSelectElement && ![...field.options].some((o) => o.value === value)) return;
      field.value = value;
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
  const type = form.dataset.form ?? 'kontakt';
  const setStatus = (text: string) => {
    if (status) status.textContent = text;
  };

  prefillFromUrl(form);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    if (data.get('_gotcha')) return; // spam-felt

    if (!site.formEndpoint) {
      const subject = String(data.get('_subject') || `Henvendelse via ${site.name}`);
      const body = [...data.entries()]
        .filter(([key, value]) => !key.startsWith('_') && String(value).trim() !== '')
        .map(([key, value]) => `${labelFor(form, key)}: ${value}`)
        .join('\n');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus(messages.mailto);
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
      form.reset();
      setStatus(type === 'newsletter' ? messages.newsletter : messages.success);
    } catch {
      setStatus(messages.error);
    } finally {
      submit?.removeAttribute('disabled');
    }
  });
});
