"use client";

import { motion } from "framer-motion";
import { Award, Target, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 text-slate-900 overflow-hidden">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-24 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-slate-200/30 blur-3xl rounded-full animate-float-slow"></div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10">

          
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]"
          >
            Empowering Your{" "}
            <span className="font-display italic text-gradient-gold">Financial</span> Vision
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            With over 35 years of legacy, GST Talks India stands as a pillar of trust, delivering elite financial consultancy, tax advisory, and compliance services to businesses across the nation.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision — Large Bento Cards */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="rounded-[2.5rem] bg-white border border-slate-200/80 p-12 lg:p-16 relative overflow-hidden group hover:border-slate-300 transition-all duration-500 min-h-[380px] flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-slate-50"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-10 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Our <span className="font-display italic">Mission</span>
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                To simplify tax compliance by delivering accurate information, practical tools, and accessible training on GST and Income Tax laws. We empower businesses to remain compliant and make informed financial decisions.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="rounded-[2.5rem] bg-slate-900 text-white p-12 lg:p-16 relative overflow-hidden group hover:bg-slate-800 transition-colors duration-500 min-h-[380px] flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10 group-hover:bg-amber-500 transition-colors duration-500">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">
                Our <span className="font-display italic text-amber-400">Vision</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                To be India's most trusted platform that fosters a culture of informed, responsible, and transparent tax practices. We envision a future where every taxpayer is equipped with confidence and clarity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values — Numbered Timeline */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-6 block">Our Values</span>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Built on{" "}
                <span className="font-display italic text-gradient-gold">trust</span>,
                delivered with{" "}
                <span className="font-display italic">excellence</span>.
              </h2>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:shadow-xl mt-4">
                Work With Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <div className="space-y-5">
              {[
                { num: "01", title: "Integrity & Transparency", desc: "We maintain the highest ethical standards in every client engagement." },
                { num: "02", title: "Client-Centric Approach", desc: "Your success is our benchmark. We tailor every solution to fit your unique business needs." },
                { num: "03", title: "Innovation & Excellence", desc: "We leverage the latest technology and best practices to deliver superior results." },
                { num: "04", title: "Continuous Learning", desc: "Our team stays ahead of every regulatory change through constant upskilling." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="group flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-500 cursor-default"
                >
                  <span className="text-4xl font-bold text-slate-200 font-display group-hover:text-amber-400 transition-colors duration-500 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="rounded-[3rem] bg-slate-900 p-16 lg:p-24 text-center relative overflow-hidden noise-overlay"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight max-w-2xl mx-auto leading-[1.1]">
                Let's build your{" "}
                <span className="font-display italic text-amber-400">financial</span> fortress.
              </h2>
              <p className="text-xl text-slate-400 mb-14 max-w-xl mx-auto">
                Partner with India's most trusted financial consultancy.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
