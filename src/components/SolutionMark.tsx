import { ShieldCheck } from 'lucide-react';
import type { SolutionSummary } from '../data/solutionsData';

interface SolutionMarkProps {
  id: SolutionSummary['id'];
  logo: string;
  name: string;
  className?: string;
}

export function SolutionMark({ id, logo, name, className = 'h-9' }: SolutionMarkProps) {
  if (id === 'ct-verif') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`} aria-label={`Logo ${name}`}>
        <span className="w-8 h-8 rounded-md bg-[var(--color-primary)] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-[var(--color-secondary)]" aria-hidden="true" />
        </span>
        <span className="font-bold tracking-tight text-lg text-slate-900 leading-none">
          CT-<span className="text-[var(--color-primary)]">VERIF</span>
        </span>
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={`Logo ${name}`}
      referrerPolicy="no-referrer"
      className={`${className} w-auto object-contain`}
    />
  );
}
