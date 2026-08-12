import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('project-card') ||
        target.classList.contains('stat-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null; // Disable custom cursor on mobile
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      
      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 8px; height: 8px;
          background-color: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: exclusion;
        }
        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 32px; height: 32px;
          border: 1.5px solid var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: border-color 0.3s ease;
        }
        
        /* Hide default cursor only on non-touch devices */
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
