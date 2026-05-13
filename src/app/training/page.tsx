"use client";

import { motion } from "framer-motion";
import { PlayCircle, Calendar, ArrowRight, Search, BookOpen, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TrainingPage() {
  const articles = [
    { title: "Understanding the new GST Rates for E-commerce", category: "GST Update", date: "Oct 24, 2024", time: "5 min read" },
    { title: "How to perfectly reconcile Form 26AS and AIS", category: "Income Tax", date: "Oct 20, 2024", time: "8 min read" },
    { title: "Top 10 Tax Saving Strategies for Startups in India", category: "Business Insight", date: "Oct 15, 2024", time: "6 min read" },
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Insights & <span className="text-gradient">Training</span></h1>
            <p className="text-lg text-slate-600">
              Master tax compliance with our expert-led seminars, certification programs, and the latest financial news.
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles, seminars..." 
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
        </div>
      </section>

      {/* Bento Grid layout for Media/Training */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Featured Seminar */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group glass-card">
            <div className="absolute inset-0 bg-slate-900/60 z-10 transition-opacity group-hover:bg-slate-900/40"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            
            <div className="relative z-20 h-full p-8 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold text-brand-blue text-xs font-bold uppercase tracking-wider mb-4 w-max">
                Live Webinar
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">Masterclass: Annual GST Return Filing & Audit Procedures</h2>
              <div className="flex items-center gap-6 text-slate-200 mb-8">
                <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /> Nov 15, 2024</div>
                <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> 10:00 AM IST</div>
              </div>
              <button className="flex items-center gap-2 w-max px-8 py-4 bg-white text-brand-blue rounded-full font-bold hover:scale-105 transition-transform">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Vault Card */}
          <div className="relative rounded-3xl overflow-hidden p-8 bg-brand-blue flex flex-col justify-between group shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-gold/10 blur-2xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-brand-gold group-hover:text-brand-blue transition-all duration-300">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Video Vault</h3>
              <p className="text-blue-100/70 text-sm mb-6 leading-relaxed">Access 100+ hours of premium GST and Income Tax training videos recorded by experts.</p>
            </div>
            
            <Link href="#" className="relative z-10 inline-flex items-center text-white font-semibold hover:text-brand-gold transition-colors">
              Browse library <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Yearly Retainership Card */}
          <div className="relative rounded-3xl overflow-hidden glass-card p-8 border-brand-gold/20 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
             
            <div>
              <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Yearly Retainership</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">Get consistent training and 4 hrs/month of dedicated expert guidance for your firm.</p>
            </div>
            
            <Link href="/contact" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-gold transition-colors">
              Subscribe Now <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">{article.category}</span>
                <span className="text-xs text-slate-500">{article.time}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors leading-snug">
                {article.title}
              </h3>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="text-sm text-slate-500">{article.date}</span>
                <Link href="#" className="text-brand-gold group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
