import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom' | 'flip' | 'blur';
  delay?: number;
}

const SectionWrapper = ({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0 
}: SectionWrapperProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  const animationClasses = {
    'fade-up': 'translate-y-20 opacity-0',
    'fade-left': '-translate-x-20 opacity-0',
    'fade-right': 'translate-x-20 opacity-0',
    'zoom': 'scale-90 opacity-0',
    'flip': 'rotateX-90 opacity-0',
    'blur': 'blur-lg opacity-0',
  };

  const visibleClasses = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-left': 'translate-x-0 opacity-100',
    'fade-right': 'translate-x-0 opacity-100',
    'zoom': 'scale-100 opacity-100',
    'flip': 'rotateX-0 opacity-100',
    'blur': 'blur-0 opacity-100',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
