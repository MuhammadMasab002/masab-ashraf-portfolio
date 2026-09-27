import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Code2, Mail } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { ProcessBand } from '@/components/process-band';
import { ProjectCard } from '@/components/project-card';
import { experiences, profile, projects, skillGroups } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masab Ashraf — Full-Stack Software Engineer',
  description: 'Full-stack software engineer based in Lahore, Pakistan. Specializing in React, Next.js, Node.js, and reliable web applications.',
};

export default function HomePage() {
  return (
    <main>
      <section className="hero grid-lines">
        <div className="page-wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Full-stack software engineer · Lahore, Pakistan</div>
              <h1 className="display">
                I build products that <em>hold up.</em>
              </h1>
              <p className="hero-intro">
                I’m Masab — a full-stack engineer working across React, Next.js, Node.js, and the systems
                underneath. I like software that feels clear on the surface and considered all the way down.
              </p>
              <div className="hero-actions">
                <Link href="/#work" className="btn btn-primary" data-testid="button-explore-work">
                  Explore the work <ArrowRight size={15} />
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-ghost"
                  data-testid="button-start-conversation"
                >
                  <Mail size={15} /> Start a conversation
                </a>
              </div>
            </div>
            <div className="hero-note">
              <span>FIELD NOTE / 001</span>
              The best interface is usually the one that makes the hard part feel obvious. From an LMS to a
              marketplace, I work close to that moment.
            </div>
          </div>
          <div className="scroll-cue">
            <i /> Scroll to inspect
          </div>
        </div>
      </section>

      <section id="work" className="section page-wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">Selected work / 02</div>
              <h2 className="display">Built in the real world.</h2>
            </div>
            <p>
              Two production products, different problems. Both shaped by the details that only show up after
              launch.
            </p>
          </div>
        </Reveal>
        <div className="projects-list">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessBand />

      <section id="about-slice" className="section page-wrap">
        <Reveal>
          <div className="about-slice">
            <div>
              <div className="eyebrow">The engineer behind the interface</div>
              <h2 className="display">Technical enough to go deep. Human enough to keep it useful.</h2>
              <p>
                I build from the UI out and the data layer in. That means caring about the first impression,
                the API contract, the loading state, and what happens when the product meets a real connection.
              </p>
              <Link href="/about" className="project-link" data-testid="link-about-story">
                Read the full story <ArrowRight size={14} />
              </Link>
            </div>
            <div className="signal-list">
              <div className="signal">
                <b>01</b>
                <span>Based in Lahore, Pakistan. Open to thoughtful product work.</span>
              </div>
              <div className="signal">
                <b>02</b>
                <span>BS Computer Science at University of Education, Lahore.</span>
              </div>
              <div className="signal">
                <b>03</b>
                <span>React, Next.js, Node.js, Express, MongoDB, MySQL, React Native.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="section page-wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">Capabilities / 04</div>
              <h2 className="display">The working toolkit.</h2>
            </div>
            <p>
              Not a list of buzzwords — the tools and perspectives I reach for when a product has to become
              real.
            </p>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Reveal key={group.slug}>
              <Link
                href={`/skills/${group.slug}`}
                className="skill-cell"
                data-testid={`link-skill-${group.slug}`}
              >
                <div className="skill-icon">
                  <Code2 size={22} />
                </div>
                <h3>{group.title}</h3>
                <p>{group.skills.slice(0, 2).join(' · ')}</p>
                <span className="project-link">
                  Inspect group <ArrowUpRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="section page-wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">Experience / 05</div>
              <h2 className="display">Where I’ve been useful.</h2>
            </div>
            <p>
              Roles across product teams, remote collaboration, and non-profit work — each one adding
              another angle to the craft.
            </p>
          </div>
        </Reveal>
        <div className="experience-list">
          {experiences.map((experience) => (
            <Reveal key={experience.slug}>
              <Link
                href={`/experience/${experience.slug}`}
                className="experience-row"
                data-testid={`link-experience-${experience.slug}`}
              >
                <div className="experience-year">{experience.period}</div>
                <div>
                  <h3>
                    {experience.role} · {experience.company}
                  </h3>
                  <p>{experience.description}</p>
                </div>
                <div className="experience-place">
                  {experience.location}
                  <br />
                  <ArrowUpRight size={14} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-wrap">
        <Reveal>
          <div className="cta-band">
            <h2 className="display">Have a product that needs a careful build?</h2>
            <Link href="/services" className="btn btn-primary" data-testid="button-view-services">
              See how I can help <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
