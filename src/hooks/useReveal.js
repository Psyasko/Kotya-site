import { useEffect } from 'react';

// Додає .is-visible елементам з [data-reveal], коли вони заходять у viewport.
// Затримку для послідовної появи задає CSS-змінна --i на самому елементі.
export function useReveal() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll('[data-reveal]')];
    if (!nodes.length) return undefined;

    const reveal = (node) => node.classList.add('is-visible');

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

// Повертає id секції, яка зараз займає верхню частину екрана.
export function useActiveSection(ids, setActive) {
  useEffect(() => {
    const targets = ids.map((id) => document.getElementById(id)?.closest('section')).filter(Boolean);
    if (!targets.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.section);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [ids, setActive]);
}
