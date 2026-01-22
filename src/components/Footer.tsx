// src/components/Footer.tsx
import { Facebook, Instagram, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full bg-gradient-to-br from-brand-red to-brand-dark text-brand-cream pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl mb-2 tracking-tighter text-white">Glindao Cafe</h2>
            <p className="text-brand-cream/40 text-[10px] tracking-[0.4em] uppercase font-bold">Artisan Coffee & Bakery</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 items-center">
            <a href="https://facebook.com/glindao.cafe" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-red transition-all duration-300 group">
              <Facebook size={20} className="group-hover:scale-110 text-white" />
            </a>
            <a href="https://instagram.com/glindao.cafe" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-red transition-all duration-300 group">
              <Instagram size={20} className="group-hover:scale-110 text-white" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-all font-bold text-white"
          >
            Back to top
            <div className="p-2 border border-brand-cream/20 rounded-full group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        <div className="w-full h-px bg-brand-cream/10 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-brand-cream/30 tracking-[0.2em] uppercase font-bold">
          <p>© 2026 GLINDAO CAFE. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY @BANKISWATCHINGYOU</p>
        </div>
      </div>
    </footer>
  );
};