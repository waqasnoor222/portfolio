import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-5 md:px-8 lg:px-8 xl:px-10 lg:max-w-[74rem]', className
      )}
    >
      {children}
    </div>
  );
}
