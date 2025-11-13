'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ChipPowerUp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      // Sequential activation of circuit lines
      lineRefs.current.forEach((line, index) => {
        if (line) {
          tl.fromTo(line,
            { 
              opacity: 0,
              boxShadow: '0 0 0px rgba(59, 130, 246, 0)'
            },
            {
              opacity: 0.8,
              boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
              duration: 1.2,
              ease: 'power2.out'
            },
            index * 0.08
          );
        }
      });

      // Continuous subtle pulse
      lineRefs.current.forEach((line, index) => {
        if (line) {
          gsap.to(line, {
            opacity: 0.5,
            boxShadow: '0 0 6px rgba(59, 130, 246, 0.4)',
            duration: 3 + index * 0.1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.15
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Clean horizontal circuit traces */}
      <div ref={el => { lineRefs.current[0] = el; }} className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[1] = el; }} className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[2] = el; }} className="absolute top-[30%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0" />
      
      <div ref={el => { lineRefs.current[3] = el; }} className="absolute top-[45%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[4] = el; }} className="absolute top-[50%] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[5] = el; }} className="absolute top-[55%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0" />
      
      <div ref={el => { lineRefs.current[6] = el; }} className="absolute top-[70%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[7] = el; }} className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[8] = el; }} className="absolute top-[80%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0" />

      {/* Clean vertical circuit traces */}
      <div ref={el => { lineRefs.current[9] = el; }} className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[10] = el; }} className="absolute left-[25%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[11] = el; }} className="absolute left-[35%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-0" />
      
      <div ref={el => { lineRefs.current[12] = el; }} className="absolute left-[50%] top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-blue-600 to-transparent opacity-0" />
      
      <div ref={el => { lineRefs.current[13] = el; }} className="absolute left-[65%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[14] = el; }} className="absolute left-[75%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-0" />
      <div ref={el => { lineRefs.current[15] = el; }} className="absolute left-[85%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-0" />


      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />
    </div>
  );
}
