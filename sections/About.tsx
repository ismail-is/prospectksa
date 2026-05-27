"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const bulletPoints = [
  "ISO 9001, ISO 14001, ISO 45001 Certified",
  "Highly Skilled Workforce",
  "Advanced Equipment & Technology",
  "Strong Focus on Safety & Quality",
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <motion.span variants={itemVariants} className="text-brand-orange font-bold tracking-wider text-xs md:text-sm uppercase mb-4 block">
              About Us
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="font-outfit text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Delivering Excellence <br className="hidden md:block" />
              With Commitment
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8 leading-relaxed">
              Prospect KSA (Ihtimal Company) is a trusted partner in Saudi Arabia's industrial growth. We provide tailored solutions with unmatched safety, quality and reliability.
            </motion.p>
            
            <motion.div variants={containerVariants} className="flex flex-col gap-4 mb-10">
              {bulletPoints.map((point, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
                  <span className="text-brand-navy font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3.5 rounded-full font-semibold transition-all group"
              >
                More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute top-0 right-0 w-3/4 h-5/6 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about_collage_1.png"
                alt="Industrial Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/10 mix-blend-overlay" />
            </div>
            
            {/* Secondary offset block (simulating collage) */}
            <div className="absolute bottom-10 left-0 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/industrial_hero_bg.png"
                alt="Refinery"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(11,25,44,0.3)] z-10 flex flex-col items-center justify-center text-center max-w-[200px]"
            >
              <div className="w-16 h-16 rounded-full border border-brand-orange/30 flex items-center justify-center mb-4 text-brand-orange">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-outfit font-bold text-lg leading-tight mb-2">Safety Is Our</h4>
              <p className="text-brand-orange font-bold text-lg">Core Value</p>
              <div className="w-8 h-1 bg-brand-orange rounded-full mt-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
