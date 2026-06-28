"use client";

import React, { useState } from "react";
import { Sparkles, ExternalLink, ArrowRight, Code2, Cpu, Search, BadgeCheck } from "lucide-react";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Artisanal Food & Pickles Brand",
    category: "ecommerce",
    industry: "Specialized DTC Retail",
    img: "url('/pickle-store.png') center/cover no-repeat",
    tech: ["Shopify Headless", "Next.js 15", "Stripe"],
    desc: "A luxury presentation and checkout portal for premium pickles. Bypasses standard template frameworks to achieve a 100/100 Lighthouse speed score."
  },
  {
    title: "Modern Restaurant Engine",
    category: "services",
    industry: "Gastronomy & Direct Ordering",
    img: "url('/restaurant-engine.png') center/cover no-repeat",
    tech: ["Next.js", "n8n Webhook Alerts", "Resend API"],
    desc: "A commission-free table reservation and direct ordering frontend. Integrates WhatsApp alert sequences to notify kitchen staff in real time."
  },
  {
    title: "Real Estate & Property Hub",
    category: "services",
    industry: "Real Estate Catalogs",
    img: "url('/real-estate.png') center/cover no-repeat",
    tech: ["Next.js", "MapBox API", "Supabase"],
    desc: "Interactive listings displaying map pins, price histories, and scheduling forms mapping directly to sales agents."
  },
  {
    title: "Medical / Gym Member Portal",
    category: "automation",
    industry: "Healthcare & Fitness",
    img: "url('/member-portal.png') center/cover no-repeat",
    tech: ["React.js", "FastAPI", "Stripe Billing"],
    desc: "Frictionless intake onboarding, document signing, and subscription setups that eliminate clinical manual data entry."
  },
  {
    title: "Hotel Prestige Alpine",
    category: "services",
    industry: "Prestige Lodging",
    img: "url('/hotel-prestige.png') center/cover no-repeat",
    tech: ["Next.js", "Lenis Smooth Scroll", "Tailwind"],
    desc: "Immersive visual rooms index connected to custom scheduling hooks to increase direct bookings."
  },
  {
    title: "Sovereign carbon credit tracker",
    category: "automation",
    industry: "Waste & Recycling",
    img: "url('/carbon-tracker.png') center/cover no-repeat",
    tech: ["React.js", "Supabase DB", "n8n Automation"],
    desc: "Dashboard logging corporate trash recyclables metrics and calculating auto carbon tax credits."
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filtered = portfolioProjects.filter(p => filter === "all" || p.category === filter);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-32 space-y-16">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Sparkles className="w-4 h-4 text-electric-cyan" />
          <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">CASE PORTFOLIO</span>
        </div>
        <h1 className="font-space font-extrabold text-4xl md:text-6xl text-white leading-tight">
          Systems Engineered for <span className="gradient-text-blue-cyan">Commercial Impact.</span>
        </h1>
        <p className="text-gray text-lg leading-relaxed">
          Explore finished storefront layouts, booking engines, and database synchronizers built for local businesses.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="flex justify-center border-b border-white/5 pb-1">
        <div className="flex space-x-6 md:space-x-8">
          {[
            { id: "all", name: "All Projects" },
            { id: "ecommerce", name: "E-Commerce" },
            { id: "services", name: "Local Services" },
            { id: "automation", name: "AI & Automation" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`pb-4 font-space font-bold text-xs tracking-wider uppercase border-b-2 transition-colors duration-300 ${
                filter === tab.id
                  ? "border-electric-cyan text-white"
                  : "border-transparent text-gray hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, idx) => (
          <div key={idx} className="glass-card overflow-hidden group flex flex-col justify-between border-white/5 hover:border-electric-cyan/30">
            <div 
              style={{ background: project.img }}
              className="w-full h-52 relative flex items-center justify-center p-6 border-b border-white/5 transition-transform duration-500 group-hover:scale-[1.01]"
            >
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
              <span className="font-space font-extrabold text-xl text-white tracking-widest text-center drop-shadow-md">
                {project.title.toUpperCase()}
              </span>
            </div>
            <div className="p-6 space-y-4">
              <span className="text-[10px] font-space font-bold tracking-widest text-accent-gold uppercase block">
                {project.industry}
              </span>
              <p className="text-xs text-gray leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] font-space text-gray bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-space font-bold">
              <span className="text-electric-cyan flex items-center space-x-1 cursor-pointer hover:underline">
                <span>LIVE PREVIEW</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
              <Link href="/contact" className="text-white hover:text-electric-cyan flex items-center space-x-1">
                <span>INQUIRE SYSTEM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
