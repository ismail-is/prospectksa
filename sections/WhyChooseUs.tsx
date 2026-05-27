"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Wrench, Clock, Map } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Zero compromise on safety standards",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "International quality management systems",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Highly trained & experienced team",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "Latest technology & well maintained",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed to timeline & quality",
  },
  {
    icon: Map,
    title: "Saudi Industry Experience",
    description: "Strong presence across KSA industries",
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <span className="text-brand-orange font-bold tracking-wider text-xs md:text-sm uppercase mb-4 block">
                Why Choose Us?
              </span>
              <h2 className="font-outfit text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                The Prospect KSA Advantage
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We bring unparalleled expertise and commitment to every project, ensuring highest standards of quality and efficiency.
              </p>
              <div className="w-16 h-1.5 bg-brand-orange rounded-full" />
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-orange/30 shadow-sm hover:shadow-[0_8px_30px_rgb(255,101,0,0.08)] transition-all duration-300 group flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gray flex items-center justify-center text-brand-navy shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-xl text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
