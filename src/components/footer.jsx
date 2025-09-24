import { motion } from "framer-motion";
import {Facebook, Phone } from "lucide-react";
//import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 footer-root">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <h3 className="text-3xl md:text-4xl font-black tracking-wider text-gray-900 mb-4">TU CORREA</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-md">
            En Tu Correa unimos cuero de calidad y diseño versátil para acompañarte en cada ocasión.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Follow us on Twitter"
            >
              <Phone size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-600 font-medium">© 2025 Tu Correa. Todos los derechos reservados.</p>

        </motion.div>
      </div>
    </footer>
  );
}
