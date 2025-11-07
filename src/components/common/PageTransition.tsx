import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  isVisible: boolean;
}

export default function PageTransition({ children, isVisible }: PageTransitionProps) {
  return (
    <div className={`transition-all duration-500 ease-in-out ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-4'
    }`}>
      {children}
    </div>
  );
}