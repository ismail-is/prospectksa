"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    tagline: "Building a Stronger Tomorrow",
    title: "Building Industrial Excellence Across Saudi Arabia",
    highlight: "Saudi Arabia",
    description: "Leading provider of equipment rental, manpower solutions, coating, blasting, infrastructure, and industrial contracting services.",
    bgImage: "/industrial_hero_2.png",
    cta1Text: "Explore Services",
    cta1Href: "#services",
    cta2Text: "Our Projects",
    cta2Href: "#projects",
    hasWorker: true,
    tabLabel: "Industrial Services",
  },
  {
    tagline: "Unmatched Fleet & Manpower",
    title: "Heavy Equipment Rental & Manpower Solutions",
    highlight: "Manpower Solutions",
    description: "Access an extensive fleet of modern industrial machinery and a highly trained workforce certified to Saudi Aramco standards.",
    bgImage: "/industrial_hero_2.png",
    cta1Text: "Request Rental",
    cta1Href: "#services",
    cta2Text: "Learn More",
    cta2Href: "#about",
    hasWorker: false,
    tabLabel: "Equipment & Staffing",
  },
  {
    tagline: "Elite Engineering Services",
    title: "Advanced Coating, Blasting & Infrastructure",
    highlight: "Coating, Blasting & Infrastructure",
    description: "Delivering high-durability surface preparation and structural contracting solutions for the Kingdom's largest energy projects.",
    bgImage: "/industrial_hero_3.png",
    cta1Text: "View Projects",
    cta1Href: "#projects",
    cta2Text: "Contact Experts",
    cta2Href: "#contact",
    hasWorker: false,
    tabLabel: "Coating & Blasting",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yWorker = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Autoplay Slider Logic
  useEffect(() => {
    if (!isPlaying) return;

    const interval = 6000; // 6s duration
    const step = 50; // tick every 50ms
    const increment = (step / interval) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + increment;
      });
    }, step);

    return () => clearInterval(timer);
  }, [isPlaying, activeSlide]);

  const handleNext = () => {
    setProgress(0);
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleIndicatorClick = (index: number) => {
    setProgress(0);
    setActiveSlide(index);
  };

  const renderTitle = (title: string, highlight: string) => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="relative inline-block bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent pb-1">
          {highlight}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 bottom-0 h-[2px] bg-brand-orange/30 rounded"
          />
        </span>
        {parts[1]}
      </>
    );
  };

  const itemVariants: any = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -25, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy-dark pt-30"
    >
      {/* Background Image Carousel with Parallax & Ken Burns Effect */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: yBackground }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1.15 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[activeSlide].bgImage}
              alt={slides[activeSlide].title}
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Dark Gradients for perfect legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/85 to-transparent w-full md:w-3/4 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent z-10" />
      </motion.div>

      {/* Cybernetic Engineering Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] grid grid-cols-4 md:grid-cols-6 h-full w-full">
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full hidden md:block" />
        <div className="border-r border-white h-full hidden md:block" />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] flex flex-col justify-between h-full w-full py-24">
        <div className="border-b border-white w-full" />
        <div className="border-b border-white w-full" />
        <div className="border-b border-white w-full" />
      </div>

      {/* Main Slide Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center min-h-[70vh] pb-24">
        <div className="max-w-3xl min-h-[360px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
                exit: { opacity: 0, transition: { duration: 0.3 } },
              }}
              style={{ y: yContent, opacity }}
            >
              {/* Tagline */}
              <motion.span
                variants={itemVariants}
                className="flex items-center gap-2 text-brand-orange font-bold tracking-widest text-xs uppercase mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                {slides[activeSlide].tagline}
              </motion.span>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="font-outfit text-4xl md:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.05] mb-6 tracking-[-0.03em]"
              >
                {renderTitle(slides[activeSlide].title, slides[activeSlide].highlight)}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-slate-300/90 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-light tracking-wide"
              >
                {slides[activeSlide].description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                <Link
                  href={slides[activeSlide].cta1Href}
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all group shadow-[0_4px_14px_0_rgba(255,101,0,0.35)] hover:shadow-[0_6px_20px_rgba(255,101,0,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  {slides[activeSlide].cta1Text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={slides[activeSlide].cta2Href}
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
                >
                  {slides[activeSlide].cta2Text}
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Social/Contact Icons (Glassmorphic Dark Mode) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4"
      >
        <div className="bg-brand-navy-dark/40 backdrop-blur-md border border-white/10 p-2.5 rounded-2xl flex flex-col gap-3 shadow-2xl">
          {[
            { icon: MessageCircle, href: "https://wa.me/966551234567" },
            { icon: Phone, href: "tel:+966551234567" },
            { icon: Mail, href: "mailto:info@prospectksa.com" },
            { icon: MapPin, href: "#contact" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all hover:scale-110 border border-white/10"
            >
              <item.icon className="w-4.5 h-4.5" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Bottom Slider Control Panel */}
      <div className="absolute bottom-10 left-0 w-full z-30 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Ticking Progress Timeline Indicators */}
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            {slides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={idx}
                  onClick={() => handleIndicatorClick(idx)}
                  className="flex-1 text-left group focus:outline-none cursor-pointer"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white mb-2 transition-colors flex justify-between items-center">
                    <span>0{idx + 1}</span>
                    <span className={cn(
                      "transition-opacity duration-300",
                      isActive ? "opacity-100 text-brand-orange" : "opacity-0 group-hover:opacity-80"
                    )}>
                      {slide.tabLabel}
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-orange rounded-full"
                      style={{
                        width: isActive ? `${progress}%` : "0%",
                        transition: isPlaying && isActive && progress > 0 ? "width 50ms linear" : "none",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Play/Pause & Arrow Navigation */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Play / Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-brand-orange" />
              ) : (
                <Play className="w-4 h-4 text-brand-orange fill-brand-orange" />
              )}
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
