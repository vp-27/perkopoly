
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurOverlayProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: 'light' | 'medium' | 'heavy';
}

const BlurOverlay: React.FC<BlurOverlayProps> = ({ 
  className, 
  children, 
  intensity = 'medium' 
}) => {
  const blurClasses = {
    light: 'backdrop-blur-sm bg-white/30 dark:bg-black/30',
    medium: 'backdrop-blur-md bg-white/50 dark:bg-black/50',
    heavy: 'backdrop-blur-lg bg-white/70 dark:bg-black/70',
  };

  return (
    <div 
      className={cn(
        'absolute inset-0 z-10',
        blurClasses[intensity],
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurOverlay;
