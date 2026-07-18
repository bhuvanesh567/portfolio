"use client";

import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Filter, Code2, Monitor } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom SVG Github Icon to avoid Lucide import issues
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const portfolioItems = [
  {
    name: "Waste Recycling Website",
    category: "Websites",
    desc: "A green tech landing page with carbon offset calculators, recycling tracking dashboards, and interactive waste collection maps.",
    tech: ["Next.js", "Tailwind CSS", "GSAP"],
    live: "https://example.com/waste-recycling",
    git: "https://github.com/bhuvanesh567/waste-recycling",
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Pickles Business Website",
    category: "Ecommerce",
    desc: "A custom boutique ecommerce experience highlighting organic traditional pickles with custom cart features and inventory management.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    live: "https://example.com/pickles",
    git: "https://github.com/bhuvanesh567/pickles-ecommerce",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    image: "/avakaya.png",
  },
  {
    name: "Restaurant Website",
    category: "Websites",
    desc: "A sensory food portal with visual menus, TableReservation systems, and live delivery integration updates.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    live: "https://example.com/restaurant",
    git: "https://github.com/bhuvanesh567/restaurant",
    gradient: "from-rose-500/20 via-pink-600/10 to-transparent",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Interior Design Website",
    category: "Websites",
    desc: "A minimal visual portfolio for architectural design studios featuring smooth gallery filters and image reveals.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    live: "https://example.com/interior-design",
    git: "https://github.com/bhuvanesh567/interior-design",
    gradient: "from-stone-500/20 via-neutral-600/10 to-transparent",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Real Estate Website",
    category: "Web Apps",
    desc: "An immersive property locator listing luxury villas with virtual tours, map searches, and financial calculators.",
    tech: ["React", "Node.js", "SQL", "Google Maps API"],
    live: "https://example.com/real-estate",
    git: "https://github.com/bhuvanesh567/real-estate-website",
    gradient: "from-indigo-600/20 via-violet-600/10 to-transparent",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "E-commerce Website",
    category: "Ecommerce",
    desc: "An ultra-premium storefront with interactive product previews, dark luxury animations, and Stripe checkout integrations.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    live: "https://example.com/luxury-store",
    git: "https://github.com/bhuvanesh567/ecommerce-store",
    gradient: "from-blue-600/20 via-cyan-600/10 to-transparent",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General section header fade-in
      gsap.fromTo(
        ".reveal-projects-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards reveal staggered
      gsap.fromTo(
        ".project-card",
        { scale: 0.95, y: 40, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-bg-secondary overflow-hidden border-t border-b border-border-color"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="reveal-projects-header flex flex-col mb-16">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <Code2 size={14} />
            03 / PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
            High-End Web Clones, <br />
            <span className="text-gradient-accent glow-text-purple">Pixel-Perfect Layouts</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {portfolioItems.map((project, index) => (
            <div
              key={index}
              className="project-card relative overflow-hidden rounded-3xl glass-panel bg-card-bg border-border-color shadow-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[460px] transition-all hover:border-white/15 group cursor-none transform-gpu"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "transform 0.15s ease-out, border-color 0.3s" }}
            >
              {/* LAPTOP MOCKUP CONTAINER */}
              <div className="w-full flex flex-col items-center select-none mb-6">
                {/* Screen frame */}
                <div
                  className="w-full aspect-[16/10] border-[6px] border-zinc-800 bg-zinc-950 rounded-t-2xl overflow-hidden relative shadow-lg flex items-center justify-center"
                >
                  {/* Actual website mockup photo */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle code backdrop screen pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:10px_10px] opacity-25 pointer-events-none z-10" />

                  {/* Dark gradient overlay for screen glow and text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10 pointer-events-none" />

                  {/* Mockup screen overlay graphics */}
                  <div className="z-20 flex flex-col items-center gap-1.5 text-center px-4">
                    <span className="text-[9px] font-mono tracking-widest text-white/90 uppercase bg-black/60 px-2 py-0.5 rounded border border-white/10 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Sheer glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20" />
                </div>
                {/* Keyboard base */}
                <div className="w-[106%] h-3.5 bg-zinc-700 rounded-b-2xl border-t border-zinc-600 shadow-md relative z-20 flex justify-center">
                  {/* Base indentation dot */}
                  <div className="w-16 h-1 bg-zinc-800 rounded-b-md" />
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="flex-grow flex flex-col justify-between pt-2">
                <div>
                  <h3 className="text-white text-xl font-bold tracking-tight mb-2 group-hover:text-highlight transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-4">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono text-text-secondary bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-white transition-colors cursor-none"
                    >
                      <Github />
                      Source Code
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white text-xs font-mono font-medium hover:text-black transition-all cursor-none"
                    >
                      Visit Website
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
