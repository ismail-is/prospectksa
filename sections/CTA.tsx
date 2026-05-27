"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+966 53 937 0929",
    href: "tel:+966539370929",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@prospectksa.com",
    href: "mailto:info@prospectksa.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Dammam, Saudi Arabia",
    href: "/contact",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-8 md:p-16 border border-white bg-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="flex flex-col lg:flex-row gap-16 justify-between items-center">
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-outfit text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Let's Build Something <br className="hidden md:block" />
                <span className="text-brand-orange">Great Together</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                We are ready to support your next project with the best solutions, equipment, and skilled workforce.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_4px_20px_rgba(255,101,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,101,0,0.5)] hover:-translate-y-1 group"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-orange/30 shadow-sm hover:shadow-md transition-all group flex flex-col justify-center ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange transition-colors">
                    <info.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-gray-500 font-medium text-sm mb-1">{info.title}</h4>
                  <p className="font-outfit font-bold text-brand-navy text-lg group-hover:text-brand-orange transition-colors">
                    {info.details}
                  </p>
                </a>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
