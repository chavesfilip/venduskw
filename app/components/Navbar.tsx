"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Soluções", href: "#solutions" },
  { label: "Preços", href: "#pricing" },
  { label: "Suporte", href: "#support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-vendus-600 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="absolute inset-0 bg-vendus-500 rounded-xl" />
                <span className="relative text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                vendus
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-vendus-500 group-hover:w-1/2 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">Validado AGT Nº 142</span>
              </div>
              <a
                href="#cta"
                className="relative px-6 py-2.5 bg-vendus-600 hover:bg-vendus-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-vendus-500/25 overflow-hidden group"
              >
                <span className="relative z-10">Experimente Grátis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-vendus-500 to-vendus-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white py-3 border-b border-white/10"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full py-4 bg-vendus-600 text-white text-center font-semibold rounded-xl"
              >
                Experimente Grátis — 30 Dias
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
