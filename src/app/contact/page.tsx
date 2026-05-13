"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-gold/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Let's Discuss Your <span className="text-gradient">Growth</span></h1>
          <p className="text-lg text-slate-600">
            Book a premium consultation with our senior partners or request an instant callback. We are here to resolve your compliance challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Consultation</h3>
              <p className="text-slate-600 text-sm mb-6">Fastest way to reach our support team.</p>
              <a href="https://wa.me/919847148622" target="_blank" className="inline-flex items-center justify-center w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors">
                Chat on WhatsApp
              </a>
            </div>

            <div className="glass-card p-8 rounded-3xl space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Call Us 24/7</h4>
                  <a href="tel:+919847148622" className="text-slate-600 hover:text-brand-blue transition-colors">+91 984 714 8622</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Email Support</h4>
                  <a href="mailto:info@gsttalksindia.com" className="text-slate-600 hover:text-brand-blue transition-colors">info@gsttalksindia.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Head Office</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">H&S Management Consultants (P) Ltd, VRM Road, Ravipuram</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Form */}
          <div className="lg:col-span-3 glass-card p-8 md:p-12 rounded-3xl shadow-2xl shadow-brand-blue/5">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Request an Expert Callback</h2>
            <p className="text-slate-500 text-sm mb-8">Fill out the details below and a senior consultant will reach out shortly.</p>

            {formStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received Successfully</h3>
                <p className="text-slate-600 mb-6">Our experts are reviewing your details and will contact you within 2 hours.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2 bg-white text-slate-700 font-medium rounded-full shadow-sm border border-slate-200"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Service Required *</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all text-slate-700 appearance-none">
                      <option>GST Registration & Filing</option>
                      <option>Income Tax & Audit</option>
                      <option>Business Setup & Registration</option>
                      <option>Other Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Brief Description</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all resize-none" placeholder="How can we help your business today?"></textarea>
                </div>

                <button 
                  disabled={formStatus === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue/90 transition-all disabled:opacity-70"
                >
                  {formStatus === "submitting" ? (
                    <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-slate-500">Your data is completely secure and will not be shared.</p>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
