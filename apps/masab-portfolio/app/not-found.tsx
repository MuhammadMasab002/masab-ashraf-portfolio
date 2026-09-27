import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — Masab Ashraf',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main>
      <section className="detail-hero grid-lines">
        <div className="page-wrap">
          <div className="eyebrow">404 / Not Found</div>
          <h1 className="display">Page not found</h1>
          <p className="detail-intro">
            The page you are looking for doesn’t exist or has moved.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/" className="btn btn-primary">
              <ArrowLeft size={15} /> Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
