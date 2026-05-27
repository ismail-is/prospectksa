"use client";

import { motion } from "framer-motion";
import { Truck, Users, Droplets, Anchor, Wrench, Settings } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Equipment Rental",
    description: "Top quality heavy equipment on rent with operator for all industrial needs.",
    href: "/equipment-rental",
  },
  {
    icon: Users,
    title: "Manpower Services",
    description: "Skilled, semi-skilled and unskilled manpower supply across KSA.",
    href: "/manpower-services",
  },
  {
    icon: Droplets,
    title: "Blasting & Coating",
    description: "Abrasive blasting, painting and protective coating solutions.",
    href: "/blasting-coating",
  },
  {
    icon: Anchor,
    title: "Lifting Materials",
    description: "Wide range of lifting equipment and materials for safe operations.",
    href: "/contact",
  },
  {
    icon: Wrench,
    title: "Maintenance Works",
    description: "Industrial, mechanical, electrical & plant maintenance services.",
    href: "/contact",
  },
  {
    icon: Settings,
    title: "Industrial Support",
    description: "End-to-end support for shutdowns, turnarounds & daily operations.",
    href: "/contact",
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold tracking-wider text-xs md:text-sm uppercase mb-3 block">
              Our Services
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-brand-navy">
              Comprehensive Industrial Solutions
            </h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(255,101,0,0.12)] border border-gray-100 hover:border-brand-orange/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gray text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="flex items-center gap-2 text-brand-orange font-semibold text-sm group/link mt-auto w-fit"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
