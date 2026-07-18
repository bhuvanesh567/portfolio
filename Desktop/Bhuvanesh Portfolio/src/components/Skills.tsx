"use client";

import React, { useEffect, useRef } from "react";
import { Cpu, Server, Layout, Database, Terminal, Settings } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "React", category: "Frontend", color: "#61DAFB", icon: Layout },
  { name: "Next.js", category: "Frontend", color: "#FFFFFF", icon: Layout },
  { name: "Node.js", category: "Backend", color: "#339933", icon: Server },
  { name: "Python", category: "Language", color: "#3776AB", icon: Terminal },
  { name: "SQL", category: "Database", color: "#00758F", icon: Database },
  { name: "MongoDB", category: "Database", color: "#47A248", icon: Database },
  { name: "Firebase", category: "Database/Cloud", color: "#FFCA28", icon: Database },
  { name: "Docker", category: "DevOps", color: "#2496ED", icon: Settings },
  { name: "Git", category: "Version Control", color: "#F05032", icon: Settings },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", icon: Layout },
  { name: "GSAP", category: "Animation", color: "#88CE02", icon: Cpu },
  { name: "Three.js", category: "3D Graphics", color: "#FF007F", icon: Cpu },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Custom 3D Tilt & Glow position tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    
    const glow = card.querySelector(".card-glow") as HTMLDivElement;
    if (glow) {
      glow.style.opacity = "0.15";
      glow.style.transform = `translate3d(${x - rect.width / 2}px, ${y - rect.height / 2}px, 0)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    
    const glow = card.querySelector(".card-glow") as HTMLDivElement;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <Cpu size={14} />
            05 / TECH STACK & TOOLS
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
            Tech Stack, <br />
            <span className="text-gradient-accent glow-text-purple">Elite Capabilities</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="skill-card-anim skill-card relative overflow-hidden rounded-2xl glass-panel bg-card-bg border-border-color shadow-lg p-6 flex flex-col justify-between h-40 transition-transform duration-300 ease-out cursor-none transform-gpu"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transition: "transform 0.15s ease-out, border-color 0.3s" }}
              >
                {/* Neon Glow Tracker */}
                <div
                  className="card-glow absolute pointer-events-none w-32 h-32 rounded-full blur-2xl opacity-0 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${skill.color} 0%, transparent 80%)`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* Top Section */}
                <div className="flex justify-between items-start z-10">
                  <div
                    className="p-2.5 rounded-xl border border-white/5 bg-black/20 flex items-center justify-center transition-colors duration-300"
                    style={{ color: skill.color }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-text-secondary opacity-60 uppercase bg-white/5 px-2 py-0.5 rounded">
                    {skill.category}
                  </span>
                </div>

                {/* Bottom Section */}
                <div className="z-10 mt-auto">
                  <h3 className="text-white text-base font-bold tracking-tight font-sans">
                    {skill.name}
                  </h3>
                  <div className="w-6 h-0.5 bg-border-color rounded-full mt-2 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
