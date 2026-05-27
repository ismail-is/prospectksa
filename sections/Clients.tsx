"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const clientLogos = [
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

export default function Clients() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Duplicate array for seamless infinite marquee loop
  const marqueeClients = [...clientLogos, ...clientLogos];

  const gridContainerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const gridItemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 mb-14 text-center">
        <span className="text-brand-orange font-bold tracking-wider text-xs md:text-sm uppercase block mb-3">
          Our Trusted Clients
        </span>
        <h2 className="font-outfit text-3xl md:text-5xl font-black text-brand-navy mb-4">
          Partners in Industrial Progress
        </h2>
        <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mb-6" />
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          We are proud to serve the Kingdom's leading industrial enterprises, energy developers, and construction pioneers.
        </p>
      </div>

      {/* Marquee slider track */}
      <div className="relative w-full flex items-center overflow-x-hidden py-4 select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-10 whitespace-nowrap"
        >
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="relative w-[180px] h-[80px] bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-3 shadow-xs hover:border-brand-orange/30 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  sizes="180px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Show All Toggle Action */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-navy hover:border-brand-orange text-brand-navy hover:text-brand-orange rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
        >
          <span>{isExpanded ? "Hide Client Grid" : "View All Client Partners"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180 text-brand-orange" : ""
            }`}
          />
        </button>
      </div>

      {/* Expanding Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="container mx-auto px-4 md:px-8 pt-16 border-t border-slate-100 mt-14">
              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6"
              >
                {clientLogos.map((client) => (
                  <motion.div
                    key={client.id}
                    variants={gridItemVariants}
                    className="relative bg-white border border-slate-100 hover:border-brand-orange/30 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 aspect-square shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative w-full h-2/3">
                      <Image
                        src={client.src}
                        alt={client.name}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                        sizes="120px"
                      />
                    </div>
                    <span className="font-outfit font-black text-[10px] text-slate-400 group-hover:text-brand-navy transition-colors text-center uppercase tracking-wider block">
                      {client.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
