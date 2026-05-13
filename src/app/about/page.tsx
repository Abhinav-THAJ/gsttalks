"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users, Target, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const team = [
    { name: "Stanly James", role: "FCA, Founder", desc: "Expert in Corporate Tax and Audit with 20+ years of experience.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
    { name: "Annie Abraham", role: "B.Com(Hons) FCA", desc: "Specialist in GST Compliance and Advisory Services.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
    { name: "Jayson Jacob Mathew", role: "M.Com, FCA", desc: "Focuses on Startup Consulting and Financial Planning.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
    { name: "Unnikrishnan V", role: "Senior Consultant", desc: "Leads the Audit and Assurance division.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Empowering Your <span className="text-gradient">Financial Vision</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            With over 35 years of legacy, GST Talks India stands as a pillar of trust, delivering elite financial consultancy, tax advisory, and compliance services to businesses across the nation.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <Target className="w-12 h-12 text-brand-blue mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To simplify tax compliance by delivering accurate information, practical tools, and accessible training on GST and Income Tax laws. We empower businesses to remain compliant and make informed financial decisions.
            </p>
          </div>
          <div className="glass-card p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <Award className="w-12 h-12 text-brand-gold mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be India’s most trusted platform that fosters a culture of informed, responsible, and transparent tax practices. We envision a future where every taxpayer is equipped with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Meet the experienced professionals guiding our vision and delivering excellence to our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-3xl group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-full aspect-square rounded-2xl bg-slate-200 mb-6 overflow-hidden relative">
                 <Image 
                   src={member.image} 
                   alt={member.name} 
                   fill 
                   className="object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-brand-gold font-medium text-sm mb-4">{member.role}</p>
              <p className="text-slate-600 text-sm">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
