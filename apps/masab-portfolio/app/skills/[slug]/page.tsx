import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { DetailLayout } from '@/components/detail-layout';
import { Reveal } from '@/components/reveal';
import { skillGroups } from '@/data/portfolio';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return skillGroups.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const group = skillGroups.find((g) => g.slug === slug);
  if (!group) return { title: 'Skills Not Found' };
  return {
    title: `${group.title} — Masab Ashraf`,
    description: group.description,
  };
}

export default async function SkillDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const group = skillGroups.find((item) => item.slug === slug);
  if (!group) notFound();

  return (
    <DetailLayout
      eyebrow={`Skills / ${group.eyebrow}`}
      title={group.title}
      intro={group.description}
    >
      <Reveal>
        <div>
          <h2 className="display">Useful range, not tool collecting.</h2>
          <p>
            {group.description} I use this part of the stack to make product behavior more legible, from the
            first component to the last request.
          </p>
          <div className="project-meta" style={{ marginTop: 36 }}>
            {group.skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <aside className="detail-side">
          <dl>
            <dt>Group</dt>
            <dd>{group.eyebrow}</dd>
            <dt>Skills</dt>
            {group.skills.map((skill) => (
              <dd key={skill}>{skill}</dd>
            ))}
          </dl>
          <div className="route-nav">
            <Link href="/#skills" data-testid="link-back-skills">
              All capabilities
            </Link>
            <Link href="/services" data-testid="link-skill-services">
              Services <ArrowRight size={13} />
            </Link>
          </div>
        </aside>
      </Reveal>
    </DetailLayout>
  );
}
