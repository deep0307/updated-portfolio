import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

export default function Education({ items }) {
  return (
    <Section id="education" title="Education" subtitle="Where I learned, and what I took away.">
      <div className="edu-list">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={(index % 2) * 90}>
            <article className="edu-card">
              <span className="chip">{item.period}</span>
              <h3 className="edu-card__degree">{item.degree}</h3>
              <p className="edu-card__school">
                {item.school} <span className="muted">· {item.location}</span>
              </p>
              {item.details && <p className="edu-card__details">{item.details}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
