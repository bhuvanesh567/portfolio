"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, Calendar, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom SVG Icons to avoid Lucide resolution errors
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

const budgetOptions = [
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000+",
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("$5,000 - $10,000");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    details: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-contact-el",
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", business: "", details: "" });
      setSelectedBudget("$5,000 - $10,000");
    }, 4000);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-accent-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageSquare size={14} />
            08 / COLLABORATION
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-gradient">
            Let's Build <br />
            <span className="text-gradient-accent glow-text-purple">Your Next Project</span>
          </h2>
        </div>

        {/* Split Form & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 reveal-contact-el flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Partner with an elite frontend developer.
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                Fusing modern UI/UX design libraries, clean scalable coding layers, and AI pipeline connections to multiply user retention metrics.
              </p>

              {/* Direct links */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:kamathambhuvanesh@gmail.com"
                  className="flex items-center gap-4 group cursor-none w-fit"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-highlight group-hover:bg-accent-primary/20 transition-all">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-text-secondary uppercase">Email Me</span>
                    <span className="text-xs sm:text-sm text-white font-medium group-hover:underline">kamathambhuvanesh@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-none w-fit"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-highlight group-hover:bg-accent-primary/20 transition-all">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-text-secondary uppercase">WhatsApp / Chat</span>
                    <span className="text-xs sm:text-sm text-white font-medium group-hover:underline">+91 9988776655</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 w-fit">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-highlight">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col font-sans">
                    <span className="text-[10px] font-mono text-text-secondary uppercase">Office</span>
                    <span className="text-xs sm:text-sm text-white font-medium">Bengaluru, India (Global remote)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Map Placeholder */}
            <div className="w-full h-44 rounded-2xl border border-border-color bg-card-bg relative overflow-hidden flex flex-col justify-between p-4 shadow-md group">
              <div className="absolute inset-0 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] bg-[size:12px_12px] opacity-45 pointer-events-none" />

              <div className="z-10 flex justify-between items-start">
                <span className="text-[9px] font-mono tracking-widest text-text-secondary uppercase bg-black/40 px-2 py-0.5 rounded border border-white/5">
                  MAP_HQ // 12.9716° N, 77.5946° E
                </span>
              </div>

              <div className="z-10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-highlight animate-ping" />
                <span className="text-xs font-semibold text-white tracking-wide">Bengaluru Hub</span>
              </div>

              <div className="z-10 text-[9px] font-mono text-text-secondary/50">
                ACTIVE PIPELINE CONVERGING REMOTE CLIENT NODES
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 reveal-contact-el">
            <div className="rounded-3xl glass-panel bg-card-bg border-border-color p-8 sm:p-10 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2 shadow-lg">
                    <Check size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Transmission Complete!</h3>
                  <p className="text-xs text-text-secondary max-w-sm">
                    Thank you. Your project request has been logged. Bhuvanesh will get back to you within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-mono text-text-secondary uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-black/20 text-white text-sm outline-none focus:border-accent-primary transition-colors cursor-none"
                        placeholder="e.g. Alexis Carter"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-mono text-text-secondary uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-black/20 text-white text-sm outline-none focus:border-accent-primary transition-colors cursor-none"
                        placeholder="e.g. alexis@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Business/Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="business" className="text-[10px] font-mono text-text-secondary uppercase">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-black/20 text-white text-sm outline-none focus:border-accent-primary transition-colors cursor-none"
                        placeholder="e.g. Carter Enterprises"
                      />
                    </div>

                    {/* Budget Options */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-mono text-text-secondary uppercase">
                        Project Budget *
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedBudget(opt)}
                            className={`px-3 py-2 rounded-xl text-[10px] font-mono text-center border transition-all cursor-none ${
                              selectedBudget === opt
                                ? "bg-white text-black border-white font-bold shadow-md"
                                : "border-border-color bg-black/10 text-text-secondary hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="details" className="text-[10px] font-mono text-text-secondary uppercase">
                      Project Details *
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      required
                      value={formData.details}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-black/20 text-white text-sm outline-none focus:border-accent-primary transition-colors cursor-none resize-none"
                      placeholder="Outline your application logic, design requirements, and target goals..."
                    />
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-mono text-xs font-bold glow-btn hover:scale-[1.03] transition-transform shadow-md cursor-none"
                    >
                      SUBMIT REQUEST
                      <Send size={13} />
                    </button>

                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border-color bg-white/5 text-white hover:bg-white/10 text-xs font-mono font-medium transition-all cursor-none"
                    >
                      <Calendar size={13} />
                      Calendly Meeting
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
