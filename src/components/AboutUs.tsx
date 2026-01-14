import { Coffee, Star, Utensils } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about-section" className="py-24 bg-white relative overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Side: Image Composition */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform hover:rotate-1 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000"
                alt="Our atmosphere"
                className="w-full h-[450px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:-left-6 z-20 bg-brand-red text-white p-4 md:p-6 rounded-2xl shadow-xl flex flex-col items-center md:items-start min-w-[120px] md:min-w-[140px]">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80 font-bold">Since</span>
              <span className="text-2xl md:text-3xl font-serif font-bold">2022</span>
            </div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="w-full lg:w-1/2">
            <div className="border-l-4 border-brand-red pl-6 mb-8">
              <span className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase">
                Our Heritage
              </span>
              <h2 className="text-4xl md:text-6xl font-serif mt-2 leading-tight">
                The Scent of <br />
                <span className="text-brand-red">Coffee & Stars</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              At **Glindao Cafe**, we don't just serve coffee; we serve a moment of tranquility.
              Our beans are carefully sourced from sustainable farms, roasted to perfection
              to ensure every sip feels like a starlit night.
            </p>

            {/* Feature Grid - จัดใหม่เป็น 3 รายการ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 mb-10">
              {/* 1. Coffee */}
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 bg-brand-cream rounded-xl flex items-center justify-center text-brand-red shadow-sm">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Crafted Roast</h4>
                  <p className="text-sm text-gray-500 italic">Premium micro-batches.</p>
                </div>
              </div>

              {/* 2. Utensils - เอากลับมาใช้แล้วครับจารย์! */}
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 bg-brand-cream rounded-xl flex items-center justify-center text-brand-red shadow-sm">
                  <Utensils size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Fresh Bakery</h4>
                  <p className="text-sm text-gray-500 italic">Homemade treats daily.</p>
                </div>
              </div>

              {/* 3. Star - กินพื้นที่เต็มแถวในหน้ามือถือ หรือต่อท้ายในหน้า Desktop */}
              <div className="flex gap-4 sm:col-span-2 lg:col-span-1">
                <div className="h-12 w-12 shrink-0 bg-brand-cream rounded-xl flex items-center justify-center text-brand-red shadow-sm">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Chill Vibes</h4>
                  <p className="text-sm text-gray-500 italic">Relax under the stars.</p>
                </div>
              </div>
            </div>

            {/* Decorative Footer */}
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-brand-red/20"></div>
              <span className="text-brand-red font-serif italic text-lg">Join our journey</span>
              <div className="h-px flex-1 bg-brand-red/20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};