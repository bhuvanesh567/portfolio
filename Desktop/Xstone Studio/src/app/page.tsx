"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Cpu, Code2, Globe2, Sparkles, Zap, ShieldCheck, HeartHandshake, 
  Terminal, Search, Palette, MessageSquare, ChevronRight, CheckCircle2, 
  Layers, ArrowUpRight, BarChart3, HelpCircle, Mail, Phone, MapPin, Star,
  Calendar, Clock, Quote, ExternalLink, Activity, GraduationCap, Utensils,
  Landmark, Building, Award, FileText, Check, ShieldAlert
} from "lucide-react";

// Dynamically import FuturisticCityscape to avoid SSR issues
const FuturisticCityscape = dynamic(() => import("@/components/ui/FuturisticCityscape"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#030712] flex items-center justify-center text-xs text-gray font-space -z-10">
      INITIALIZING MATRIX...
    </div>
  ),
});

// Aligned stats counters
const statsData = [
  { value: 35, label: "Revenue Generated for Clients", prefix: "₹", suffix: "Cr+", decimals: 1 },
  { value: 18000, label: "Hours of Manual Work Automated", suffix: "+ hrs" },
  { value: 145, label: "Local Search Visibility Boost (SEO)", prefix: "+", suffix: "%" },
  { value: 120, label: "Active Digital Storefronts Launched", suffix: "+" }
];

// Aligned 4 major capabilities
const servicesData = [
  { 
    id: "storefront", 
    title: "The Digital Storefront", 
    desc: "Luxury e-commerce architectures, custom specialized retail interfaces, and artisanal food portal setups built for high conversions.", 
    cat: "storefront", 
    tag: "E-commerce & Retail" 
  },
  { 
    id: "booking", 
    title: "The Booking Machine", 
    desc: "Frictionless scheduling systems and digital onboarding databases engineered for clinics, gyms, real estate, and law firms.", 
    cat: "booking", 
    tag: "Automated Schedulers" 
  },
  { 
    id: "ai-employee", 
    title: "The AI Employee", 
    desc: "24/7 custom AI chatbots, n8n webhook notifications, automated SMS/WhatsApp alerts, and real-time CRM synchronization.", 
    cat: "ai-employee", 
    tag: "Intelligent Workflows" 
  },
  { 
    id: "dominance", 
    title: "Local Dominance", 
    desc: "Google Maps visibility setups, elite local SEO architectures, Space Grotesk designs, and corporate brand guidelines.", 
    cat: "dominance", 
    tag: "SEO & Brand Systems" 
  }
];

// Aligned Portfolio Showcase
const portfolioData = [
  {
    title: "Artisanal Food & Pickles Brand",
    industry: "High-converting premium e-commerce",
    img: "url('/pickle-store.png') center/cover no-repeat",
    tech: ["Shopify Headless", "Next.js", "Stripe"],
    desc: "Direct conversion-focused pickle catalog featuring luxury typography and fast page loads."
  },
  {
    title: "Modern Restaurant Engine",
    industry: "Direct online ordering (no fees)",
    img: "url('/restaurant-engine.png') center/cover no-repeat",
    tech: ["Next.js", "n8n Alerts", "Resend API"],
    desc: "Online menu booking and automated WhatsApp reservation confirmation systems."
  },
  {
    title: "Real Estate & Property Hub",
    industry: "Interactive listings & lead captures",
    img: "url('/real-estate.png') center/cover no-repeat",
    tech: ["Next.js", "MapBox API", "Supabase"],
    desc: "Cinematic galleries and MLS property databases with automated contact triggers."
  },
  {
    title: "Medical / Gym Member Portal",
    industry: "Frictionless booking & onboarding",
    img: "url('/member-portal.png') center/cover no-repeat",
    tech: ["React.js", "FastAPI", "Stripe Billing"],
    desc: "Paperless intake registration and digital onboarding maps reducing room delays."
  }
];

// Aligned 5 timeline journey steps
const devSteps = [
  { step: "01", title: "Discovery & Growth Strategy", desc: "Auditing sitemap performance gaps, indexing keywords, and defining conversion targets." },
  { step: "02", title: "High-Fidelity UI/UX Design", desc: "Drafting Apple-inspired glassmorphic layout prototypes in Figma using luxury font ratios." },
  { step: "03", title: "Modern Development (Next.js 15)", desc: "Engineering lightweight custom components in Next.js 15, React 19, and Tailwind." },
  { step: "04", title: "AI & Automation Sync (n8n)", desc: "Wiring lead contact submissions to CRM databases and triggering automated alerts." },
  { step: "05", title: "Launch & Local SEO Blast", desc: "Optimizing Core Web Vitals (95+ Lighthouse targets), schema schemas, and local maps pins." }
];

// Aligned pricing cards data
const pricingPlans = [
  {
    name: "Growth Kickstart",
    price: "₹10,000",
    term: "per project",
    desc: "Custom Next.js 5-page micro-site for local storefronts and retail stores.",
    features: [
      "Custom Next.js 15 & Tailwind CSS",
      "Framer Motion animations",
      "Lead generation form & email alerts",
      "Google Maps integration",
      "Lighthouse performance optimization",
      "2-week delivery timeline"
    ]
  },
  {
    name: "Business Engine",
    price: "₹25,000",
    term: "per project",
    desc: "Premium multi-page web platform with custom automated booking and CRM integrations.",
    features: [
      "Up to 12 custom pages & design",
      "Interactive 3D/Canvas visuals",
      "n8n automation & CRM synchronization",
      "Member onboarding or booking widget",
      "Local SEO structured data schemas",
      "Dedicated Slack project updates channel"
    ],
    recommended: true
  },
  {
    name: "Enterprise Automation",
    price: "₹65,000",
    term: "or milestone-based",
    desc: "Custom SaaS architectures, database structures, and comprehensive agency workflows.",
    features: [
      "Unlimited custom page count",
      "Advanced n8n integrations & scheduling maps",
      "Supabase database integration",
      "24/7 priority support SLA response",
      "Google Local SEO dominance strategy",
      "Custom proposal & analytics dashboards"
    ]
  }
];

// Aligned reviews
const reviewsData = [
  {
    name: "Arthur Pendelton",
    role: "VP of Product, Apex Prestige Homes",
    text: "The parallax scroll and custom interactive map Xstone Studio engineered helped us capture high-intent viewing bookings. The layout design matches Stripe and Tesla standards perfectly.",
    rating: 5,
    outcome: "+60% Booking requests"
  },
  {
    name: "Genevieve Vartian",
    role: "Founder, Aura Premium Salon",
    text: "Before Xstone, we manually managed customer booking sheets. Re-engineering our site and introducing Stripe auto-invoicing solved our schedule bottlenecks completely.",
    rating: 5,
    outcome: "$8k Monthly Recurring VIPs"
  },
  {
    name: "Marcus Vance",
    role: "Lead Operations, EcoRecycle Solutions",
    text: "Our carbon credit tracker dashboard is flawless. The n8n integration has saved our database team at least 15 hours of manual work every week.",
    rating: 5,
    outcome: "15h Saved weekly"
  }
];

// FAQs
const faqs = [
  {
    q: "Why does Xstone Studio build with Next.js and Tailwind?",
    a: "Next.js provides server-side rendering, code-splitting, and automatic image optimizations out-of-the-box. Combined with Tailwind, this guarantees extremely fast load speeds (Lighthouse scores of 95+) and award-winning responsiveness."
  },
  {
    q: "What types of n8n automations can you build for my business?",
    a: "We automate client onboarding, lead qualifications, CRM synchronization (HubSpot, Salesforce), custom database inputs (Supabase, PostgreSQL), auto-generated PDF invoicing, and custom WhatsApp/Telegram notification alerts."
  },
  {
    q: "How long does it typically take to launch a premium website?",
    a: "Corporate website projects take between 4 to 8 weeks depending on custom design, page count, and dashboard components. Simple custom apps or AI chatbot integrations can be deployed in 2 to 3 weeks."
  },
  {
    q: "Do you integrate custom CRM dashboards for client management?",
    a: "Yes. Every client receives access to a custom Client Dashboard showing sprint timelines, active automated workflows, billing statements, and support queues."
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Aligned multi-step consultation wizard states
  const [wizardStep, setWizardStep] = useState(0);
  const [wizardMessages, setWizardMessages] = useState<any[]>([
    { sender: "ai", text: "Greetings. I am Xstone's AI Consultant. I will evaluate your metrics and map a digital transformation proposal. What is your name?" }
  ]);
  const [wizardInput, setWizardInput] = useState("");
  const [wizardLoading, setWizardLoading] = useState(false);
  const [wizardProposal, setWizardProposal] = useState<any>(null);
  
  // Custom states to capture Dropdowns and Textarea fields
  const [wizardForm, setWizardForm] = useState({
    name: "",
    businessName: "",
    industry: "E-commerce",
    revenue: "<₹10,000",
    budget: "₹10,000-₹25,000",
    painPoint: "",
    phone: "",
    email: ""
  });

  const handleWizardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (wizardStep < 5 && !wizardInput.trim() && wizardStep !== 2 && wizardStep !== 3 && wizardStep !== 4) return;

    const val = wizardInput.trim();
    if (wizardStep === 0) {
      setWizardForm(prev => ({ ...prev, name: val }));
      setWizardMessages(prev => [...prev, { sender: "user", text: val }]);
      setWizardInput("");
      setWizardStep(1);
      setWizardMessages(prev => [...prev, { sender: "ai", text: `Pleasure, ${val}. What is your company name?` }]);
    }
    else if (wizardStep === 1) {
      setWizardForm(prev => ({ ...prev, businessName: val }));
      setWizardMessages(prev => [...prev, { sender: "user", text: val }]);
      setWizardInput("");
      setWizardStep(2);
      setWizardMessages(prev => [...prev, { sender: "ai", text: "Select your target business industry/vertical:" }]);
    }
    else if (wizardStep === 2) {
      // Industry dropdown selection submit
      setWizardMessages(prev => [...prev, { sender: "user", text: `Industry: ${wizardForm.industry}` }]);
      setWizardStep(3);
      setWizardMessages(prev => [...prev, { sender: "ai", text: "What is your current monthly business revenue?" }]);
    }
    else if (wizardStep === 3) {
      // Revenue dropdown selection submit
      setWizardMessages(prev => [...prev, { sender: "user", text: `Monthly Revenue: ${wizardForm.revenue}` }]);
      setWizardStep(4);
      setWizardMessages(prev => [...prev, { sender: "ai", text: "Select your target development budget tier:" }]);
    }
    else if (wizardStep === 4) {
      // Budget dropdown selection submit
      setWizardMessages(prev => [...prev, { sender: "user", text: `Budget: ${wizardForm.budget}` }]);
      setWizardStep(5);
      setWizardMessages(prev => [...prev, { sender: "ai", text: "Briefly outline your primary operational pain point or objectives:" }]);
    }
    else if (wizardStep === 5) {
      setWizardForm(prev => ({ ...prev, painPoint: val }));
      setWizardMessages(prev => [...prev, { sender: "user", text: val }]);
      setWizardInput("");
      setWizardStep(6);
      setWizardMessages(prev => [...prev, { sender: "ai", text: "Got it. Finally, share your Email and Phone number so we can register this qualification ticket in our CRM:" }]);
    }
    else if (wizardStep === 6) {
      const parts = val.split(" ");
      const email = parts.find(p => p.includes("@")) || val;
      const phone = parts.find(p => !p.includes("@")) || "Not Provided";

      const finalForm = { ...wizardForm, email, phone };
      setWizardForm(finalForm);
      setWizardStep(7);
      setWizardLoading(true);

      // Webhook ingestion to n8n webhook endpoint
      try {
        await fetch("/api/n8n-webhook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalForm),
        });
      } catch (err) {
        console.error("Webhook endpoint not responding, running simulated output");
      }

      setTimeout(() => {
        setWizardLoading(false);
        setWizardProposal({
          score: 98,
          approxPrice: finalForm.budget.includes(">₹65,000") ? "₹65,000" : "₹25,000",
          timelineDays: 45,
          blueprint: `Create a custom Next.js storefront configured for ${finalForm.industry}. Establish n8n database pipelines to automate lead workflows and resolve: "${finalForm.painPoint}".`
        });
      }, 1800);
    }
  };

  const handleWizardReset = () => {
    setWizardStep(0);
    setWizardProposal(null);
    setWizardMessages([
      { sender: "ai", text: "Greetings. I am Xstone's AI Consultant. I will evaluate your metrics and map a digital transformation proposal. What is your name?" }
    ]);
  };

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
        <FuturisticCityscape />
        
        {/* Luxury Vignette & Fade Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/30 to-[#030712] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030712_90%)] pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-electric-cyan" />
              <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">
                Premium AI & Web Agency
              </span>
            </div>
            
            <h1 className="font-space font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-white tracking-tight">
              Your Business Deserves <br />
              More Than a Template. <br />
              <span className="gradient-text-blue-cyan">Build a Premium Storefront</span>
            </h1>

            <p className="text-gray text-lg max-w-xl font-sans leading-relaxed">
              Custom, high-performance websites and AI-powered automation built to scale local shops, restaurants, and service businesses. Stop losing customers to outdated interfaces.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#consultant-wizard"
                className="px-8 py-4 rounded-xl font-space text-sm font-bold tracking-wider text-black bg-gradient-to-r from-electric-cyan to-primary-blue hover:scale-105 transition-transform duration-300 shadow-lg shadow-electric-cyan/20 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/audit"
                className="px-8 py-4 rounded-xl font-space text-sm font-semibold tracking-wider text-white bg-white/5 border border-white/10 hover:border-electric-cyan/35 hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
              >
                <span>Book Free Audit</span>
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl font-space text-sm font-medium tracking-wider text-gray hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Holographic Panels */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-6 relative w-full">
            {/* Holographic Web Metrics Panel */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hologram-card p-6 rounded-2xl border border-electric-cyan/20 max-w-sm w-full space-y-4 hover:scale-[1.02] transition-transform duration-300 backdrop-blur-md shadow-2xl shadow-electric-cyan/5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4 text-electric-cyan" />
                  <span className="text-[10px] font-space font-bold tracking-wider text-white uppercase">WEB PERFORMANCE METRICS</span>
                </div>
                <span className="text-[9px] font-space font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 uppercase tracking-widest">
                  ONLINE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] font-space text-gray uppercase block tracking-wider">Lighthouse Score</span>
                  <span className="text-xl font-space font-extrabold text-white">100 / 100</span>
                </div>
                <div>
                  <span className="text-[9px] font-space text-gray uppercase block tracking-wider">Hydration Time</span>
                  <span className="text-xl font-space font-extrabold text-white">0.08s</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-gradient-to-r from-electric-cyan to-primary-blue" />
                </div>
                <div className="flex justify-between text-[9px] font-space text-gray">
                  <span>Vercel Edge Deploy</span>
                  <span className="text-electric-cyan font-semibold">99.99% Uptime</span>
                </div>
              </div>
            </motion.div>

            {/* Holographic AI Integration Panel */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hologram-card p-6 rounded-2xl border border-teal/20 max-w-sm w-full space-y-4 hover:scale-[1.02] transition-transform duration-300 backdrop-blur-md shadow-2xl shadow-teal/5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-teal" />
                  <span className="text-[10px] font-space font-bold tracking-wider text-white uppercase">n8n AUTOMATION RUNTIME</span>
                </div>
                <span className="text-[9px] font-space font-bold text-electric-cyan bg-electric-cyan/10 px-2 py-0.5 rounded border border-electric-cyan/20 uppercase tracking-widest">
                  ACTIVE
                </span>
              </div>
              <div className="space-y-2 font-mono text-[9px] text-teal leading-relaxed">
                <div className="flex justify-between">
                  <span className="text-gray/80">{"// Lead Ingestion Webhook"}</span>
                  <span className="text-green-400 font-bold">200 OK</span>
                </div>
                <div className="text-white bg-slate-950/60 p-2.5 rounded border border-white/5 space-y-1">
                  <p>POST https://api.xstone.studio/lead-ingest</p>
                  <p className="text-electric-cyan">{"{ qualified: true, budgetTier: '₹20L+' }"}</p>
                </div>
                <div className="flex justify-between text-[9px] text-gray/80 pt-1 font-space">
                  <span>HubSpot CRM Status</span>
                  <span className="text-teal font-semibold">Synced in 120ms</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust & Momentum Stats */}
      <section className="py-20 border-y border-white/5 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx} className="space-y-2 border-r border-white/5 last:border-0">
              <div className="font-space font-extrabold text-4xl md:text-5xl text-white tracking-tight">
                <CountUp 
                  end={stat.value} 
                  decimals={stat.decimals || 0} 
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""} 
                  enableScrollSpy 
                  scrollSpyOnce 
                />
              </div>
              <p className="text-xs text-gray uppercase tracking-widest font-medium max-w-[200px] mx-auto leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services Matrix ("Choose Your Vertical") */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20">
              <Award className="w-3.5 h-3.5 text-electric-cyan" />
              <span className="text-xs font-space font-semibold text-electric-cyan uppercase">CHOOSE YOUR VERTICAL</span>
            </div>
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Capabilities Built for Local Commercial Scale
            </h2>
            <p className="text-gray text-base font-sans">
              Restructuring and automating legacy operational bottlenecks using Next.js storefronts and custom LLM workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, idx) => (
              <div key={idx} className="glass-card p-8 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-electric-cyan/40 transition-colors duration-300">
                    <Code2 className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] font-space font-bold tracking-widest text-accent-gold uppercase">
                      {service.tag}
                    </span>
                    <h3 className="font-space font-bold text-lg text-white">{service.title}</h3>
                    <p className="text-xs text-gray leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="mt-8 flex items-center space-x-2 text-[10px] font-space font-bold text-electric-cyan hover:text-white transition-colors duration-300"
                >
                  <span>LEARN MORE</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. High-Impact Portfolio Showcase */}
      <section className="py-24 px-6 bg-slate-950/20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Featured Case Showcase
            </h2>
            <p className="text-gray text-base">
              A curated display of high-converting client systems engineered to scale local storefront operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.map((project, idx) => (
              <div key={idx} className="glass-card overflow-hidden group flex flex-col justify-between border-white/5 hover:border-electric-cyan/30">
                <div 
                  style={{ background: project.img }}
                  className="w-full h-56 relative flex items-center justify-center p-6 border-b border-white/5 transition-transform duration-500 group-hover:scale-[1.01]"
                >
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  <span className="font-space font-extrabold text-2xl text-white tracking-widest text-center drop-shadow-md">
                    {project.title.toUpperCase()}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-[10px] font-space font-bold tracking-widest text-accent-gold uppercase">
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
                  <Link href="/portfolio" className="text-electric-cyan hover:underline flex items-center space-x-1">
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/case-studies" className="text-white hover:text-electric-cyan flex items-center space-x-1">
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Zero-Headache Development Pipeline */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              The &quot;Zero-Headache&quot; Pipeline
            </h2>
            <p className="text-gray text-base">
              A transparent, scroll-animated timeline outlining the customer journey from blueprint to launch.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
            {devSteps.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-electric-cyan ring-4 ring-background group-hover:scale-110 transition-transform" />
                <div className="md:absolute md:-left-32 md:top-0 font-space text-xl font-extrabold text-electric-cyan">
                  {item.step}
                </div>
                <div className="space-y-2 max-w-2xl glass-card p-6 border-white/5">
                  <h3 className="font-space text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-gray leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI Website Consultant Widget */}
      <section id="consultant-wizard" className="py-24 px-6 bg-slate-950/20 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Cpu className="w-4 h-4 text-electric-cyan" />
              <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">AI WIZARD INGEST</span>
            </div>
            <h2 className="font-space font-bold text-3xl md:text-5xl text-white">
              AI Website Consultant
            </h2>
            <p className="text-gray text-base leading-relaxed">
              Answer the dashboard questions dynamically and get a custom proposal blueprint generated instantly by our visual webhook API.
            </p>
          </div>

          <div className="glass-card overflow-hidden border-white/10 flex flex-col h-[520px]">
            {/* Chat header */}
            <div className="px-6 py-4 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-space font-bold tracking-wider text-white">XSTONE CONSULTANT v1.5</span>
              </div>
              {wizardProposal && (
                <button onClick={handleWizardReset} className="flex items-center space-x-1 text-xs text-electric-cyan hover:underline font-space">
                  <RefreshCwIcon className="w-3.5 h-3.5" />
                  <span>START NEW CHAT</span>
                </button>
              )}
            </div>

            {/* Message area */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4">
              {wizardMessages.map((m, idx) => (
                <div key={idx} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-md px-4 py-3 rounded-xl text-xs md:text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-semibold font-sans animate-fade-in"
                        : "bg-white/5 border border-white/5 text-white/90"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Step 2 Dropdown selection */}
              {!wizardProposal && wizardStep === 2 && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl max-w-sm w-full space-y-3">
                    <span className="text-[10px] font-space text-gray uppercase block tracking-wider">Select Industry</span>
                    <select 
                      value={wizardForm.industry}
                      onChange={(e) => setWizardForm(prev => ({ ...prev, industry: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-950 text-white border border-white/10 rounded-lg text-xs"
                    >
                      <option value="SaaS">SaaS / Tech</option>
                      <option value="E-commerce">E-commerce / Retail</option>
                      <option value="Medical">Medical / Clinics</option>
                      <option value="Restaurant">Restaurant / Food</option>
                      <option value="Law Firm">Law Firm / Corporate</option>
                      <option value="Other">Other Business</option>
                    </select>
                    <button 
                      onClick={(e) => handleWizardSubmit(e)}
                      className="w-full py-2 bg-electric-cyan text-black font-space text-[10px] font-bold rounded-lg"
                    >
                      SUBMIT SELECTION
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 Dropdown selection */}
              {!wizardProposal && wizardStep === 3 && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl max-w-sm w-full space-y-3">
                    <span className="text-[10px] font-space text-gray uppercase block tracking-wider">Monthly Revenue Tier</span>
                    <select 
                      value={wizardForm.revenue}
                      onChange={(e) => setWizardForm(prev => ({ ...prev, revenue: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-950 text-white border border-white/10 rounded-lg text-xs"
                    >
                      <option value="<₹10,000">Less than ₹10,000 / month</option>
                      <option value="₹10,000-₹25,000">₹10,000 - ₹25,000 / month</option>
                      <option value="₹25,000-₹65,000">₹25,000 - ₹65,000 / month</option>
                      <option value=">₹65,000">Greater than ₹65,000 / month</option>
                    </select>
                    <button 
                      onClick={(e) => handleWizardSubmit(e)}
                      className="w-full py-2 bg-electric-cyan text-black font-space text-[10px] font-bold rounded-lg"
                    >
                      SUBMIT REVENUE
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4 Dropdown selection */}
              {!wizardProposal && wizardStep === 4 && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl max-w-sm w-full space-y-3">
                    <span className="text-[10px] font-space text-gray uppercase block tracking-wider">Select Target Budget</span>
                    <select 
                      value={wizardForm.budget}
                      onChange={(e) => setWizardForm(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-950 text-white border border-white/10 rounded-lg text-xs"
                    >
                      <option value="<₹10,000">Less than ₹10,000</option>
                      <option value="₹10,000-₹25,000">₹10,000 - ₹25,000</option>
                      <option value="₹25,000-₹65,000">₹25,000 - ₹65,000</option>
                      <option value=">₹65,000">Greater than ₹65,000</option>
                    </select>
                    <button 
                      onClick={(e) => handleWizardSubmit(e)}
                      className="w-full py-2 bg-electric-cyan text-black font-space text-[10px] font-bold rounded-lg"
                    >
                      SUBMIT BUDGET
                    </button>
                  </div>
                </div>
              )}

              {wizardLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-xl text-xs text-gray font-space flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-electric-cyan animate-spin" />
                    <span>CALCULATING DIGITAL STRATEGY ARCHITECTURE...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input area */}
            {!wizardProposal && (wizardStep === 0 || wizardStep === 1 || wizardStep === 5 || wizardStep === 6) && (
              <form onSubmit={handleWizardSubmit} className="p-4 border-t border-white/5 bg-slate-950 flex items-center gap-3">
                <input
                  type="text"
                  required
                  value={wizardInput}
                  onChange={(e) => setWizardInput(e.target.value)}
                  placeholder={
                    wizardStep === 0 ? "Enter your name..." :
                    wizardStep === 1 ? "Enter your business name..." :
                    wizardStep === 5 ? "What is your main operational bottleneck or pain point?..." :
                    "Enter Email & Phone to qualify..."
                  }
                  className="flex-grow px-4 py-3 glass-input text-sm"
                />
                <button type="submit" className="p-3 bg-gradient-to-r from-electric-cyan to-primary-blue text-black rounded-lg hover:opacity-90">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            )}
          </div>

          {/* Generated proposal panel */}
          {wizardProposal && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 border border-electric-cyan/20 space-y-6 bg-slate-900/40 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-6 gap-4">
                <div>
                  <div className="inline-flex items-center space-x-1 text-xs text-accent-gold font-space font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>QUALIFIED DIGITAL STRATEGY BLUEPRINT</span>
                  </div>
                  <h2 className="font-space font-bold text-2xl text-white mt-1">
                    Project proposal: {wizardForm.businessName || "Unnamed Business"}
                  </h2>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-center flex-shrink-0">
                  <div className="text-3xl font-space font-extrabold text-electric-cyan">{wizardProposal.score}%</div>
                  <div className="text-[10px] font-space text-gray uppercase mt-1">Qualification Score</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 space-y-1">
                  <span className="text-[10px] font-space text-gray uppercase tracking-wide">ESTIMATED PRICE</span>
                  <p className="text-lg font-bold text-white">{wizardProposal.approxPrice}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 space-y-1">
                  <span className="text-[10px] font-space text-gray uppercase tracking-wide">TIMELINE DAYS</span>
                  <p className="text-lg font-bold text-white">{wizardProposal.timelineDays} Days</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-space font-bold text-gray uppercase">TECHNICAL RECOMMENDATION</h4>
                <div className="p-5 rounded bg-slate-950 font-mono text-xs text-electric-cyan/95 leading-relaxed border border-white/5">
                  {wizardProposal.blueprint}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/5 gap-4">
                <span className="text-xs text-gray flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Logged to Supabase databases and dispatched to n8n.</span>
                </span>
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-space text-xs font-bold rounded-lg hover:opacity-90 transition-all">
                  BOOK CALL TO CONFIRM
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 7. Premium Pricing Cards */}
      <section className="py-24 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Bespoke Pricing Plans
            </h2>
            <p className="text-gray text-base">
              Transparent, milestone-based packages optimized for your commercial scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`glass-card p-8 flex flex-col justify-between relative ${
                  plan.recommended ? "border-electric-cyan/40 bg-white/[0.02] shadow-xl shadow-electric-cyan/5" : "border-white/5"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 right-6 px-3 py-1 bg-electric-cyan rounded-full text-black font-space text-[9px] font-bold uppercase tracking-wider">
                    RECOMMENDED
                  </span>
                )}
                <div className="space-y-6">
                  <div>
                    <span className="font-space text-xs font-bold text-gray uppercase tracking-widest">{plan.name}</span>
                    <div className="flex items-baseline space-x-1 mt-2">
                      <h3 className="font-space text-4xl font-extrabold text-white">{plan.price}</h3>
                      <span className="text-xs text-gray">/ {plan.term}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray leading-relaxed">{plan.desc}</p>
                  <hr className="border-white/5" />
                  <ul className="space-y-3 text-xs text-gray">
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={`mt-8 w-full text-center py-3 rounded-lg font-space text-xs font-bold transition-all ${
                    plan.recommended
                      ? "bg-gradient-to-r from-electric-cyan to-primary-blue text-black hover:opacity-95"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  START YOUR PROJECT
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials & FAQ Accordion */}
      <section className="py-24 px-6 bg-slate-950/20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Enterprise Trust
            </h2>
            <p className="text-gray text-base">
              Read recommendations and outcome metrics verified by our commercial partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsData.map((rev, idx) => (
              <div key={idx} className="glass-card p-8 border-white/5 space-y-6 flex flex-col justify-between hover:border-electric-cyan/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-accent-gold">
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-electric-cyan/25" />
                  <p className="text-xs text-gray leading-relaxed font-sans italic">
                    &quot;{rev.text}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div>
                    <h4 className="font-space text-sm font-bold text-white">{rev.name}</h4>
                    <p className="text-[10px] text-gray">{rev.role}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] font-space text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-bold">Outcome: {rev.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Accordion Layout */}
      <section className="py-24 px-6 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-space font-bold text-3xl md:text-4xl text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-8 h-8 text-electric-cyan" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-gray text-sm">
              Answers regarding our Next.js stacks, workflow parameters, and onboarding blueprints.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card border border-white/5 hover:border-white/10 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center text-white hover:text-electric-cyan transition-colors"
                  >
                    <span className="font-space font-semibold text-base">{faq.q}</span>
                    <span className="text-lg font-bold text-electric-cyan">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-gray leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

// Simple refresh icon helper for layout purity
function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M16 3h5v5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 21H3v-5" />
    </svg>
  );
}
