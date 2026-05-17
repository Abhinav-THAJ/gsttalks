"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

export default function LeadCapture() {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("popup_dismissed");
      if (!dismissed) {
        setShowPopup(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismissPopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
      sessionStorage.setItem("popup_dismissed", "true");
    }, 3000);
  };

  return (
    <>
      {/* ===== FLOATING ACTION BUTTONS — Right Bottom ===== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Expandable Quick Contact */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="flex flex-col gap-3 mb-2"
            >
              <a
                href="tel:+919847148622"
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-lg shadow-slate-200 border border-slate-100 text-slate-700 font-bold text-sm hover:shadow-xl transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                Call Now
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-lg shadow-slate-200 border border-slate-100 text-slate-700 font-bold text-sm hover:shadow-xl transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <Send className="w-4 h-4" />
                </div>
                Get Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button — Above toggle */}
        <a
          href="https://wa.me/919847148622?text=Hi%2C%20I%20need%20help%20with%20GST%2FTax%20compliance.%20Please%20call%20me%20back."
          target="_blank"
          className="group relative"
        >
          <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-green-300/30 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7 fill-white" />
          </div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        </a>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
            isExpanded ? "bg-slate-700 rotate-45 shadow-slate-300" : "bg-slate-900 hover:bg-slate-800 shadow-slate-300"
          }`}
        >
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </button>
      </div>

      {/* ===== LEAD CAPTURE POPUP ===== */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={dismissPopup}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.5rem] p-10 max-w-md w-full relative overflow-hidden shadow-2xl"
            >
              <button
                onClick={dismissPopup}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-500 mb-6">
                    <Phone className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
                    Get a <span className="font-display italic text-gradient-gold">Free</span> Callback
                  </h3>
                  <p className="text-slate-500 mb-8 text-sm whitespace-nowrap">
                    Share details — our expert will call you in 30 mins.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full py-4 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors font-medium"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full py-4 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors font-medium"
                    />
                    <button
                      type="submit"
                      className="w-full py-4 bg-slate-900 text-white rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 mt-2"
                    >
                      Request Callback
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-[10px] text-slate-400 text-center mt-4 uppercase tracking-widest">100% Free · No Spam · Secure</p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-500">We'll call you within 30 minutes.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
