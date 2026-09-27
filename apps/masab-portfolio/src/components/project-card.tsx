import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export function ProjectArt({ project }: { project: Project }) {
  return (
    <div
      className={`project-art art-${project.slug === 'mymentor' ? 'mymentor' : 'mocco'}`}
      aria-label={`${project.name} interface preview`}
    >
      <div className="art-window">
        <div className="art-window-top">
          <i />
          <i />
          <i />
        </div>
        <div className="art-window-body">
          <div className="art-line" />
          <div className="art-line short" />
          <div className="art-chart" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-testid={`card-project-${project.slug}`}>
      <div className="project-copy">
        <div>
          <div className="eyebrow">{project.kicker}</div>
          <h3 className="display">{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-meta">
            {project.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Link
            href={`/projects/${project.slug}`}
            className="project-link"
            data-testid={`link-project-${project.slug}`}
          >
            Read case study <ArrowRight size={14} />
          </Link>
          <a
            className="project-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            data-testid={`link-live-${project.slug}`}
          >
            View live product <ExternalLink size={13} />
          </a>
        </div>
      </div>
      <ProjectArt project={project} />
    </article>
  );
}
