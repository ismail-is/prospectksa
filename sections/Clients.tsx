"use client";

import { Building2, Component, Diamond, Factory, Flame, Hexagon, Option, Zap } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  { name: "Aramco Partner", icon: Flame },
  { name: "SABIC Industrial", icon: Hexagon },
  { name: "Ma'aden Mining", icon: Diamond },
  { name: "Siemens Energy", icon: Zap },
  { name: "Sinopec Group", icon: Factory },
  { name: "Petro Rabigh", icon: Component },
  { name: "SEC", icon: Building2 },
  { name: "SWCC", icon: Option },
];

export default function Clients() {
  // Duplicate array for seamless marquee
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center md:text-left">
        <span className="text-brand-orange font-bold tracking-wider text-xs md:text-sm uppercase block">
          Our Trusted Clients
        </span>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-16 md:gap-32 pl-16 md:pl-32 whitespace-nowrap"
        >
          {marqueeClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <client.icon className="w-10 h-10 text-brand-navy" />
              <span className="font-outfit font-bold text-2xl text-brand-navy">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
