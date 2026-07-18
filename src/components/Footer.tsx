"use client";

import React from "react";
import { ArrowUp, Mail, Phone, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const Github = ({ size = 15, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
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

const Linkedin = ({ size = 15, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Magnetic Button Effect helper
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <footer className="relative w-full bg-background border-t border-border-color pt-16 pb-8 overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 font-sans font-extrabold text-xl tracking-tight text-white w-fit"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white text-sm font-black shadow-md">
                B
              </span>
              BHUVANESH
            </a>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm mt-2">
              Full Stack Developer & AI Automation Engineer dedicated to crafting premium, high-performance digital spaces for discerning international clients.
            </p>
            
            {/* Socials row */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 transition-all cursor-none"
                aria-label="LinkedIn"
              >
                <Linkedin width={15} height={15} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 transition-all cursor-none"
                aria-label="GitHub"
              >
                <Github width={15} height={15} />
              </a>
              <a
                href="mailto:kamathambhuvanesh@gmail.com"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 transition-all cursor-none"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 transition-all cursor-none"
                aria-label="WhatsApp"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-secondary">
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-white transition-colors cursor-none">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-white transition-colors cursor-none">About</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")} className="hover:text-white transition-colors cursor-none">Skills</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="hover:text-white transition-colors cursor-none">Projects</a>
              <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors cursor-none">Services</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, "#experience")} className="hover:text-white transition-colors cursor-none">Experience</a>
              <a href="#testimonials" onClick={(e) => handleNavClick(e, "#testimonials")} className="hover:text-white transition-colors cursor-none">Reviews</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-white transition-colors cursor-none">Contact</a>
            </div>
          </div>

          {/* Column 3: Featured Services list */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              Key Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-text-secondary font-sans">
              <li className="flex items-center justify-between group cursor-none hover:text-white transition-colors">
                <span>UI/UX Web Design</span>
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
              <li className="flex items-center justify-between group cursor-none hover:text-white transition-colors">
                <span>Next.js Full Stack Dev</span>
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
              <li className="flex items-center justify-between group cursor-none hover:text-white transition-colors">
                <span>n8n AI Workflow Automation</span>
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
              <li className="flex items-center justify-between group cursor-none hover:text-white transition-colors">
                <span>Custom CRM Architectures</span>
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[10px] font-mono text-text-secondary/60">
          <div>
            © 2026 Bhuvanesh. Made by Bhuvanesh. All rights reserved.
          </div>

          {/* Back to top magnetic button */}
          <button
            onClick={handleScrollToTop}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-10 h-10 rounded-full border border-border-color bg-card-bg text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-md cursor-none"
            aria-label="Back to Top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
