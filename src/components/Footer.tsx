import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-blue font-bold text-xl">
                G
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                GST Talks India
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Smart, Simple, and Complete Financial Solutions. We simplify GST and Income Tax compliance for businesses across India.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Training", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-gold" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-brand-gold transition-colors">GST Registration & Filing</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-brand-gold transition-colors">Income Tax Returns</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-brand-gold transition-colors">Auditing & Compliance</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-brand-gold transition-colors">Startup Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>H&S Management Consultants (P) Ltd, VRM Road, Ravipuram</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+919847148622" className="hover:text-white transition-colors">+91 984 714 8622</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@gsttalksindia.com" className="hover:text-white transition-colors">info@gsttalksindia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} GST Talks India. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
