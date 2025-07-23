export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Digital Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}
      ></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.03]">
        <div className="w-full h-full border border-primary/20 rotate-45 animate-float delay-1000"></div>
      </div>
      
      <div className="absolute top-3/4 right-1/4 w-24 h-24 opacity-[0.04]">
        <div className="w-full h-full rounded-full border border-accent/20 animate-float delay-2000"></div>
      </div>

      <div className="absolute top-1/2 left-3/4 w-20 h-20 opacity-[0.03]">
        <div className="w-full h-full border border-primary/20 animate-float delay-3000"></div>
      </div>

      {/* Digital Circuit Lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.02]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path 
              d="M0 100h50v-50h100v100h50" 
              stroke="hsl(var(--primary))" 
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="50" cy="50" r="2" fill="hsl(var(--accent))" />
            <circle cx="150" cy="150" r="2" fill="hsl(var(--primary))" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Gradient Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-float delay-500"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl animate-float delay-1500"></div>

      {/* Shopping Icons Pattern */}
      <div className="absolute top-20 left-20 opacity-[0.02] animate-float delay-4000">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          <line x1="3" y1="6" x2="21" y2="6" stroke="hsl(var(--primary))" strokeWidth="2" />
          <path d="m16 10a4 4 0 0 1-8 0" stroke="hsl(var(--primary))" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-32 right-32 opacity-[0.02] animate-float delay-5000">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="21" r="1" stroke="hsl(var(--accent))" strokeWidth="2" />
          <circle cx="19" cy="21" r="1" stroke="hsl(var(--accent))" strokeWidth="2" />
          <path 
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" 
            stroke="hsl(var(--accent))" 
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Dot Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        {Array.from({ length: 20 }).map((_, i) =>
          Array.from({ length: 30 }).map((_, j) => (
            <div
              key={`${i}-${j}`}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${j * 4}%`,
                top: `${i * 5}%`,
                animationDelay: `${(i + j) * 0.1}s`,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};