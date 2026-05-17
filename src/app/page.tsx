"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, ChevronRight, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { value: "35+", label: "Years of Excellence" },
    { value: "3,500+", label: "Cases Resolved" },
    { value: "1,500+", label: "Seminars Delivered" },
    { value: "10k+", label: "Happy Clients" },
  ];

  const services = [
    { title: "GST Compliance", desc: "End-to-end GST registration, filing, and reconciliation.", icon: Shield },
    { title: "Corporate Tax", desc: "Strategic tax planning and return filing for businesses.", icon: TrendingUp },
    { title: "Audit & Assurance", desc: "Comprehensive statutory and internal auditing services.", icon: CheckCircle2 },
    { title: "Startup Advisory", desc: "Mentorship, registration, and scaling strategies for MSMEs.", icon: Users },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "CEO, TechSphere India", content: "GST Talks India transformed our tax filing process. Their dashboard is a lifesaver for our finance team." },
    { name: "Priya Sharma", role: "Founder, Green Roots", content: "Finally, a consultancy that understands startups. They helped us save over ₹15L in the first year alone." },
    { name: "Anand Verma", role: "Director, Verma Logistics", content: "Highly professional and responsive. Their expertise in GST audits is unmatched in the industry." },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-hidden">
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="absolute inset-0 dot-grid opacity-30"></div>
        
        {/* Floating decorative shapes */}
        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse delay-1000"></div>
        
        {/* Hero image with parallax */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div className="relative w-full h-full">
            <Image 
              src="/hero.png" 
              alt="Premium Office" 
              fill 
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-40 pb-32">
          <div className="max-w-3xl">
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-6xl lg:text-[5.5rem] font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]"
            >
              Master Your{" "}
              <span className="font-display italic text-shine">Financial</span>
              <br />Future
            </motion.h1>
            
            <motion.p 
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl"
            >
              Smart, simple, and complete financial solutions for modern enterprises. We simplify GST and Income Tax compliance so you can focus on scaling your business.
            </motion.p>
            
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-slate-900/20">
                <span className="relative z-10">Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link href="https://wa.me/919847148622" target="_blank" className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/60 backdrop-blur-md text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-white hover:border-slate-300 transition-all">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Talk on WhatsApp
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ===== MARQUEE TRUST STRIP ===== */}
      <section className="py-6 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-16 px-8">
              {stats.map((stat, i) => (
                <div key={`${setIndex}-${i}`} className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-slate-900 font-display">{stat.value}</span>
                  <span className="text-xs font-bold text-slate-400 tracking-[0.15em] uppercase">{stat.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-slate-900 font-display">A+</span>
                <span className="text-xs font-bold text-slate-400 tracking-[0.15em] uppercase">Industry Rating</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-slate-900 font-display">24/7</span>
                <span className="text-xs font-bold text-slate-400 tracking-[0.15em] uppercase">Expert Support</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BENTO SERVICES ===== */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Premium{" "}
                <span className="font-display italic text-gradient-gold">Financial</span>
                <br />Services
              </h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="flex items-end">
              <p className="text-lg text-slate-500 max-w-md">Tailored tax, audit, and consulting solutions designed to elevate your business operations globally.</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main service card — spans 8 columns */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="md:col-span-8 rounded-[2.5rem] bg-white border border-slate-200/80 p-12 lg:p-16 flex flex-col justify-between group hover:border-slate-300 transition-all duration-500 relative overflow-hidden min-h-[400px]"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full opacity-60"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-slate-50 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-10 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{services[0].title}</h3>
                <p className="text-lg text-slate-500 max-w-md leading-relaxed">{services[0].desc}</p>
              </div>
              <Link href="/services" className="relative z-10 mt-10 w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-500">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </Link>
            </motion.div>

            {/* Smaller card — spans 4 columns */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="md:col-span-4 rounded-[2.5rem] bg-slate-900 text-white p-10 flex flex-col justify-between group hover:bg-slate-800 transition-colors duration-500 min-h-[400px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors duration-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight">{services[1].title}</h3>
                <p className="text-slate-400 leading-relaxed">{services[1].desc}</p>
              </div>
              <Link href="/services" className="relative z-10 mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-amber-400 transition-colors">
                Explore <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Two equal cards — span 6 columns each */}
            {services.slice(2).map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 2}
                className="md:col-span-6 rounded-[2.5rem] bg-white border border-slate-200/80 p-10 flex flex-col justify-between group hover:border-slate-300 transition-all duration-500 min-h-[300px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
                <Link href="/services" className="relative z-10 mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                  Explore <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL WHY US ===== */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-6 block">Why Choose Us</span>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                The difference between{" "}
                <span className="font-display italic">standard</span> compliance and{" "}
                <span className="font-display italic text-gradient-gold">strategic</span> growth.
              </h2>
              <p className="text-lg text-slate-500 mb-10 max-w-md">We don't just file your taxes. We build a financial fortress around your business.</p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:shadow-xl">
                Start Now <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <div className="space-y-5">
              {[
                { num: "01", title: "Proactive Tax Planning & Savings", desc: "We strategically plan to maximize your savings legally." },
                { num: "02", title: "Dedicated Senior Partner Support", desc: "Direct access to industry veterans, not just junior associates." },
                { num: "03", title: "Real-time Compliance Dashboard", desc: "Monitor your compliance status 24/7 through our proprietary platform." },
                { num: "04", title: "Unlimited Consultation Access", desc: "No per-call fees. Ask as many questions as you need." },
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

      {/* ===== PRICING WITH GRADIENT BORDER ===== */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-20">
            <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-4 block">Pricing</span>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Strategic <span className="font-display italic">Growth</span> Plans
            </h2>
            <p className="text-lg text-slate-500 max-w-lg mx-auto">Premium compliance solutions scaled for your business stage.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {[
              { name: "Starter", price: "₹4,999", desc: "For new startups and MSMEs.", popular: false },
              { name: "Business", price: "₹14,999", desc: "Most popular for growing firms.", popular: true },
              { name: "Enterprise", price: "Custom", desc: "For large scale corporate entities.", popular: false }
            ].map((pkg, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className={`relative p-10 lg:p-12 rounded-[2.5rem] flex flex-col ${
                  pkg.popular 
                    ? 'bg-slate-900 text-white lg:scale-[1.03] z-10 gradient-border' 
                    : 'bg-white text-slate-900 border border-slate-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-8 bg-amber-400 text-slate-900 text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em]">
                    Most Popular
                  </div>
                )}
                <h4 className="text-3xl font-bold mb-2 tracking-tight">{pkg.name}</h4>
                <p className={`text-sm mb-10 ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>
                <div className="mb-10">
                  <span className="text-5xl font-bold font-display">{pkg.price}</span>
                  <span className={`text-sm ml-2 ${pkg.popular ? 'text-slate-500' : 'text-slate-400'}`}>/month</span>
                </div>
                <Link 
                  href="/services" 
                  className={`mt-auto block w-full py-5 text-center rounded-full font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-amber-400 text-slate-900 hover:bg-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-20">
            <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Trusted by <span className="font-display italic">Industry</span> Leaders
            </h2>
            <p className="text-lg text-slate-500">Join 3,500+ successful businesses across India.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white border border-slate-200/80 p-10 rounded-[2.5rem] relative group hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-500"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-slate-500 font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="rounded-[3rem] bg-slate-900 p-16 lg:p-24 text-center relative overflow-hidden noise-overlay"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-600/20 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-3xl mx-auto leading-[1.1]">
                Ready to secure your{" "}
                <span className="font-display italic text-amber-400">financial</span> future?
              </h2>
              <p className="text-xl text-slate-400 mb-14 max-w-2xl mx-auto">
                Join thousands of businesses who trust GST Talks India for their compliance and growth strategies.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
