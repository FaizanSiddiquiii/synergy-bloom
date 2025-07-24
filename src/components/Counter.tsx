import { useState, useEffect } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export const Counter = ({ target, duration = 2000, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);
      
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};