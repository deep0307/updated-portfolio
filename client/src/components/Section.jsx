import Reveal from './Reveal.jsx';

/**
 * Standard page section with a consistent heading style.
 */
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section__inner">
        <Reveal>
          <header className="section__head">
            <span className="section__marker" aria-hidden="true" />
            <h2 className="section__title">{title}</h2>
          </header>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </Reveal>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}
