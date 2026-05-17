"use client";

import { motion } from "framer-motion";
import { PlayCircle, Calendar, ArrowRight, Search, BookOpen, Clock, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function TrainingPage() {
  const articles = [
    { title: "Understanding the new GST Rates for E-commerce", category: "GST Update", date: "Oct 24, 2024", time: "5 min read" },
    { title: "How to perfectly reconcile Form 26AS and AIS", category: "Income Tax", date: "Oct 20, 2024", time: "8 min read" },
    { title: "Top 10 Tax Saving Strategies for Startups in India", category: "Business Insight", date: "Oct 15, 2024", time: "6 min read" },
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 text-slate-900 overflow-hidden">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-16 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full animate-float"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-2xl">

            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
              Insights & <span className="font-display italic text-gradient-gold">Training</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-xl text-slate-500 font-medium">
              Master tax compliance with our expert-led seminars, certification programs, and the latest financial news.
            </motion.p>
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="relative w-full md:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles, seminars..." 
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white border border-slate-200 focus:outline-none focus:border-slate-400 transition-colors text-sm font-medium"
            />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid layout for Media/Training */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Featured Seminar */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-slate-900/60 z-10 transition-opacity group-hover:bg-slate-900/40"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="relative z-20 h-full p-10 flex flex-col justify-end min-h-[400px]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 w-max">
                Live Webinar
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight max-w-xl">Masterclass: Annual GST Return Filing & Audit Procedures</h2>
              <div className="flex items-center gap-6 text-slate-300 mb-8 text-sm font-medium">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Nov 15, 2024</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 10:00 AM IST</div>
              </div>
              <button className="flex items-center gap-3 w-max px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-amber-400 hover:scale-105 transition-all duration-300 uppercase tracking-[0.15em] text-xs">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Video Vault Card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="relative rounded-[2.5rem] overflow-hidden p-10 bg-slate-900 flex flex-col justify-between group min-h-[200px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-amber-500 transition-colors duration-500">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Video Vault</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Access 100+ hours of premium GST and Income Tax training videos recorded by experts.</p>
            </div>
            
            <Link href="#" className="relative z-10 mt-6 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-amber-400 transition-colors">
              Browse library <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          {/* Yearly Retainership Card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="relative rounded-[2.5rem] overflow-hidden bg-white border border-slate-200/80 p-10 flex flex-col justify-between group hover:border-slate-300 transition-all duration-500 min-h-[200px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full opacity-60"></div>
             
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Yearly Retainership</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Get consistent training and 4 hrs/month of dedicated expert guidance for your firm.</p>
            </div>
            
            <Link href="/contact" className="relative z-10 mt-6 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors">
              Subscribe Now <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-6 max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
          <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-4 block">Blog</span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Latest <span className="font-display italic">Insights</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 group hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 cursor-pointer"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">{article.category}</span>
                <span className="text-xs text-slate-400 font-medium">{article.time}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-slate-700 transition-colors leading-snug tracking-tight">
                {article.title}
              </h3>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-sm text-slate-400 font-medium">{article.date}</span>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
