"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import gsap from "gsap";

// Custom SVG Icons to avoid Lucide barrel resolution errors
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
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

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
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

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const VolumeXIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
    <line x1="22" x2="16" y1="9" y2="15" />
    <line x1="16" x2="22" y1="9" y2="15" />
  </svg>
);

const Volume2Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const headlineText = "Building Premium Digital Experiences";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // Check session sound preference on mount
    const savedSoundPref = sessionStorage.getItem("hero-sound-preference");
    if (savedSoundPref === "unmuted") {
      setIsMuted(false);
      setShowHint(false);
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
    }
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMutedState = !videoRef.current.muted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
    setShowHint(false);
    sessionStorage.setItem("hero-sound-preference", newMutedState ? "muted" : "unmuted");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate background video fade-in
      tl.fromTo(
        ".hero-bg-video",
        { opacity: 0 },
        { opacity: 1, duration: 1.8, ease: "power2.out" }
      );

      // Animate navigation slide down
      gsap.fromTo(
        "header",      <div className="w-full relative z-10 select-none px-8 lg:pl-32 flex items-center justify-start">

        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      // Word-by-word headline reveal
      tl.fromTo(
        ".reveal-word",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" },
        "-=1.2"
      );

      // Subheading reveal
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=1.0"
      );

      // Buttons and social icons reveal
      tl.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      );

      // Scroll indicator fade
      tl.fromTo(
        ".scroll-indicator",
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, repeat: -1, yoyo: true, ease: "power1.inOut" },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-background"
    >
      {/* Full-screen Background Looping Video - Fixed Position Parallax */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-bg-video fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 opacity-0"
        src="/videos/hero2.mp4"
      />
      {/* 60% Dark Overlay over background video */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

      {/* Floating Aurora Blur Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="aurora-orb absolute top-[-10%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-accent-primary/20 via-accent-secondary/5 to-transparent blur-[120px] pointer-events-none" />
        <div className="aurora-orb absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-bl from-accent-secondary/15 via-highlight/5 to-transparent blur-[140px] pointer-events-none" />
      </div>


      {/* Grid Alignment with left padding constraints */}
      <div className="w-full relative z-10 select-none flex items-center justify-start px-4 sm:px-6 lg:px-12 xl:px-20">
  <div className="w-full max-w-[480px] flex flex-col items-start text-left">

          
          {/* Availability Badge */}
          <div className="availability-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel bg-card-bg text-highlight text-xs font-mono font-semibold tracking-wider mb-8 border-border-color shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-highlight animate-ping" />
            LIVE WORKSPACE ACTIVE
          </div>

          {/* Word-by-Word Reveal Heading */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight leading-[1.05] mb-8 text-white max-w-[520px]"
          >
            {headlineText.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3">
                <span className="reveal-word inline-block opacity-0 transform translate-y-12">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subheading & Description block */}
          <div
            ref={subtitleRef}
            className="w-full flex flex-col items-start gap-6"
          >
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-text-secondary uppercase">
              <span>Full Stack Developer</span>
              <span>•</span>
              <span>React</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>Node.js</span>
              <span>•</span>
              <span>AI Automation</span>
              <span>•</span>
              <span>UI/UX Designer</span>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans mt-2">
              Designing premium interfaces and building scalable, robust web architectures. High-performance H.264 video arrays and GSAP timelines deployed to guarantee $20,000+ client impact.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://github.com"
                target="_blank"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 hover:scale-105 transition-all cursor-none"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 hover:scale-105 transition-all cursor-none"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 hover:scale-105 transition-all cursor-none"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="mailto:kamathambhuvanesh@gmail.com"
                className="p-2.5 rounded-xl border border-white/5 bg-card-bg text-text-secondary hover:text-white hover:border-white/10 hover:scale-105 transition-all cursor-none"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-start mt-12">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-foreground text-background font-mono text-sm font-bold glow-btn transition-transform hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-none"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full border border-border-color glass-panel bg-card-bg text-foreground font-mono text-sm font-bold transition-all hover:bg-foreground/5 hover:border-foreground/20 hover:scale-[1.03] cursor-none"
            >
              HIRE ME
            </a>
            <a
              href="/Bhuvanesh_Resume.pdf"
              target="_blank"
              className="w-full sm:w-auto text-center px-6 py-3.5 text-text-secondary hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1 hover:underline cursor-none"
            >
              DOWNLOAD RESUME
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Premium Sound Toggle Button */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-2">
        {showHint && (
          <div className="px-3 py-1.5 rounded-lg glass-panel bg-card-bg border-border-color text-text-secondary text-[10px] font-mono tracking-wider animate-pulse shadow-md">
            Click to enable sound
          </div>
        )}
        <button
          onClick={toggleSound}
          className="p-3 rounded-full border border-border-color glass-panel bg-card-bg text-white hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300 shadow-lg cursor-none flex items-center justify-center"
          aria-label="Toggle Hero Video Sound"
        >
          {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
        </button>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[9px] tracking-widest text-text-secondary opacity-60">
        SCROLL DOWN
        <div className="scroll-indicator w-5 h-8 rounded-full border border-border-color flex justify-center p-1.5">
          <div className="w-1 h-1.5 rounded-full bg-highlight animate-bounce" />
        </div>
      </div>
    </section>
  );
}
