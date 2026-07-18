"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const words = [
  "CRAFTING EXPERIENCES",
  "DESIGNING INTERFACES",
  "INTEGRATING AI APIs",
  "BUILDING SCALABILITY",
  "DEVELOPING SOLUTIONS",
  "BHUVANESH PORTFOLIO",
];

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // 1. Counter Animation
    const counterObj = { value: 0 };
    const counterTimeline = gsap.to(counterObj, {
      value: 100,
      duration: 3.2,
      ease: "power2.out",
      onUpdate: () => {
        const currentCount = Math.floor(counterObj.value);
        setCount(currentCount);
        // Cycle words based on count percentage
        const nextWordIndex = Math.min(
          Math.floor((counterObj.value / 100) * words.length),
          words.length - 1
        );
        setWordIndex(nextWordIndex);
      },
      onComplete: () => {
        // Exit animation
        const tl = gsap.timeline({
          onComplete: () => {
            onComplete();
          },
        });

        tl.to([textRef.current, countRef.current], {
          y: -50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          stagger: 0.1,
        })
          .to(containerRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.8,
            ease: "power4.inOut",
          })
          .to(containerRef.current, {
            opacity: 0,
            duration: 0.2,
          });
      },
    });

    // 2. Word fade in/out
    gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    return () => {
      counterTimeline.kill();
    };
  }, [onComplete]);

  // Word trigger effect on index change
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [wordIndex]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen bg-[#050505] z-[9999] flex flex-col justify-between p-10 md:p-16 select-none"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center w-full">
        <div className="text-xs font-mono tracking-widest text-text-secondary opacity-60">
          DESIGN & DEVELOPMENT PORTFOLIO
        </div>
        <div className="text-xs font-mono tracking-widest text-text-secondary opacity-60">
          ©2026
        </div>
      </div>

      {/* Middle Morphed Words */}
      <div className="flex flex-col justify-center items-start flex-grow">
        <div className="overflow-hidden">
          <div
            ref={textRef}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white glow-text-purple font-sans select-none"
          >
            {words[wordIndex]}
          </div>
        </div>
      </div>

      {/* Bottom Percentage */}
      <div className="flex justify-between items-end w-full">
        <div className="text-xs font-mono text-text-secondary opacity-60 flex gap-2">
          <span>AI AUTOMATION</span>
          <span>•</span>
          <span>FULL STACK</span>
        </div>
        <div
          ref={countRef}
          className="text-7xl sm:text-9xl font-light font-mono text-highlight leading-none"
        >
          {count.toString().padStart(3, "0")}%
        </div>
      </div>
    </div>
  );
}
