'use client';

import { useState } from 'react';
import { Check, Copy, Github, Linkedin } from 'lucide-react';
import { DetailLayout } from '@/components/detail-layout';
import { Reveal } from '@/components/reveal';
import { profile } from '@/data/portfolio';

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <DetailLayout
      eyebrow="About / 07"
      title="A field guide to how I work."
      intro="I’m Masab Ashraf, a Full-Stack Software Engineer based in Lahore, Pakistan. I build real production products with a bias toward clarity, useful details, and steady iteration."
    >
      <Reveal>
        <div>
          <h2 className="display">Close to the problem.</h2>
          <p>
            I’m currently pursuing a BS Computer Science at University of Education, Lahore (2023–2027, in
            progress). Alongside that foundation, I’ve worked across product teams and projects that made
            the theory practical: an EdTech LMS, a multi-vendor marketplace, and the interfaces around
            them.
          </p>
          <p>
            I care about the seam between frontend and backend. It’s where the user’s expectation becomes a
            request, a state, a response, and eventually a product they can trust.
          </p>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={copyEmail}
            data-testid="button-copy-email"
          >
            <Copy size={14} /> Copy email{' '}
            {copied && (
              <span className="copy-status">
                <Check size={12} /> copied
              </span>
            )}
          </button>
        </div>
      </Reveal>
      <Reveal>
        <aside className="detail-side">
          <dl>
            <dt>Name</dt>
            <dd>{profile.name}</dd>
            <dt>Role</dt>
            <dd>{profile.title}</dd>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
            <dt>Education</dt>
            <dd>
              {profile.education}
              <br />
              {profile.educationPeriod}
            </dd>
          </dl>
          <div className="route-nav">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="link-about-linkedin"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-testid="link-about-github"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </aside>
      </Reveal>
    </DetailLayout>
  );
}
