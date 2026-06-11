"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe,
  MessageCircle,
  ShieldCheck,
  Wrench,
  PhoneCall,
  ArrowUpRight,
  Award,
} from "lucide-react";

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects Completed", href: "/project-completed" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "Equipment Rental", href: "/equipment-rental" },
  { name: "Manpower Services", href: "/manpower-services" },
  { name: "Blasting & Coating", href: "/blasting-coating" },
  { name: "Lifting Materials", href: "/lifting-materials" },
];

const fadeInUp: any = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy-dark text-slate-300 overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] -translate-x-1/2 rounded-full bg-brand-orange/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-navy-light/10 blur-[150px] pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />

      {/* ── CTA Strip ────────────────────────────────────────── */}
      <div className="border-b border-white/5 py-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            {...fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-outfit text-xl md:text-2xl font-black text-white leading-tight">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Get expert consultation from our industrial specialists.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,101,0,0.5)] hover:-translate-y-0.5 group"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer Body ──────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <motion.div
            {...fadeInUp}
            className="sm:col-span-2 lg:col-span-4 flex flex-col gap-6"
          >
            {/* Logo */}
            <Link href="/" className="inline-block group">
              <div className="relative w-[160px] h-[56px]">
                <Image
                  src="/images/logo.webp"
                  alt=" The Ihtimal Com Logo"
                  fill
                  className="object-contain object-center bg-white rounded-[10px] "
                  sizes="160px"
                  priority={false}
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Premier industrial contracting solutions — heavy equipment rentals, certified manpower, blasting & coating, and lifting materials across the Kingdom of Saudi Arabia.
            </p>

            {/* Certifications */}


            {/* Social / Quick Contact Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: "Website", href: "https://prospectksa.com", external: true },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/966539370929", external: true },
                { icon: PhoneCall, label: "Call Us", href: "tel:+966539370929", external: false },
                { icon: Mail, label: "Email Us", href: "mailto:info@prospectksa.com", external: false },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  title={item.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,101,0,0.3)]"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-2"
          >
            <h4 className="font-outfit font-extrabold text-xs text-white uppercase tracking-widest mb-6 relative pb-3 border-b border-white/10">
              Company
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand-orange rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-xs transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-3"
          >
            <h4 className="font-outfit font-extrabold text-xs text-white uppercase tracking-widest mb-6 relative pb-3 border-b border-white/10">
              Our Services
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand-orange rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-xs transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            {...fadeInUp}
            className="sm:col-span-2 lg:col-span-3 flex flex-col gap-5"
          >
            <h4 className="font-outfit font-extrabold text-xs text-white uppercase tracking-widest relative pb-3 border-b border-white/10">
              Jubail HQ Office
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand-orange rounded-full" />
            </h4>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Al+Jubail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-orange transition-colors">
                <MapPin className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="font-semibold text-white text-xs block">8661 Al Khail street, As safa,<br/> jubail 35514 Saudi Arabia</span>
                <span className="text-brand-orange text-[11px] font-bold flex items-center gap-1 mt-1 group-hover:underline">
                  Open in Maps <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>

            <a
              href="tel:+966539370929"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                <Phone className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-white font-semibold text-xs block">Phone Support</span>
                <span className="text-xs text-slate-400 group-hover:text-brand-orange transition-colors">+966 133636284 </span>
              </div>
            </a>

            <a
              href="mailto:info@prospectksa.com"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                <Mail className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-white font-semibold text-xs block">Business Inquiries</span>
                <span className="text-xs text-slate-400 group-hover:text-brand-orange transition-colors">info@prospectksa.com</span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-400 text-xs">
              © {currentYear}{" "}
              Ihtimal Company for General Contracting. All Rights Reserved.
            </p>
            {/* <p className="text-[11px] text-slate-500 font-mono">
              Commercial Registration (CR): <span className="text-slate-400">7030721448</span>
            </p> */}
          </div>

          {/* <div className="flex items-center gap-5 flex-wrap justify-center">
            <Link
              href="/contact"
              className="text-slate-400 hover:text-brand-orange text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <Link
              href="/contact"
              className="text-slate-400 hover:text-brand-orange text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <a
              href="https://prospectintl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-orange text-xs transition-colors flex items-center gap-1 group"
            >
              Prospect International
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
