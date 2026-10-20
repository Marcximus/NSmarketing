// Diskret fade-in af elementer med data-reveal, når de scrolles ind i billedet.
// Brug style="--reveal-delay: .1s" for forskudt animation.

const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  items.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((el) => observer.observe(el));
}

// Fokus via tastatur viser elementet med det samme (ingen usynlig fokusring under fade-in)
document.addEventListener('focusin', (e) => {
  const el = (e.target as Element | null)?.closest?.('[data-reveal]');
  if (el) el.classList.add('is-visible');
});
