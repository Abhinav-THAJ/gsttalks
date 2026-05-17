import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-slate-600/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top Section — Large Brand */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-lg">
              <Image src="/logo.png" alt="GST Talks India" fill className="object-cover" />
            </div>
            <span className="text-3xl font-bold tracking-tight text-white">
              GST Talks India
            </span>
          </div>
          <p className="text-slate-500 leading-relaxed max-w-md text-lg">
            Smart, Simple, and Complete Financial Solutions. We simplify GST and Income Tax compliance for businesses across India.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-16">
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Training", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                    <span className="w-0 h-px bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors font-medium">GST Registration & Filing</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors font-medium">Income Tax Returns</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors font-medium">Auditing & Compliance</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors font-medium">Startup Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="font-medium">H&S Management Consultants (P) Ltd, VRM Road, Ravipuram</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="tel:+919847148622" className="hover:text-white transition-colors font-medium">+91 984 714 8622</a>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:info@gsttalksindia.com" className="hover:text-white transition-colors font-medium">info@gsttalksindia.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6 font-medium">Stay updated with the latest in GST and tax compliance.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-l-full text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 text-sm" />
              <button className="px-5 py-3 bg-amber-400 text-slate-900 rounded-r-full font-bold text-sm hover:bg-amber-300 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm font-medium">
            © {new Date().getFullYear()} GST Talks India. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="#" className="text-slate-600 hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link href="#" className="text-slate-600 hover:text-white transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
