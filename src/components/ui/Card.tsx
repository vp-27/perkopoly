
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  glass?: boolean;
  frosted?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  className, 
  children, 
  glass = false,
  frosted = false,
  hover = false,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'rounded-lg border border-border shadow-sm overflow-hidden',
        glass && 'glass-card',
        frosted && 'frosted-glass',
        hover && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
