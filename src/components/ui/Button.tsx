import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Apple-style Button with pointer-down instant feedback and spring-like transition
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] active:scale-[0.97] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 select-none';

    const variants = {
      primary: 'bg-[var(--accent)] text-zinc-950 font-bold hover:bg-[var(--accent-hover)] border border-black/10 shadow-sm active:shadow-none',
      secondary: 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)]',
      ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-muted)]',
      danger: 'bg-[var(--status-danger-bg)] text-[var(--status-danger)] hover:bg-[var(--status-danger)] hover:text-white border border-[var(--status-danger)]/20',
      outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)] hover:bg-[var(--bg-surface-secondary)]',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2 gap-2',
      lg: 'text-base px-5 py-2.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

// Apple HIG Semantic Badge
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'healthy' | 'overloaded' | 'underutilized' | 'neutral' | 'accent' | 'warning';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className,
  size = 'md',
}) => {
  const variants = {
    healthy: 'bg-[var(--status-success-bg)] text-[var(--status-success)] border-[var(--status-success)]/20',
    overloaded: 'bg-[var(--status-danger-bg)] text-[var(--status-danger)] border-[var(--status-danger)]/20',
    underutilized: 'bg-[var(--status-underutilized-bg)] text-[var(--status-underutilized)] border-[var(--status-underutilized)]/20',
    warning: 'bg-[var(--status-warning-bg)] text-[var(--status-warning)] border-[var(--status-warning)]/20',
    accent: 'bg-[var(--accent-muted)] text-[var(--accent)] border-[var(--accent)]/30',
    neutral: 'bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)] border-[var(--border-subtle)]',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 tracking-tight',
    md: 'text-xs px-2.5 py-1 tracking-tight',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full border select-none',
        variants[variant],
        sizes[size],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
};
