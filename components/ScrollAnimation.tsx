"use client";

import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-in' | 'scale-in';

interface ScrollAnimationProps {
  children: ReactNode;
  type?: AnimationType;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const ScrollAnimation = ({
  children,
  type = 'fade-up',
  className = '',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: once,
  });

  const getAnimationClass = () => {
    switch (type) {
      case 'fade-up':
        return 'animate-scroll-fade-up';
      case 'fade-down':
        return 'animate-scroll-fade-down';
      case 'fade-in':
        return 'animate-scroll-fade-in';
      case 'scale-in':
        return 'animate-scroll-scale-in';
      default:
        return 'animate-scroll-fade-up';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: delay ? `${delay}ms` : '0ms',
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
