import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Custom hook to detect when an element enters the viewport
 * Uses Intersection Observer API for performance
 * 
 * @param threshold - Percentage of element visibility to trigger (0-1)
 * @param triggerOnce - Whether to trigger animation only once
 * @returns ref to attach to element and isInView state
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, isInView };
};
