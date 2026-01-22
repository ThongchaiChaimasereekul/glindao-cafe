import { useState } from 'react';
import { menuData } from '../data/menu';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(menuData.map(item => item.category))];

  const filteredMenu = activeCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu-section" className="py-24 bg-gradient-to-br from-brand-red to-brand-dark scroll-mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-red-400 mb-4 uppercase">
            Our Divine Menu
          </h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-px bg-brand-red"></div>
            <div className="w-2 h-2 bg-brand-red rotate-45"></div>
            <div className="w-12 h-px bg-brand-red"></div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${
                activeCategory === category
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'border-stone-700 text-stone-400 hover:border-brand-red hover:text-red-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMenu.map((item) => (
            <div key={item.id} className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-brand-red/30 transition-all shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-red-400 text-[10px] px-3 py-1 rounded-full border border-red-900/30 font-bold uppercase">{item.category}</div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>
                <button className="w-full py-4 bg-brand-red hover:bg-brand-red-light text-white rounded-xl font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-red-950/20">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;