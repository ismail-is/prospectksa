"use client";
// @ts-nocheck

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Wrench,
  Package,
  ChevronDown,
  Phone,
  Weight,
  Zap,
  AlertTriangle,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  specs: string;
  badge: string;
  image: string;
  accent: string;
}

interface SafetyStandard {
  code: string;
  label: string;
  desc: string;
}

interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

interface FormData {
  name: string;
  company: string;
  phone: string;
  productType: string;
  loadCapacity: string;
  quantity: string;
  details: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const productCategories: ProductCategory[] = [
  {
    id: "hydraulic-jacks",
    title: "Hydraulic Jacks",
    subtitle: "Heavy-Duty Lifting Systems",
    desc: "Industrial-grade hydraulic jacks engineered for precise, safe lifting of heavy loads in construction, refinery, and plant maintenance environments. Designed to meet the rigorous demands of Saudi Aramco and SEC project sites.",
    features: [
      "Load capacities from 5T to 500T",
      "Precision hydraulic pressure controls",
      "Integrated safety overload protection valve",
      "Corrosion-resistant steel construction",
      "ISO 4413 hydraulic safety compliant",
    ],
    specs: "Hydraulic Jacks",
    badge: "5T – 500T",
    image: "/lifting/jack.jpg",
    accent: "brand-orange",
  },
  {
    id: "sling-belts",
    title: "Sling Belts & Rigging",
    subtitle: "Textile & Chain Lifting Solutions",
    desc: "Premium polyester and nylon flat web slings, round slings, and chain assemblies for safe and reliable load suspension. Color-coded capacity ratings for quick field identification and compliance with international rigging standards.",
    features: [
      "Polyester flat web slings – 1T to 10T WLL",
      "Round slings – up to 30T working load",
      "Grade 80 & Grade 100 alloy chain slings",
      "Color-coded for immediate capacity ID",
      "EN 1492-1 & ASME B30.9 certified",
    ],
    specs: "Sling Belts & Rigging",
    badge: "1T – 30T",
    image: "/lifting/shackle.jpg",
    accent: "brand-navy",
  },
  {
    id: "shackles-hooks",
    title: "Shackles & Hooks",
    subtitle: "Connection & Termination Hardware",
    desc: "Bow, dee and safety snap shackles plus swivel and eye hooks manufactured from alloy steel for maximum strength-to-weight performance. All items individually proof-tested and supplied with load-rated certificates.",
    features: [
      "Screw-pin & bolt-type bow shackles",
      "Safety hooks with positive locking latch",
      "Proof-tested at 2× working load limit",
      "Galvanised & stainless steel options",
      "ASME B30.26 hardware compliant",
    ],
    specs: "Shackles & Hooks",
    badge: "Certified",
    image: "/lifting/clamp.png",
    accent: "brand-orange",
  },
  {
    id: "chain-blocks",
    title: "Chain Blocks & Lever Hoists",
    subtitle: "Manual Lifting & Pulling Systems",
    desc: "Hand-operated chain blocks and lever hoists for vertical lifting and horizontal pulling in confined or remote locations without power supply. Compact design with hardened steel load chains for extended service life.",
    features: [
      "Chain blocks 0.5T to 20T capacity",
      "Lever hoists for precision positioning",
      "Hardened load chain, Grade 80",
      "360° swivel upper hook standard",
      "EN 13157 & ASME B30.16 compliant",
    ],
    specs: "Chain Blocks / Lever Hoists",
    badge: "0.5T – 20T",
    image: "/lifting/drum-lifter.png",
    accent: "brand-navy",
  },
  {
    id: "wire-ropes",
    title: "Wire Rope Assemblies",
    subtitle: "Steel Cable Lifting & Lashing",
    desc: "Galvanised and stainless steel wire rope slings, winch cables and lashing assemblies for cranes, offshore, marine and plant applications. Manufactured and tested in-house with individually serialised test certificates.",
    features: [
      "6×19 & 6×37 construction ropes",
      "Ferrule-secured and mechanical splice ends",
      "Breaking loads from 2T to 200T",
      "Lubricated core for internal corrosion protection",
      "BS EN 13414-1 wire rope sling standard",
    ],
    specs: "Wire Rope Slings",
    badge: "2T – 200T",
    image: "/lifting/wire-rope-hoist.png",
    accent: "brand-orange",
  },
  {
    id: "trolleys-beams",
    title: "Trolleys & Monorail Beams",
    subtitle: "Overhead Lifting Infrastructure",
    desc: "Push-type and motorised beam trolleys for I-beam and H-beam overhead crane systems, complete with adjustable span flanges. Supplied with installation kits and certificates of conformity for permanent workshop installations.",
    features: [
      "Push-travel and motorised models",
      "Adjustable flange span: 50–220mm",
      "Load ratings 0.5T to 10T",
      "Powder-coated corrosion-resistant body",
      "Compatible with universal I-beam sections",
    ],
    specs: "Trolleys & Monorail Beams",
    badge: "0.5T – 10T",
    image: "/lifting/magnet-lifter.png",
    accent: "brand-navy",
  },
];

const safetyStandards: SafetyStandard[] = [
  {
    code: "ASME B30",
    label: "Rigging Hardware",
    desc: "All shackles, hooks, and hardware conform to ASME B30 series standards for safe rigging.",
  },
  {
    code: "EN 1492",
    label: "Textile Slings",
    desc: "Flat web and round slings manufactured and tested to EN 1492-1 & EN 1492-2 European standards.",
  },
  {
    code: "ISO 4413",
    label: "Hydraulic Safety",
    desc: "Hydraulic jacks and systems comply with ISO 4413 general rules for hydraulic fluid power.",
  },
  {
    code: "LOLER 1998",
    label: "Lifting Operations",
    desc: "Equipment supplied compatible with LOLER lifting operations and lifting equipment regulations.",
  },
];

const galleryItems: GalleryItem[] = [
  {
    image: "/lifting/jack.jpg",
    title: "Hydraulic Jack 50T",
    category: "Hydraulic",
  },
  {
    image: "/lifting/shackle.jpg",
    title: "Polyester Round Slings",
    category: "Rigging",
  },
  {
    image: "/lifting/clamp.png",
    title: "Grade-80 Bow Shackle Set",
    category: "Hardware",
  },
  {
    image: "/lifting/drum-lifter.png",
    title: "5T Chain Block Hoist",
    category: "Chain Block",
  },
  {
    image: "/lifting/wire-rope-hoist.png",
    title: "Wire Rope Sling Assembly",
    category: "Wire Rope",
  },
  {
    image: "/lifting/magnet-lifter.png",
    title: "Beam Trolley Installation",
    category: "Overhead",
  },
  {
    image: "/lifting_hero.png",
    title: "Site Lifting Operations",
    category: "Operations",
  },
  {
    image: "/industrial_worker.png",
    title: "Certified Rigging Crew",
    category: "Workforce",
  },
];

const defaultFormData: FormData = {
  name: "",
  company: "",
  phone: "",
  productType: "Hydraulic Jacks",
  loadCapacity: "",
  quantity: "",
  details: "",
};

const gridCount: number[] = Array.from({ length: 6 }, (_v, k) => k);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function safeOpen(url: string): void {
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}

function safeEncode(text: string): string {
  if (typeof encodeURIComponent !== "undefined") {
    return encodeURIComponent(text);
  }
  return text;
}

function buildWhatsApp(msg: string): string {
  return `https://wa.me/966539370929?text=${safeEncode(msg)}`;
}

// ─── Framer variants ──────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function LiftingMaterialsPage() {
  const [formData, setFormData] = React.useState<FormData>(defaultFormData);
  const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [activeCategory, setActiveCategory] = React.useState<string>("hydraulic-jacks");

  function handleFieldChange(field: keyof FormData, value: string): void {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setLoading(true);
    const msg =
      `*New Lifting Materials Inquiry*\n` +
      `----------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Product Type:* ${formData.productType}\n` +
      `*Load Capacity Required:* ${formData.loadCapacity}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Project Details:* ${formData.details}`;
    const url = buildWhatsApp(msg);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      safeOpen(url);
      setFormData(defaultFormData);
    }, 1200);
  }

  function handleQuickEnquiry(productName: string): void {
    const msg =
      `*Quick Lifting Materials Inquiry*\n` +
      `----------------------------------\n` +
      `I am interested in:\n` +
      `*Product:* ${productName}\n\n` +
      `Please provide specifications, availability, and pricing.`;
    safeOpen(buildWhatsApp(msg));
  }

  function handleManualWhatsApp(): void {
    const msg =
      `*Lifting Materials Request*\n` +
      `----------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Product Type:* ${formData.productType}\n` +
      `*Load Capacity Required:* ${formData.loadCapacity}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Project Details:* ${formData.details}`;
    safeOpen(buildWhatsApp(msg));
  }

  const activeProduct = productCategories.find((p) => p.id === activeCategory) ?? productCategories[0];

  return (
    <main className="min-h-screen bg-brand-gray">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-brand-navy-dark overflow-hidden pt-36 pb-24">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/lifting_hero.png"
            alt="Quality Lifting Materials & Hydraulic Jacks Solutions"
            fill
            className="object-cover opacity-20 select-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/80 to-brand-navy-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-transparent to-brand-navy-dark/50" />
        </div>

        {/* Glow blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-orange/10 blur-[100px] pointer-events-none z-10" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-navy-light/30 blur-[120px] pointer-events-none z-10" />

        {/* Cyber grid */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] grid grid-cols-6 h-full w-full">
          {gridCount.map((i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="flex items-center justify-center gap-2 text-brand-orange font-bold tracking-widest text-xs uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
              IHTIMAL COMPANY FOR GENERAL CONTRACTING
            </span>

            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              Quality Lifting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                Materials
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-300 font-semibold">
                &amp; Hydraulic Jack Solutions
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              Discover top-quality lifting materials, including hydraulic jacks and sling belts for safe and efficient lifting solutions. Trusted by Saudi Aramco, SEC, and leading EPC contractors across the Kingdom.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
              {[
                { value: "500T", label: "Max Lifting Capacity" },
                { value: "6+", label: "Product Categories" },
                { value: "100%", label: "Certified & Tested" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-outfit font-extrabold text-2xl md:text-3xl text-brand-orange">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#products"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(255,101,0,0.4)] hover:shadow-[0_6px_25px_rgba(255,101,0,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Browse Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quote-form"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center flex items-center gap-2"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-gray translate-y-1/2 skew-y-1" />
      </section>

      {/* ── 2. INTRO / OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase block">
                // LIFTING MATERIALS DIVISION
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Safe &amp; Efficient Lifting Solutions for Every Industrial Application
              </h2>

              <div className="border-l-4 border-brand-orange pl-5 py-2">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  IHTIMAL Company supplies, inspects, and certifies a comprehensive range of lifting materials including hydraulic jacks, sling belts, chain blocks, wire rope assemblies, shackles, and overhead trolley systems for construction, refinery, and plant maintenance projects.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                All equipment is sourced from internationally accredited manufacturers, individually load-tested, and supplied with full conformity documentation to meet the requirements of Saudi Aramco GIs, SEC standards, and international rigging codes.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "All Products Load-Tested" },
                  { icon: CheckCircle2, label: "International Certifications" },
                  { icon: Package, label: "Full Product Range" },
                  { icon: Wrench, label: "Site Delivery Available" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-3 bg-brand-gray rounded-xl p-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-orange" />
                    </div>
                    <span className="text-xs font-bold text-brand-navy">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: image collage */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                  <Image
                    src="/lifting_hero.png"
                    alt="Lifting Materials Operations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] text-brand-orange font-bold uppercase tracking-widest block">Operations</span>
                    <span className="text-white text-xs font-bold">Site Lifting</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-brand-orange rounded-3xl p-6 text-white flex flex-col justify-center items-center text-center shadow-lg">
                    <Weight className="w-8 h-8 mb-2 opacity-80" />
                    <span className="font-outfit font-extrabold text-3xl">500T</span>
                    <span className="text-[9px] uppercase tracking-wider text-orange-200 mt-1">Max Capacity</span>
                  </div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                      src="/industrial_worker.png"
                      alt="Certified Rigging Crew"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[9px] text-brand-orange font-bold uppercase tracking-widest block">Workforce</span>
                      <span className="text-white text-[10px] font-bold">Certified Riggers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-navy rounded-full flex flex-col items-center justify-center text-center shadow-xl border-4 border-white">
                <span className="text-brand-orange font-extrabold text-lg font-outfit">100%</span>
                <span className="text-[7px] text-slate-400 uppercase tracking-wide leading-tight">NACE<br />Inspected</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. SAFETY STANDARDS BANNER ──────────────────────────────────────── */}
      <section className="py-16 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-brand-orange/8 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-2 block">
              // COMPLIANCE & CERTIFICATION
            </span>
            <h2 className="font-outfit text-2xl md:text-3xl font-bold text-white">
              All Lifting Equipment Meets International Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyStandards.map((std: SafetyStandard, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-orange/40 transition-all group">
                <div className="font-outfit text-2xl font-extrabold text-brand-orange mb-1 group-hover:scale-105 transition-transform inline-block">
                  {std.code}
                </div>
                <div className="text-white font-bold text-sm mb-2">{std.label}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTS – INTERACTIVE SHOWCASE ──────────────────────────────── */}
      <section id="products" className="py-24 bg-brand-gray relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // PRODUCT CATALOGUE
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Comprehensive Lifting Materials Range
            </h2>
            <p className="text-slate-500 mt-4 text-sm leading-relaxed">
              From individual hydraulic jacks to complete rigging sets, we supply certified lifting materials for every industrial lifting requirement across Saudi Arabia.
            </p>
          </motion.div>

          {/* Tab Navigator */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {productCategories.map((cat: ProductCategory) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-brand-orange text-white shadow-[0_4px_12px_rgba(255,101,0,0.35)]"
                    : "bg-white text-slate-600 hover:text-brand-orange border border-gray-200 hover:border-brand-orange/30"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active Product Detail Panel */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 lg:grid-cols-2 mb-16"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px] bg-slate-900">
              <Image
                src={activeProduct.image}
                alt={activeProduct.title}
                fill
                className="object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = "/lifting_hero.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {activeProduct.badge}
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="text-[9px] text-brand-orange font-bold uppercase tracking-widest block">{activeProduct.specs}</span>
                <h3 className="font-outfit text-2xl font-bold text-white">{activeProduct.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-2">
                  // {activeProduct.subtitle.toUpperCase()}
                </span>
                <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-4">{activeProduct.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{activeProduct.desc}</p>

                <ul className="space-y-2.5 mb-8">
                  {activeProduct.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                <button
                  onClick={() => handleQuickEnquiry(activeProduct.title)}
                  className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_12px_rgba(255,101,0,0.3)]"
                >
                  Quick Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#quote-form"
                  className="flex-1 border border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white font-bold py-3 px-5 rounded-xl text-xs transition-all flex items-center justify-center gap-2"
                >
                  Full Quote Request
                </a>
              </div>
            </div>
          </motion.div>

          {/* All Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {productCategories.map((product: ProductCategory, idx: number) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                onClick={() => setActiveCategory(product.id)}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer group hover:shadow-lg hover:-translate-y-1 ${
                  activeCategory === product.id
                    ? "border-brand-orange/40 shadow-md ring-1 ring-brand-orange/20"
                    : "border-gray-100"
                }`}
              >
                {/* Mini image */}
                <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "/lifting_hero.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-orange/90 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[9px] font-mono text-brand-orange tracking-widest uppercase font-bold block mb-1">
                    {product.specs}
                  </span>
                  <h3 className="font-outfit text-base font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">{product.subtitle}</span>
                    <button
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        handleQuickEnquiry(product.title);
                      }}
                      className="w-7 h-7 rounded-full bg-brand-orange/10 flex items-center justify-center hover:bg-brand-orange hover:text-white text-brand-orange transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase block mb-3">
                // WHY IHTIMAL COMPANY
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-6">
                Your Trusted Partner for Certified Lifting Equipment
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: Shield,
                    title: "All Equipment Proof-Tested",
                    desc: "Every piece of lifting equipment is individually tested at 2× WLL and supplied with a serialised load test certificate for site compliance.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "International Certifications",
                    desc: "Products comply with ASME B30, EN 1492, ISO 4413, and LOLER regulations — accepted on Saudi Aramco, SEC, and SABIC project sites.",
                  },
                  {
                    icon: Zap,
                    title: "Fast KSA Delivery",
                    desc: "Warehoused stock in the Eastern Province for rapid dispatch to Jubail, Yanbu, Dammam, Riyadh, and major project sites across the Kingdom.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Safety-First Culture",
                    desc: "Our rigging specialists provide equipment selection guidance and on-site inspection support to prevent accidents and ensure compliance.",
                  },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-gray transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy text-sm mb-1">{title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: stats grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: "500T", label: "Maximum Lifting Capacity", color: "bg-brand-orange text-white" },
                { value: "6+", label: "Product Categories", color: "bg-brand-navy text-white" },
                { value: "100%", label: "Load-Tested Equipment", color: "bg-brand-navy text-white" },
                { value: "2×WLL", label: "Proof Test Standard", color: "bg-brand-orange text-white" },
                { value: "KSA", label: "Wide Site Coverage", color: "bg-brand-gray border border-gray-200 text-brand-navy" },
                { value: "24H", label: "Quote Response Time", color: "bg-brand-gray border border-gray-200 text-brand-navy" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`${stat.color} rounded-3xl p-6 flex flex-col justify-center shadow-sm`}
                >
                  <span className="font-outfit font-extrabold text-3xl md:text-4xl block mb-1">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-75">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 6. PHOTO GALLERY ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-gray relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // PRODUCT GALLERY
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy">
              Lifting Materials in Action
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {galleryItems.map((item: GalleryItem, idx: number) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-slate-900 cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = "/lifting_hero.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[9px] font-bold text-brand-orange tracking-widest uppercase">{item.category}</span>
                  <h4 className="font-outfit text-xs font-bold text-white leading-snug">{item.title}</h4>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-0 transition-opacity" />
                <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity">
                  <span className="text-[8px] font-bold text-brand-orange tracking-widest uppercase block">{item.category}</span>
                  <span className="text-white text-[10px] font-bold">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. QUOTE FORM ────────────────────────────────────────────────────── */}
      <section id="quote-form" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-gray-100">

            {/* Left info panel */}
            <div className="lg:col-span-5 bg-brand-navy text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                <Image src="/lifting_hero.png" alt="Lifting Materials" fill className="object-cover" />
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-orange/15 blur-[70px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-brand-orange/10 blur-[50px]" />

              <div className="relative z-10 space-y-5">
                <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase block">// SALES DESK</span>
                <h3 className="font-outfit text-2xl md:text-3xl font-bold leading-tight">
                  Request Lifting Equipment Quote
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Provide your load capacity requirements, quantity, and project location. Our lifting specialists will respond with availability, lead times, and competitive pricing within 24 hours.
                </p>
              </div>

              <div className="relative z-10 space-y-5 mt-10">
                {[
                  { icon: Shield, title: "All Items Certified", desc: "Load-test certificates provided with every item" },
                  { icon: Package, title: "Full Stock Range", desc: "Jacks, slings, shackles, chains, wire ropes & more" },
                  { icon: Wrench, title: "Site Delivery KSA", desc: "Eastern Province warehouse, fast dispatch" },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{title}</h4>
                      <p className="text-[10px] text-slate-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Or Call Directly</p>
                <a href="tel:+966539370929" className="text-brand-orange font-bold text-xl hover:underline transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +966 53 937 0929
                </a>
              </div>
            </div>

            {/* Right form panel */}
            <div className="lg:col-span-7 p-8 md:p-10 bg-white">
              <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-1">Lifting Materials Inquiry</h3>
              <p className="text-slate-500 text-xs mb-8">Request hydraulic jacks, slings, shackles, or complete rigging sets.</p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-gray border border-brand-orange/20 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-outfit font-bold text-xl text-brand-navy">Redirecting to WhatsApp...</h4>
                  <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                    Your lifting materials inquiry has been compiled. If WhatsApp did not open, click below to connect manually.
                  </p>
                  <button
                    onClick={handleManualWhatsApp}
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-8 rounded-xl text-xs transition-all w-full cursor-pointer"
                  >
                    Open WhatsApp Manually
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="lm-name" className="text-[10px] font-bold text-slate-400 uppercase">Your Name</label>
                      <input
                        id="lm-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange("name", e.currentTarget.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lm-company" className="text-[10px] font-bold text-slate-400 uppercase">Company Name</label>
                      <input
                        id="lm-company"
                        type="text"
                        required
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange("company", e.currentTarget.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="lm-phone" className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                      <input
                        id="lm-phone"
                        type="tel"
                        required
                        placeholder="+966 50 000 0000"
                        value={formData.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange("phone", e.currentTarget.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lm-product" className="text-[10px] font-bold text-slate-400 uppercase">Product Type</label>
                      <div className="relative">
                        <select
                          id="lm-product"
                          required
                          value={formData.productType}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFieldChange("productType", e.currentTarget.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="Hydraulic Jacks">Hydraulic Jacks</option>
                          <option value="Sling Belts & Rigging">Sling Belts &amp; Rigging</option>
                          <option value="Shackles & Hooks">Shackles &amp; Hooks</option>
                          <option value="Chain Blocks & Lever Hoists">Chain Blocks &amp; Lever Hoists</option>
                          <option value="Wire Rope Assemblies">Wire Rope Assemblies</option>
                          <option value="Trolleys & Monorail Beams">Trolleys &amp; Monorail Beams</option>
                          <option value="Complete Rigging Set">Complete Rigging Set</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="lm-capacity" className="text-[10px] font-bold text-slate-400 uppercase">Load Capacity Required</label>
                      <input
                        id="lm-capacity"
                        type="text"
                        required
                        placeholder="e.g. 10T, 50T, 200T"
                        value={formData.loadCapacity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange("loadCapacity", e.currentTarget.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lm-qty" className="text-[10px] font-bold text-slate-400 uppercase">Quantity Required</label>
                      <input
                        id="lm-qty"
                        type="text"
                        required
                        placeholder="e.g. 2 units, 10 slings"
                        value={formData.quantity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange("quantity", e.currentTarget.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lm-details" className="text-[10px] font-bold text-slate-400 uppercase">Project Details &amp; Delivery Location</label>
                    <textarea
                      id="lm-details"
                      rows={3}
                      placeholder="Describe your lifting application, site location, delivery requirements, or any special specifications..."
                      value={formData.details}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFieldChange("details", e.currentTarget.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-all shadow-[0_4px_12px_rgba(255,101,0,0.3)] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Submit Inquiry via WhatsApp"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
