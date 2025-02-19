import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (options = {}) => {
  const {
    threshold = 100,
    direction = 'up',
    distance = 50,
    startVisible = false
  } = options;

  const elementRef = useRef(null);
  const [progress, setProgress] = useState(startVisible ? 1 : 0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      // Calculate visibility percentage
      const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
      const visibilityPercentage = visibleHeight / rect.height;

      // Calculate progress (0 to 1)
      const newProgress = Math.min(
        Math.max((visibilityPercentage - 0.2) / 0.8, 0),
        1
      );

      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, distance]);

  const style = {
    transform: `translate${direction === 'up' ? 'Y' : 'X'}(${
      (1 - progress) * (direction === 'left' ? -80 : 80)
    }px)`,
    opacity: progress,
    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
  };

  return [elementRef, style, progress];
};

export default useScrollAnimation;