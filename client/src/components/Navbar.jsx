import { useEffect, useState } from 'react';

const LINKS = ['experience', 'projects', 'skills', 'education'];

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const displayName = 'My Portfolio';

  const copyEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    const email = profile?.email;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
        <span className="nav__brand-mark" aria-hidden="true">&lt;/&gt;</span>
        <span className="nav__brand-text">{displayName}</span>
      </a>

      <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link} className="nav__link" href={`#${link}`} onClick={() => setOpen(false)}>
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
        <button type="button" className="nav__link nav__link--cta" onClick={copyEmail}>
          {copied ? 'Email copied!' : 'Get in touch'}
        </button>
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
