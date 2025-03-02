
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'outlined';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-card shadow-sm',
      glass: 'glass-card',
      outlined: 'border border-border'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const CardFooter = ({ className, children, ...props }: CardFooterProps) => {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };
