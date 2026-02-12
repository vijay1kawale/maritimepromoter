"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastAngle = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      cursor.style.display = 'none';
      return;
    }

    let animationFrame;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let prev = { x: mouse.x, y: mouse.y };
    let offset = 24; // px offset from real cursor

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    function animate() {
      // Calculate direction
      const dx = mouse.x - prev.x;
      const dy = mouse.y - prev.y;
      const angle = Math.atan2(dy, dx);
      // Wavy effect
      const now = Date.now();
      const t = (now % 10000) / 1000;
      const wave = Math.sin(t * 6) * 8; // 8px amplitude, 6Hz
      // Offset position
      const x = mouse.x + Math.cos(angle) * offset + Math.cos(angle + Math.PI / 2) * wave - 8;
      const y = mouse.y + Math.sin(angle) * offset + Math.sin(angle + Math.PI / 2) * wave - 8;
      gsap.to(cursor, {
        x,
        y,
        duration: 0.09,
        ease: 'power2.out',
      });
      prev.x += (mouse.x - prev.x) * 0.25;
      prev.y += (mouse.y - prev.y) * 0.25;
      animationFrame = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', moveCursor);
    animationFrame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: '#10b981', // eco-green-4
        boxShadow: '0 0 0 4px rgba(16,185,129,0.25)', // subtle bold effect
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        // border: '2px solid #10b981',
      }}
    />
  );
} 