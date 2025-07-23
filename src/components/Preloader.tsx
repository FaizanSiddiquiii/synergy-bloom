import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
            <ShoppingBag size={32} className="text-white animate-float" />
          </div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold gradient-text">SynergyX Store</h1>
          <p className="text-muted-foreground text-sm">Loading your digital marketplace...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Text */}
        <div className="text-xs text-muted-foreground">
          {Math.round(progress)}%
        </div>

        {/* Loading dots animation */}
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};