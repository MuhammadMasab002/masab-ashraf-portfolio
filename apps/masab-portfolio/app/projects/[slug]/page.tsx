import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { DetailLayout } from '@/components/detail-layout';
import { Reveal } from '@/components/reveal';
import { projects } from '@/data/portfolio';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — Masab Ashraf`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const other = projects.find((item) => item.slug !== project.slug);

  return (
    <DetailLayout
      eyebrow={`Case study / ${project.kicker}`}
      title={project.name}
      intro={project.description}
    >
      <Reveal>
        <div>
          <div
            className={`project-art art-${project.slug === 'mymentor' ? 'mymentor' : 'mocco'}`}
            style={{ minHeight: 360, border: '1px solid var(--line)' }}
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
          <h2 className="display" style={{ marginTop: 50 }}>
            A product built around the actual user journey.
          </h2>
          <p>{project.longDescription}</p>
          <p>
            My role was {project.role.toLowerCase()}. The work sits at the intersection of a useful
            interface, dependable data, and shipping decisions that keep the product moving.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <aside className="detail-side">
          <dl>
            <dt>Role</dt>
            <dd>{project.role}</dd>
            <dt>Stack</dt>
            <dd>{project.stack.join(' · ')}</dd>
            <dt>Live product</dt>
            <dd>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`link-detail-live-${project.slug}`}
              >
                Open product <ExternalLink size={13} />
              </a>
            </dd>
          </dl>
          <div className="route-nav">
            <Link href={`/projects/${other?.slug}`} data-testid="link-next-project">
              Next project <ArrowRight size={13} />
            </Link>
            <Link href="/#work" data-testid="link-back-work">
              Back to work
            </Link>
          </div>
        </aside>
      </Reveal>
    </DetailLayout>
  );
}
