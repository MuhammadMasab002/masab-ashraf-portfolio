import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { DetailLayout } from '@/components/detail-layout';
import { Reveal } from '@/components/reveal';
import { experiences } from '@/data/portfolio';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) return { title: 'Experience Not Found' };
  return {
    title: `${experience.role} at ${experience.company} — Masab Ashraf`,
    description: experience.description,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) notFound();

  return (
    <DetailLayout
      eyebrow={`Experience / ${experience.company}`}
      title={experience.role}
      intro={experience.description}
    >
      <Reveal>
        <div>
          <h2 className="display">{experience.company}</h2>
          <p>{experience.description}</p>
          <div className="signal-list" style={{ marginTop: 42 }}>
            {experience.focus.map((item, index) => (
              <div className="signal" key={item}>
                <b>0{index + 1}</b>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <aside className="detail-side">
          <dl>
            <dt>Period</dt>
            <dd>{experience.period}</dd>
            <dt>Location</dt>
            <dd>{experience.location}</dd>
            <dt>Focus</dt>
            <dd>{experience.focus.join(' · ')}</dd>
          </dl>
          <div className="route-nav">
            <Link href="/#experience" data-testid="link-back-experience">
              All experience
            </Link>
            <Link href="/about" data-testid="link-experience-about">
              More about me <ArrowRight size={13} />
            </Link>
          </div>
        </aside>
      </Reveal>
    </DetailLayout>
  );
}
