"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-blue-light rounded-xl shadow-lg shadow-brand-blue/20 rotate-3 group-hover:rotate-6 transition-transform"></div>
            <div className="relative w-full h-full rounded-xl bg-brand-blue border border-white/10 flex items-center justify-center text-white font-bold text-xl">
              G
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full border-2 border-white"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-brand-blue leading-none">
              GST Talks India
            </span>
            <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mt-1">
              Premium Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-brand-blue border border-transparent rounded-full hover:bg-brand-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
          >
            <span>Book Consultation</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white h-screen pt-24 px-6 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-medium text-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center px-6 py-4 text-lg font-medium text-white bg-brand-blue rounded-xl"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
