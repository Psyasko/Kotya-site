import { useCallback, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, specialist } from '../data/site';
import { useActiveSection } from '../hooks/useReveal';

const sectionIds = navLinks.map(({ id }) => id);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const updateActive = useCallback((id) => setActive(id ?? ''), []);
  useActiveSection(sectionIds, updateActive);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return () => document.body.classList.remove('menu-open');

    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`topbar ${menuOpen ? 'topbar--menu-open' : ''}`}>
      <a className="brand" href="#hero" onClick={closeMenu} aria-label="На початок сторінки">
        <strong>{specialist.name}</strong>
        <small>{specialist.role}</small>
      </a>

      <nav id="site-nav" className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Основна навігація">
        {navLinks.map(({ id, label }, index) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={closeMenu}
            aria-current={active === id ? 'location' : undefined}
            style={{ '--i': index }}
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="nav-scrim" aria-hidden="true" onClick={closeMenu} />
    </header>
  );
}
