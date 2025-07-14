// portfoliopage/components/CustomSplashCursor.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomSplashCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to({}, {
        duration: 0.7,
        onUpdate: function () {
          const progress = this.progress();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(x, y, 50 * progress, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(147, 197, 253, ${0.6 * (1 - progress)})`;
          ctx.fill();
        },
      });
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 pointer-events-none" />;
}
