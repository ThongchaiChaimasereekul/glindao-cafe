// src/components/Hero.tsx
import logoImg from '../assets/logo.jpg';

export const Hero = () => {
  return (
    <header className="relative w-full py-20 md:py-28 px-4 text-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red to-brand-dark -skew-y-3 origin-top-left scale-150 shadow-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-6 group">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-white/50">
            <img src={logoImg} alt="Glindao Cafe Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif text-white font-bold mb-4 drop-shadow-lg tracking-tighter">
          Glindao Cafe
        </h1>
        <p className="text-white/80 text-sm md:text-xl font-light tracking-[0.3em] uppercase">
          Experience the finest roast
        </p>
        
        <div className="mt-10">
          <a 
            href="#menu-section" 
            className="bg-white text-brand-red px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-brand-cream transition-all duration-300 shadow-xl"
          >
            Explore Menu
          </a>
        </div>
        
        <div className="w-12 h-1 bg-white/30 mt-8 rounded-full"></div>
      </div>
    </header>
  );
};