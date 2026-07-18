"use client";

import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  {
    company: "XStone Studio",
    role: "Lead Full Stack Architect",
    duration: "2024 - Present",
    achievements: [
      "Re-engineered corporate web architectures in Next.js 15+, boosting average page load speeds by 45% and Lighthouse scores to 98+.",
      "Built and deployed custom AI prompt pipelines leveraging OpenAI and n8n backend automation nodes.",
      "Mentored a team of 5 developers on writing clean, modular React structures and agile Git practices.",
    ],
  },
  {
    company: "NovaDev Agency",
    role: "Senior Software Engineer (AI & Frontend)",
    duration: "2022 - 2024",
    achievements: [
      "Designed and scaled high-conversion ecommerce checkout platforms using Node.js, PostgreSQL, and Stripe API.",
      "Configured automated back-office process triggers in n8n, saving internal operators ~15 hours of manual entry weekly.",
      "Coded robust RESTful services handling over 100,000 requests daily with 99.9% uptime guarantees.",
    ],
  },
  {
    company: "Freelance Digital Developer",
    role: "Full Stack Designer & Consultant",
    duration: "2021 - 2022",
    achievements: [
      "Shipped 40+ responsive, custom-crafted sites for global startups and agencies across real estate, legal, and medical domains.",
      "Fitted glassmorphic dashboard concepts with clean Framer Motion/GSAP layout animations.",
      "Integrated secure Firebase databases and Stripe payment architectures into standalone boutique apps.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Job card reveal
      gsap.fromTo(
        ".reveal-job-card",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
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
      id="experience"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-bg-secondary overflow-hidden border-t border-b border-border-color"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <Briefcase size={14} />
            07 / PROFESSIONAL HISTORY
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
            Proven Expertise, <br />
            <span className="text-gradient-accent glow-text-purple">Real-world Impact</span>
          </h2>
        </div>

        {/* Experience Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="reveal-job-card relative rounded-3xl glass-panel bg-card-bg border-border-color p-8 shadow-xl group hover:border-accent-primary/20 transition-all duration-300 cursor-none flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Left Column: Role & Duration */}
              <div className="md:w-1/3 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold tracking-wider text-highlight uppercase bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    {job.company}
                  </span>
                  <h3 className="text-white text-lg font-bold tracking-tight mt-4 group-hover:text-accent-primary transition-colors duration-300">
                    {job.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-text-secondary font-mono mt-4 md:mt-0">
                  <Calendar size={13} />
                  <span>{job.duration}</span>
                </div>
              </div>

              {/* Right Column: Achievements bullets list */}
              <div className="md:w-2/3 space-y-4 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                <span className="text-[10px] font-mono tracking-widest text-text-secondary opacity-60 uppercase block">
                  Key Accomplishments
                </span>
                
                <div className="space-y-3.5">
                  {job.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                      <Star size={12} className="text-accent-secondary shrink-0 mt-1" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
