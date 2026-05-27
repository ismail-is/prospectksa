import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Services from "@/sections/Services";
import About from "@/sections/About";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Projects from "@/sections/Projects";
import Clients from "@/sections/Clients";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Hero />
      <Stats />
      <Services />
      <About />
      <WhyChooseUs />
      <Projects />
      <Clients />
      <Testimonials />
      <CTA />
    </main>
  );
}
