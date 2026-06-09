"use client";
// @ts-nocheck

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Users,
  Target,
  Award,
  Clock,
  Compass,
  FileCheck,
  CheckCircle2,
  ChevronRight,
  Flame,
  Activity,
  Handshake,
  Workflow,
  Wrench,
  Cpu,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  Briefcase,
  HardHat
} from "lucide-react";

// ─── Data Types ──────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
  desc: string;
  icon: React.ComponentType<any>;
}

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

interface ValueItem {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
}

interface PartnerReason {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
}

interface ClientLogo {
  id: string;
  src: string;
  name: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const stats: StatItem[] = [
  { value: "120+", label: "Engineers & Experts", desc: "Qualified workforce", icon: HardHat },
  { value: "10,000+", label: "Resume Database", desc: "Wide recruitment pool", icon: Users },
  { value: "100+", label: "Projects Completed", desc: "Successful handovers", icon: Briefcase },
  { value: "10+", label: "Years Experience", desc: "Serving Saudi Arabia", icon: Clock },
];

const timeline: TimelineItem[] = [
  {
    year: "2010",
    title: "Establishment",
    desc: "IHTIMAL was founded with a clear vision to support industrial contracting in Saudi Arabia.",
  },
  {
    year: "2013",
    title: "Service Extension",
    desc: "Expanded into specialized divisions: heavy equipment rental and industrial maintenance.",
  },
  {
    year: "2017",
    title: "Scale Expansion",
    desc: "Expanded fleet capability and engineering workforce to partner on major oil & gas developments.",
  },
  {
    year: "2021",
    title: "ISO Certifications",
    desc: "Achieved ISO 9001, ISO 14001, and ISO 45001 international standard validations.",
  },
  {
    year: "2024",
    title: "Vision 2030 Partner",
    desc: "Contributing heavily to major infrastructure and sustainable industrial projects across KSA.",
  },
];

const coreValues: ValueItem[] = [
  { icon: Shield, title: "Integrity", desc: "Uncompromising compliance" },
  { icon: Award, title: "Safety", desc: "Zero incident dedication" },
  { icon: CheckCircle2, title: "Excellence", desc: "World-class standards" },
  { icon: Cpu, title: "Innovation", desc: "Modern tech adaptation" },
  { icon: Users, title: "Teamwork", desc: "Collaborative execution" },
  { icon: Handshake, title: "Reliability", desc: "Trust-based partnerships" },
];

const partnerReasons: PartnerReason[] = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "Zero compromise on safety. Strict adherence to HSE standards and complete PPE compliance.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    desc: "Aramco-certified engineers, specialized technicians, and qualified rigging professionals.",
  },
  {
    icon: Clock,
    title: "Fast Deployment",
    desc: "Quick mobilization capabilities with specialized logistics coordinates across the Kingdom.",
  },
  {
    icon: FileCheck,
    title: "ISO-Certified Quality",
    desc: "Validated management systems ensuring absolute alignment with international engineering specifications.",
  },
  {
    icon: Wrench,
    title: "Advanced Equipment",
    desc: "Modern and well-maintained machinery fleet ensuring operational efficiency and zero downtime.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Support",
    desc: "24/7 client relations and operations support ensuring absolute contract execution.",
  },
];

const clientLogos: ClientLogo[] = [
  { id: "1", src: "/images/clients/1.webp", name: "Saudi Aramco" },
  { id: "2", src: "/images/clients/2.webp", name: "SABIC" },
  { id: "3", src: "/images/clients/3.webp", name: "Ma'aden" },
  { id: "4", src: "/images/clients/4.webp", name: "SEC" },
  { id: "5", src: "/images/clients/5.webp", name: "Hyundai" },
  { id: "6", src: "/images/clients/6.webp", name: "Client Partner 6" },
  { id: "7", src: "/images/clients/7.webp", name: "Client Partner 7" },
  { id: "8", src: "/images/clients/8.webp", name: "Client Partner 8" },
  { id: "9", src: "/images/clients/9.webp", name: "Client Partner 9" },
  { id: "10", src: "/images/clients/10.webp", name: "Client Partner 10" },
  { id: "11", src: "/images/clients/11.webp", name: "Client Partner 11" },
  { id: "12", src: "/images/clients/12.webp", name: "Client Partner 12" },
  { id: "13", src: "/images/clients/13.webp", name: "Client Partner 13" },
  { id: "14", src: "/images/clients/14.webp", name: "Client Partner 14" },
  { id: "15", src: "/images/clients/15.webp", name: "Client Partner 15" },
  { id: "16", src: "/images/clients/16.webp", name: "Client Partner 16" },
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
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-100px" }
} as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-gray text-slate-800 selection:bg-brand-orange selection:text-white overflow-hidden">

      {/* ── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-white overflow-hidden border-b border-gray-100">
        {/* Abstract background graphics */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-navy/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-slate-400 font-bold mb-12 uppercase tracking-widest"
          >
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-slate-600">About Us</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="whileInView"
              variants={staggerContainer}
              className="lg:col-span-6 space-y-8"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange font-extrabold tracking-widest text-[10px] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                Who We Are
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy leading-tight tracking-tight"
              >
                Building Industrial Excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                  Across Saudi Arabia
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl"
              >
                The Ihtimal Com (IHTIMAL Contracting Est.) is a premier industrial partner delivering certified manpower, advanced heavy equipment rentals, and specialized industrial services with absolute safety, quality compliance, and operational reliability across the Kingdom.
              </motion.p>

              {/* Grid indicators */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100"
              >
                {[
                  { icon: Shield, title: "Safety First", desc: "Always Compliant" },
                  { icon: TrendingUp, title: "Quality Driven", desc: "Exceeding Standards" },
                  { icon: Target, title: "Client-Focused", desc: "Customized Solutions" },
                  { icon: Users, title: "Saudi Experience", desc: "In-Kingdom Expertise" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-2xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:scale-105 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-extrabold text-brand-navy text-xs sm:text-sm uppercase tracking-wide">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 relative"
            >
              {/* Decorative backgrounds */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#ff6500_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#0b192c_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30 pointer-events-none" />

              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(11,25,44,0.15)] border-4 border-white bg-slate-900 group">
                <Image
                  src="/industrial_worker.png"
                  alt="Industrial Excellence Saudi Arabia"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent" />

                {/* Floating compliance label */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center shadow-md">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Saudi Aramco Vendor ID</span>
                      <span className="font-outfit text-xs font-black text-brand-navy uppercase block">Approved Supplier</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white bg-brand-navy px-2.5 py-1 rounded-md">
                    Reg. 7030721448
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. FLOATING STATS DECK ─────────────────────────────────────────── */}
      <section className="relative -mt-10 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-[0_10px_35px_rgba(11,25,44,0.04)] flex flex-col justify-between hover:shadow-[0_15px_45px_rgba(11,25,44,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-orange/10 transition-colors">
                    <stat.icon className="w-5 h-5 text-brand-navy group-hover:text-brand-orange transition-colors" />
                  </div>
                  <span className="text-2xl font-black text-slate-100 group-hover:text-brand-orange/15 transition-colors">0{i + 1}</span>
                </div>
                <div>
                  <div className="font-outfit font-black text-3xl sm:text-4xl text-brand-navy tracking-tight mb-1 group-hover:text-brand-orange transition-colors">
                    {stat.value}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug uppercase tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EXECUTIVE MESSAGES ───────────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 space-y-28">

          {/* Chairman's Message Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Portrait frame with decorative accents */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-5 relative"
            >
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#ff6500_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

              {/* Gold/Orange side accent bar */}
              <div className="absolute -left-3 top-10 bottom-10 w-1.5 bg-brand-orange rounded-full z-10 hidden sm:block" />

              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-900 group">
                <Image
                  src="/images/chairman.webp"
                  alt="Ismail Yahya A Gharamah, Chairman"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center shadow-lg">
                  <span className="font-serif text-white text-2xl font-bold">“</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Message Content */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-7 space-y-6 relative"
            >
              {/* Huge decorative quotes in the background */}
              <div className="absolute -top-10 -right-6 font-serif text-[180px] text-slate-100 select-none pointer-events-none leading-none opacity-40 font-bold">
                ”
              </div>

              <div className="space-y-4 relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange font-extrabold tracking-widest text-[10px] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  CHAIRMAN'S MESSAGE | رسالة الرئيس
                </span>
                <h3 className="font-outfit text-3xl font-black text-brand-navy leading-tight tracking-tight">
                  Building a Legacy of <span className="text-brand-orange">Excellence</span>
                </h3>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 italic relative z-10 font-medium">
                <p>At IHTIMAL Company for General Contracting, we are committed to building a legacy of excellence, integrity, and innovation in the construction and industrial sectors across the Kingdom of Saudi Arabia.</p>
                <p>Our vision is aligned with the Kingdom’s ambitious growth, where infrastructure development and industrial expansion play a vital role. Through our expertise in civil construction, equipment rental, manpower solutions, and industrial services, we strive to deliver projects that meet the highest standards of quality, safety, and efficiency.</p>
                <p>We believe that our strength lies in our people, our values, and our commitment to our clients. By fostering strong partnerships and maintaining a customer-focused approach, we continue to build trust and long-term relationships.</p>
                <p>As Chairman, I am proud of the progress we have made and confident in our future direction. We remain dedicated to continuous improvement, innovation, and contributing to the sustainable development of our nation.</p>
              </div>

              <div className="border-t border-slate-150 pt-6 relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-outfit font-black text-lg text-brand-navy leading-snug">
                    Ismail Yahya A Gharamah
                  </h4>
                  <p className="font-outfit font-bold text-sm text-brand-orange leading-snug mt-0.5">
                    إسماعيل يحيى غرامة
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1.5">
                    Chairman | الرئيس
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Director's Message Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-slate-100 pt-28">
            {/* Left: Message Content - Rendered first on desktop, second on mobile */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-7 space-y-6 order-2 lg:order-1 relative"
            >
              {/* Huge decorative quotes in the background */}
              <div className="absolute -top-10 -left-6 font-serif text-[180px] text-slate-100 select-none pointer-events-none leading-none opacity-40 font-bold">
                “
              </div>

              <div className="space-y-4 relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy font-extrabold tracking-widest text-[10px] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                  DIRECTOR'S MESSAGE | رسالة المدير
                </span>
                <h3 className="font-outfit text-3xl font-black text-brand-navy leading-tight tracking-tight">
                  Delivering <span className="text-brand-orange">Value</span>, Every Day
                </h3>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 italic relative z-10 font-medium font-medium">
                <p>At IHTIMAL Company for General Contracting, we are committed to delivering excellence in every aspect of our operations. Our company was established with a clear vision to provide high-quality contracting solutions that contribute to the growth and development of the Kingdom of Saudi Arabia.</p>
                <p>With strong expertise in civil construction, infrastructure, industrial services, equipment rental, and manpower supply, IHTIMAL has positioned itself as a reliable partner for major projects across various sectors including oil &amp; gas and commercial developments.</p>
                <p>Our success is driven by our dedication to quality, safety, and client satisfaction. We continuously invest in our people, technology, and equipment to ensure that we meet the evolving demands of the industry while maintaining the highest standards of performance.</p>
                <p>We believe that trust and long-term relationships are the foundation of sustainable success. Through professionalism, integrity, and teamwork, we strive to exceed expectations and deliver value to our clients and stakeholders.</p>
                <p>As we move forward, IHTIMAL Company remains focused on expanding its capabilities and supporting the ambitious goals of Saudi Vision 2030, contributing to a stronger and more sustainable future.</p>
                <p>I extend my sincere appreciation to our clients, partners, and employees for their continued trust and support.</p>

                {/* Visual callout statement */}
                <div className="border-l-4 border-brand-orange bg-brand-gray rounded-r-2xl p-5 mt-6 not-italic">
                  <p className="font-black text-brand-navy text-sm sm:text-base uppercase tracking-wide">
                    Together, we build with strength and reliability.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-150 pt-6 relative z-10">
                <h4 className="font-outfit font-black text-lg text-brand-navy leading-snug">
                  Mohammad Arshad Abdul Rahman
                </h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                  Director | المدير التنفيذي
                </p>
                <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">
                  IHTIMAL Company for General Contracting
                </p>
              </div>
            </motion.div>

            {/* Right: Portrait frame - Rendered second on desktop, first on mobile */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-5 order-1 lg:order-2 relative"
            >
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#0b192c_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-30 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-navy/10 rounded-full blur-2xl pointer-events-none" />

              {/* Navy side accent bar */}
              <div className="absolute -right-3 top-10 bottom-10 w-1.5 bg-brand-navy rounded-full z-10 hidden sm:block" />

              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-900 group">
                <Image
                  src="/images/Director.webp"
                  alt="Mohammad Arshad Abdul Rahman, Director"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center shadow-lg">
                  <span className="font-serif text-white text-2xl font-bold">“</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 4. VISION, MISSION, VALUES ───────────────────────────────────────── */}
      <section className="py-28 bg-brand-gray relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Vision Card - Dark theme with Riyadh image overlay */}
            <motion.div
              {...fadeInUp}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-brand-navy bg-brand-navy text-white p-8 sm:p-10 flex flex-col justify-between min-h-[380px] group"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/riyadh_night.png"
                  alt="Saudi Vision 2030 Construction Boom"
                  fill
                  className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/95 to-brand-navy/70" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 border border-brand-orange/45 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-brand-orange font-extrabold tracking-widest text-[10px] uppercase block">// OUR DIRECTION</span>
                <h3 className="font-outfit text-2xl font-black">Our Vision</h3>
              </div>

              <p className="relative z-10 text-slate-200 text-sm leading-relaxed font-semibold">
                To become one of the most prominent contributors to the construction boom and industrial infrastructure development in the Kingdom of Saudi Arabia.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-brand-orange font-extrabold tracking-widest text-[10px] uppercase block">// OUR PURPOSE</span>
                <h3 className="font-outfit text-2xl font-black text-brand-navy">Our Mission</h3>
              </div>

              <ul className="space-y-3.5 my-6">
                {[
                  "Deliver high-quality industrial services with utmost safety & reliability.",
                  "Provide skilled manpower and advanced equipment solutions.",
                  "Build long-term client relationships through trust and excellence.",
                  "Support Saudi Arabia's industrial growth and Vision 2030.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Core Values Card */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-brand-orange font-extrabold tracking-widest text-[10px] uppercase block">// OUR FOUNDATION</span>
                <h3 className="font-outfit text-2xl font-black text-brand-navy">Our Core Values</h3>
              </div>

              <div className="grid grid-cols-2 gap-3.5 my-6">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-brand-gray border border-slate-100 rounded-xl p-3 hover:border-brand-orange/30 hover:bg-white hover:shadow-xs transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                      <val.icon className="w-3.5 h-3.5 text-brand-navy" />
                    </div>
                    <span className="font-outfit font-black text-brand-navy text-[10px] sm:text-[11px] uppercase tracking-wide">{val.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 5. SAFETY & QUALITY MANAGEMENT ──────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Safety Policy */}
            <motion.div
              {...fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 bg-brand-gray border border-slate-100 rounded-[32px] overflow-hidden shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 bg-brand-orange/10 rounded-xl px-3 py-1.5 text-xs text-brand-orange font-extrabold uppercase tracking-wider mb-6 w-fit">
                    <Shield className="w-4.5 h-4.5" />
                    Safety Policy
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Safety is our core value and top priority. We are committed to zero incidents and providing a safe working environment for all employees and stakeholders.
                  </p>
                  <ul className="space-y-3">
                    {["Zero accident goal", "PPE compliance", "Risk assessment", "Safety training", "Environmental protection"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto min-h-[300px] bg-slate-900 overflow-hidden">
                <Image
                  src="/pipeline_inspection.png"
                  alt="Industrial Plant Safety Policy"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Quality Management System (QMS) */}
            <motion.div
              {...fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 bg-brand-gray border border-slate-100 rounded-[32px] overflow-hidden shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 bg-brand-orange/10 rounded-xl px-3 py-1.5 text-xs text-brand-orange font-extrabold uppercase tracking-wider mb-6 w-fit">
                    <FileCheck className="w-4.5 h-4.5" />
                    QMS System
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    We follow international standards and continuously improve our processes to ensure consistent quality and customer satisfaction.
                  </p>
                  <ul className="space-y-3">
                    {["ISO 9001: Quality Management", "ISO 14001: Environmental", "ISO 45001: Occupational HSE", "SASO Certified"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto min-h-[300px] bg-slate-900 overflow-hidden">
                <Image
                  src="/about_collage_1.png"
                  alt="Quality Management System QMS"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 6. TIMELINE (OUR JOURNEY) ────────────────────────────────────────── */}
      <section className="py-28 bg-brand-gray relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // MILESTONES
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Our Journey
            </h2>
          </div>

          {/* Timeline track */}
          <div className="relative max-w-5xl mx-auto py-10">
            {/* Horizontal Line for large screens */}
            <div className="hidden lg:block absolute top-[114px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex lg:flex-col items-center lg:items-center text-left lg:text-center gap-6 lg:gap-6 bg-white lg:bg-transparent p-6 lg:p-0 rounded-3xl border border-slate-100 lg:border-none shadow-xs lg:shadow-none hover:shadow-sm lg:hover:shadow-none transition-shadow"
                >
                  {/* Circle bubble */}
                  <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center font-outfit font-black text-lg border-4 border-white shadow-md relative z-10 flex-shrink-0 hover:bg-brand-orange hover:scale-105 transition-all duration-300 cursor-default">
                    {item.year}
                  </div>
                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="font-outfit font-black text-sm text-brand-navy uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-xs mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY PARTNER WITH US ──────────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // VALUE PROPOSITION
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Why Partner with  The Ihtimal Com?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-brand-gray border border-slate-100 rounded-3xl p-6.5 hover:shadow-md hover:border-brand-orange/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center border border-slate-200/80 shadow-xs mb-5 group-hover:scale-105 group-hover:bg-brand-orange transition-all duration-300 shrink-0">
                  <reason.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-outfit font-black text-sm text-brand-navy uppercase tracking-wide mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. INDUSTRIES WE SERVE ─────────────────────────────────────────── */}
      <section className="py-28 bg-brand-gray border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // SECTORS
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Flame, name: "Oil & Gas" },
              { icon: Cpu, name: "Petrochemical" },
              { icon: Wrench, name: "Construction" },
              { icon: Globe, name: "Marine Support" },
              { icon: Workflow, name: "Manufacturing" },
              { icon: Activity, name: "Maintenance" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 text-center space-y-4 hover:-translate-y-1 hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                  <item.icon className="w-5.5 h-5.5 text-brand-orange" />
                </div>
                <span className="font-outfit font-extrabold text-xs text-brand-navy uppercase tracking-wider block">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8B. OUR VALUED CLIENTS (SLIDER MARQUEE) ────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
          <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
            // PARTNERS
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
            Our Valued Clients
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden w-full group py-4">
          {/* Gradient overlay shields */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 38,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap items-center gap-8 pl-8 whitespace-nowrap"
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="w-48 h-24 bg-brand-gray border border-slate-100 rounded-2xl flex items-center justify-center p-6 hover:border-brand-orange/30 hover:bg-white hover:shadow-xs transition-all duration-300 flex-shrink-0 group/logo"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={140}
                    height={60}
                    className="object-contain max-h-12 w-auto grayscale opacity-70 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 9. CALL TO ACTION (CTA) ─────────────────────────────────────────── */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-orange/10 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Let's Build Something Great Together!
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Partner with  The Ihtimal Com (IHTIMAL Est.) for reliable, safe, and high-quality industrial support solutions. Speak with our Jubail operations team for quick deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 text-left">
            {[
              { icon: Phone, title: "Call Support", detail: "+966 133636284 ", href: "tel:+966539370929" },
              { icon: Mail, title: "Inquiries Email", detail: "info@prospectksa.com", href: "mailto:info@prospectksa.com" },
              { icon: MapPin, title: "HQ Address", detail: "Hilton District, Jubail, KSA", href: "https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Al+Jubail" }
            ].map((card, idx) => (
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : "_self"}
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-brand-orange/40 hover:bg-white/10 transition-all flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-orange flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">{card.title}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">{card.detail}</span>
                </div>
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4.5 rounded-full transition-all shadow-[0_4px_18px_rgba(255,101,0,0.45)] hover:shadow-[0_6px_25px_rgba(255,101,0,0.35)] hover:-translate-y-0.5 group"
            >
              Get a Free Quote
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
