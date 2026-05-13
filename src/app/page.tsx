"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, ChevronRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const stats = [
    { value: "35+", label: "Years Experience" },
    { value: "3,500+", label: "Cases Solved" },
    { value: "1,500+", label: "Seminars Conducted" },
    { value: "10k+", label: "Happy Clients" },
  ];

  const services = [
    { title: "GST Compliance", desc: "End-to-end GST registration, filing, and reconciliation.", icon: Shield },
    { title: "Corporate Tax", desc: "Strategic tax planning and return filing for businesses.", icon: TrendingUp },
    { title: "Audit & Assurance", desc: "Comprehensive statutory and internal auditing services.", icon: CheckCircle2 },
    { title: "Startup Advisory", desc: "Mentorship, registration, and scaling strategies for MSMEs.", icon: Users },
  ];

  return (
    <div className="bg-brand-light min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-gold/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-subtle border border-brand-blue/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-sm font-bold text-brand-blue tracking-wide uppercase">India's Top Financial Consultancy</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Master Your <br />
                <span className="text-gradient">Financial Future</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                Smart, simple, and complete financial solutions for modern enterprises. We simplify GST and Income Tax compliance so you can focus on scaling your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue-light transition-all shadow-lg shadow-brand-blue/20">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="https://wa.me/919847148622" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all">
                  <span className="w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full text-xs">W</span>
                  Talk on WhatsApp
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden glass-card p-2 aspect-[4/3] shadow-2xl shadow-brand-blue/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent z-10 rounded-2xl"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fintech Dashboard" 
                  fill 
                  className="object-cover rounded-2xl"
                  priority
                />
                
                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-10 glass-card p-4 rounded-2xl z-20 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Tax Saved</p>
                    <p className="text-xs text-slate-500">₹2.4Cr+ this year</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 bottom-10 glass-card p-4 rounded-2xl z-20 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">100% Compliant</p>
                    <p className="text-xs text-slate-500">Zero penalties</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-4xl font-bold text-brand-blue mb-2">{stat.value}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Premium Financial Services</h2>
            <p className="text-lg text-slate-600">Tailored tax, audit, and consulting solutions designed to elevate your business operations.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group glass-card p-8 rounded-3xl hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-bold text-brand-blue group-hover:text-brand-gold transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - COMPARISON */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Businesses Choose Us</h2>
            <p className="text-lg text-slate-600">The difference between standard compliance and strategic growth.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-blue mb-8">GST Talks India</h3>
              {[
                "Proactive Tax Planning & Savings",
                "Dedicated Senior Partner Support",
                "Real-time Compliance Dashboard",
                "Unlimited Consultation Access",
                "Advanced AI-driven Reconciliation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-brand-blue-subtle border border-brand-blue/10 group hover:border-brand-blue transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue" />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6 opacity-60 grayscale">
              <h3 className="text-2xl font-bold text-slate-400 mb-8">Traditional CA Firms</h3>
              {[
                "Reactive Filing Only",
                "Junior Staff Handling Cases",
                "Manual Data Processing",
                "Per-call Consulting Fees",
                "Delayed Error Detection"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100 border border-slate-200">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-400 text-[10px]">✕</div>
                  <span className="font-medium text-slate-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="py-32 bg-brand-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Growth Plans</h2>
            <p className="text-lg text-slate-600">Premium compliance solutions scaled for your business stage.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "₹4,999", desc: "For new startups and MSMEs.", popular: false },
              { name: "Business", price: "₹14,999", desc: "Most popular for growing firms.", popular: true },
              { name: "Enterprise", price: "Custom", desc: "For large scale corporate entities.", popular: false }
            ].map((pkg, i) => (
              <div key={i} className={`p-10 rounded-[32px] border transition-all duration-300 ${pkg.popular ? 'bg-brand-blue text-white scale-105 shadow-2xl shadow-brand-blue/20' : 'bg-white text-slate-900 border-slate-200'}`}>
                {pkg.popular && <div className="bg-brand-gold text-brand-blue text-xs font-bold px-4 py-1 rounded-full w-max mb-6">MOST POPULAR</div>}
                <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                <p className={`text-sm mb-8 ${pkg.popular ? 'text-blue-100' : 'text-slate-500'}`}>{pkg.desc}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-sm opacity-60">/month</span>
                </div>
                <Link href="/services" className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${pkg.popular ? 'bg-white text-brand-blue hover:bg-brand-gold-subtle' : 'bg-brand-blue text-white hover:bg-brand-blue-light'}`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-slate-600">Join 3,500+ successful businesses across India.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "CEO, TechSphere India", content: "GST Talks India transformed our tax filing process. Their dashboard is a lifesaver for our finance team." },
              { name: "Priya Sharma", role: "Founder, Green Roots", content: "Finally, a consultancy that understands startups. They helped us save over ₹15L in the first year alone." },
              { name: "Anand Verma", role: "Director, Verma Logistics", content: "Highly professional and responsive. Their expertise in GST audits is unmatched in the industry." }
            ].map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl relative">
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[...Array(5)].map((_, i) => <PlayCircle key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10"></div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-32 bg-brand-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
              <p className="text-lg text-slate-600">Stay updated with the latest in GST and tax compliance.</p>
            </div>
            <Link href="/training" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:text-brand-gold transition-colors">
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Understanding New GST Rates", date: "Oct 24, 2024", cat: "GST Update" },
              { title: "Form 26AS vs AIS: A Guide", date: "Oct 20, 2024", cat: "Income Tax" },
              { title: "Tax Saving for Startups", date: "Oct 15, 2024", cat: "Business" }
            ].map((post, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
                <span className="text-xs font-bold text-brand-blue bg-brand-blue/5 px-3 py-1 rounded-full mb-4 inline-block">{post.cat}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors leading-snug">{post.title}</h3>
                <div className="flex items-center justify-between text-slate-500 text-sm pt-4 border-t border-slate-100">
                  <span>{post.date}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-gold/20 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to secure your financial future?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses who trust GST Talks India for their compliance and growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-5 bg-brand-gold text-brand-blue rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-brand-gold/20">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
