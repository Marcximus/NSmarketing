// Tastaturfokus må ikke ende skjult bag den klæbende header (WCAG 2.4.7 / 2.4.11).
// Browseren scroller kun et fokuseret element frem, når det ligger helt uden for vinduet, og regner ikke
// scroll-margin med. Elementets scroll-margin-top angiver derfor, hvor meget af toppen der er dækket
// (global.css: main * og footer * = header + 1rem; pakkesidens tillæg og tabel har større værdier pga.
// deres egne klæbende bjælker). Ligger det fokuserede element i det felt, scroller vi selv det sidste stykke.
// Elementer i selve headeren og i andre klæbende/faste bjælker springes over – de flytter sig ikke ved scroll.

const header = document.querySelector('[data-header]');

const insideStickyBar = (el: Element) => {
  for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
    const position = getComputedStyle(p).position;
    if (position === 'sticky' || position === 'fixed') return true;
  }
  return false;
};

document.addEventListener('focusin', (event) => {
  const el = event.target;
  if (!(el instanceof HTMLElement) || header?.contains(el) || !el.matches(':focus-visible')) return;

  // Vent til browserens egen fokus-scroll er sket
  requestAnimationFrame(() => {
    if (document.activeElement !== el) return;
    const covered = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    if (!covered || insideStickyBar(el)) return;
    const top = el.getBoundingClientRect().top;
    if (top < covered) window.scrollBy({ top: top - covered, behavior: 'instant' });
  });
});
