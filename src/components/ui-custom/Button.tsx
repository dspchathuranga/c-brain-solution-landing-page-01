
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, ...props }, ref) => {
    const baseStyles = "rounded-lg font-medium inline-flex items-center justify-center transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:brightness-110 active:brightness-90 shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/90",
      outline: "border border-border bg-transparent hover:bg-secondary/50 text-foreground",
      ghost: "bg-transparent hover:bg-secondary text-foreground"
    };
    
    const sizes = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3"
    };
    
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
