"use client";
// @ts-nocheck

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Paintbrush, 
  ShieldAlert, 
  Activity, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Shield, 
  Flame, 
  Layers, 
  Wrench,
  Search,
  ChevronDown,
  Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

// 4 Major Corrosion Threats with original downloaded images!
const corrosionThreats = [
  {
    title: "General Corrosion",
    desc: "The gradual destruction of pure metals by the action of air, moisture, or a chemical (such as an acid) on their surface.",
    image: "/blasting/getty_corrosion.jpg"
  },
  {
    title: "Pitting Corrosion",
    desc: "A localized form of corrosion by which cavities or “holes” are produced in the material.",
    image: "/blasting/pitting.png"
  },
  {
    title: "Stress Corrosion",
    desc: "A type of environmentally-assisted cracking or the formation of cracks caused by various factors combined with the environment surrounding the pipeline. It occurs as a result of a combination between corrosion and tensile stress.",
    image: "/blasting/stress_corrosion.jpg"
  },
  {
    title: "Microbiological Corrosion",
    desc: "It occurs due to the presence of sulfate-reducing bacteria. They convert sulfate in the soil to sulfide, which attacks steel, causing severe pits.",
    image: "/blasting/maxres_blasting.jpg"
  }
];

// Coating Methods Portfolio
const coatingMethods = [
  {
    title: "Tape Wrapping",
    desc: "High-integrity multi-layer cold-applied polymeric tapes providing instant anti-corrosion barrier protection for buried pipeline networks.",
    spec: "Tape Wrapping"
  },
  {
    title: "Liquid Coatings",
    desc: "Advanced epoxies, polyurethanes, and chemical barriers applied in controlled shop environments or field welds.",
    spec: "All types of Liquid coatings"
  },
  {
    title: "Concrete Weight Coating",
    desc: "Heavy-duty concrete wrapping supplying negative buoyancy for marine lines and mechanical protection for rocky soil crossings.",
    spec: "Concrete coating"
  },
  {
    title: "Structural Coating",
    desc: "High-durability protective topcoats preventing atmospheric degradation on structural steel grids, pipe racks, and refinery platforms.",
    spec: "Structural coating"
  },
  {
    title: "Tank Internal & External Linings",
    desc: "Chemical-resistant chemical tank linings preventing internal product contamination and external atmospheric rust failures.",
    spec: "Tanks coating internal & external"
  },
  {
    title: "Special Coatings",
    desc: "High-temperature coatings, specialized linings, and fireproofing materials tailored for custom refinery specifications.",
    spec: "Special type of coating"
  }
];

// Gallery portfolio items from the live Godaddy site
const galleryItems = [
  { image: "/blasting/corrocoat.jpg", title: "Industrial Coating Shop", category: "Shop Work" },
  { image: "/blasting/abrasive_safety.jpg", title: "Abrasive Blasting Setup", category: "Surface Prep" },
  { image: "/blasting/coating_wrapping.png", title: "Pipeline Tape Wrapping Specs", category: "Wrapping" },
  { image: "/blasting/getty_corrosion.jpg", title: "General Steel Corrosion Analysis", category: "Corrosion" },
  { image: "/blasting/pitting.png", title: "Pitting Cavity Inspections", category: "QC Inspection" },
  { image: "/blasting/stress_corrosion.jpg", title: "Stress Corrosion Cracking Lab", category: "QC Inspection" },
  { image: "/blasting/maxres_blasting.jpg", title: "Microbiological Sulfide Damage", category: "Corrosion" },
  { image: "/blasting/maxres_blasting_2.jpg", title: "Segmented Charge Blasting Layout", category: "Blasting" }
];

export default function BlastingCoatingPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    serviceType: "Shop Blasting & Coating",
    coatingType: "",
    projectScale: "Small",
    details: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedMessage = `*New Blasting & Coating Service Request*
----------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Scope:* ${formData.serviceType}
*Coating System:* ${formData.coatingType}
*Project Scale:* ${formData.projectScale}
*Specific Project Details:* ${formData.details}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/966539370929?text=${encodedMessage}`;

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        company: "",
        phone: "",
        serviceType: "Shop Blasting & Coating",
        coatingType: "",
        projectScale: "Small",
        details: ""
      });
    }, 1200);
  };

  const handleQuickEnquiry = (coatingName: string) => {
    const message = `*Quick Blasting & Coating Inquiry via Website*
----------------------------------
I am interested in requesting details/pricing for the following system:
*System Name:* ${coatingName}

Please provide specifications, application procedures, and quotes.`;
    window.open(`https://wa.me/966539370929?text=${encodeURIComponent(message)}`, "_blank");
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-brand-gray">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-brand-navy-dark overflow-hidden pt-36 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blasting_hero.png"
            alt="Industrial Blasting & Coating Operations"
            fill
            className="object-cover opacity-25 select-none animate-subtle-zoom"
            priority
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-transparent to-brand-navy-dark/30" />
        </div>

        {/* Spotlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-brand-orange/15 blur-[90px] pointer-events-none z-10 animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-navy-light/40 blur-[120px] pointer-events-none z-10" />

        {/* Cyber Grid Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] grid grid-cols-6 h-full w-full">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="flex items-center justify-center gap-2 text-brand-orange font-bold tracking-widest text-xs uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
              IHTIMAL COMPANY FOR GENERAL CONTRACTING
            </span>
            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Abrasive Blasting & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                Pipeline Coatings
              </span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              All types of industrial and pipeline Coatings in Maintenance and new construction. Such as Tape Wrapping, All types of Liquid coatings, Concrete coating, structural coating, Tanks coating internal and external, Special type of coating etc.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#overview"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(255,101,0,0.4)] hover:shadow-[0_6px_25px_rgba(255,101,0,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Explore Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quote-form"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center"
              >
                Request Coating Quote
              </a>
            </div>
          </motion.div>
        </div>

        {/* Diagonal Angle Split */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-gray translate-y-1/2 skew-y-1" />
      </section>

      {/* 2. METHOD STATEMENT & METHOD OVERVIEW */}
      <section id="overview" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Overview content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase block">
                // METHOD STATEMENT
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Refinery & Plant Blasting Method Statement
              </h2>
              
              <div className="border-l-4 border-brand-orange pl-5 py-2">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  This Method Statement is described to carry out abrasive blasting and coating works in shop and touch-up/repair works of weld joints in the field for Piping at Buildings, plants and refinery.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Our operations guarantee high-integrity surface preparations and professional applications. We support industrial plants, refinery setups, and building pipe networks with certified quality controls and safety procedures.
              </p>

              {/* Stats Counters Grid */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <span className="font-outfit font-extrabold text-3xl md:text-4xl text-brand-orange block">SSPC</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SP-10 Cleanliness</span>
                </div>
                <div>
                  <span className="font-outfit font-extrabold text-3xl md:text-4xl text-brand-navy block">NACE</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Level III Certified</span>
                </div>
                <div>
                  <span className="font-outfit font-extrabold text-3xl md:text-4xl text-brand-navy block">ZERO</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Corrosion Failures</span>
                </div>
              </div>
            </div>

            {/* Right side: Image collage showing actual blasting worker photos */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-brand-orange/5 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-navy-light/5 rounded-3xl -z-10" />

              <div className="grid grid-cols-12 gap-4 w-full">
                
                {/* Image 1: corrocoat */}
                <div className="col-span-8 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/blasting/corrocoat.jpg"
                    alt="Prospect Coating Shop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Grid gap filling decorative element */}
                <div className="col-span-4 bg-brand-orange/95 rounded-2xl flex flex-col justify-center items-center text-center p-4 text-white shadow-inner">
                  <span className="text-xs font-bold uppercase tracking-widest block">NACE</span>
                  <span className="text-xl font-bold font-outfit mt-1">100%</span>
                  <span className="text-[9px] uppercase tracking-wider text-orange-200 mt-1">Inspected</span>
                </div>

                {/* Image 2: abrasive_safety */}
                <div className="col-span-12 relative aspect-[2/1] rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/blasting/abrasive_safety.jpg"
                    alt="Prospect Abrasive Blasting Safety"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 hover:bg-transparent transition-colors duration-300" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORROSION THREAT MATRIX (DEPLOYS THE EXACT 4 CORROSION THREATS & IMAGES) */}
      <section className="py-24 bg-brand-gray relative overflow-hidden">
        {/* Soft Background Radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // UNDERGROUND PIPELINE RISK
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Anticipated Underground Corrosion Threats
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm max-w-3xl mx-auto">
              When a pipe has to be buried underground, we have to take extra care to protect its external surface. This is mainly due to the corrosive nature of the soil. The soil can be soft mud, sand, rocks, moisture, minerals, salt water, and so on. In this environment, the steel pipes will undergo severe corrosion. Some common types of corrosion anticipated in underground corrosive environments are provided below:
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {corrosionThreats.map((threat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-lg hover:border-brand-orange/30 border border-gray-100 transition-all duration-300 flex flex-col group"
              >
                {/* Image Illustration */}
                <div className="relative aspect-[2/1] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={threat.image}
                    alt={threat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                {/* Description */}
                <div className="p-8">
                  <h3 className="font-outfit text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {threat.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {threat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Protective solution summary */}
          <div className="max-w-3xl mx-auto text-center mt-12 bg-white/75 border border-white/20 p-6 rounded-2xl glass shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed font-semibold">
              To prevent corrosion, in underground pipes/pipelines, we use a coating. The coating is a barrier to protect steel from the environment. This is supplemented by a Cathodic Protection system in most cases.
            </p>
          </div>

        </div>
      </section>

      {/* 4. PROCESSES DETAILED SECTION: BLASTING OPERATIONS & CHARGE TECH */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Abrasive Blasting */}
            <div className="bg-brand-gray rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-3">// SURFACE PREPARATION</span>
                <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-4">Abrasive Blasting Operations</h3>
                
                {/* Image */}
                <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-gray-200">
                  <Image
                    src="/blasting/abrasive_safety.jpg"
                    alt="Abrasive Blasting Operations"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Abrades surfaces of metal or hard-composition objects to remove adhering scale, sand, paint, grease, tar, rust, and dirt, and to impart specified finish, using abrasive-blasting equipment: Shovels or pours abrasives, such as sand, grit, or shot of specified grade into machine hopper.
                </p>
              </div>
              <ul className="space-y-2 border-t border-gray-200/60 pt-6">
                {["SSPC SP-10 (Near-White Metal) Standard", "Removes rust, sand, grease, scale, and dirt", "Creates anchor profile for liquid coatings"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Segmented Charge Blasting */}
            <div className="bg-brand-gray rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-3">// BLASTHOLE TECHNOLOGY</span>
                <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-4">Segmented Charge Blasting</h3>

                {/* Image */}
                <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-gray-200">
                  <Image
                    src="/blasting/maxres_blasting_2.jpg"
                    alt="Segmented Charge Blasting Layout"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-semibold">
                  Principle and method of blasthole charge structure design:
                </p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  The use of segmented charge technology for blasting has become a very mature rock fragmentation technology. In this technology, the air gap is introduced into the explosive column by segmented charge, which is used as a common method to optimize rock fragmentation under a given charge length.
                </p>
              </div>
              <ul className="space-y-2 border-t border-gray-200/60 pt-6">
                {["Optimized explosive shockwave grids", "Reduced explosive volume requirement", "Excellent rock fragmentation in heavy trenching"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INDUSTRIAL COATINGS PORTFOLIO */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        {/* Soft backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay">
          <Image
            src="/blasting/coating_wrapping.png"
            alt="Refinery Pipeline Wrapping"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // COATING PORTFOLIO
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold">
              Industrial Coating Systems Applied
            </h2>
            <p className="text-slate-400 mt-3 text-sm leading-relaxed">
              Further, we will see some common types of coating methods that are vastly in use for underground pipes across industries:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coatingMethods.map((method, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 hover:border-brand-orange/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group">
                <div>
                  <h3 className="font-outfit text-lg font-bold mb-2 group-hover:text-brand-orange transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {method.desc}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-brand-orange tracking-widest uppercase font-bold">{method.spec}</span>
                  <button
                    onClick={() => handleQuickEnquiry(method.title)}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PHOTO GALLERY SECTION (INTEGRATING ALL DOWNLOADED ASSETS) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="flex items-center justify-center gap-2 text-brand-orange font-bold tracking-widest text-xs uppercase mb-3">
            <ImageIcon className="w-4 h-4" />
            PHOTO GALLERY
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy mb-12">
            Blasting & Coating Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xs border border-gray-100 bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-left opacity-90 transition-opacity duration-300">
                  <span className="text-[9px] font-bold text-brand-orange tracking-widest uppercase">{item.category}</span>
                  <h4 className="font-outfit text-sm font-bold mt-1 text-white leading-snug">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INQUIRY FORM SECTION */}
      <section id="quote-form" className="py-24 relative overflow-hidden bg-brand-gray border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 border border-white/20">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-brand-navy text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Background refinery */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-overlay">
                <Image
                  src="/blasting_hero.png"
                  alt="Abrasive Blasting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-brand-orange/15 blur-[60px]" />
              
              <div className="relative z-10 space-y-6">
                <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase">
                  // ESTIMATING DESK
                </span>
                <h3 className="font-outfit text-2xl md:text-3xl font-bold leading-tight">
                  Protect Your Infrastructure
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Submit details of your pipeline diameters, soil conditions, or steel surface areas. Our coating engineers will evaluate specs and respond with quotes within 2 hours.
                </p>
              </div>

              <div className="relative z-10 mt-12 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">NACE Level III Inspected</h4>
                    <p className="text-[10px] text-slate-400">All coating profiles checked with micrometers and holiday testers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Refinery Site Access</h4>
                    <p className="text-[10px] text-slate-400">Field blast crews cleared for plant shutdowns & weld wraps</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Or Call Directly</p>
                <a href="tel:+966539370929" className="text-brand-orange font-bold text-lg hover:underline transition-all block mt-1">
                  +966 53 937 0929
                </a>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7 p-8 md:p-10 bg-white">
              <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-2">
                Coating Quote Request
              </h3>
              <p className="text-slate-500 text-xs mb-8">
                Request sandblasting, wraps, or tank lining services.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-gray border border-brand-orange/20 rounded-2xl p-6 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-outfit font-bold text-lg text-brand-navy">
                    Redirecting to WhatsApp...
                  </h4>
                  <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                    We have compiled your coating request details. If the WhatsApp window did not open, click the button below to complete the connection.
                  </p>
                  <button
                    onClick={() => {
                      const formattedMessage = `*New Blasting & Coating Request*
----------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Scope:* ${formData.serviceType}
*Coating System:* ${formData.coatingType}
*Project Scale:* ${formData.projectScale}
*Specific Project Details:* ${formData.details}`;
                      window.open(`https://wa.me/966539370929?text=${encodeURIComponent(formattedMessage)}`, "_blank");
                    }}
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl text-xs transition-all w-full cursor-pointer"
                  >
                    Open WhatsApp Manually
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-[10px] font-bold text-slate-400 uppercase">Your Name</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="form-company" className="text-[10px] font-bold text-slate-400 uppercase">Company Name</label>
                      <input
                        id="form-company"
                        type="text"
                        required
                        placeholder="Pipeline Contracting Co."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-phone" className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        placeholder="+966 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="form-service" className="text-[10px] font-bold text-slate-400 uppercase">Service Scope</label>
                      <div className="relative">
                        <select
                          id="form-service"
                          required
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="Shop Blasting & Coating">Shop Blasting & Coating</option>
                          <option value="Field Weld Joint Repair">Field Weld Joint Repair (Touch-up)</option>
                          <option value="Tank Lining / Rehabilitation">Tank Lining & Rehabilitation</option>
                          <option value="Excavation Blasting">Trench Blasting (Segmented Charge)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-coating" className="text-[10px] font-bold text-slate-400 uppercase">Coating System Required</label>
                      <div className="relative">
                        <select
                          id="form-coating"
                          required
                          value={formData.coatingType}
                          onChange={(e) => setFormData({ ...formData, coatingType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">-- Choose Coating Spec --</option>
                          <option value="Tape Wrapping">Tape Wrapping (Buried Pipelines)</option>
                          <option value="Liquid Epoxies">Liquid Epoxies & Polyurethanes</option>
                          <option value="Concrete Weight Coating">Concrete Weight Coating</option>
                          <option value="Tank Linings">Tank internal/external linings</option>
                          <option value="Special Coatings">Specialist Coatings (Thermal/Fireproof)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="form-scale" className="text-[10px] font-bold text-slate-400 uppercase">Project Scale</label>
                      <div className="relative">
                        <select
                          id="form-scale"
                          required
                          value={formData.projectScale}
                          onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="Small">Small (Single piping spool/touch-up)</option>
                          <option value="Medium">Medium (Maintenance shutdown loop)</option>
                          <option value="Large">Large (EPC pipeline build/tank farms)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-details" className="text-[10px] font-bold text-slate-400 uppercase">Project Specifications & Areas</label>
                    <textarea
                      id="form-details"
                      rows={3}
                      placeholder="Specify pipe diameter, total square meters, atmospheric/soil conditions, or site coordinates..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-all shadow-[0_4px_12px_rgba(255,101,0,0.3)] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Compile Request & Connect via WhatsApp"}
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
