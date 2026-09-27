import { Lightbulb, Palette, BarChart3, Code2, Bug, Rocket } from 'lucide-react';
import { processSteps } from '@/data/portfolio';

export function ProcessBand() {
  const icons = [Lightbulb, Palette, BarChart3, Code2, Bug, Rocket];
  return (
    <section className="process-band" aria-label="Development process">
      <div className="page-wrap">
        <div className="process-title">Development process</div>
        <div className="process-line">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div
                className="process-step"
                key={step.label}
                data-testid={`process-step-${step.label.toLowerCase()}`}
              >
                <div className="process-icon">
                  <Icon size={19} strokeWidth={1.5} />
                </div>
                <strong>{step.label}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
