import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  children: React.ReactNode;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-obsidian"
    >
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(228, 228, 231, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(228, 228, 231, 0.05) 1px, transparent 1px)
          `,
        }}
      />
      
      {/* Network Pulse Effect - follows mouse */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(228, 228, 231, 0.06) 0%, transparent 60%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.4 },
        }}
      />

      {/* Subtle ambient pulse in center */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(228, 228, 231, 0.02) 0%, transparent 50%)',
          borderRadius: '50%',
          left: '50%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;
