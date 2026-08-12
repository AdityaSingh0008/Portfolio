import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      
      <style>{`
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          overflow: hidden;
          background: var(--bg);
          pointer-events: none;
        }
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
          animation: floatOrb 20s infinite ease-in-out alternate;
        }
        .orb-1 {
          width: 50vw;
          height: 50vw;
          max-width: 600px;
          max-height: 600px;
          background: var(--accent);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 45vw;
          height: 45vw;
          max-width: 500px;
          max-height: 500px;
          background: var(--accent2);
          bottom: 0%;
          right: -10%;
          animation-delay: -7s;
        }
        .orb-3 {
          width: 55vw;
          height: 55vw;
          max-width: 700px;
          max-height: 700px;
          background: #3b82f6; /* Blueish to mix with gold/purple */
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: -14s;
          opacity: 0.15;
        }
        
        @keyframes floatOrb {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, 40px) scale(1.05);
          }
          100% {
            transform: translate(-30px, -20px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
