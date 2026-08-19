import { iconUrl } from '../lib/icons.js';

export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__socials">
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
        <p className="footer__note">
          © {new Date().getFullYear()} {profile?.name}. Built with React &amp; Node.
        </p>
      </div>
    </footer>
  );
}
