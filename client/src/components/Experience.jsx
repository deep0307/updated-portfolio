import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

export default function Experience({ items }) {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I&apos;ve worked and what I built along the way."
    >
      <div className="timeline">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={(index % 3) * 90}>
            <article className="exp-card">
              <div className="exp-card__head">
                <div>
                  <h3 className="exp-card__role">{item.role}</h3>
                  <p className="exp-card__company">
                    {item.company} <span className="muted">· {item.location}</span>
                  </p>
                </div>
                <span className="chip">{item.period}</span>
              </div>
              <p className="exp-card__summary">{item.summary}</p>
              {item.highlights?.length > 0 && (
                <ul className="exp-card__list">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
