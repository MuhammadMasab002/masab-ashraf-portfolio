import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-wrap footer-grid">
        <div>
          <span className="accent mono">© 2025</span> Masab Ashraf · Lahore, Pakistan
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" data-testid="link-footer-github">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="link-footer-linkedin">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} data-testid="link-footer-email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
