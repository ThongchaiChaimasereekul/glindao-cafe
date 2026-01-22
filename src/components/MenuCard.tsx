import type { MenuItem } from '../data/menu';

export const MenuCard = ({ item }: { item: MenuItem }) => (
  <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
    
    {/* Image Section with Overlay Category */}
    <div className="relative aspect-[4/5] overflow-hidden">
      <div className="absolute top-4 left-4 z-10">
        <span className="backdrop-blur-md bg-white/70 text-brand-red text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/50 shadow-sm">
          {item.category}
        </span>
      </div>
      
      <img 
        src={item.img} 
        alt={item.name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      
      {/* Soft Shadow Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content Section */}
    <div className="p-5 md:p-7 flex flex-col flex-1">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg md:text-2xl font-serif text-gray-800 leading-tight group-hover:text-brand-red transition-colors duration-300">
            {item.name}
          </h3>
        </div>
        
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light line-clamp-2 mb-4">
          {item.description}
        </p>
      </div>

      {/* Footer: Price & Action */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Price</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl md:text-2xl font-black text-gray-900 leading-none">
              {/* {item.price} */}
            </span>
            <span className="text-[10px] font-bold text-brand-red">THB</span>
          </div>
        </div>

        <button className="relative overflow-hidden h-10 w-10 md:h-12 md:w-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-brand-red transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-brand-red/40">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);