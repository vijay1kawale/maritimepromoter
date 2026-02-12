"use client";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.set("main", {
      opacity: 0,
      y: 32,
    });
    gsap.to("main", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "sine.out",
      clearProps: "all",
    });
  }, [pathname]);

  return (
    <div ref={mainRef}>
      {children}
    </div>
  );
} 