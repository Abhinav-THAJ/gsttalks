"use client";

import { motion } from "framer-motion";
import { FileText, Calculator, ShieldCheck, Briefcase, BookOpen, Settings, Users, LineChart, ChevronRight, Check } from "lucide-react";
import Link from "next/link";

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
    <div className="bg-brand-light min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our <span className="text-gradient">Services & Plans</span></h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Comprehensive financial, tax, and advisory solutions tailored to ensure your business remains compliant and primed for growth.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-8 rounded-3xl group hover:shadow-2xl hover:shadow-brand-blue/10 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
              <p className="text-slate-600 text-sm mb-6">{service.desc}</p>
              <div className="flex items-center text-sm font-semibold text-brand-blue group-hover:text-brand-gold transition-colors">
                Explore <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Transparent Pricing Packages</h2>
          <p className="text-lg text-slate-600">Choose a plan that scales with your business needs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${pkg.popular ? 'bg-brand-blue text-white border-brand-blue shadow-2xl shadow-brand-blue/20 scale-105 z-10' : 'bg-white border-slate-200 text-slate-900'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-blue text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
              <p className={`text-sm mb-6 ${pkg.popular ? 'text-blue-100' : 'text-slate-500'}`}>{pkg.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className={`text-sm ${pkg.popular ? 'text-blue-100' : 'text-slate-500'}`}>{pkg.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? 'text-brand-gold' : 'text-brand-blue'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${pkg.popular ? 'bg-white text-brand-blue hover:bg-slate-50' : 'bg-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white'}`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
