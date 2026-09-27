import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DetailLayout } from '@/components/detail-layout';
import { Reveal } from '@/components/reveal';
import { profile } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Masab Ashraf',
  description: 'Notes on product engineering, React, APIs, and lessons from shipping real products.',
};

export default function BlogPage() {
  return (
    <DetailLayout
      eyebrow="Blog / 08"
      title="Notes, later."
      intro="A space for field notes on building products, learning in public, and the decisions that sit between a design file and a shipped feature."
    >
      <Reveal>
        <div className="empty-blog">
          <div className="eyebrow">Publishing queue / empty for now</div>
          <h2 className="display">No posts yet — intentionally.</h2>
          <p>
            This is the future home for writing. There are no fabricated posts here; when there is something
            worth sharing, it will appear here with the same care as the work.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="project-link"
            data-testid="link-blog-contact"
          >
            Say hello in the meantime <ArrowRight size={14} />
          </a>
        </div>
      </Reveal>
      <Reveal>
        <aside className="detail-side">
          <dl>
            <dt>Status</dt>
            <dd>Preparing the first entry</dd>
            <dt>Topics</dt>
            <dd>Product engineering · React · APIs · lessons from shipping</dd>
          </dl>
          <div className="route-nav">
            <Link href="/" data-testid="link-blog-home">
              Back home
            </Link>
            <Link href="/about" data-testid="link-blog-about">
              About Masab <ArrowRight size={13} />
            </Link>
          </div>
        </aside>
      </Reveal>
    </DetailLayout>
  );
}
