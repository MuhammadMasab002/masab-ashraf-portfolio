import type { ReactNode } from 'react';

interface DetailLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}

export function DetailLayout({ eyebrow, title, intro, children }: DetailLayoutProps) {
  return (
    <main>
      <section className="detail-hero grid-lines">
        <div className="page-wrap">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display">{title}</h1>
          <p className="detail-intro">{intro}</p>
        </div>
      </section>
      <div className="page-wrap detail-body">{children}</div>
    </main>
  );
}
