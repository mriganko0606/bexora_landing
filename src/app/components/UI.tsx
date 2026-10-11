import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { 
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger', 
    size?: 'sm' | 'md' | 'lg',
    outline?: boolean
  }
>(({ className, variant = 'primary', size = 'md', outline, ...props }, ref) => {
  const variants = {
    primary: outline 
      ? 'border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50'
      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all',
    secondary: outline
      ? 'border-2 border-blue-100 bg-transparent text-blue-700 hover:bg-blue-50'
      : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    outline: 'border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-600',
    danger: outline
      ? 'border-2 border-red-500 bg-transparent text-red-500 hover:bg-red-50'
      : 'bg-red-500 text-white hover:bg-red-600',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-2.5 rounded-xl font-medium',
    lg: 'px-8 py-4 text-lg rounded-2xl font-semibold',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

export const Card = ({ className, children, onClick }: { className?: string; children: React.ReactNode; onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn('bg-white border border-slate-100 shadow-sm rounded-2xl p-6', className, onClick && "cursor-pointer")}
  >
    {children}
  </div>
);

export const Badge = ({ children, variant = 'info', className }: { children: React.ReactNode, variant?: 'info' | 'success' | 'warning' | 'error' | 'neutral', className?: string }) => {
  const styles = {
    info: 'bg-blue-50 text-blue-700 border-blue-100',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    warning: 'bg-amber-50 text-amber-700 border-amber-100',
    error: 'bg-rose-50 text-rose-700 border-rose-100',
    neutral: 'bg-slate-50 text-slate-700 border-slate-100',
  };
  return (
    <span className={cn('px-3 py-1 rounded-full text-xs font-medium', styles[variant], className)}>
      {children}
    </span>
  );
};

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 bg-white',
      className
    )}
    {...props}
  />
));

export const Progress = ({ value, className, color = 'blue' }: { value: number, className?: string, color?: 'blue' | 'emerald' | 'amber' }) => {
  const colors = {
    blue: 'bg-blue-600',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
  };
  return (
    <div className={cn('w-full h-2 bg-slate-100 rounded-full overflow-hidden', className)}>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn('h-full rounded-full', colors[color])}
      />
    </div>
  );
};

export const Stepper = ({ steps, current }: { steps: string[], current: number }) => (
  <div className="flex items-center gap-2 mb-8">
    {steps.map((step, i) => (
      <React.Fragment key={step}>
        <div className="flex items-center gap-2">
          <div className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
            i <= current ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
          )}>
            {i + 1}
          </div>
          <span className={cn('text-sm font-medium hidden sm:inline', i <= current ? 'text-slate-900' : 'text-slate-400')}>
            {step}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div className={cn('flex-1 h-px min-w-[20px]', i < current ? 'bg-blue-600' : 'bg-slate-200')} />
        )}
      </React.Fragment>
    ))}
  </div>
);