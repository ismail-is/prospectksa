"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  MessageSquare,
  ThumbsUp,
  MapPinIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+966 133636284 ",
    // subtext: "Sun - Thu 8:00 AM - 6:00 PM",
    href: "tel:+966539370929",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@prospectksa.com",
    subtext: "We reply within 24 hours",
    href: "mailto:info@prospectksa.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Dammam, Saudi Arabia",
    subtext: "P.O. Box 12345",
    href: "#map",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    detail: "+966 133636284 ",
    subtext: "Emergency support available",
    href: "tel:+966539370929",
  },
];

const benefits = [
  {
    title: "Tailored Industrial Solutions",
    desc: "Customized services to meet your specific project needs.",
  },
  {
    title: "Experienced & Skilled Team",
    desc: "100+ experts with deep industrial and engineering knowledge.",
  },
  {
    title: "Safety & Quality First",
    desc: "Adherence to international standards in everything we do.",
  },
  {
    title: "On-Time, Every Time",
    desc: "Committed to delivering on-schedule project completion.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedMessage = `*New Inquiry from  Ihtimal Company Website*
----------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/966539370929?text=${encodedMessage}`;

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-brand-gray">
      {/* 1. SLIM MINI HERO BANNER (CREATIVE) */}
      <section className="relative bg-brand-navy-dark overflow-hidden pt-40 pb-24 flex items-center justify-center text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
          <Image
            src="/industrial_hero_1.png"
            alt="Refinery background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Creative Glowing Spotlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[220px] rounded-full bg-brand-orange/15 blur-[80px] pointer-events-none z-10 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-navy-light/30 blur-[100px] pointer-events-none z-10" />

        {/* Cyber Grid Lines */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] grid grid-cols-6 h-full w-full">
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent z-10" />

        {/* Heading Content */}
        <div className="relative z-20 max-w-xl px-4">
          <span className="flex items-center justify-center gap-2 text-brand-orange font-bold tracking-widest text-[10px] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            DIRECT CONNECTION
          </span>
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
            Contact Us
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="h-[3px] bg-gradient-to-r from-brand-orange-light to-brand-orange mx-auto rounded-full mt-4 shadow-[0_2px_10px_rgba(255,101,0,0.5)]"
          />
        </div>
      </section>

      {/* 2. FLOATING INFO CARDS (TIGHT OVERLAP & NON-TRUNCATING VERTICAL WIDGETS) */}
      <section className="relative z-30 -mt-8 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="relative overflow-hidden group rounded-2xl p-6 md:p-8 bg-white/90 backdrop-blur-xl border border-white shadow-[0_12px_30px_rgba(11,25,44,0.03)] hover:shadow-[0_20px_45px_rgba(11,25,44,0.08)] hover:border-brand-orange/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between min-h-[240px] cursor-pointer"
              >
                {/* Top Glowing Accent Border */}
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-orange-light to-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Subtle Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Corner crosshairs */}
                <div className="absolute top-3 left-3 w-1 h-1 bg-slate-300 group-hover:bg-brand-orange/50 transition-colors" />
                <div className="absolute top-3 right-3 w-1 h-1 bg-slate-300 group-hover:bg-brand-orange/50 transition-colors" />

                {/* Centered Icon container */}
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white shadow-inner group-hover:rotate-3 group-hover:scale-110 mb-4 shrink-0">
                  <card.icon className="w-6 h-6" />
                </div>

                {/* Content details */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <span className="text-slate-400 text-[10px] font-mono tracking-widest uppercase mb-2 block">
                    {card.title}
                  </span>
                  <h5 className="font-outfit font-extrabold text-brand-navy text-[16px] md:text-[18px] leading-snug group-hover:text-brand-orange transition-colors break-words w-full px-2">
                    {card.detail}
                  </h5>
                  <p className="text-slate-500 text-xs font-normal mt-2 leading-relaxed max-w-[200px] mx-auto">
                    {card.subtext}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FORM & BENEFITS SECTION (ENHANCED UI/UX) */}
      <section id="form" className="py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left side Message Form with modern inputs */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_20px_40px_rgba(11,25,44,0.02)]">
              <div className="mb-8">
                <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase mb-2 block">
                  Send Us a Message
                </span>
                <h2 className="font-outfit text-3xl font-bold text-brand-navy tracking-tight mb-2">
                  We're Here to Help You
                </h2>
                <p className="text-slate-500 text-sm">
                  Fill out the form and our team will get back to you as soon as possible.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 bg-brand-orange/5 border border-brand-orange/20 rounded-2xl text-center flex flex-col items-center justify-center min-h-[350px]"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center text-white mb-4 shadow-[0_4px_10px_rgba(255,101,0,0.2)] animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-outfit font-extrabold text-brand-navy text-xl mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
                      Thank you for contacting  The Ihtimal Company. Our consultants will review your request and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-8 py-3 rounded-full border border-brand-orange text-brand-orange font-bold text-xs hover:bg-brand-orange hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/5 bg-slate-50 text-brand-navy transition-all text-sm font-semibold placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Enter company name"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/5 bg-slate-50 text-brand-navy transition-all text-sm font-semibold placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/5 bg-slate-50 text-brand-navy transition-all text-sm font-semibold placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter phone number"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/5 bg-slate-50 text-brand-navy transition-all text-sm font-semibold placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="subject" className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">
                        Subject / Interest
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/5 bg-slate-50 text-brand-navy transition-all text-sm font-semibold appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="Equipment Rental">Equipment Rental Inquiry</option>
                          <option value="Manpower Services">Manpower Services Request</option>
                          <option value="Blasting & Coating">Blasting & Coating Inquiry</option>
                          <option value="Lifting Materials">Lifting Materials Rigging</option>
                          <option value="General Consultation">General Contracting / Other</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project requirements here..."
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/5 bg-slate-50 text-brand-navy transition-all text-sm font-semibold placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_4px_14px_0_rgba(255,101,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,101,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {loading ? "Sending Message..." : "Send Message"}
                        {!loading && <ArrowRight className="w-4 h-4" />}
                      </button>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Shield className="w-4 h-4 text-brand-orange/80 shrink-0" />
                        <span className="text-[11px] font-medium leading-none">Your privacy is our priority. We never share your data.</span>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Right side Benefits Panel (CAD-Blueprint Styling) */}
            <div className="lg:col-span-5 relative bg-brand-navy rounded-3xl p-8 md:p-10 text-white overflow-hidden shadow-2xl min-h-[520px] flex flex-col justify-between group">
              {/* Background refinery image */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                <Image
                  src="/industrial_hero_2.png"
                  alt="Refinery backdrop"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Engineering Grid Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] grid grid-cols-4 h-full w-full">
                <div className="border-r border-white h-full" />
                <div className="border-r border-white h-full" />
                <div className="border-r border-white h-full" />
                <div className="border-r border-white h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent z-10" />

              {/* Accents */}
              <div className="absolute top-4 left-4 w-1.5 h-1.5 border-t border-l border-brand-orange/30 group-hover:border-brand-orange/70 transition-colors" />
              <div className="absolute top-4 right-4 w-1.5 h-1.5 border-t border-r border-brand-orange/30 group-hover:border-brand-orange/70 transition-colors" />

              <div className="relative z-20">
                <span className="text-brand-orange font-bold tracking-widest text-[9px] uppercase mb-3 block">
                  Why Connect With  The Ihtimal Company?
                </span>
                <h3 className="font-outfit text-3xl font-extrabold mb-4 leading-tight">
                  Delivering Excellence Through Every Connection
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                  From equipment rental to complete industrial solutions, we are committed to delivering quality, safety, and reliability in every project.
                </p>

                {/* Benefits Bullets */}
                <div className="space-y-6">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                      </div>
                      <div>
                        <h5 className="font-outfit font-extrabold text-sm text-white mb-0.5">
                          {benefit.title}
                        </h5>
                        <p className="text-xs text-slate-300 leading-normal font-light">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="relative z-20 border-t border-white/10 pt-6 mt-8">
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                  The Ihtimal Company // INDUSTRIAL SERVICES
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MAP SECTION (CLEAN UX) */}
      <section id="map" className="py-24 bg-white border-t border-slate-100 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase mb-2 block">
                Our Location
              </span>
              <h2 className="font-outfit text-4xl font-bold text-brand-navy">
                Find Us Here
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md md:text-right leading-relaxed font-light">
              Visit our office or connect with us through any of the channels. We're always happy to meet you!
            </p>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(11,25,44,0.04)] border border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1777.3046852137231!2d49.66624476085206!3d27.010904051762544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a185a89a29bd%3A0x50f027f16daef1aa!2sHilton%20Garden%20Inn%20Al%20Jubail!5e0!3m2!1sen!2sin!4v1779772072090!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title=" The Ihtimal Company Location (Al Jubail)"
            />

            {/* Floating Address Card */}
            <div className="absolute top-6 left-6 z-20 max-w-xs md:max-w-sm bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-[0_15px_30px_rgba(11,25,44,0.08)]">
              <div className="flex items-center gap-2 text-brand-orange mb-3">
                <MapPinIcon className="w-4 h-4 text-brand-orange animate-bounce" />
                <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                  HEADQUARTERS
                </span>
              </div>
              <h4 className="font-outfit font-extrabold text-brand-navy text-base md:text-lg mb-2">
                Ihtimal Company
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 font-light">
                Hilton Garden Inn Road, Al Jubail, Eastern Province, Saudi Arabia
              </p>
              <p className="text-slate-400 text-[10px] mb-6">
                P.O. Box 12345
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Al+Jubail"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-brand-orange hover:bg-brand-orange hover:text-white px-5 py-2.5 rounded-full text-xs font-bold text-brand-navy transition-all duration-300 cursor-pointer"
              >
                Get Directions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (BOTTOM) */}

    </main>
  );
}
