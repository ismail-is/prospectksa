"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Truck,
  Cpu,
  Wind,
  Zap,
  Sun,
  Bus,
  Shield,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Filter,
  Clock,
  DollarSign,
  ChevronDown,
  Warehouse,
  Flame,
  Users,
  Compass,
  FileCheck,
  TrendingUp,
  Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

// Fleet categories list
const categories = [
  { id: "all", name: "All Fleet" },
  { id: "lifting", name: "Lifting & Cranes" },
  { id: "earthmoving", name: "Earthmoving" },
  { id: "power", name: "Power & Utilities" },
  { id: "logistics", name: "Transport & Logistics" },
  { id: "compaction", name: "Compaction & Tools" }
];

// Fleet database
const fleetItems = [
  // Lifting & Cranes
  {
    id: "mobile-crane",
    name: "Mobile Crane",
    category: "lifting",
    icon: Wrench,
    desc: "Heavy-duty mobile crane solutions for high-capacity industrial lifts, facility shut-downs, and material handling.",
    specs: ["50 Ton to 500 Ton Capacity", "Aramco Certified Operators", "Comprehensive Rigging Plan Support"],
    compliance: ["Aramco Approved", "SABIC Approved", "TUV Certified"],
    highlight: "Heavy Duty"
  },
  {
    id: "boom-truck",
    name: "Boom Truck",
    category: "lifting",
    icon: Truck,
    desc: "Versatile transport and self-loading lift solution. Perfect for local logistics and on-site distribution.",
    specs: ["5 Ton to 15 Ton Lift Capacity", "Up to 20m Boom Outreach", "Includes Skilled Operators"],
    compliance: ["TUV Certified", "Aramco Approved"],
    highlight: "Highly Versatile"
  },
  {
    id: "manlift",
    name: "Manlift (Boom Lift)",
    category: "lifting",
    icon: Cpu,
    desc: "Safe and reliable elevated work platforms for overhead maintenance, painting, blasting, and mechanical works.",
    specs: ["15m to 43m Working Height", "230kg Basket Load Capacity", "Diesel & Electric Options"],
    compliance: ["Third Party Certified", "SABIC Compliant"],
    highlight: "Safety Priority"
  },

  // Earthmoving
  {
    id: "excavator",
    name: "Excavator",
    category: "earthmoving",
    icon: Wrench,
    desc: "Heavy-duty excavators equipped for civil earthworks, site preparation, pipe trenching, and foundation excavation.",
    specs: ["0.8m³ to 2.1m³ Bucket Size", "Operating Weight: 20T - 40T", "CAT / Komatsu Heavy Fleet"],
    compliance: ["Aramco Approved Operator", "TUV Certified"],
    highlight: "Maximum Power"
  },
  {
    id: "wheel-loader",
    name: "Wheel Loader",
    category: "earthmoving",
    icon: Truck,
    desc: "High-performance front loaders for bulk material handling, stockpiling, backfilling, and logistics operations.",
    specs: ["3.0m³ to 5.0m³ Bucket Capacity", "High operating load capacity", "Fast cycling time dynamics"],
    compliance: ["TUV Certified Operator", "SABIC Approved"],
    highlight: "High Efficiency"
  },
  {
    id: "backhoe-loader",
    name: "Backhoe Loader",
    category: "earthmoving",
    icon: Wrench,
    desc: "Multitask utility loader combining rear digging shovel and front loading bucket for municipal & construction sites.",
    specs: ["1.0m³ Front Bucket", "Dig Depth up to 4.3m", "Highly maneuverable 4WD"],
    compliance: ["TUV Certified", "Road-Legal Licensed"],
    highlight: "Utility Choice"
  },
  {
    id: "bulldozer",
    name: "Bulldozer",
    category: "earthmoving",
    icon: Cpu,
    desc: "Heavy crawler tractors with high-capacity steel blades designed for massive earth grading, land clearing, and leveling.",
    specs: ["Blade Width: 3.5m - 4.5m", "Operating Weight: 20T - 45T", "Unmatched pushing power"],
    compliance: ["Aramco Certified", "TUV Compliance"],
    highlight: "Mega Projects"
  },

  // Power & Utilities
  {
    id: "generator",
    name: "Diesel Soundproof Generator",
    category: "power",
    icon: Zap,
    desc: "Whisper-quiet power generation packages delivering continuous, stable electrical supply for remote sites & shutdowns.",
    specs: ["50 kVA to 1000 kVA Output", "Super Silent Acoustical Canopy", "Integrated Fuel Tank System"],
    compliance: ["24/7 Field Maintenance Support", "Aramco Certified Hookups"],
    highlight: "24/7 Reliability"
  },
  {
    id: "tower-light",
    name: "Mobile Tower Light",
    category: "power",
    icon: Sun,
    desc: "Robust high-intensity lighting masts to secure safe night shifts, site operations, and facility turnarounds.",
    specs: ["9-Meter Vertical Hydraulic Mast", "4x 1000W LED High Lumens", "Fuel-Efficient Diesel Engine"],
    compliance: ["Wind load rated stability", "TUV Safety Tested"],
    highlight: "Night Ops Essential"
  },
  {
    id: "air-compressor",
    name: "Industrial Air Compressor",
    category: "power",
    icon: Wind,
    desc: "High-capacity diesel compressors providing clean, high-pressure air flow for blasting, coating, and pneumatic tools.",
    specs: ["185 CFM to 750 CFM flowrate", "Working Pressure up to 150 PSI", "Atlas Copco premium series"],
    compliance: ["Certified pressure vessels", "Aramco Approved Hookups"],
    highlight: "Blasting Fit"
  },
  {
    id: "welding-machine",
    name: "Multi-Process Welding Machine",
    category: "power",
    icon: Zap,
    desc: "Heavy-duty diesel-driven welders for structural fabrication, piping grids, and refinery maintenance works.",
    specs: ["400 Amp rated welding output", "Multi-process (Stick/TIG/MIG)", "Auxiliary generator power feed"],
    compliance: ["Aramco Weld Test Standards", "TUV Safety Certified"],
    highlight: "Fabrication Ready"
  },

  // Transport & Logistics
  {
    id: "hydraulic-trailer",
    name: "Hydraulic Multi-Axle Trailer",
    category: "logistics",
    icon: Truck,
    desc: "Specialized modular trailers configured for abnormal loads, heavy industrial reactors, modules, and heavy vessel logistics.",
    specs: ["Multi-axle modular configuration", "Payload Capacity up to 150 Ton", "Hydrostatic height regulation"],
    compliance: ["Special Ministry permits", "Aramco Approved Logistics"],
    highlight: "Heavy Cargo"
  },
  {
    id: "flat-bed-trailer",
    name: "Flat Bed Trailer",
    category: "logistics",
    icon: Truck,
    desc: "Standard freight logistics trailers for steel, pipes, container freight, and heavy site materials distribution.",
    specs: ["Length: 12m to 15m structural bed", "Capacity up to 50 Ton cargo", "Heavy-duty tie-down mounts"],
    compliance: ["TUV Cargo Security Certified", "Full insurance coverage"],
    highlight: "Daily Haulage"
  },
  {
    id: "pickup-diesel",
    name: "Pickup Diesel 4X4",
    category: "logistics",
    icon: Truck,
    desc: "Tough terrain double-cabin utility pickup trucks optimized for supervisors, site teams, and rapid parts delivery.",
    specs: ["Toyota Hilux / Ford Ranger", "Aramco-standard site safety kit", "Double-cabin seating format"],
    compliance: ["Aramco Site Access Permits", "IVMS GPS Tracking equipped"],
    highlight: "Site Ready"
  },
  {
    id: "minibus-diesel",
    name: "Minibus Diesel (AC)",
    category: "logistics",
    icon: Bus,
    desc: "High comfort diesel minibuses for daily manpower transportation from worker villages to refinery job locations.",
    specs: ["15 to 30 Seating Capacity", "Full climate control systems", "Ergonomic high-back seating"],
    compliance: ["MOTO Safe Transit Certified", "IVMS GPS Monitored"],
    highlight: "Crew Transit"
  },
  {
    id: "suv-diesel",
    name: "SUV Diesel 4X4",
    category: "logistics",
    icon: Truck,
    desc: "Premium 4WD SUVs for VIP transport, client visits, and executive site inspections across KSA industrial zones.",
    specs: ["Toyota Land Cruiser / Prado", "Full leather luxury interiors", "Aramco site certified package"],
    compliance: ["Executive Site Access Permits", "Advanced Safety Equipment"],
    highlight: "VIP Transport"
  },

  // Compaction & Tools
  {
    id: "roller-compactor",
    name: "Roller Compactor",
    category: "compaction",
    icon: Cpu,
    desc: "Single-drum vibratory rollers built to compact soils, sub-bases, and asphalt layers to strict engineering standards.",
    specs: ["Operating Weight: 10T to 15T", "2.1m Heavy Steel Drum Width", "High frequency vibratory force"],
    compliance: ["TUV Certified Operator", "Aramco Approved Grade Ops"],
    highlight: "Perfect Grading"
  },
  {
    id: "jumping-compactor",
    name: "Jumping Jack Compactor",
    category: "compaction",
    icon: Wind,
    desc: "Compact impact rammers designed to compact soil in narrow trenches, pipeline footings, and structural columns.",
    specs: ["Impact force: 14 kN per blow", "Highly maneuverable body frame", "Honda heavy-duty engine drive"],
    compliance: ["SABIC Site Compliant", "TUV Safety Inspected"],
    highlight: "Trench Specialist"
  },
  {
    id: "plate-compactor",
    name: "Plate Compactor",
    category: "compaction",
    icon: Cpu,
    desc: "Vibratory plate compactors ideal for granular soils, sand backfilling, paving blocks, and sidewalk preparation.",
    specs: ["Centrifugal force: 20 to 35 kN", "Large heavy-duty base plate", "Water tank for asphalt works"],
    compliance: ["SABIC site safety certified", "Low vibration handles"],
    highlight: "Sand compaction"
  }
];

// Exact 11 benefits listed on the live GoDaddy site
const originalBenefits = [
  {
    icon: DollarSign,
    title: "Conservation of Capital",
    desc: "Avoid massive capital outflows for machine purchases. Retain financial flexibility and re-allocate capital directly to project execution variables."
  },
  {
    icon: Shield,
    title: "Control Over Expenses",
    desc: "Establish clear, predictable billing cycles. Predict and fix operational costs down to the hour without unexpected repair invoices."
  },
  {
    icon: Cpu,
    title: "Access to New & Updated Technology",
    desc: "Leverage state-of-the-art machinery featuring advanced safety kits, improved fuel consumption, and superior productivity outputs."
  },
  {
    icon: Clock,
    title: "Reduced Downtime",
    desc: "Minimize idle crew periods. In the rare event of mechanical faults, our swift on-site technical teams provide prompt service or equivalent replacement."
  },
  {
    icon: Warehouse,
    title: "Savings on Storage / Warehousing",
    desc: "Eliminate ongoing costs for security, large storage yards, and protection facilities. We deliver equipment when needed and retrieve it post-contract."
  },
  {
    icon: Wrench,
    title: "Savings on Repair & Maintenance",
    desc: "Outsource workshop overhauls, diagnostic computers, and expensive spare parts inventories. Our technical team handles all maintenance schedules."
  },
  {
    icon: Users,
    title: "Savings on Manpower & Admin",
    desc: "Save costs associated with recruiting, lodging, certifying, and managing full-time equipment operators and machinery compliance administrators."
  },
  {
    icon: Compass,
    title: "Equipment Tracking",
    desc: "Monitor machinery performance, active operational hours, and site dispatch schedules with full telematics support."
  },
  {
    icon: FileCheck,
    title: "Freedom from Obsolescence",
    desc: "Avoid owning assets that quickly become outdated due to changing Aramco safety criteria, emission laws, or design improvements."
  },
  {
    icon: TrendingUp,
    title: "Better Focus on Core Activities",
    desc: "Direct administrative and executive attention to safety records, project progress, and key engineering variables instead of fleet management."
  },
  {
    icon: CheckCircle2,
    title: "Burden-Free Asset Value",
    desc: "Enjoy the full benefits of high-capacity industrial machines on-site without carrying high-risk, heavy liabilities on your business balance sheet."
  }
];

// Boutique offerings bullet points
const boutiqueOfferings = [
  "Innovative Equipment solutions tailored to specific project logistics.",
  "Extensive equipment availability across all regions of Saudi Arabia.",
  "Large variety of fleet across diverse makes, models, and capacity thresholds.",
  "Seamlessly managing fleet equipment across multiple site operations and business lines.",
  "High-quality Asset Management capabilities guaranteeing reliability.",
  "In-depth industry knowledge and expertise in equipment rental and allied mechanical businesses."
];

export default function EquipmentRentalPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    equipment: "",
    duration: "Daily",
    details: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const filteredFleet = activeTab === "all"
    ? fleetItems
    : fleetItems.filter(item => item.category === activeTab);

  // Form submit handler - redirects to WhatsApp
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedMessage = `*New Equipment Rental Inquiry*
----------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Requested Equipment:* ${formData.equipment}
*Rental Duration:* ${formData.duration}
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
        equipment: "",
        duration: "Daily",
        details: ""
      });
    }, 1200);
  };

  // WhatsApp quick inquiry handler for cards
  const handleQuickEnquiry = (equipmentName: string) => {
    const message = `*Quick Rental Inquiry via Website*
----------------------------------
I am interested in renting the following equipment:
*Equipment Name:* ${equipmentName}

Please provide availability and pricing details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/966539370929?text=${encoded}`, "_blank");
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
      {/* 1. HERO SECTION (USES ORIGINAL BACKGROUND STYLE MIXED WITH HIGH RES HERO) */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-brand-navy-dark overflow-hidden pt-36 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/equipment_rental_hero.png"
            alt=" The Ihtimal Company Heavy Equipment Fleet"
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
              Industrial Strength <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                Equipment Rental Fleet
              </span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              A complete range of equipment solutions and maintenance support servicing vital infrastructure, oil & gas, and industrial sectors across Saudi Arabia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#original-intro"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(255,101,0,0.4)] hover:shadow-[0_6px_25px_rgba(255,101,0,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quote-form"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center"
              >
                Request Custom Quote
              </a>
            </div>
          </motion.div>
        </div>

        {/* Diagonal Angle Split */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-gray translate-y-1/2 skew-y-1" />
      </section>

      {/* 2. ORIGINAL DATA SECTION: WELCOME & BOUTIQUE OFFERINGS */}
      <section id="original-intro" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative backdrop */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#FF6500 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left side: Original text content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase block">
                // PROSPECT CONTRACTING EST.
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Equipment Rental Services
              </h2>

              {/* Highlight Box containing the welcome text */}
              <div className="border-l-4 border-brand-orange pl-5 py-2">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  IHTIMAL Company, Equipment provides a complete range of equipment solutions and maintenance teams serving a wide range of infrastructure sectors. We aim to provide innovative solutions to the construction equipment industry and be a leader in the field of complete equipment solutions provider. Transparency and service excellence our aim is to provide timely and innovative infrastructure solutions to reduce risk and increase profitability for our customers.
                </p>
              </div>

              {/* Boutique offerings */}
              <div className="pt-6 space-y-4">
                <h3 className="font-outfit text-lg font-bold text-brand-navy">
                  Boutique Offerings to Our Clients
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {boutiqueOfferings.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-orange">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-slate-600 text-xs leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side: Creative image frame collage featuring the exact 2 original images */}
            <div className="lg:col-span-5 relative flex justify-center items-center">

              {/* Decorative dotted frame backing */}
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-brand-orange/10 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-navy-light/10 rounded-3xl -z-10" />

              {/* Image Collage Frame */}
              <div className="grid grid-cols-12 gap-4 w-full">

                {/* Image 1: original_1 */}
                <div className="col-span-8 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/equipment_original_1.png"
                    alt="Prospect Machinery Fleet 1"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Grid gap filling decorative element */}
                <div className="col-span-4 bg-brand-orange/90 rounded-2xl flex flex-col justify-center items-center text-center p-4 text-white shadow-inner">
                  <span className="text-xs font-bold uppercase tracking-widest block">KSA</span>
                  <span className="text-xl font-bold font-outfit mt-1">100%</span>
                  <span className="text-[9px] uppercase tracking-wider text-orange-200 mt-1">Compliance</span>
                </div>

                {/* Image 2: original_2 */}
                <div className="col-span-12 relative aspect-[2/1] rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/equipment_original_2.webp"
                    alt="Prospect Machinery Fleet 2"
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

      {/* 3. BENEFITS GRID (DEPLOYS THE EXACT 11 BENEFITS FROM SITE) */}
      {/* <section className="py-24 bg-brand-gray relative overflow-hidden">
        Soft Background Radial 
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // COST & EFFICIENCY GAINS
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Benefits of Renting with  The Ihtimal Com
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Explore how choosing a boutique equipment rental partner optimizes financial liquidity, safeguards compliance, and cuts operational overhead.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {originalBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass rounded-3xl p-8 hover:shadow-[0_15px_35px_rgba(255,101,0,0.08)] hover:border-brand-orange/30 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-brand-navy flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shrink-0">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-grow">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section> */}

      {/* 4. FLEET PORTFOLIO SECTION */}
      <section id="fleet-showcase" className="py-24 bg-white relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
                // EXPLORE FLEET RANGE
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-navy">
                Industrial Fleet Portfolio
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                Filter by division category. Every machine has validated credentials and receives routine OEM servicing.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 lg:justify-end shrink-0">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer outline-none",
                    activeTab === tab.id
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                      : "bg-brand-gray text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Fleet Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredFleet.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="bg-brand-gray rounded-3xl p-6 border border-gray-100 hover:border-brand-orange/20 hover:shadow-lg transition-all duration-300 flex flex-col group relative"
                >
                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-brand-orange/10 text-brand-orange text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {item.highlight}
                  </span>

                  {/* Header/Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-navy flex items-center justify-center mb-5 shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="font-outfit text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow">
                    {item.desc}
                  </p>

                  {/* Specs list */}
                  <div className="space-y-2 border-t border-gray-200/60 pt-4 mb-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Specifications</h4>
                    <ul className="space-y-1.5">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compliance list */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.compliance.map((comp, cIdx) => (
                      <span key={cIdx} className="bg-white border border-gray-200 text-slate-500 text-[9px] px-2 py-0.5 rounded-md font-semibold">
                        {comp}
                      </span>
                    ))}
                  </div>

                  {/* CTA button */}
                  <button
                    onClick={() => handleQuickEnquiry(item.name)}
                    className="w-full bg-white hover:bg-brand-orange hover:text-white text-brand-navy py-3 px-4 rounded-xl font-bold text-xs border border-gray-200 hover:border-brand-orange transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    Enquire on WhatsApp
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 5. PHOTO GALLERY SECTION */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-overlay">
          <Image
            src="/equipment_original_bg.jpg"
            alt="Refinery Site"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/15 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="flex items-center justify-center gap-2 text-brand-orange font-bold tracking-widest text-xs uppercase mb-3">
            <ImageIcon className="w-4 h-4" />
            PHOTO GALLERY
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
            Equipment Rental Visuals
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-12">
            Focus on the core problem your business solves and put out lots of content and enthusiasm and ideas about how to solve that problem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-[3/2] rounded-3xl overflow-hidden shadow-lg border border-white/10 bg-slate-900">
              <Image
                src="/equipment_original_1.png"
                alt=" The Ihtimal Company  Site Equipment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-left opacity-90 transition-opacity duration-300">
                <span className="text-[10px] font-bold text-brand-orange tracking-widest uppercase">DIVISION WORK</span>
                <h4 className="font-outfit text-lg font-bold mt-1 text-white">Heavy Lifting Machinery Showcase</h4>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative aspect-[3/2] rounded-3xl overflow-hidden shadow-lg border border-white/10 bg-slate-900">
              <Image
                src="/equipment_original_2.webp"
                alt=" The Ihtimal Company Fleet Mobilization"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-left opacity-90 transition-opacity duration-300">
                <span className="text-[10px] font-bold text-brand-orange tracking-widest uppercase">MOBILIZATION SITE</span>
                <h4 className="font-outfit text-lg font-bold mt-1 text-white">Infrastructure Logistics & Utility Fleet</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INQUIRY FORM SECTION */}
      <section id="quote-form" className="py-24 relative overflow-hidden bg-brand-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 border border-white/20">

            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-brand-navy text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Background Refinery */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-overlay">
                <Image
                  src="/industrial_hero_3.png"
                  alt="Industrial scene"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-brand-orange/15 blur-[60px]" />

              <div className="relative z-10 space-y-6">
                <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase">
                  // RENTAL HOTLINE
                </span>
                <h3 className="font-outfit text-2xl md:text-3xl font-bold leading-tight">
                  Ready to Deploy Coordinates?
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Submit the form detailing your machinery specifications. Our dispatch coordinators will compile a custom proposal and route back within 1 hour.
                </p>
              </div>

              <div className="relative z-10 mt-12 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Full Safety Clearance</h4>
                    <p className="text-[10px] text-slate-400">All permits, TUV compliance, and operator logs provided</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">24/7 Service Support</h4>
                    <p className="text-[10px] text-slate-400">Direct hookup with emergency field maintenance crews</p>
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
                Quick Rental Inquiry
              </h3>
              <p className="text-slate-500 text-xs mb-8">
                Tell us about your project machinery needs.
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
                    We have compiled your enquiry details. If the WhatsApp window did not open, click the button below to complete the connection.
                  </p>
                  <button
                    onClick={() => {
                      const formattedMessage = `*New Equipment Rental Inquiry*
----------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Requested Equipment:* ${formData.equipment}
*Rental Duration:* ${formData.duration}
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
                        placeholder="Industrial Est."
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
                      <label htmlFor="form-equipment" className="text-[10px] font-bold text-slate-400 uppercase">Select Equipment</label>
                      <div className="relative">
                        <select
                          id="form-equipment"
                          required
                          value={formData.equipment}
                          onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange text-xs text-brand-navy bg-brand-gray/50 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">-- Choose Equipment --</option>
                          {fleetItems.map(item => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Rental Duration</span>
                    <div className="grid grid-cols-3 gap-2">
                      {["Daily", "Weekly", "Monthly"].map((dur) => (
                        <button
                          key={dur}
                          type="button"
                          onClick={() => setFormData({ ...formData, duration: dur })}
                          className={cn(
                            "py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer",
                            formData.duration === dur
                              ? "bg-brand-navy text-white border-brand-navy"
                              : "bg-brand-gray text-slate-600 border-gray-200 hover:bg-slate-200"
                          )}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-details" className="text-[10px] font-bold text-slate-400 uppercase">Project Details / Message</label>
                    <textarea
                      id="form-details"
                      rows={3}
                      placeholder="Specify work details, duration, operators needed, or site coordinates..."
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
                    {loading ? "Processing..." : "Compile Inquiry & Connect via WhatsApp"}
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
