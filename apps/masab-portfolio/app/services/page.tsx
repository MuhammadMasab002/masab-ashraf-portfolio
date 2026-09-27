import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { DetailLayout } from '@/components/detail-layout';
import { Reveal } from '@/components/reveal';
import { profile } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Masab Ashraf',
  description: 'Full-stack engineering services: Product interfaces, full-stack builds, and mobile surfaces.',
};

export default function ServicesPage() {
  const services = [
    ['Product interfaces', 'React and Next.js experiences that turn complex flows into calm, useful screens.'],
    ['Full-stack builds', 'From data model and REST API to responsive frontend and the handoff after launch.'],
    ['Mobile product surfaces', 'React Native work that carries the same product logic into a mobile context.'],
  ];

  return (
    <DetailLayout
      eyebrow="Services / 06"
      title="Build the thing, properly."
      intro="I work best where product thinking and implementation need to stay in the same room. Choose the shape of help you need, then let’s make the first step concrete."
    >
      <Reveal>
        <div>
          <h2 className="display">A focused engagement, not a black box.</h2>
          <p>
            Good engineering is visible. I keep the decisions legible, the feedback loop short, and the work
            connected to the people who will use it.
          </p>
          <div className="signal-list" style={{ marginTop: 42 }}>
            {services.map(([name, detail], index) => (
              <div className="signal" key={name}>
                <b>0{index + 1}</b>
                <span>
                  <strong>{name}</strong>
                  <br />
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <aside className="detail-side">
          <dl>
            <dt>Process</dt>
            <dd>Idea → Design → Analytics → Implementation → Testing → Deployment</dd>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
            <dt>Start a conversation</dt>
            <dd>
              <a
                className="project-link"
                href={`mailto:${profile.email}`}
                data-testid="link-services-email"
              >
                {profile.email} <Mail size={13} />
              </a>
            </dd>
          </dl>
          <div className="route-nav">
            <Link href="/" data-testid="link-services-home">
              Back home
            </Link>
            <a href={`mailto:${profile.email}`} data-testid="link-services-cta">
              Get in touch <ArrowRight size={13} />
            </a>
          </div>
        </aside>
      </Reveal>
    </DetailLayout>
  );
}
