import { ArrowLeft, ScanSearch } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <main className="detail-hero grid-lines">
      <div className="page-wrap">
        <div className="eyebrow">404 / route not found</div>
        <h1 className="display">This page took a wrong turn.</h1>
        <p className="detail-intro">The work is here. This particular route is not. Head back to the field guide and start again.</p>
        <Link href="/" className="btn btn-primary" style={{ marginTop: 30 }} data-testid="link-not-found-home"><ArrowLeft size={15} /> Back home <ScanSearch size={15} /></Link>
      </div>
    </main>
  );
}