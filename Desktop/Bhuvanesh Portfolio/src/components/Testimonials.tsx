"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Star, ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "David Miller",
    role: "CTO",
    company: "LuxuryVillas",
    quote: "Bhuvanesh completely transformed our real estate platform. The code is modular, loading speeds are lightning-fast, and the user interface feels incredibly premium. He is worth every dollar.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder",
    company: "FlowAI",
    quote: "His AI automation pipelines saved our team over 30 hours a week in data processing. An absolute genius developer who understands business logic and engineering.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  },
  {
    name: "Marc Dubois",
    role: "Creative Director",
    company: "GourmetGroup",
    quote: "The restaurant reservation platform he built handles thousands of bookings with zero hiccups. The micro-interactions and smooth transitions have wowed our clients.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  },
  {
    name: "Amit Sharma",
    role: "VP Engineering",
    company: "CloudConnect",
    quote: "His work on our CRM system was exemplary. Professional documentation, clean architecture, and proactive communication throughout the design and code cycle.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-testimonials",
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Auto Slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIdx]);

  // Fade animations on index change
  useEffect(() => {
    if (cardContainerRef.current) {
      gsap.fromTo(
        cardContainerRef.current,
        { opacity: 0, scale: 0.98, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[activeIdx];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="reveal-testimonials flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              <MessageSquare size={14} />
              07 / TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
              Client Feedback, <br />
              <span className="text-gradient-accent glow-text-purple">Vouched by Leaders</span>
            </h2>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-border-color bg-card-bg text-foreground hover:bg-white/5 transition-colors cursor-none"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-border-color bg-card-bg text-foreground hover:bg-white/5 transition-colors cursor-none"
              aria-label="Next Testimonial"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Testimonial Active Slide Panel */}
        <div className="max-w-4xl mx-auto reveal-testimonials">
          <div
            ref={cardContainerRef}
            className="w-full rounded-3xl glass-panel bg-card-bg border-border-color p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Glowing background */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-primary/15 blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Rating stars */}
              <div className="flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={15} className="fill-highlight text-highlight" />
                ))}
              </div>

              {/* Quote Description */}
              <blockquote className="text-lg sm:text-2xl font-medium font-sans text-white leading-relaxed tracking-tight">
                "{current.quote}"
              </blockquote>

              {/* Client Info footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                {/* Client Avatar Image */}
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 relative shadow-md">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white tracking-wide">
                    {current.name}
                  </span>
                  <span className="text-xs text-text-secondary font-mono">
                    {current.role} • <span className="text-highlight font-semibold">{current.company}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide dots indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-none ${
                  activeIdx === i ? "w-8 bg-highlight" : "w-2 bg-border-color"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
