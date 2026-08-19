import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { iconUrl } from '../lib/icons.js';

export default function Skills({ items }) {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="The languages, frameworks, databases, and tools I work with."
    >
      <div className="skills-grid">
        {items.map((group, groupIndex) => (
          <Reveal key={group.category} delay={(groupIndex % 2) * 90}>
            <div className="skill-group">
              <h3 className="skill-group__title">{group.category}</h3>
              <div className="skill-group__items">
                {group.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill"
                    style={{ '--i': index }}
                    title={`${skill.name} — ${group.category}`}
                  >
                    <img
                      className="skill__icon"
                      src={iconUrl(skill.icon)}
                      alt={skill.name}
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                    <span className="skill__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
