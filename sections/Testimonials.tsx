"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    quote: " The Ihtimal Com has been a reliable partner in our projects. Their professionalism, quality of work and commitment to safety is truly exceptional.",
    name: "Ahmed Al-Qahtani",
    designation: "Project Manager, Aramco",
  },
  {
    quote: "The level of expertise and the modern equipment provided by  The Ihtimal Com significantly contributed to the on-time delivery of our plant expansion.",
    name: "Faisal Al-Dosari",
    designation: "Operations Director, SABIC",
  },
  {
    quote: "Exceptional service from start to finish. Their workforce is highly skilled, and their adherence to safety standards is best in class.",
    name: "Khalid Al-Ghamdi",
    designation: "Site Engineer, NEOM",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background Map Blur Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/20 via-brand-navy to-brand-navy" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24 items-center">

        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-bold tracking-wider text-xs md:text-sm uppercase mb-4 block">
              What Our Clients Say
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-8">
              Trusted By Industry Leaders
            </h2>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="md:w-2/3 w-full">
          <div className="glass-panel-dark rounded-3xl p-8 md:p-12 relative min-h-[300px] flex items-center">
            <Quote className="absolute top-8 right-10 w-24 h-24 text-white/5 rotate-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-xl md:text-2xl text-white/90 font-outfit font-light leading-relaxed mb-10">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-orange/20 flex items-center justify-center border border-brand-orange/30">
                    <User className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-brand-orange text-sm font-medium">
                      {testimonials[currentIndex].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-8 right-10 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "w-6 bg-brand-orange" : "bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
