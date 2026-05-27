"use client";

import { motion } from "framer-motion";
import { Users, Database, HardHat, Award } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Engineers & Technical Experts",
    tag: "// TEAM",
  },
  {
    icon: Database,
    value: 75000,
    suffix: "+",
    label: "Aramco-Certified Talent Pool",
    tag: "// DATABASE",
  },
  {
    icon: HardHat,
    value: 100,
    suffix: "+",
    label: "Projects Completed Successfully",
    tag: "// WORK",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years of Industrial Excellence",
    tag: "// EXPERIENCE",
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // premium ease out
    },
  },
};

export default function Stats() {
  return (
    <>
    <br/>
    <br/>
    <section className="relative z-30 -mt-16 md:-mt-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative overflow-hidden group rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_15px_35px_rgba(11,25,44,0.06)] hover:shadow-[0_25px_50px_rgba(11,25,44,0.12)] hover:border-brand-orange/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[190px]"
            >
              {/* Technical/Industrial Corner Crosshairs */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-slate-300 group-hover:border-brand-orange/60 transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-slate-300 group-hover:border-brand-orange/60 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-slate-300 group-hover:border-brand-orange/60 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-slate-300 group-hover:border-brand-orange/60 transition-colors duration-300" />

              {/* Radial Highlight Glow Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Row: Index Tag & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-brand-orange transition-colors duration-300">
                  {stat.tag}
                </span>
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-inner">
                  <stat.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              {/* Bottom Row: Stat Value & Label */}
              <div>
                <h3 className="font-outfit text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-2 flex items-baseline">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-snug group-hover:text-slate-600 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
