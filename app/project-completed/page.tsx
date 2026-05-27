"use client";
// @ts-nocheck

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building2,
  Shield,
  Award,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Flame,
  Wrench,
  Cpu,
  Boxes,
  Activity,
  X,
  Clock,
  HardHat,
  Briefcase
} from "lucide-react";

// ─── Data Types ──────────────────────────────────────────────────────────────

interface ProjectItem {
  id: string;
  name: string;
  category: "Infrastructure" | "Mechanical" | "Marine & Coating";
  client: string;
  location: string;
  duration: string;
  image: string;
  icon: React.ComponentType<any>;
  scope: string[];
  achievements: string[];
  description: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const projectsData: ProjectItem[] = [
  {
    id: "1",
    name: "MARJAN CAMP FACILITY",
    category: "Infrastructure",
    client: "COMO ARABIA CO LTD",
    location: "MARJAN",
    duration: "11-10-2022 to 03-02-2024",
    image: "/project_marjan_camp.png",
    icon: Boxes,
    description: "Full-scale camp infrastructure setup and support operations providing accommodation, catering, medical support, and utilities for the Marjan industrial workforces.",
    scope: [
      "Camp Infrastructure & Modular Construction",
      "Accommodation Facilities Setup",
      "Manpower Supply Coordination",
      "Catering Services",
      "Medical and Emergency Services Setup",
      "Recreational Facilities Construction",
      "Heavy Equipment Supply and Maintenance",
      "Security Services & Access Gates",
      "Waste Management Systems",
      "Worker Transportation Services"
    ],
    achievements: [
      "Timely setup and complete mobilization of camp facilities meeting strict client specs.",
      "Effective coordination of multi-tier manpower and structural resources, ensuring smooth operations.",
      "Maintained 100% adherence to safety, quality, and environmental protocols throughout the 15-month life cycle."
    ]
  },
  {
    id: "2",
    name: "TUBE BUNDLE INSERTION IN SHELL",
    category: "Mechanical",
    client: "GILF CONVINENT",
    location: "Dammam Second Industrial Area",
    duration: "26-04-2024 to 05-10-2024",
    image: "/project_tube_bundle.png",
    icon: Cpu,
    description: "Highly technical extraction and insertion of high-weight heat exchanger tube bundles inside industrial shell structures requiring absolute alignment and engineering accuracy.",
    scope: [
      "Component Inspection: Detailed non-destructive checks on the shell and tube bundle",
      "Dimensions & Fits Verification: Checking layout drawings against design tolerances",
      "Heavy Lifting Plan: Sizing and deploying hoists, cranes, and specialized rigging slings",
      "Tilted Tube Alignment: Positioning bundle aligned precisely with shell opening guides",
      "Support Skid Setup: Fitting low-friction skids to guide smooth horizontal insertion",
      "Vibration Support Setup: Securing tubes using tie rods, clamps, and baffle plates",
      "Final Sealing: Gasket replacements, testing seal surfaces, and performance confirmation"
    ],
    achievements: [
      "Successfully completed the precise insertion of the tube bundle into the shell, ensuring optimal fit.",
      "Utilized advanced alignment and sliding techniques to minimize handling time and ensure the structural integrity of both components.",
      "Zero scratch or damage rate on high-precision heat exchanger tube surface coatings."
    ]
  },
  {
    id: "3",
    name: "VESSEL MAINTENANCE",
    category: "Marine & Coating",
    client: "ARABIAN FALCON CONTRACTING CO.",
    location: "YANBU",
    duration: "26-10-2024 to 05-01-2025",
    image: "/project_vessel_maintenance.png",
    icon: Wrench,
    description: "Dry dock vessel maintenance operations including deep hull inspections, high-pressure sandblasting, premium anti-corrosion coating, and complete engine room turnarounds.",
    scope: [
      "Hull Inspections & Crack Checks: Non-destructive testing on hull welds",
      "Barnacle & Algae Cleaning: Marine growth removal to improve fuel efficiency",
      "Main and Auxiliary Engine Maintenance: Filter overhauls, oil changes, exhaust monitoring",
      "Electrical & Navigation Overhaul: GPS, radar, navigation lights, and generator servicing",
      "Safety Systems Inspection: Overhauling lifeboats, fire extinguishers, and life vests",
      "Plumbing & Sewage Servicing: Maintenance of pipes, valves, and waste containment units",
      "Cargo Handling Gear Inspection: Cargo cranes, winches, and rigging hardware loading tests",
      "Regulatory Compliance: Verifying certifications against International Maritime Organization (IMO) rules"
    ],
    achievements: [
      "Completed complete sandblasting and protective marine coating within the tight dry dock schedule.",
      "Turned around main engine exhaust systems with zero post-start emissions issues.",
      "Fully certified compliance with IMO safety and cargo handling requirements."
    ]
  }
];

// ─── Animation Presets ───────────────────────────────────────────────────────

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
} as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Infrastructure", "Mechanical", "Marine & Coating"];

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-brand-gray text-slate-800 selection:bg-brand-orange selection:text-white pb-28">
      
      {/* ── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-navy/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 font-bold mb-10 uppercase tracking-widest">
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-slate-600">Projects Completed</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange font-extrabold tracking-widest text-[10px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Proven Track Record
            </span>
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy leading-tight tracking-tight">
              Projects That Define <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                Engineering Excellence
              </span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Explore our successfully completed industrial projects across Saudi Arabia. From massive camp infrastructures to specialized mechanical tube insertions and ship repairs, we deliver with reliability and strength.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FILTER TABS & PROJECTS GRID ──────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          
          {/* Filter Bar */}
          {/* <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === cat
                    ? "bg-brand-orange text-white shadow-[0_4px_12px_rgba(255,101,0,0.3)]"
                    : "bg-white text-brand-navy border border-slate-100 hover:border-brand-orange/40 hover:text-brand-orange"
                }`}
              >
                {cat}
              </button>
            ))}
          </div> */}

          {/* Grid Layout */}
          <motion.div 
            layout
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={fadeInUp}
                  className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-300" />
                      <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-[9px] font-extrabold uppercase tracking-wider border border-white/10">
                        {project.category}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      
                      <h3 className="font-outfit text-xl font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex items-center justify-between border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-400 font-bold uppercase">Client Partner</span>
                      <span className="text-xs font-black text-brand-navy uppercase">{project.client}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PROJECT DETAIL MODAL OVERLAY ─────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-brand-navy/70 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 z-10 flex flex-col md:flex-row max-h-[85vh] md:max-h-[75vh]"
            >
              {/* Left Side: Large Portrait Image (Fixed) */}
              <div className="relative md:w-2/5 min-h-[220px] md:min-h-full bg-slate-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                
                {/* Visual Category Label */}
                <div className="absolute top-6 left-6 bg-brand-orange text-white px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border border-brand-orange-light shadow-lg">
                  {selectedProject.category}
                </div>
              </div>

              {/* Right Side: Scrollable Details */}
              <div className="md:w-3/5 p-6 sm:p-10 overflow-y-auto flex flex-col justify-between space-y-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-brand-gray border border-slate-100 flex items-center justify-center text-slate-500 hover:text-brand-orange hover:bg-white hover:shadow-xs transition-all duration-200 cursor-pointer z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-6">
                  {/* Header Title */}
                  <div className="space-y-2">
                    <h2 className="font-outfit text-2xl sm:text-3xl font-black text-brand-navy leading-tight pr-6">
                      {selectedProject.name}
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project Metadata Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-gray border border-slate-100 rounded-2xl p-4.5">
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Client</span>
                        <span className="text-xs font-extrabold text-brand-navy uppercase">{selectedProject.client}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Location</span>
                        <span className="text-xs font-extrabold text-brand-navy uppercase">{selectedProject.location}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Calendar className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Project Duration</span>
                        <span className="text-xs font-extrabold text-brand-navy uppercase">{selectedProject.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Shield className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Status</span>
                        <span className="text-xs font-extrabold text-white bg-green-600 px-2 py-0.5 rounded-md uppercase tracking-wider text-[9px]">Completed</span>
                      </div>
                    </div>
                  </div>

                  {/* Scope of Work */}
                  <div className="space-y-3">
                    <h4 className="font-outfit font-black text-xs uppercase tracking-widest text-brand-navy flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-brand-orange" />
                      Scope of Work
                    </h4>
                    <ul className="space-y-2 max-h-[160px] overflow-y-auto pr-2">
                      {selectedProject.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-outfit font-black text-xs uppercase tracking-widest text-brand-navy flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-orange" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Award className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 4. CTA FOOTER BLOCK ─────────────────────────────────────────────── */}
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-brand-navy text-white rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center max-w-5xl mx-auto shadow-xl"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-brand-orange/8 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-outfit text-3xl sm:text-4xl font-black tracking-tight">
                Ready to Partner on Your Next Project?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with our operations team in Jubail. We provide modern machinery fleets, Aramco-approved manpower support, and complete civil construction works.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_4px_15px_rgba(255,101,0,0.4)] hover:-translate-y-0.5 group"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
