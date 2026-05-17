"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 relative overflow-hidden text-slate-900">
      <div className="absolute inset-0 bg-mesh"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full animate-float"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
            Let's Discuss Your{" "}
            <span className="font-display italic text-gradient-gold">Growth</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Book a premium consultation with our senior partners or request an instant callback. We are here to resolve your compliance challenges.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp CTA — Most prominent */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="rounded-[2.5rem] bg-slate-900 text-white p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 blur-2xl rounded-full"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">WhatsApp Consultation</h3>
                <p className="text-slate-400 mb-8 text-sm">Fastest way to reach our support team directly.</p>
                <a href="https://wa.me/919847148622?text=Hi%2C%20I%20need%20help%20with%20GST%2FTax%20compliance." target="_blank" className="block w-full py-4 bg-[#25D366] text-white rounded-full font-bold text-center uppercase tracking-[0.15em] text-xs hover:bg-[#20bd5a] transition-colors">
                  Chat Now on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-[2.5rem] bg-white border border-slate-200/80 p-10 space-y-10"
            >
              {[
                { icon: Phone, label: "Call Us 24/7", value: "+91 984 714 8622", href: "tel:+919847148622" },
                { icon: Mail, label: "Email Support", value: "info@gsttalksindia.com", href: "mailto:info@gsttalksindia.com" },
                { icon: MapPin, label: "Head Office", value: "H&S Management Consultants (P) Ltd, VRM Road, Ravipuram", href: null },
                { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", href: null },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-slate-700 font-bold leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Premium Lead Capture Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="lg:col-span-3 rounded-[3rem] bg-white border border-slate-200/80 p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full opacity-60"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                Request an <span className="font-display italic">Expert</span> Callback
              </h2>
              <p className="text-slate-500 mb-10">Fill out the details below and a senior consultant will reach out shortly.</p>

              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-50 border border-slate-100 p-12 rounded-[2rem] text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Request Received!</h3>
                  <p className="text-slate-500 mb-10 text-lg">Our experts will contact you within 30 minutes.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full uppercase tracking-[0.15em] text-xs hover:bg-slate-800 transition-all"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-2 block">Full Name *</label>
                      <input required type="text" className="w-full py-4 bg-transparent border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors text-lg font-medium text-slate-900 placeholder-slate-300" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-2 block">Phone Number *</label>
                      <input required type="tel" className="w-full py-4 bg-transparent border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors text-lg font-medium text-slate-900 placeholder-slate-300" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-2 block">Email Address *</label>
                      <input required type="email" className="w-full py-4 bg-transparent border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors text-lg font-medium text-slate-900 placeholder-slate-300" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-2 block">Service Required *</label>
                      <select className="w-full py-4 bg-transparent border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors text-lg font-medium text-slate-900 appearance-none">
                        <option>GST Registration & Filing</option>
                        <option>Income Tax & Audit</option>
                        <option>Business Setup & Registration</option>
                        <option>Other Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-2 block">Brief Description</label>
                    <textarea rows={2} className="w-full py-4 bg-transparent border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors text-lg font-medium text-slate-900 resize-none placeholder-slate-300" placeholder="How can we help?"></textarea>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">100% Secure & Confidential</p>
                    <button 
                      disabled={formStatus === "submitting"}
                      className="flex items-center justify-center gap-3 px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all disabled:opacity-70 uppercase tracking-[0.15em] text-xs w-full sm:w-auto"
                    >
                      {formStatus === "submitting" ? (
                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Submit Request
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
