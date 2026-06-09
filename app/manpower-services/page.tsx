"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  UserCheck,
  Layers,
  Activity,
  ShieldAlert,
  ClipboardCheck,
  Briefcase,
  Database,
  Search,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  Building2,
  HardHat,
  HeartHandshake,
  BadgeAlert,
  HelpCircle,
  FileSpreadsheet,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

// 7 Manpower Services Offered (Exact list from GoDaddy)
const servicesOffered = [
  {
    title: "Engineering Design",
    desc: "Discipline-specific engineers and draftsmen specializing in conceptual layouts, FEED, and detailed refinery designs.",
    roles: ["Process Engineers", "Piping Designers", "Electrical & Instrument Draftsmen"]
  },
  {
    title: "Project Management",
    desc: "Planning managers, cost controllers, and execution leads driving refinery and petrochemical operations on schedule.",
    roles: ["Project Managers", "Planning Engineers", "Cost Estimators"]
  },
  {
    title: "Construction Management",
    desc: "Field-tested superintendents, construction managers, and rigging leads supervising major industrial and civil structures.",
    roles: ["Construction Leads", "Civil Supervisors", "Mechanical Superintendents"]
  },
  {
    title: "Safety / QHSE",
    desc: "Enforcing safety protocols and zero incident rates with certified safety officers and toolbox leaders.",
    roles: ["Safety Officers", "QHSE Inspectors", "Toolbox Leaders"]
  },
  {
    title: "Store & Warehousing",
    desc: "Warehouse logistics experts and material controllers overseeing spares inventories and supply audits.",
    roles: ["Material Controllers", "Inventory Specialists", "Logistics Leads"]
  },
  {
    title: "Pre-Commissioning & Commissioning",
    desc: "Commissioning engineers and instrument technicians conducting checkouts, loop testings, and startups.",
    roles: ["Commissioning Leads", "Instrument Technicians", "Loop Test Crews"]
  },
  {
    title: "Operation & Maintenance",
    desc: "Plant operators and shutdown mechanics ensuring continuous plant availability and mechanical overhaul operations.",
    roles: ["Plant Operators", "Millwright Fitters", "Maintenance Technicians"]
  }
];

// Project Lifecycle Support Stages (Derived from GoDaddy text)
const lifecycleStages = [
  { title: "Conceptualization", desc: "Technical advisors supporting pre-FEED planning and project scoping." },
  { title: "Design", desc: "Designers and engineers drafting layouts, datasheets, and civil specifications." },
  { title: "Construction", desc: "Supervisors, technicians, riggers, and mechanical crews executing civil/refinery builds." },
  { title: "Commissioning", desc: "Commissioning engineers conducting system checkouts, line blowing, and startups." },
  { title: "Plant Operations", desc: "Operators, mechanics, and electricians maintaining plant availability." },
  { title: "Shutdown Projects", desc: "Dedicated crews for shutdown projects ranging from 15 days to several months." }
];

// Recruitment Engine Strengths (Exact stats from GoDaddy)
const recruitmentStrengths = [
  {
    icon: Database,
    title: "10,000+ Resume Database",
    desc: "A massive, pre-vetted database of certified engineers, inspectors, and skilled laborers instantly searchable by credentials."
  },
  {
    icon: UserCheck,
    title: "Strong Referral Program",
    desc: "A powerful, word-of-mouth referral network inside Saudi Arabia's industrial hubs (Al Jubail, Dammam, Yanbu) ensuring high-integrity profiles."
  },
  {
    icon: Search,
    title: "Trained Recruiters",
    desc: "Expert industry recruiters specializing in identifying candidate requirements and meeting your technical parameters."
  }
];

// Active Project Roles with their actual downloaded image references!
const activeProjectRoles = [
  {
    name: "Quality Inspector",
    cat: "Technical QA/QC",
    spec: "Aramco Certified CSWIP / BGAS",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.29.07_edc174f8.jpg"
  },
  {
    name: "Safety Toolbox Leader",
    cat: "HSE Supervision",
    spec: "NEBOSH / Aramco Approved",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.34.25_eae51e98.jpg"
  },
  {
    name: "Housekeeping Supervisor",
    cat: "Civil & Site Maintenance",
    spec: "Site Safety Certified Coordinator",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.44.33_6fed40db.jpg"
  },
  {
    name: "Manual Jack Hammer Operator",
    cat: "Demolition & Excavation",
    spec: "Heavy Machinery Certified",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.47.37_5c7c5a7f.jpg"
  },
  {
    name: "Blaster",
    cat: "Surface Preparation",
    spec: "TUV Certified Abrasive Blasting",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.55.37_17314615.jpg"
  },
  {
    name: "Rigger",
    cat: "Heavy Lifting Ops",
    spec: "TUV / Aramco Level I, II, III",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.56.18_b1bfb437.jpg"
  },
  {
    name: "Coating Applicator",
    cat: "Industrial Painting",
    spec: "NACE Compliant Coating Painter",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.57.16_42fd6a6d.jpg"
  },
  {
    name: "Side Boom Operator",
    cat: "Pipeline Logistics",
    spec: "Heavy Crawler Certified Operator",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.58.20_f30ad4e6.jpg"
  },
  {
    name: "Construction Worker",
    cat: "Site Operations",
    spec: "Refinery Access Cleared Crew",
    image: "/manpower/whatsapp_image_2023-10-17_at_16.34.25_eae51e98.jpg"
  }
];

export default function ManpowerServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    category: "",
    headcount: "1-5",
    duration: "15-day Shutdown",
    details: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoles = activeProjectRoles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedMessage = `*New Manpower Staffing Request*
----------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Staffing Category:* ${formData.category}
*Headcount:* ${formData.headcount}
*Contract Duration:* ${formData.duration}
*Project Details:* ${formData.details}`;

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
        category: "",
        headcount: "1-5",
        duration: "15-day Shutdown",
        details: ""
      });
    }, 1200);
  };

  const handleQuickInquiry = (roleName: string) => {
    const message = `*Quick Manpower Inquiry via Website*
----------------------------------
I am interested in requesting personnel for the following role:
*Role Name:* ${roleName}

Please provide CV availability, rates, and mobilization times.`;
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
            src="/manpower_hero.png"
            alt=" The Ihtimal Com Manpower Services"
            fill
            className="object-cover opacity-25 select-none scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
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
              Manpower Outsourcing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                Technical Staffing
              </span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Aramco-approved engineers, designers, safety inspectors, and certified craftsmen mobilized on demand for Saudi Arabia's industrial shutdowns and EPC structures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#overview"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(255,101,0,0.4)] hover:shadow-[0_6px_25px_rgba(255,101,0,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quote-form"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center"
              >
                Request Crew Quote
              </a>
            </div>
          </motion.div>
        </div>

        {/* Diagonal Angle Split */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-gray translate-y-1/2 skew-y-1" />
      </section>

      {/* 2. COMPANY OVERVIEW & DETAILED TEXT */}
      <section id="overview" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left side: Overview text containing all data from GoDaddy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase block">
                // COMPANY OVERVIEW
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Staffing Solutions for Major EPC Contractors
              </h2>

              <div className="border-l-4 border-brand-orange pl-5 py-2">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  IHTIMAL Company provides technical staffing services in Saudi Arabia. We started with a small, focused staffing beginning and have grown to place over 120+ engineers and multiple workforce categories working directly at client locations. The company supports crucial industrial operations, shutdown projects, and EPC activities.
                </p>
              </div>

              {/* Exact paragraph from Godaddy site */}
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed bg-brand-gray p-6 rounded-2xl border border-gray-100">
                Ihtimal can provide engineers / Designers / technicians right from conceptualization of the project to Design to Construction to Pre commissioning & Commissioning to Operations and Maintenance of the plant. Prospect Provide project manager / Inspectors / Safety personnel for smooth function of the projects. It can also mobilize large manpower for shutdown assignment of 15 days to few months. Prospect has large in-house database ie more than 75,000 resume data base and very strong referral programme to attract talent from the industry. Its recruiters are well trained and can identify the candidates meeting your project requirements.
              </p>

              {/* Stats Counters Grid */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <span className="font-outfit font-extrabold text-3xl md:text-4xl text-brand-orange block">120+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Engineers Placed</span>
                </div>
                <div>
                  <span className="font-outfit font-extrabold text-3xl md:text-4xl text-brand-navy block">75k+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">CV Database</span>
                </div>
                <div>
                  <span className="font-outfit font-extrabold text-3xl md:text-4xl text-brand-navy block">100%</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">TUV & Aramco Approved</span>
                </div>
              </div>
            </div>

            {/* Right side: Modern graphic grid representing staffing segments */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-brand-orange/5 rounded-3xl -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-navy-light/5 rounded-3xl -z-10" />

              <div className="bg-brand-gray border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">
                <h3 className="font-outfit text-xl font-bold text-brand-navy border-b border-gray-200 pb-3 flex items-center gap-2">
                  <HardHat className="w-5 h-5 text-brand-orange" />
                  Staffing Categories supplied
                </h3>

                <div className="space-y-4">
                  {["Engineers", "Designers", "Technicians", "Project Managers", "Inspectors", "Safety Personnel"].map((catName, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-white rounded-xl shadow-xs border border-gray-50">
                      <span className="w-2 h-2 rounded-full bg-brand-orange" />
                      <span className="text-xs font-bold text-brand-navy">{catName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES OFFERED SECTION (THE 7 TECHNICAL FIELDS) */}
      <section className="py-24 bg-brand-gray relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-orange/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // DEPLOYMENT FIELDS
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy">
              Technical Staffing Disciplines
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Prospect can deploy qualified technical staff in the following seven core fields of industrial development.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesOffered.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass rounded-3xl p-8 hover:shadow-[0_15px_35px_rgba(255,101,0,0.08)] hover:border-brand-orange/30 transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-gray text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Sub-Roles */}
                <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-1.5">
                  {service.roles.map((role, rIdx) => (
                    <span key={rIdx} className="bg-white border border-gray-200 text-slate-500 text-[9px] px-2 py-0.5 rounded-md font-semibold">
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. RECRUITMENT STRENGTH */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left side: Graphic representation of CV pipeline */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-orange/5 blur-[90px] pointer-events-none" />

              <div className="w-full bg-brand-navy text-white rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-orange/10 blur-[40px]" />

                <h3 className="font-outfit text-lg font-bold border-b border-white/10 pb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-brand-orange" />
                  Staffing & Recruiting Engine
                </h3>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-semibold">
                      <span>CV Database Volume</span>
                      <span className="text-brand-orange">75,000+ Resumes</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange w-[90%] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-semibold">
                      <span>Engineering Referral Pool</span>
                      <span className="text-brand-orange">Active Network</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange w-[85%] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-semibold">
                      <span>Project-Based Hiring Speed</span>
                      <span className="text-brand-orange">Rapid Turnaround</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange w-[95%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Database & Recruiter details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase block">
                // HIRING PIPELINE STRENGTH
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Talent Sourcing Speed & Capacity
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Prospect has set up an exhaustive and modern recruitment process to supply safety inspectors, riggers, and Aramco engineering profiles for both EPC firms and inspection agencies.
              </p>

              <div className="space-y-6 pt-4">
                {recruitmentStrengths.map((engine, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-gray text-brand-navy flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <engine.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-base text-brand-navy mb-1">{engine.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{engine.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. LIFECYCLE STAGES AND SHUTDOWNS */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        {/* Soft backdrop refinery */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay">
          <Image
            src="/industrial_hero_2.png"
            alt="Refinery background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // LIFECYCLE COVERAGE
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold leading-tight">
              Supporting Projects from Pre-FEED to Turnaround
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed text-sm">
              We provide qualified technical staff for any duration, supporting short-term refinery shutdowns (15 days to several months) to long-term operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifecycleStages.map((stage, idx) => (
              <div key={idx} className="bg-white/5 border border-white/15 rounded-3xl p-6 hover:border-brand-orange/50 transition-all duration-300 group">
                <span className="text-brand-orange font-bold font-mono text-sm block mb-3 uppercase">Stage {idx + 1}</span>
                <h3 className="font-outfit text-lg font-bold mb-2 group-hover:text-brand-orange transition-colors">{stage.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ONGOING ROLES PIPELINE (WITH ACTUAL SITE WORKER PHOTOS) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
                // ACTIVE IN-FIELD ROLES
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy">
                Ongoing Project Activities & Roles
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                A showcase of the actual manpower profiles and activities currently mobilized across Saudi Arabia's industrial grids.
              </p>
            </div>

            {/* Search filter */}
            <div className="relative max-w-xs w-full shrink-0">
              <input
                type="text"
                placeholder="Search active roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 rounded-full border border-gray-200 text-xs focus:outline-none focus:border-brand-orange transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Roles Grid with real images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoles.map((role, idx) => (
              <div key={idx} className="bg-brand-gray border border-gray-100 rounded-3xl overflow-hidden hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 group flex flex-col">

                {/* Visual Frame */}
                <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={role.image}
                    alt={role.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-300" />

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-brand-orange text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    {role.cat}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-outfit text-lg font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                      {role.name}
                    </h3>
                    <p className="text-slate-500 text-xs mb-6">
                      {role.spec}
                    </p>
                  </div>

                  <button
                    onClick={() => handleQuickInquiry(role.name)}
                    className="w-full bg-white hover:bg-brand-orange hover:text-white text-brand-navy py-3 px-4 rounded-xl font-bold text-xs border border-gray-200 hover:border-brand-orange transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    Enquire on WhatsApp
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. STAFFING REQUEST FORM */}
      <section id="quote-form" className="py-24 relative overflow-hidden bg-brand-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 border border-white/20">

            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-brand-navy text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Background refinery */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-overlay">
                <Image
                  src="/industrial_hero_1.png"
                  alt="Industrial refinery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-brand-orange/15 blur-[60px]" />

              <div className="relative z-10 space-y-6">
                <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase">
                  // RECRUITING DESK
                </span>
                <h3 className="font-outfit text-2xl md:text-3xl font-bold leading-tight">
                  Accelerate Site Staffing
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Submit your required profile variables. Our staffing desk will search our 10,000+ CV database and match your headcount requirements within 2 hours.
                </p>
              </div>

              <div className="relative z-10 mt-12 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <ShieldAlert className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Verified Aramco IDs</h4>
                    <p className="text-[10px] text-slate-400">All engineers hold valid Aramco, SABIC, & safety portals credentials</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Rapid Mobilization</h4>
                    <p className="text-[10px] text-slate-400">Short-notice crew dispatch for emergency shutdowns & turnarounds</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Or Call Directly</p>
                <a href="tel:+966539370929" className="text-brand-orange font-bold text-lg hover:underline transition-all block mt-1">
                  +966 133636284
                </a>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7 p-8 md:p-10 bg-white">
              <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-2">
                Outsource Staffing Inquiry
              </h3>
              <p className="text-slate-500 text-xs mb-8">
                Request engineering, safety, or inspection personnel.
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
                    We have compiled your staffing request details. If the WhatsApp window did not open, click the button below to complete the connection.
                  </p>
                  <button
                    onClick={() => {
                      const formattedMessage = `*New Manpower Staffing Request*
----------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Staffing Category:* ${formData.category}
*Headcount:* ${formData.headcount}
*Contract Duration:* ${formData.duration}
*Project Details:* ${formData.details}`;
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
                        placeholder="EPC Contracting Co."
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
                      <label htmlFor="form-category" className="text-[10px] font-bold text-slate-400 uppercase">Category Required</label>
                      <div className="relative">
                        <select
                          id="form-category"
                          required
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">-- Choose Category --</option>
                          <option value="Engineers">Engineers</option>
                          <option value="Designers">Designers</option>
                          <option value="Technicians">Technicians</option>
                          <option value="Project Managers">Project Managers</option>
                          <option value="Inspectors">Inspectors</option>
                          <option value="Safety Personnel">Safety Personnel</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-headcount" className="text-[10px] font-bold text-slate-400 uppercase">Required Headcount</label>
                      <div className="relative">
                        <select
                          id="form-headcount"
                          required
                          value={formData.headcount}
                          onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="1-5">1 - 5 Persons</option>
                          <option value="6-20">6 - 20 Persons</option>
                          <option value="21-50">21 - 50 Persons</option>
                          <option value="50+">50+ Persons</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="form-duration" className="text-[10px] font-bold text-slate-400 uppercase">Contract Duration</label>
                      <div className="relative">
                        <select
                          id="form-duration"
                          required
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="15-day Shutdown">Short-term Shutdown (15 Days)</option>
                          <option value="3 Months">Medium-term (3 Months)</option>
                          <option value="6 Months">Long-term (6 Months)</option>
                          <option value="1 Year+">Permanent / 1 Year+</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-details" className="text-[10px] font-bold text-slate-400 uppercase">Project Roles & Scope Details</label>
                    <textarea
                      id="form-details"
                      rows={3}
                      placeholder="Specify qualifications needed (e.g. Aramco ID holder), certificates, job site coordinates, or shift format..."
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
