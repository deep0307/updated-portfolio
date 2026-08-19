import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { iconUrl } from '../lib/icons.js';

export default function Projects({ items }) {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of things I&apos;ve designed, built, and shipped."
    >
      <div className="project-grid">
        {items.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 90}>
            <article className="project-card">
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>
              {project.tech?.length > 0 && (
                <div className="project-card__tech">
                  {project.tech.map((slug) => (
                    <img
                      key={slug}
                      className="tech-icon"
                      src={iconUrl(slug)}
                      alt={slug}
                      title={slug}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
              <div className="project-card__links">
                {project.link && (
                  <a className="btn btn--mini" href={project.link} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                )}
                {project.repo && (
                  <a className="btn btn--mini btn--mini-ghost" href={project.repo} target="_blank" rel="noreferrer">
                    Source
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
