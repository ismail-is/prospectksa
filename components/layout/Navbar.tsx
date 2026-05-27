"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight, ChevronDown, Wrench, Users, Paintbrush, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/project-completed" },
  { name: "Contact Us", href: "/contact" },
];

const servicesList = [
  {
    name: "Equipment Rental",
    desc: "Premium fleet of cranes, excavators, and heavy machinery.",
    href: "/equipment-rental",
    image: "/industrial_hero_2.png",
    icon: Wrench,
  },
  {
    name: "Manpower Services",
    desc: "Aramco-certified engineers, technicians, and skilled labor.",
    href: "/manpower-services",
    image: "/industrial_hero_3.png",
    icon: Users,
  },
  {
    name: "Blasting & Coating",
    desc: "High-durability surface preparation and industrial coating.",
    href: "/blasting-coating",
    image: "/industrial_hero_1.png",
    icon: Paintbrush,
  },
  {
    name: "Lifting Materials",
    desc: "Rigging hardware, slings, shackles, and material handling.",
    href: "/lifting-materials",
    image: "/project_image_1.png",
    icon: Boxes,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 flex justify-center">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-out rounded-full px-6 py-3 w-full max-w-6xl",
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-white/25 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "bg-brand-navy-dark/40 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            <div className="relative w-36 h-12 md:w-44 md:h-14">
              <Image
                src="/images/logo.webp"
                alt="Prospect KSA Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 relative">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    onMouseEnter={() => {
                      setServicesDropdownOpen(true);
                      setHoveredLink(link.name);
                    }}
                    onMouseLeave={() => {
                      setServicesDropdownOpen(false);
                      setHoveredLink(null);
                    }}
                    className="relative py-2"
                  >
                    <button
                      className={cn(
                        "relative px-4 py-2 text-sm font-semibold transition-colors duration-300 flex items-center gap-1.5 cursor-pointer outline-none",
                        hoveredLink === link.name 
                          ? "text-brand-orange" 
                          : scrolled 
                            ? "text-brand-navy" 
                            : "text-white"
                      )}
                    >
                      {hoveredLink === link.name && (
                        <motion.div
                          layoutId="navbar-hover"
                          className={cn(
                            "absolute inset-0 rounded-full -z-10",
                            scrolled ? "bg-brand-orange/10" : "bg-white/10"
                          )}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span>{link.name}</span>
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", servicesDropdownOpen && "rotate-180")} />
                    </button>

                    {/* Creative Dropdown Panel */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className={cn(
                            "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[740px] rounded-3xl p-6 shadow-2xl border flex gap-6 z-50 text-left",
                            scrolled
                              ? "bg-white/95 backdrop-blur-xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-brand-navy"
                              : "bg-brand-navy-dark/95 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white"
                          )}
                        >
                          {/* Left side: List of services */}
                          <div className="flex-1 flex flex-col gap-2">
                            <h4 className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2 px-3">
                              // OUR SERVICES
                            </h4>
                            {servicesList.map((service, index) => {
                              const isHovered = hoveredService === index;
                              return (
                                <Link
                                  key={index}
                                  href={service.href}
                                  onMouseEnter={() => setHoveredService(index)}
                                  className={cn(
                                    "flex items-start gap-4 p-3.5 rounded-2xl transition-all duration-300 group/item",
                                    isHovered
                                      ? scrolled
                                        ? "bg-brand-gray"
                                        : "bg-white/5"
                                      : "bg-transparent"
                                  )}
                                >
                                  <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                                    isHovered
                                      ? "bg-brand-orange text-white"
                                      : scrolled
                                        ? "bg-brand-gray text-brand-navy"
                                        : "bg-white/10 text-white"
                                  )}>
                                    <service.icon className="w-5 h-5 group-hover/item:scale-110 transition-transform duration-300" />
                                  </div>
                                  <div>
                                    <h5 className={cn(
                                      "font-bold text-sm mb-1 transition-colors duration-300",
                                      isHovered ? "text-brand-orange" : scrolled ? "text-brand-navy" : "text-white"
                                    )}>
                                      {service.name}
                                    </h5>
                                    <p className={cn(
                                      "text-xs leading-relaxed transition-colors duration-300",
                                      scrolled ? "text-slate-500" : "text-slate-400"
                                    )}>
                                      {service.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Right side: Dynamic Preview Image */}
                          <div className="w-[280px] h-[340px] relative rounded-2xl overflow-hidden shrink-0 bg-slate-900 shadow-inner">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={hoveredService}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full"
                              >
                                <Image
                                  src={servicesList[hoveredService].image}
                                  alt={servicesList[hoveredService].name}
                                  fill
                                  className="object-cover opacity-80"
                                  sizes="280px"
                                  priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy-dark/30 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                                  <span className="text-[9px] font-mono tracking-widest text-brand-orange font-bold uppercase mb-1 block">
                                    PREVIEW DIVISION
                                  </span>
                                  <h6 className="font-outfit font-bold text-base leading-snug">
                                    {servicesList[hoveredService].name}
                                  </h6>
                                </div>
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold transition-colors duration-300",
                    hoveredLink === link.name 
                      ? "text-brand-orange" 
                      : scrolled 
                        ? "text-brand-navy" 
                        : "text-white"
                  )}
                >
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="navbar-hover"
                      className={cn(
                        "absolute inset-0 rounded-full -z-10",
                        scrolled ? "bg-brand-orange/10" : "bg-white/10"
                      )}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+966539370929"
              className={cn(
                "flex items-center gap-2 transition-colors group",
                scrolled ? "text-brand-navy hover:text-brand-orange" : "text-white hover:text-brand-orange"
              )}
            >
              <div className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                scrolled ? "bg-brand-gray group-hover:bg-brand-orange/10" : "bg-white/10 group-hover:bg-white/20"
              )}>
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold hidden xl:block">+966 53 937 0929</span>
            </a>
            
            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_4px_14px_0_rgba(255,101,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,101,0,0.23)] hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden z-50 w-10 h-10 flex items-center justify-center rounded-full transition-colors",
              scrolled 
                ? "text-brand-navy bg-brand-gray hover:bg-brand-orange/10 hover:text-brand-orange" 
                : "text-white bg-white/10 hover:bg-white/20"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 lg:hidden flex flex-col shadow-2xl border-l border-gray-100"
            >
              <div className="p-6 pb-0 flex justify-start border-b border-gray-50 mb-6">
                 {/* Empty header area since X button is in navbar, but we keep padding */}
                 <div className="h-16" />
              </div>

              <div className="flex flex-col px-6 gap-2 overflow-y-auto max-h-[60vh]">
                {navLinks.map((link, i) => {
                  if (link.name === "Services") {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="border-b border-gray-50"
                      >
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="w-full flex items-center justify-between py-4 text-2xl font-outfit font-bold text-brand-navy hover:text-brand-orange transition-colors"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={cn("w-6 h-6 transition-transform duration-300 text-slate-400", mobileServicesOpen && "rotate-180 text-brand-orange")} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden flex flex-col pl-4 pb-4 gap-3"
                            >
                              {servicesList.map((service, idx) => (
                                <Link
                                  key={idx}
                                  href={service.href}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="text-lg font-semibold text-slate-600 hover:text-brand-orange transition-colors py-1 flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-4 text-2xl font-outfit font-bold text-brand-navy hover:text-brand-orange transition-colors border-b border-gray-50"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto p-6 bg-brand-gray/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  <a href="tel:+966539370929" className="flex items-center gap-3 text-brand-navy p-4 bg-white rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Call Us Now</p>
                      <p className="font-bold text-lg">+966 53 937 0929</p>
                    </div>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white text-center px-6 py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
