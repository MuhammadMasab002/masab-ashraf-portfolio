import { useEffect, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowRight, ArrowUpRight, BarChart3, Bug, Check, Code2, Copy, ExternalLink, Github, Lightbulb, Linkedin, Mail, Menu, Palette, Rocket, X } from 'lucide-react';
import { Link, Route, Switch, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { experiences, processSteps, profile, projects, skillGroups, type Project } from '@/data/portfolio';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`}>{children}</div>;
}

function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const links = [
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#skills', label: 'Skills' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand-mark" data-testid="link-brand" onClick={closeMenu}>
          <span className="brand-dot" aria-hidden="true" /> Masab Ashraf
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className={location === link.href ? 'active' : ''} data-testid={`link-nav-${link.label.toLowerCase()}`}>{link.label}</Link>)}
        </nav>
        <Link href="/services" className="nav-cta" data-testid="link-services">Services <ArrowUpRight size={13} /></Link>
        <button type="button" className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu} data-testid={`link-mobile-${link.label.toLowerCase()}`}>{link.label}</Link>)}
        <Link href="/services" onClick={closeMenu} data-testid="link-mobile-services">Services <ArrowUpRight size={13} /></Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page-wrap footer-grid">
        <div><span className="accent mono">© 2025</span> Masab Ashraf · Lahore, Pakistan</div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" data-testid="link-footer-github">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="link-footer-linkedin">LinkedIn</a>
          <a href={`mailto:${profile.email}`} data-testid="link-footer-email">Email</a>
        </div>
      </div>
    </footer>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return <div className="app-shell"><Header />{children}<Footer /></div>;
}

function ProcessBand() {
  const icons = [Lightbulb, Palette, BarChart3, Code2, Bug, Rocket];
  return (
    <section className="process-band" aria-label="Development process">
      <div className="page-wrap">
        <div className="process-title">Development process</div>
        <div className="process-line">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return <div className="process-step" key={step.label} data-testid={`process-step-${step.label.toLowerCase()}`}><div className="process-icon"><Icon size={19} strokeWidth={1.5} /></div><strong>{step.label}</strong></div>;
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectArt({ project }: { project: Project }) {
  return (
    <div className={`project-art art-${project.slug === 'mymentor' ? 'mymentor' : 'mocco'}`} aria-label={`${project.name} interface preview`}>
      <div className="art-window">
        <div className="art-window-top"><i /><i /><i /></div>
        <div className="art-window-body">
          <div className="art-line" /><div className="art-line short" />
          <div className="art-chart" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-testid={`card-project-${project.slug}`}>
      <div className="project-copy">
        <div>
          <div className="eyebrow">{project.kicker}</div>
          <h3 className="display">{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-meta">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        </div>
        <div>
          <Link href={`/projects/${project.slug}`} className="project-link" data-testid={`link-project-${project.slug}`}>Read case study <ArrowRight size={14} /></Link>
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer" data-testid={`link-live-${project.slug}`}>View live product <ExternalLink size={13} /></a>
        </div>
      </div>
      <ProjectArt project={project} />
    </article>
  );
}

function Home() {
  return (
    <main>
      <section className="hero grid-lines">
        <div className="page-wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Full-stack software engineer · Lahore, Pakistan</div>
              <h1 className="display">I build products that <em>hold up.</em></h1>
              <p className="hero-intro">I’m Masab — a full-stack engineer working across React, Next.js, Node.js, and the systems underneath. I like software that feels clear on the surface and considered all the way down.</p>
              <div className="hero-actions">
                <Link href="/#work" className="btn btn-primary" data-testid="button-explore-work">Explore the work <ArrowDownIcon /></Link>
                <a href={`mailto:${profile.email}`} className="btn btn-ghost" data-testid="button-start-conversation"><Mail size={15} /> Start a conversation</a>
              </div>
            </div>
            <div className="hero-note">
              <span>FIELD NOTE / 001</span>
              The best interface is usually the one that makes the hard part feel obvious. From an LMS to a marketplace, I work close to that moment.
            </div>
          </div>
          <div className="scroll-cue"><i /> Scroll to inspect</div>
        </div>
      </section>

      <section id="work" className="section page-wrap">
        <Reveal>
          <div className="section-head"><div><div className="eyebrow">Selected work / 02</div><h2 className="display">Built in the real world.</h2></div><p>Two production products, different problems. Both shaped by the details that only show up after launch.</p></div>
        </Reveal>
        <div className="projects-list">{projects.map((project) => <Reveal key={project.slug}><ProjectCard project={project} /></Reveal>)}</div>
      </section>

      <ProcessBand />

      <section id="about-slice" className="section page-wrap">
        <Reveal><div className="about-slice">
          <div><div className="eyebrow">The engineer behind the interface</div><h2 className="display">Technical enough to go deep. Human enough to keep it useful.</h2><p>I build from the UI out and the data layer in. That means caring about the first impression, the API contract, the loading state, and what happens when the product meets a real connection.</p><Link href="/about" className="project-link" data-testid="link-about-story">Read the full story <ArrowRight size={14} /></Link></div>
          <div className="signal-list"><div className="signal"><b>01</b><span>Based in Lahore, Pakistan. Open to thoughtful product work.</span></div><div className="signal"><b>02</b><span>BS Computer Science at University of Education, Lahore.</span></div><div className="signal"><b>03</b><span>React, Next.js, Node.js, Express, MongoDB, MySQL, React Native.</span></div></div>
        </div></Reveal>
      </section>

      <section id="skills" className="section page-wrap">
        <Reveal><div className="section-head"><div><div className="eyebrow">Capabilities / 04</div><h2 className="display">The working toolkit.</h2></div><p>Not a list of buzzwords — the tools and perspectives I reach for when a product has to become real.</p></div></Reveal>
        <div className="skills-grid">{skillGroups.map((group, index) => <Reveal key={group.slug}><Link href={`/skills/${group.slug}`} className="skill-cell" data-testid={`link-skill-${group.slug}`}><div className="skill-icon"><Code2 size={22} /></div><h3>{group.title}</h3><p>{group.skills.slice(0, 2).join(' · ')}</p><span className="project-link">Inspect group <ArrowUpRight size={13} /></span></Link></Reveal>)}</div>
      </section>

      <section id="experience" className="section page-wrap">
        <Reveal><div className="section-head"><div><div className="eyebrow">Experience / 05</div><h2 className="display">Where I’ve been useful.</h2></div><p>Roles across product teams, remote collaboration, and non-profit work — each one adding another angle to the craft.</p></div></Reveal>
        <div className="experience-list">{experiences.map((experience) => <Reveal key={experience.slug}><Link href={`/experience/${experience.slug}`} className="experience-row" data-testid={`link-experience-${experience.slug}`}><div className="experience-year">{experience.period}</div><div><h3>{experience.role} · {experience.company}</h3><p>{experience.description}</p></div><div className="experience-place">{experience.location}<br /><ArrowUpRight size={14} /></div></Link></Reveal>)}</div>
      </section>

      <section className="page-wrap">
        <Reveal><div className="cta-band"><h2 className="display">Have a product that needs a careful build?</h2><Link href="/services" className="btn btn-primary" data-testid="button-view-services">See how I can help <ArrowUpRight size={15} /></Link></div></Reveal>
      </section>
    </main>
  );
}

function ArrowDownIcon() {
  return <ArrowRight size={15} />;
}

function DetailLayout({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main><section className="detail-hero grid-lines"><div className="page-wrap"><div className="eyebrow">{eyebrow}</div><h1 className="display">{title}</h1><p className="detail-intro">{intro}</p></div></section><div className="page-wrap detail-body">{children}</div></main>;
}

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  const other = projects.find((item) => item.slug !== project.slug);
  return <DetailLayout eyebrow={`Case study / ${project.kicker}`} title={project.name} intro={project.description}>
    <Reveal><div><div className={`project-art art-${project.slug === 'mymentor' ? 'mymentor' : 'mocco'}`} style={{ minHeight: 360, border: '1px solid var(--line)' }}><div className="art-window"><div className="art-window-top"><i /><i /><i /></div><div className="art-window-body"><div className="art-line" /><div className="art-line short" /><div className="art-chart" /></div></div></div><h2 className="display" style={{ marginTop: 50 }}>A product built around the actual user journey.</h2><p>{project.longDescription}</p><p>My role was {project.role.toLowerCase()}. The work sits at the intersection of a useful interface, dependable data, and shipping decisions that keep the product moving.</p></div></Reveal>
    <Reveal><aside className="detail-side"><dl><dt>Role</dt><dd>{project.role}</dd><dt>Stack</dt><dd>{project.stack.join(' · ')}</dd><dt>Live product</dt><dd><a className="project-link" href={project.url} target="_blank" rel="noreferrer" data-testid={`link-detail-live-${project.slug}`}>Open product <ExternalLink size={13} /></a></dd></dl><div className="route-nav"><Link href={`/projects/${other?.slug}`} data-testid="link-next-project">Next project <ArrowRight size={13} /></Link><Link href="/#work" data-testid="link-back-work">Back to work</Link></div></aside></Reveal>
  </DetailLayout>;
}

function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) return <NotFound />;
  return <DetailLayout eyebrow={`Experience / ${experience.company}`} title={experience.role} intro={experience.description}>
    <Reveal><div><h2 className="display">{experience.company}</h2><p>{experience.description}</p><div className="signal-list" style={{ marginTop: 42 }}>{experience.focus.map((item, index) => <div className="signal" key={item}><b>0{index + 1}</b><span>{item}</span></div>)}</div></div></Reveal>
    <Reveal><aside className="detail-side"><dl><dt>Period</dt><dd>{experience.period}</dd><dt>Location</dt><dd>{experience.location}</dd><dt>Focus</dt><dd>{experience.focus.join(' · ')}</dd></dl><div className="route-nav"><Link href="/#experience" data-testid="link-back-experience">All experience</Link><Link href="/about" data-testid="link-experience-about">More about me <ArrowRight size={13} /></Link></div></aside></Reveal>
  </DetailLayout>;
}

function SkillDetail() {
  const { slug } = useParams<{ slug: string }>();
  const group = skillGroups.find((item) => item.slug === slug);
  if (!group) return <NotFound />;
  return <DetailLayout eyebrow={`Skills / ${group.eyebrow}`} title={group.title} intro={group.description}>
    <Reveal><div><h2 className="display">Useful range, not tool collecting.</h2><p>{group.description} I use this part of the stack to make product behavior more legible, from the first component to the last request.</p><div className="project-meta" style={{ marginTop: 36 }}>{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div></Reveal>
    <Reveal><aside className="detail-side"><dl><dt>Group</dt><dd>{group.eyebrow}</dd><dt>Skills</dt>{group.skills.map((skill) => <dd key={skill}>{skill}</dd>)}</dl><div className="route-nav"><Link href="/#skills" data-testid="link-back-skills">All capabilities</Link><Link href="/services" data-testid="link-skill-services">Services <ArrowRight size={13} /></Link></div></aside></Reveal>
  </DetailLayout>;
}

function Services() {
  const services = [
    ['Product interfaces', 'React and Next.js experiences that turn complex flows into calm, useful screens.'],
    ['Full-stack builds', 'From data model and REST API to responsive frontend and the handoff after launch.'],
    ['Mobile product surfaces', 'React Native work that carries the same product logic into a mobile context.'],
  ];
  return <DetailLayout eyebrow="Services / 06" title="Build the thing, properly." intro="I work best where product thinking and implementation need to stay in the same room. Choose the shape of help you need, then let’s make the first step concrete.">
    <Reveal><div><h2 className="display">A focused engagement, not a black box.</h2><p>Good engineering is visible. I keep the decisions legible, the feedback loop short, and the work connected to the people who will use it.</p><div className="signal-list" style={{ marginTop: 42 }}>{services.map(([name, detail], index) => <div className="signal" key={name}><b>0{index + 1}</b><span><strong>{name}</strong><br />{detail}</span></div>)}</div></div></Reveal>
    <Reveal><aside className="detail-side"><dl><dt>Process</dt><dd>Idea → Design → Analytics → Implementation → Testing → Deployment</dd><dt>Based in</dt><dd>{profile.location}</dd><dt>Start a conversation</dt><dd><a className="project-link" href={`mailto:${profile.email}`} data-testid="link-services-email">{profile.email} <Mail size={13} /></a></dd></dl><div className="route-nav"><Link href="/" data-testid="link-services-home">Back home</Link><a href={`mailto:${profile.email}`} data-testid="link-services-cta">Get in touch <ArrowRight size={13} /></a></div></aside></Reveal>
  </DetailLayout>;
}

function About() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return <DetailLayout eyebrow="About / 07" title="A field guide to how I work." intro="I’m Masab Ashraf, a Full-Stack Software Engineer based in Lahore, Pakistan. I build real production products with a bias toward clarity, useful details, and steady iteration.">
    <Reveal><div><h2 className="display">Close to the problem.</h2><p>I’m currently pursuing a BS Computer Science at University of Education, Lahore (2023–2027, in progress). Alongside that foundation, I’ve worked across product teams and projects that made the theory practical: an EdTech LMS, a multi-vendor marketplace, and the interfaces around them.</p><p>I care about the seam between frontend and backend. It’s where the user’s expectation becomes a request, a state, a response, and eventually a product they can trust.</p><button type="button" className="btn btn-ghost" onClick={copyEmail} data-testid="button-copy-email"><Copy size={14} /> Copy email {copied && <span className="copy-status"><Check size={12} /> copied</span>}</button></div></Reveal>
    <Reveal><aside className="detail-side"><dl><dt>Name</dt><dd>{profile.name}</dd><dt>Role</dt><dd>{profile.title}</dd><dt>Location</dt><dd>{profile.location}</dd><dt>Education</dt><dd>{profile.education}<br />{profile.educationPeriod}</dd></dl><div className="route-nav"><a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="link-about-linkedin"><Linkedin size={14} /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer" data-testid="link-about-github"><Github size={14} /> GitHub</a></div></aside></Reveal>
  </DetailLayout>;
}

function Blog() {
  return <DetailLayout eyebrow="Blog / 08" title="Notes, later." intro="A space for field notes on building products, learning in public, and the decisions that sit between a design file and a shipped feature.">
    <Reveal><div className="empty-blog"><div className="eyebrow">Publishing queue / empty for now</div><h2 className="display">No posts yet — intentionally.</h2><p>This is the future home for writing. There are no fabricated posts here; when there is something worth sharing, it will appear here with the same care as the work.</p><a href={`mailto:${profile.email}`} className="project-link" data-testid="link-blog-contact">Say hello in the meantime <ArrowRight size={14} /></a></div></Reveal>
    <Reveal><aside className="detail-side"><dl><dt>Status</dt><dd>Preparing the first entry</dd><dt>Topics</dt><dd>Product engineering · React · APIs · lessons from shipping</dd></dl><div className="route-nav"><Link href="/" data-testid="link-blog-home">Back home</Link><Link href="/about" data-testid="link-blog-about">About Masab <ArrowRight size={13} /></Link></div></aside></Reveal>
  </DetailLayout>;
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/projects/:slug" component={ProjectDetail} />
    <Route path="/experience/:slug" component={ExperienceDetail} />
    <Route path="/skills/:slug" component={SkillDetail} />
    <Route path="/services" component={Services} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route component={NotFound} />
  </Switch>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><RoutedErrorBoundary><Shell><Router /></Shell></RoutedErrorBoundary></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;