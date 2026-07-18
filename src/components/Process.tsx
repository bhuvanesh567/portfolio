"use client";

import React, { useEffect, useRef } from "react";
import { GitCommit, Compass, Search, PenTool, Terminal, ShieldAlert, Rocket, Settings } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We align on your digital goals, brand aesthetics, functional requirements, and target metrics.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Research",
    desc: "I inspect market competitors, perform asset research, and build design direction mood boards.",
    icon: Search,
  },
  {
    num: "03",
    title: "UI Design",
    desc: "I craft high-end mockups in Figma, creating glassmorphic, responsive visual layouts.",
    icon: PenTool,
  },
  {
    num: "04",
    title: "Development",
    desc: "Writing production-grade, SEO-optimized React templates and fast backend services.",
    icon: Terminal,
  },
  {
    num: "05",
    title: "Testing",
    desc: "Performing intensive audits checking compatibility, security, API load speeds, and bugs.",
    icon: ShieldAlert,
  },
  {
    num: "06",
    title: "Deployment",
    desc: "Deploying to optimized edge server nodes, ensuring immediate fast global distribution.",
    icon: Rocket,
  },
  {
    num: "07",
    title: "Maintenance",
    desc: "Providing active library upgrades, routine data backups, and ongoing optimization checks.",
    icon: Settings,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate vertical progress line fill
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 40%",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      }

      // Animate step cards
      gsap.fromTo(
        ".process-step",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-bg-secondary overflow-hidden border-t border-b border-border-color"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <GitCommit size={14} />
            04 / THE BLUEPRINT
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
            Development Process, <br />
            <span className="text-gradient-accent glow-text-purple">Flawless Blueprint</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Vertical Track Line Background */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border-color -translate-x-1/2" />
          
          {/* Animated Vertical Line Fill */}
          <div
            ref={lineRef}
            className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-primary via-accent-secondary to-highlight origin-top -translate-x-1/2"
            style={{ willChange: "transform" }}
          />

          {/* Timeline Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`process-step flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Visual Center Node */}
                  <div className="absolute left-[30px] md:left-1/2 top-0 w-8 h-8 rounded-full border-2 border-border-color bg-[#050505] flex items-center justify-center -translate-x-1/2 text-xs font-mono font-black z-20 text-white transition-all duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-primary" />
                  </div>

                  {/* Left Column Spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Right Column Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-16 md:pr-16 relative">
                    <div className="p-6 rounded-2xl glass-panel bg-card-bg border-border-color shadow-lg group hover:border-accent-primary/20 transition-all cursor-none">
                      {/* Step Number & Icon */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-mono font-bold text-accent-secondary">
                          {step.num}
                        </span>
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-highlight">
                          <IconComponent size={18} />
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-white text-base font-bold tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
