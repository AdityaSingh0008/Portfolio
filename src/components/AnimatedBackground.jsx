import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate static stars to avoid re-rendering
    const newStars = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="animated-background">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <style>{`
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          overflow: hidden;
          background: #000000;
          pointer-events: none;
        }
        .star {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          animation: floatStar linear infinite;
        }
        
        @keyframes floatStar {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: var(--opacity, 0.5); }
          90% { opacity: var(--opacity, 0.5); }
          100% { transform: translateY(-30vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
