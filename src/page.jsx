import HeroSection from "./components/hero-section";
import { Timeline } from "./components/timeline";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact"
//import "./globals.css";
import { motion } from "framer-motion";

export default function Page() {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">LO QUE ENCONTRARÁS</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Cada correa tiene una historia única que contar. Descubre las historias detrás de cada diseño. 
              </p>
            </div>
          </div>

          <Timeline/>
        </div>
      </section>

      {/* Contact Us Section */}
      <Contact />

      <Footer />
    </div>
  );
}
