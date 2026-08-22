import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ResumeModal from './ResumeModal.jsx';
import { iconUrl } from '../lib/icons.js';

export default function Hero({ profile }) {
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeUrl = profile?.resumeUrl || '/Deep_Dodhiwala_Resume.pdf';

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <Reveal>
          <p className="hero__eyebrow">Hello, I&apos;m</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="hero__name">
            <span className="grad-text">{profile?.name}</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="hero__title">{profile?.title}</h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero__about">{profile?.about}</p>
        </Reveal>
        <Reveal delay={320}>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work
            </a>
            <button type="button" className="btn btn--ghost" onClick={() => setResumeOpen(true)}>
              View Resume
            </button>
          </div>
          <div className="hero__meta">
            <span>{profile?.location}</span>
            <span className="hero__dot" aria-hidden="true">·</span>
            <span>{profile?.email}</span>
          </div>
          <div className="hero__socials">
            {profile?.socials?.map((social) => (
              <a
                key={social.label}
                className="social-icon"
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <img src={iconUrl(social.icon)} alt="" loading="lazy" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      {resumeOpen && <ResumeModal src={resumeUrl} onClose={() => setResumeOpen(false)} />}
    </section>
  );
}
