"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Globe, ShoppingCart, Bot, Terminal, PenTool, Settings, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceItems = [
  {
    title: "Business Website Development",
    icon: Globe,
    description: "Architecting premium, fast corporate platforms that communicate trust, establish presence, and optimize lead generation.",
    bullet: "Corporate websites & blogs",
    glow: "rgba(108, 99, 255, 0.15)",
  },
  {
    title: "E-commerce Development",
    icon: ShoppingCart,
    description: "Designing high-conversion e-commerce storefronts with secure checkouts, custom cart drawers, and inventory sync.",
    bullet: "Stripe & payment gateways",
    glow: "rgba(124, 58, 237, 0.15)",
  },
  {
    title: "AI Automation",
    icon: Bot,
    description: "Building automated workflow connections (n8n) and OpenAI prompt logic to reduce repetitive manual operations.",
    bullet: "AI agents & chatbot flows",
    glow: "rgba(0, 229, 255, 0.15)",
  },
  {
    title: "Custom Web Applications",
    icon: Terminal,
    description: "Programming responsive custom web tools with multi-tenant architectures, interactive dashboards, and fast APIs.",
    bullet: "Next.js / Node.js framework",
    glow: "rgba(108, 99, 255, 0.15)",
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    description: "Fusing minimal Apple spacing with Linear UI elements in interactive high-fidelity Figma and code layouts.",
    bullet: "Framer Motion animations",
    glow: "rgba(124, 58, 237, 0.15)",
  },
  {
    title: "Website Maintenance",
    icon: Settings,
    description: "Performing active security checkups, core library upgrades, Lighthouse performance tuning, and code bug fixes.",
    bullet: "98+ performance indexing",
    glow: "rgba(0, 229, 255, 0.15)",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
      id="services"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background radial orbs */}
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[35rem] h-[35rem] rounded-full bg-accent-secondary/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            02 / CORE SERVICES
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
            Strategic Offerings, <br />
            <span className="text-gradient-accent glow-text-purple">Engineered for Success</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceItems.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="reveal-service-card relative overflow-hidden rounded-2xl glass-panel bg-card-bg border-border-color shadow-lg p-8 flex flex-col justify-between min-h-[320px] group cursor-none hover:border-white/15 transition-all duration-300"
              >
                {/* Micro hover glow circle inside card */}
                <div
                  className="absolute pointer-events-none w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)`,
                    top: "-20px",
                    right: "-20px",
                  }}
                />

                {/* Card Header (Icon & Arrow) */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-highlight transition-transform group-hover:scale-105 group-hover:text-white duration-300">
                    <IconComponent size={22} />
                  </div>
                  
                  <span className="text-[9px] font-mono text-text-secondary/70 uppercase tracking-wider block">
                    {service.bullet}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mt-8 flex-grow">
                  <h3 className="text-white text-lg font-bold tracking-tight mb-3 group-hover:text-highlight transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Action footer */}
                <div className="mt-8 pt-4 border-t border-white/5 w-full flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-text-secondary/60">
                    AGENCY LEVEL
                  </span>
                  
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-[11px] font-mono font-semibold text-text-secondary group-hover:text-white transition-colors cursor-none"
                  >
                    REQUEST
                    <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
