"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Car,
  Wrench,
  Droplets,
  Sparkles,
  ShieldCheck,
  Gauge,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Phone,
  Clock,
  FileCheck,
  Zap,
  Activity,
  AlertTriangle,
  Settings,
  Truck,
  RotateCcw,
  Compass,
  Star,
  ChevronDown,
  Building2,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Interfaces ───────────────────────────────────────────────────────────────

interface ServiceItem {
  id: string;
  category: "all" | "workshop" | "wash" | "fleet";
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  specs: string;
  badge: string;
  icon: React.ElementType;
  accent: string;
}

interface FeaturePillar {
  icon: React.ElementType;
  title: string;
  desc: string;
  highlight: string;
}

interface PackageTier {
  name: string;
  subtitle: string;
  badge: string;
  isPopular?: boolean;
  features: string[];
  recommendedFor: string;
}

interface FaqItem {
  q: string;
  a: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const serviceCategories = [
  { id: "all", name: "All Capabilities" },
  { id: "workshop", name: "Vehicle Maintenance" },
  { id: "wash", name: "Car Wash & Detailing" },
  { id: "fleet", name: "Fleet AMC & Corporate" },
];

const serviceList: ServiceItem[] = [
  // ── Workshop & Mechanical ──
  {
    id: "computerized-diagnostics",
    category: "workshop",
    title: "Computerized Diagnostics & Electrical",
    subtitle: "Advanced Electronic Troubleshooting",
    desc: "State-of-the-art OBD-II and OEM dealer-level scanning systems to pinpoint engine, transmission, ABS, airbag, and ECU/sensor faults with 100% precision.",
    features: [
      "Engine management & live sensor telemetry",
      "ECU programming & fault clearing",
      "Alternator, starter motor & battery health test",
      "Wiring harness, fuse box & sensor diagnosis",
      "Comprehensive digital diagnostic health report",
    ],
    specs: "OEM Multi-Brand Diagnostic Scanners",
    badge: "Accurate Diagnostics",
    icon: Activity,
    accent: "brand-orange",
  },
  {
    id: "engine-mechanical-repair",
    category: "workshop",
    title: "Engine & Mechanical Overhauls",
    subtitle: "Full Power-train Rebuilding & Tuning",
    desc: "Expert mechanical rebuilding, cylinder head repair, fuel injection calibration, timing chain replacement, and complete engine overhauls for petrol and diesel fleets.",
    features: [
      "Petrol & diesel engine overhaul & reconditioning",
      "Timing belt, chain & tensioner replacement",
      "Fuel injector cleaning, test bench & calibration",
      "Water pump, thermostat & cooling system repair",
      "Intake & exhaust manifold decarbonizing",
    ],
    specs: "Petrol & Diesel Engines Supported",
    badge: "Heavy & Light Fleet",
    icon: Wrench,
    accent: "brand-navy",
  },
  {
    id: "preventive-maintenance-oil",
    category: "workshop",
    title: "Preventive Maintenance & Lube Service",
    subtitle: "Scheduled 50-Point Fleet Care",
    desc: "Rigorous manufacturer-specified periodic maintenance. Synthetic engine oil changes, transmission flushes, filter renewals, and multi-point vehicle safety checks.",
    features: [
      "Full synthetic & semi-synthetic premium oils (Mobil, Shell)",
      "OEM oil, air, cabin & fuel filter replacement",
      "Coolant, brake fluid & steering fluid exchange",
      "Belt tension, hose condition & battery terminal check",
      "Complete 50-point safety & roadworthiness inspection",
    ],
    specs: "Mobil / Shell / Castrol Certified",
    badge: "Fast Turnaround",
    icon: Gauge,
    accent: "brand-orange",
  },
  {
    id: "brake-suspension-steering",
    category: "workshop",
    title: "Brake, Suspension & Steering Systems",
    subtitle: "Road Safety & Handling Excellence",
    desc: "Precision brake disc skimming, brake pad renewal, shock absorber replacement, bushing refurbishment, and computerized laser wheel alignment for heavy and light duty.",
    features: [
      "Brake pad, shoe & disc rotor resurfacing/replacement",
      "ABS hydraulic unit & brake booster testing",
      "Heavy-duty shock absorbers, struts & leaf springs",
      "Tie rods, ball joints & steering rack overhaul",
      "Computerized laser wheel alignment & dynamic balancing",
    ],
    specs: "Laser Precision Alignment",
    badge: "Safety Essential",
    icon: ShieldCheck,
    accent: "brand-navy",
  },
  {
    id: "transmission-drivetrain",
    category: "workshop",
    title: "Transmission & Drivetrain Servicing",
    subtitle: "Smooth Shifting & Power Delivery",
    desc: "Specialized servicing for manual and automatic gearboxes, clutch plate renewals, universal joints, propeller shafts, and differential overhauls.",
    features: [
      "Automatic transmission fluid (ATF) power flush",
      "Heavy-duty clutch plate, pressure plate & bearing kit",
      "Differential oil replacement & gear backlash check",
      "CV joint, axle boots & propeller shaft balancing",
      "4x4 transfer case & all-wheel drive servicing",
    ],
    specs: "Manual & Automatic Systems",
    badge: "Drivetrain Specialist",
    icon: Settings,
    accent: "brand-orange",
  },
  {
    id: "ac-climate-control",
    category: "workshop",
    title: "Automotive AC & Climate Control",
    subtitle: "Superior Cooling in Extreme Gulf Heat",
    desc: "Full AC compressor repairs, condenser chemical wash, refrigerant evacuation & recharge (R134a/R1234yf), leak detection, and cabin anti-bacterial sanitization.",
    features: [
      "Refrigerant leak detection with electronic sniffers",
      "AC compressor overhaul, clutch & pulley replacement",
      "Condenser & evaporator core pressure cleaning",
      "Cabin air micro-filter replacement",
      "Ozone cabin treatment to eliminate odor & bacteria",
    ],
    specs: "R134a & Modern R1234yf Certified",
    badge: "Gulf Climate Ready",
    icon: Zap,
    accent: "brand-navy",
  },

  // ── Car Wash & Detailing ──
  {
    id: "high-pressure-foam-wash",
    category: "wash",
    title: "High-Pressure Active Foam Car Wash",
    subtitle: "Touchless Exterior Body & Chassis Cleaning",
    desc: "Triple-action pH-neutral active foam coupled with high-pressure water jets and undercarriage rotary sprayers to blast away road grime, sand, and industrial dust without scratching.",
    features: [
      "pH-neutral high-density snow foam pre-wash",
      "High-pressure chassis & underbody wash system",
      "Wheel rim, tire wall & brake caliper decontamination",
      "Spot-free reverse-osmosis (RO) purified water rinse",
      "Microfiber drying & streak-free glass finishing",
    ],
    specs: "Reverse Osmosis (RO) Spot-Free Water",
    badge: "Scratch-Free Clean",
    icon: Droplets,
    accent: "brand-orange",
  },
  {
    id: "interior-steam-detailing",
    category: "wash",
    title: "Interior Deep Steam Sanitization",
    subtitle: "Hospital-Grade Hygiene & Stain Extraction",
    desc: "Deep interior vacuuming, high-temperature steam cleaning for fabric seats, leather hydration treatment, carpet shampoo extraction, and air vent sterilization.",
    features: [
      "Deep fabric & carpet hot-water shampoo extraction",
      "140°C high-temp steam eradication of germs & bacteria",
      "Leather upholstery cleansing & UV nourishment balm",
      "Dashboard, console, trim & cup-holder detailing",
      "Trunk space vacuuming & deodorization treatment",
    ],
    specs: "High-Temperature Antimicrobial Steam",
    badge: "Deep Clean & Sanitize",
    icon: Sparkles,
    accent: "brand-navy",
  },
  {
    id: "paint-correction-polish",
    category: "wash",
    title: "Exterior Machine Polish & Detailing",
    subtitle: "Paint Gloss Restoration & Swirl Removal",
    desc: "Multi-stage rotary and dual-action machine compounding to eliminate swirl marks, oxidation, bird drop etching, and sand haze, sealed with high-gloss synthetic sealant.",
    features: [
      "Clay bar surface decontamination & iron fallout remover",
      "Multi-stage machine compounding & finishing glaze",
      "Headlight restoration & UV protective topcoat",
      "Hydrophobic synthetic paint sealant or wax coating",
      "Plastics, rubber trim & tire satin dressing",
    ],
    specs: "Multi-Stage Dual-Action Polishing",
    badge: "Showroom Gloss",
    icon: Star,
    accent: "brand-orange",
  },
  {
    id: "heavy-truck-equipment-wash",
    category: "wash",
    title: "Heavy Fleet, Truck & Tanker Wash",
    subtitle: "Industrial Sized Bays for Commercial Vehicles",
    desc: "Dedicated high-clearance wash bays for heavy trucks, boom trucks, buses, pickups, and plant machinery with industrial degreasing of chassis and mechanical components.",
    features: [
      "High-clearance bays accommodating 18-wheelers & buses",
      "Heavy-duty biodegradable engine & chassis degreaser",
      "Removal of construction mud, asphalt & industrial grime",
      "Aramco-contractor pre-inspection wash preparation",
      "High-volume water flow with oil-water separator compliance",
    ],
    specs: "Up to 50T Heavy Vehicles & Buses",
    badge: "Industrial Wash Bays",
    icon: Truck,
    accent: "brand-navy",
  },

  // ── Fleet AMC & Corporate ──
  {
    id: "corporate-fleet-amc",
    category: "fleet",
    title: "Corporate Fleet AMC Contracts",
    subtitle: "End-to-End SLA-Driven Fleet Management",
    desc: "Comprehensive annual maintenance and washing contracts for contracting firms, logistics providers, and corporate vehicle fleets across Saudi Arabia.",
    features: [
      "Dedicated bay allocation for zero downtime queuing",
      "Scheduled preventative maintenance cycles per mileage",
      "Consolidated monthly invoicing & transparent cost reports",
      "Digital vehicle history tracking & maintenance records",
      "Discounted corporate rates on parts, labour & detailing",
    ],
    specs: "Flexible 6 / 12 / 24-Month Contracts",
    badge: "Corporate Choice",
    icon: Building2,
    accent: "brand-orange",
  },
  {
    id: "mobile-breakdown-service",
    category: "fleet",
    title: "Mobile Field Service & Breakdown Support",
    subtitle: "Rapid Response Dispatch Across Eastern Province",
    desc: "Mobile workshop vans equipped with diagnostic laptops, battery boosters, portable compressors, and emergency mechanics dispatched directly to project job sites.",
    features: [
      "On-site diagnostic scanning & roadside jumpstarts",
      "Mobile tyre puncture repair & air inflation",
      "Emergency fuel delivery & coolant replenishment",
      "Field mechanic dispatch for critical job-site vehicles",
      "Flatbed towing coordination to our Jubail workshop",
    ],
    specs: "Jubail, Dammam, Khobar & Ras Tanura Coverage",
    badge: "Rapid Response",
    icon: RotateCcw,
    accent: "brand-navy",
  },
];

const pillars: FeaturePillar[] = [
  {
    icon: Activity,
    title: "Computerized Diagnostics",
    desc: "OEM-grade diagnostic systems detect faults across European, American, Japanese & Asian vehicles instantly.",
    highlight: "OEM Standard",
  },
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    desc: "Highly experienced master mechanics, auto-electricians, and professional detailing craftsmen.",
    highlight: "Expert Crew",
  },
  {
    icon: FileCheck,
    title: "Genuine Parts & Fluids",
    desc: "We exclusively install manufacturer-approved OEM spare parts and certified high-grade synthetic lubricants.",
    highlight: "100% Genuine",
  },
  {
    icon: Droplets,
    title: "Eco-Friendly Water Recycling",
    desc: "Advanced oil-water separator systems fully compliant with Royal Commission (RCJY) environmental standards.",
    highlight: "RCJY Compliant",
  },
];

const packages: PackageTier[] = [
  {
    name: "Express Care & Wash",
    subtitle: "Ideal for Routine Service Intervals",
    badge: "Essential",
    features: [
      "Synthetic engine oil & filter replacement",
      "25-point safety & roadworthiness inspection",
      "Brake fluid, coolant & washer fluid top-up",
      "High-pressure active foam exterior wash",
      "Interior cabin vacuuming & glass cleaning",
      "Tire pressure & tread depth check",
    ],
    recommendedFor: "Sedans, Compact SUVs & Daily Fleet Pickups",
  },
  {
    name: "Major Service & Deep Detailing",
    subtitle: "Comprehensive Overhaul & Rejuvenation",
    badge: "Most Popular",
    isPopular: true,
    features: [
      "Full synthetic oil + OEM oil, air & AC filters",
      "Spark plug inspection or replacement",
      "Complete computerized diagnostic scanner audit",
      "Brake disc skim / pad overhaul & brake fluid flush",
      "Transmission fluid & differential level check",
      "High-pressure chassis & underbody degrease",
      "Full interior steam sanitization & stain removal",
      "Exterior machine buffing & protective paint sealant",
    ],
    recommendedFor: "Commercial SUVs, Vans & Supervisor Pickups",
  },
  {
    name: "Corporate Fleet AMC",
    subtitle: "Tailored Multi-Vehicle Management",
    badge: "Enterprise",
    features: [
      "Custom scheduled maintenance per mileage interval",
      "Priority workshop bay booking & zero-wait intake",
      "Free scheduled weekly/monthly vehicle wash vouchers",
      "Dedicated account manager & digital maintenance logs",
      "24/7 emergency roadside dispatch in Eastern Province",
      "Consolidated monthly invoicing with corporate credit terms",
      "Saudi Aramco / SABIC site compliance prep checks",
    ],
    recommendedFor: "Contractors, Logistics Fleets & Plant Operations",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where is your workshop and car wash facility located?",
    a: "Our state-of-the-art workshop and high-capacity car wash facility is strategically situated in Jubail Industrial Area, Saudi Arabia, with rapid access for corporate and industrial clients. We also operate mobile breakdown and field service vans serving Jubail, Dammam, Khobar, and surrounding industrial hubs.",
  },
  {
    q: "What types of vehicles and fleets can you accommodate?",
    a: "We service the entire spectrum of automotive fleets: passenger sedans, 4x4 SUVs, light commercial pickups (Hilux, Land Cruiser, D-Max), commercial vans, passenger transport buses, and heavy machinery trucks up to 50 tons in our specialized high-clearance wash and repair bays.",
  },
  {
    q: "Do you offer Annual Maintenance Contracts (AMC) for corporate fleets?",
    a: "Yes! We specialize in tailored AMC fleet agreements for contracting firms, logistics companies, and industrial operators. Our contracts include dedicated priority bays, preventative maintenance schedules, routine washing packages, consolidated monthly invoicing, and full digital record-keeping.",
  },
  {
    q: "Can you prepare fleet vehicles for Saudi Aramco or SABIC inspection?",
    a: "Absolutely. We conduct rigorous pre-inspection roadworthiness audits covering fire extinguisher brackets, safety beacon lights, reverse alarms, tire condition, brake performance, fluid leaks, and electrical systems to ensure your vehicles pass strict Aramco/SABIC contractor vehicle gate requirements.",
  },
  {
    q: "What cleaning chemicals and water systems are used for the car wash?",
    a: "We use pH-neutral, non-abrasive active foams and biodegradable degreasers that protect paint clearcoats and vehicle seals. Our wash facility features multi-stage Reverse Osmosis (RO) filtration for spot-free rinsing and environmental oil-water separators certified to Saudi environmental guidelines.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function WorkshopVehicleMaintenancePage() {
  const [activeTab, setActiveTab] = useState<"all" | "workshop" | "wash" | "fleet">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    serviceType: "Workshop Maintenance",
    vehicleType: "Pickup / 4x4",
    quantity: "1 Vehicle",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filteredServices =
    activeTab === "all"
      ? serviceList
      : serviceList.filter((item) => item.category === activeTab);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `*New Service Booking Request - Workshop & Car Wash*
------------------------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company || "Individual"}
*Phone:* ${formData.phone}
*Required Service:* ${formData.serviceType}
*Vehicle Type:* ${formData.vehicleType}
*Fleet Quantity:* ${formData.quantity}
*Project / Requirements Notes:*
${formData.notes || "None specified"}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/966539370929?text=${encoded}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  const handleQuickInquiry = (serviceTitle: string) => {
    const msg = `*Quick Inquiry: ${serviceTitle}*
------------------------------------------------
Hello, I would like to inquire about pricing, scheduling, and availability for:
*Service:* ${serviceTitle}

Please contact me with more information.`;
    window.open(`https://wa.me/966539370929?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-brand-gray selection:bg-brand-orange selection:text-white">
      {/* ── 1. HERO SECTION ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy-dark overflow-hidden pt-36 pb-24">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-brand-orange/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-navy-light/40 blur-[160px] pointer-events-none" />

        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/equipment_original_bg.jpg"
            alt="Workshop Vehicle Maintenance and Car Wash"
            fill
            className="object-cover opacity-20 select-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/85 to-brand-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-transparent to-brand-navy-dark/70" />
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] grid grid-cols-6 h-full w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
                Comprehensive Fleet Engineering &amp; Automotive Care
              </span>
            </div>

            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              Workshop Vehicle{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                Maintenance
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-200 font-semibold">
                &amp; Professional Car Wash
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              State-of-the-art automotive repair workshop, computerized diagnostics, preventive fleet maintenance, and industrial-grade car wash facilities serving contractors, commercial fleets, and private vehicles across Jubail &amp; the Kingdom.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
              {[
                { value: "15+", label: "Service Bays" },
                { value: "10,000+", label: "Vehicles Serviced" },
                { value: "100%", label: "Genuine Parts" },
                { value: "24/7", label: "Breakdown Support" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-2">
                  <div className="font-outfit font-black text-2xl md:text-3xl text-brand-orange mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services-grid"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,101,0,0.5)] hover:-translate-y-0.5 flex items-center gap-2 group w-full sm:w-auto justify-center text-sm"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#booking-form"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center flex items-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4 text-brand-orange" />
                Book Service / Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CAPABILITIES GRID & TABS ───────────────────────────────────────── */}
      <section id="services-grid" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // FULL SPECTRUM VEHICLE CARE
            </span>
            <h2 className="font-outfit text-3xl md:text-5xl font-bold text-brand-navy mb-5">
              Precision Workshop &amp; Wash Services
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              From minor scheduled preventive maintenance and computerized diagnostics to complete engine overhauls, high-pressure industrial washes, and enterprise fleet agreements.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {serviceCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id as any)}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer",
                      isActive
                        ? "bg-brand-orange text-white shadow-[0_4px_15px_rgba(255,101,0,0.35)] scale-105"
                        : "bg-brand-gray text-slate-600 hover:bg-slate-200/70"
                    )}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-brand-orange/40 hover:shadow-[0_12px_40px_rgba(255,101,0,0.12)] transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar with Icon & Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand-gray text-brand-navy flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-outfit text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                        {service.subtitle}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Bullet Features */}
                      <div className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Specs and Action Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-mono text-slate-400 font-semibold truncate">
                        {service.specs}
                      </span>
                      <button
                        onClick={() => handleQuickInquiry(service.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark transition-colors shrink-0 group/btn"
                      >
                        Inquire
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 3. FOUR PILLARS / WHY CHOOSE US ───────────────────────────────────── */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy-light/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // WORKSHOP INFRASTRUCTURE &amp; STANDARDS
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
              Engineered For Reliability &amp; Zero Downtime
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We understand that every idle hour in commercial fleets incurs substantial cost. Our workshop operations are organized to provide rapid turnaround without compromising technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 text-brand-orange flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-2">
                      {pillar.highlight}
                    </span>
                    <h3 className="font-outfit text-xl font-bold mb-3 text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PACKAGES & FLEET CONTRACTS ────────────────────────────────────── */}
      <section className="py-24 bg-brand-gray relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // SERVICE PACKAGES
            </span>
            <h2 className="font-outfit text-3xl md:text-5xl font-bold text-brand-navy mb-4">
              Transparent Maintenance &amp; Detailing Plans
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Choose from pre-configured periodic servicing bundles or contact us for customized corporate contracts with negotiated volume pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative",
                  pkg.isPopular
                    ? "bg-white border-2 border-brand-orange shadow-[0_16px_50px_rgba(255,101,0,0.15)] lg:-translate-y-3"
                    : "bg-white border border-slate-200/80 hover:shadow-xl shadow-sm"
                )}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Recommended Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">{pkg.subtitle}</p>

                  <div className="p-3.5 rounded-2xl bg-brand-gray mb-6 text-xs text-slate-700">
                    <span className="font-bold text-brand-navy block mb-1">Recommended for:</span>
                    <span>{pkg.recommendedFor}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#booking-form"
                  className={cn(
                    "w-full py-3.5 rounded-full text-center font-bold text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2",
                    pkg.isPopular
                      ? "bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/30"
                      : "bg-brand-navy hover:bg-brand-navy-dark text-white"
                  )}
                >
                  Choose {pkg.name}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BOOKING & INQUIRY FORM ────────────────────────────────────────── */}
      <section id="booking-form" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-brand-navy-dark text-white rounded-3xl p-8 md:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Ambient background glow inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
              <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
                // INSTANT RESERVATION &amp; QUOTE
              </span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
                Schedule Service or Request Fleet Quote
              </h2>
              <p className="text-slate-300 text-sm">
                Fill out the quick details below and our service advisors will contact you immediately via WhatsApp or phone.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/10 border border-brand-orange/30 text-center max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-outfit text-2xl font-bold mb-2">Request Transmitted!</h3>
                <p className="text-sm text-slate-300 mb-6">
                  Your booking details have been prepared for WhatsApp transmission. Our workshop manager in Jubail will review and respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-dark transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohammed Al-Otaibi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Gulf Contracting Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +966 5X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Required Service *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm appearance-none cursor-pointer"
                    >
                      <option value="Full Workshop Maintenance" className="bg-brand-navy-dark text-white">
                        Full Workshop Maintenance
                      </option>
                      <option value="Computerized Diagnostics" className="bg-brand-navy-dark text-white">
                        Computerized Diagnostics
                      </option>
                      <option value="Engine & Mechanical Overhaul" className="bg-brand-navy-dark text-white">
                        Engine &amp; Mechanical Overhaul
                      </option>
                      <option value="High-Pressure Car Wash & Detailing" className="bg-brand-navy-dark text-white">
                        High-Pressure Car Wash &amp; Detailing
                      </option>
                      <option value="Heavy Fleet & Truck Wash" className="bg-brand-navy-dark text-white">
                        Heavy Fleet &amp; Truck Wash
                      </option>
                      <option value="Corporate Fleet AMC Agreement" className="bg-brand-navy-dark text-white">
                        Corporate Fleet AMC Agreement
                      </option>
                      <option value="Emergency Breakdown / Mobile Support" className="bg-brand-navy-dark text-white">
                        Emergency Breakdown / Mobile Support
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Vehicle Type *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm appearance-none cursor-pointer"
                    >
                      <option value="Pickup / 4x4 (Hilux, Land Cruiser)" className="bg-brand-navy-dark text-white">
                        Pickup / 4x4 (Hilux, Land Cruiser)
                      </option>
                      <option value="Passenger Car / Sedan / SUV" className="bg-brand-navy-dark text-white">
                        Passenger Car / Sedan / SUV
                      </option>
                      <option value="Commercial Van / HiAce" className="bg-brand-navy-dark text-white">
                        Commercial Van / HiAce
                      </option>
                      <option value="Passenger Bus / Coaster" className="bg-brand-navy-dark text-white">
                        Passenger Bus / Coaster
                      </option>
                      <option value="Heavy Truck / Tanker / Trailer" className="bg-brand-navy-dark text-white">
                        Heavy Truck / Tanker / Trailer
                      </option>
                      <option value="Multiple Fleet Units" className="bg-brand-navy-dark text-white">
                        Multiple Fleet Units (Commercial)
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Fleet Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1 vehicle or 10 fleet units"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Project Details / Specific Issues / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe specific symptoms (e.g. check engine light, brake squeal, oil change request, or wash frequency)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm resize-none"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <a
                    href="tel:+966539370929"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-brand-orange transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    Prefer to speak directly? Call: +966 133636284
                  </a>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white px-9 py-4 rounded-full font-bold text-sm transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,101,0,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Opening WhatsApp...</span>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Send Request via WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 6. FREQUENTLY ASKED QUESTIONS ────────────────────────────────────── */}
      <section className="py-24 bg-brand-gray relative">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-3 block">
              // GOT QUESTIONS?
            </span>
            <h2 className="font-outfit text-3xl md:text-5xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about our automotive workshop facilities, service standards, and commercial wash solutions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-outfit font-bold text-base md:text-lg text-brand-navy hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180 text-brand-orange"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

      {/* ── 7. BOTTOM CTA STRIP ──────────────────────────────────────────────── */}
      {/* <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-navy-dark text-white border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-2">
              Ready to Upgrade Your Fleet Maintenance &amp; Wash Standards?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Talk to our Jubail workshop engineers today for customized quotes, site inspection visits, and priority bay reservations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="https://wa.me/966539370929"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(255,101,0,0.4)] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Support
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}

