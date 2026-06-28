"use client";

import React, { useState } from "react";
import { Code2, Cpu, Sparkles, Search, Palette, Calendar, BadgeCheck, ShieldAlert } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "storefront",
    name: "The Digital Storefront",
    icon: Code2,
    tagline: "High-Converting Custom Web Platforms Built to Scale",
    items: [
      { title: "E-commerce Shops", desc: "Next.js frontends integrated with Shopify, Stripe payments, and optimized checkouts." },
      { title: "Bespoke Retail Pages", desc: "Premium custom storefronts built to reflect brand voice and visual authority." },
      { title: "Artisanal Food Systems", desc: "Digital ordering platforms with interactive catalogs and direct conversion funnels." },
      { title: "Corporate Business Mocks", desc: "Type-safe multi-page platforms featuring Awwwards-standard luxury layout grids." }
    ]
  },
  {
    id: "booking",
    name: "The Booking Machine",
    icon: Calendar,
    tagline: "Frictionless Scheduling and User Onboarding",
    items: [
      { title: "Clinical Scheduling", desc: "HIPAA-secure patient booking frameworks with calendar synchronization." },
      { title: "Gym Member Portals", desc: "Automated onboarding, subscription billing, and contract processing on checkout." },
      { title: "Real Estate Property Hubs", desc: "MLS database synchronizations, map search APIs, and lead routing sheets." },
      { title: "Professional Service Bookers", desc: "Direct video bracket reserves for legal consults and strategy checkups." }
    ]
  },
  {
    id: "ai-employee",
    name: "The AI Employee",
    icon: Cpu,
    tagline: "Autonomous n8n Automations and Custom Chatbots",
    items: [
      { title: "24/7 Custom Chatbots", desc: "WhatsApp, Slack, and web chat assistants powered by secure LLM context nodes." },
      { title: "n8n Webhook Pipelines", desc: "Data synchronization pipelines that automate lead scoring and CRM uploads." },
      { title: "WhatsApp/SMS Alerts", desc: "Auto-reminders, invoice alerts, and support desk tickets powered by n8n." },
      { title: "HubSpot / CRM Syncing", desc: "Synchronize client logs directly into HubSpot databases without manual work." }
    ]
  },
  {
    id: "local-dominance",
    name: "Local Dominance",
    icon: Search,
    tagline: "Google Maps & Elite Local SEO Architectures",
    items: [
      { title: "Google Maps Optimization", desc: "Local business pins setup, schema integrations, and visibility tuning." },
      { title: "Elite Search Rankings", desc: "On-page metadata grids, sitemaps configuration, and Core Web Vitals checks." },
      { title: "Luxury Brand Systems", desc: "Figma layouts, style manuals, corporate palettes, and assets packages." },
      { title: "SEO Content Sprints", desc: "Structuring text semantics to capture local organic business search traffic." }
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("storefront");
  const selectedCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-32 space-y-16">
      
      {/* Page Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Sparkles className="w-4 h-4 text-electric-cyan" />
          <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">OUR CAPABILITIES</span>
        </div>
        <h1 className="font-space font-extrabold text-4xl md:text-6xl text-white leading-tight">
          Services Engineered for <span className="gradient-text-blue-cyan">Hyper-Scale.</span>
        </h1>
        <p className="text-gray text-lg leading-relaxed">
          From Awwwards-standard frontends to automated n8n CRM pipelines, we build custom solutions that automate overhead and maximize conversions.
        </p>
      </section>

      {/* Tabs Selector */}
      <section className="flex justify-center border-b border-white/5">
        <div className="flex space-x-4 md:space-x-8 pb-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 pb-4 font-space font-bold text-xs tracking-wider uppercase border-b-2 transition-all duration-300 ${
                  isActive
                    ? "border-electric-cyan text-white"
                    : "border-transparent text-gray hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-electric-cyan" : ""}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Service Details grid */}
      <section className="space-y-8 animate-fade-in">
        <div className="text-center md:text-left space-y-2">
          <span className="text-xs font-space font-bold text-accent-gold uppercase tracking-widest">
            {selectedCategory.name.toUpperCase()} OVERVIEW
          </span>
          <h2 className="font-space text-2xl md:text-3xl text-white font-bold">{selectedCategory.tagline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedCategory.items.map((item, idx) => (
            <div key={idx} className="glass-card p-8 border-white/5 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-space text-lg font-bold text-white flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-electric-cyan flex-shrink-0" />
                  <span>{item.title}</span>
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="glass-card p-10 border border-electric-cyan/20 bg-slate-900/10 text-center space-y-6 max-w-4xl mx-auto">
        <h3 className="font-space text-xl md:text-2xl text-white font-bold">
          Ready to Automate Your Business?
        </h3>
        <p className="text-xs text-gray max-w-xl mx-auto">
          Get in touch today to schedule an audit call. We will scope your metrics and map out a custom digital transformation plan.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-space text-xs font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          START YOUR PROJECT
        </Link>
      </section>

    </div>
  );
}
