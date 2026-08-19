import { useEffect, useState } from 'react';

const LINKS = ['experience', 'projects', 'skills', 'education'];

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const firstName = profile?.name?.split(' ')[0] || 'portfolio';

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
        <span className="nav__brand-mark" aria-hidden="true">&lt;/&gt;</span>
        {firstName}
      </a>

      <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link} className="nav__link" href={`#${link}`} onClick={() => setOpen(false)}>
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
        <a
          className="nav__link nav__link--cta"
          href={`mailto:${profile?.email || ''}`}
          onClick={() => setOpen(false)}
        >
          Hire me
        </a>
      </nav>

      <button
        type="button"
        className={`nav__toggle ${open ? 'nav__toggle--active' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
