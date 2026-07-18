"use client";

import React, { useEffect, useRef } from "react";
import { Compass, User, Globe, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Modern Technologies" },
  { value: 100, suffix: "%", label: "Client-Focused Development" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section content elements
      gsap.fromTo(
        ".reveal-about-el",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Fade in stats cards
      gsap.fromTo(
        ".stat-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: countersRef.current,
            start: "top 85%",
          },
        }
      );

      // Numerical counter animation
      const countElements = document.querySelectorAll(".count-number");
      countElements.forEach((el) => {
        const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-bg-secondary overflow-hidden border-t border-b border-border-color"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <User size={14} />
            01 / ABOUT ME
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <span className="text-lg md:text-xl font-medium text-text-secondary mt-2">
            Building Premium Digital Experiences
          </span>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Glass Card */}
          <div className="lg:col-span-5 reveal-about-el relative flex items-center justify-center">
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-accent-primary/10 to-accent-secondary/5 blur-3xl" />
            
            <div className="w-full max-w-sm h-96 rounded-2xl border border-border-color bg-card-bg p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent-primary/45" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-accent-primary/45" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-accent-primary/45" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent-primary/45" />

              <div className="flex items-center gap-3">
                <Globe className="text-highlight animate-spin-slow" size={24} />
                <span className="text-xs font-mono text-text-secondary tracking-widest uppercase">Global Client Focus</span>
              </div>

              {/* Profile Image Showcase */}
              <div className="flex-grow w-full h-48 rounded-xl overflow-hidden relative my-4 group/img border border-white/5 bg-zinc-950">
                <img
                  src="/profile.png"
                  alt="Bhuvanesh"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold text-white bg-accent-primary/85 px-2 py-0.5 rounded uppercase tracking-wider shadow">
                    Bhuvanesh
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-[9px] text-text-secondary/60">
                <span>EST. 2023 // BENGALURU</span>
                <span>VER: 5.2.0</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left reveal-about-el">
            <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
              Designing interfaces that elevate brands, coding logic that scales operations.
            </h3>
            
            <p className="text-base text-text-secondary leading-relaxed font-sans">
              I'm Bhuvanesh, a Full Stack Web Developer specializing in modern business websites, custom web applications, and AI-powered automation.
            </p>

            <p className="text-base text-text-secondary leading-relaxed font-sans">
              I help startups and businesses build fast, beautiful, and scalable digital products that increase customer engagement and drive business growth. By combining modern React frameworks (Next.js) with fast backends (Node.js/Python) and workflow automations (n8n), I build cohesive workspaces that convert visitors into active clients.
            </p>

            {/* List details */}
            <div className="grid grid-cols-2 gap-4 mt-4 font-mono text-xs text-text-secondary">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                <span>50+ Projects Shipped</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                <span>Modern Technologies</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                <span>Client-Focused Dev</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Counters */}
        <div
          ref={countersRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card p-6 rounded-2xl glass-panel bg-card-bg border-border-color shadow-lg flex flex-col items-center justify-center text-center group cursor-none hover:border-accent-primary/25 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center justify-center font-mono group-hover:text-highlight transition-colors duration-300">
                <span className="count-number" data-target={stat.value}>
                  0
                </span>
                <span className="text-accent-primary">{stat.suffix}</span>
              </div>
              <span className="text-xs font-mono font-semibold tracking-wider text-text-secondary uppercase mt-2 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
