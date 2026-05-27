"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    image: "/project_image_1.png",
    title: "Aramco - Pipeline Project",
    category: "Blasting, Coating & Painting",
  },
  {
    image: "/about_collage_1.png",
    title: "SABIC - Plant Maintenance",
    category: "Mechanical Maintenance",
  },
  {
    image: "/industrial_hero_bg.png",
    title: "NEOM - Infrastructure Works",
    category: "Civil & Structural Works",
  },
  {
    image: "/project_image_1.png", // Reuse for demonstration of scroll
    title: "Industrial Shutdown Project",
    category: "Turnaround & Maintenance",
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <span className="text-brand-orange font-bold tracking-wider text-xs md:text-sm uppercase mb-3 block">
              Our Projects
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-brand-navy">
              Projects That Define Excellence
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4"
          >
            <Link
              href="/project-completed"
              className="text-brand-navy font-semibold hover:text-brand-orange transition-colors mr-4 hidden md:flex items-center gap-2 group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-1536px)/2+2rem))]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex gap-6 overflow-x-auto pb-12 pt-4 pr-8 snap-x snap-mandatory scrollbar-hide"
          ref={scrollContainerRef}
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] snap-start group cursor-pointer"
            >
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                  <span className="text-white font-semibold">Explore Project</span>
                  <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 font-medium">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
