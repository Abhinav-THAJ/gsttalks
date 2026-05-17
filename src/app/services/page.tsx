"use client";

import { motion } from "framer-motion";
import { FileText, Calculator, ShieldCheck, Briefcase, BookOpen, Settings, Users, LineChart, ChevronRight, Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function ServicesPage() {
  const services = [
    { name: "GST Return Filing", icon: FileText, desc: "Accurate and timely GST return filing aligned with your business operations." },
    { name: "Income Tax Filing", icon: Calculator, desc: "Hassle-free income tax filing for individuals and corporate entities." },
    { name: "Auditing", icon: ShieldCheck, desc: "Formal review of financial records by professional accountants." },
    { name: "Startup Consultation", icon: Users, desc: "Strategic consulting for startups to achieve sustainable growth." },
    { name: "RERA Registration", icon: Briefcase, desc: "Expert guidance for Real Estate compliance and transparency." },
    { name: "ESI & PF", icon: Settings, desc: "Ensure compliance with Provident Fund and Employee State Insurance." },
    { name: "Accounts & Bookkeeping", icon: LineChart, desc: "Maintain pristine financial records for year-end finalization." },
    { name: "Management Consultancy", icon: BookOpen, desc: "Advisory and implementation services for business optimization." },
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "/month",
      desc: "Perfect for small businesses and new startups.",
      features: ["GST Registration", "Monthly GST Filing", "Basic Bookkeeping", "Email Support"],
      popular: false,
    },
    {
      name: "Business",
      price: "₹14,999",
      period: "/month",
      desc: "Comprehensive compliance for growing enterprises.",
      features: ["Everything in Starter", "Income Tax Filing", "ESI & PF Management", "Dedicated Consultant", "Priority Phone Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "Tailored solutions for large scale operations.",
      features: ["Everything in Business", "Internal Auditing", "Management Consultancy", "RERA Compliance", "On-site Advisory"],
      popular: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 text-slate-900 overflow-hidden">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-20 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full animate-float"></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
            Services & <span className="font-display italic text-gradient-gold">Plans</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Comprehensive financial, tax, and advisory solutions tailored to ensure your business remains compliant and primed for growth.
          </motion.p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-white border border-slate-200/80 p-8 rounded-[2.5rem] group hover:border-slate-300 transition-all duration-500 cursor-pointer flex flex-col justify-between relative overflow-hidden min-h-[280px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full opacity-60"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{service.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-slate-900 transition-colors mt-6">
                Explore <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-20">
            <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-4 block">Pricing</span>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Transparent <span className="font-display italic">Packages</span>
            </h2>
            <p className="text-lg text-slate-500">Choose a plan that scales with your business needs.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
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
                <h3 className={`text-3xl font-bold mb-2 tracking-tight ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
                <p className={`text-sm mb-10 font-medium ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>
                
                <div className="mb-10">
                  <span className="text-5xl font-bold font-display tracking-tight">{pkg.price}</span>
                  <span className={`text-sm font-bold uppercase tracking-[0.15em] ml-2 ${pkg.popular ? 'text-slate-500' : 'text-slate-400'}`}>{pkg.period}</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.popular ? 'bg-amber-400/20 text-amber-400' : 'bg-slate-100 text-slate-400'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`mt-auto block w-full py-5 text-center rounded-full font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-amber-400 text-slate-900 hover:bg-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
