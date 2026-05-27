"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Globe, MessageCircle, Rss, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-2xl leading-none text-brand-navy">
                  PROSPECT <span className="text-brand-orange">KSA</span>
                </span>
                <span className="text-[10px] tracking-widest text-brand-navy-light font-medium uppercase mt-1">
                  Ihtimal Company
                </span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Providing industrial solutions with quality, safety, and reliability across the Kingdom of Saudi Arabia.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, MessageCircle, Rss, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-bold text-lg text-brand-navy mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Projects", href: "/#projects" },
                { name: "Certifications", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-brand-orange text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-orange transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-bold text-lg text-brand-navy mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Equipment Rental", href: "/equipment-rental" },
                { name: "Manpower Services", href: "/manpower-services" },
                { name: "Blasting & Coating", href: "/blasting-coating" },
                { name: "Lifting Materials", href: "/#services" },
                { name: "Maintenance Works", href: "/#services" },
                { name: "Industrial Support", href: "/#services" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-brand-orange text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-orange transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-outfit font-bold text-lg text-brand-navy mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">
              Stay updated with our latest news and projects.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
              />
              <button
                type="submit"
                className="bg-brand-navy hover:bg-brand-orange text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <span>Dammam, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span>+966 55 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <span>info@prospectksa.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Prospect KSA (Ihtimal Company). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
