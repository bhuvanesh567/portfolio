"use client";

import React, { useEffect, useRef } from "react";
import { HelpCircle, Star, Terminal, Bot, Zap, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "Awwwards-Standard UI/UX",
    desc: "Integrating smooth scroll vectors, film-grain noise structures, and custom GSAP timelines to create a cinematic client landing experience.",
    icon: Star,
  },
  {
    title: "Clean & Scalable Code",
    desc: "Structuring clean, type-safe component blocks in Next.js. Deployed Webpack overrides ensure zero compilation overhead.",
    icon: Terminal,
  },
  {
    title: "AI & Automation Ready",
    desc: "Fusing custom n8n flow networks and semantic OpenAI query pipelines directly into web architectures to minimize manual work.",
    icon: Bot,
  },
  {
    title: "Lighthouse 98+ Optimized",
    desc: "Configured metadata viewports, responsive H.264 video streams, and layout asset compression to maintain lightning-fast load speeds.",
    icon: Zap,
  },
];

export default function WhyChooseMe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-why-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-choose-me"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-bg-secondary overflow-hidden border-t border-b border-border-color"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle size={14} />
            06 / BRAND ADVANTAGE
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
            Why Choose Me, <br />
            <span className="text-gradient-accent glow-text-purple">Agency-Grade Standards</span>
          </h2>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="reveal-why-card relative overflow-hidden rounded-2xl glass-panel bg-card-bg border-border-color p-8 flex gap-6 group cursor-none hover:border-white/15 transition-all duration-300 shadow-lg"
              >
                {/* Accent icon container */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-highlight shrink-0 transition-transform group-hover:scale-105 duration-300">
                  <IconComponent size={20} />
                </div>
                
                {/* Details */}
                <div className="flex flex-col">
                  <h3 className="text-white text-base font-bold tracking-tight mb-2 group-hover:text-highlight transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
