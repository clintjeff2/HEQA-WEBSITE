import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[60] overflow-hidden"
      style={{
        background: useSpring(
          `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.05), transparent 80%)`
        ),
      }}
    >
      <motion.div
        className="absolute w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: springX,
          top: springY,
        }}
      />
    </motion.div>
  );
}
