// สร้างไฟล์ src/components/MenuCard.tsx หรือวางไว้บน App.tsx ก็ได้
import type { MenuItem } from '../data/menu';

export const MenuCard = ({ item }: { item: MenuItem }) => (
  <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-brand-red/10 transition-all duration-500 border border-brand-red/5">
    <div className="aspect-square overflow-hidden">
      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    </div>
    <div className="p-3 md:p-6 flex flex-col flex-1 justify-between">
      <div>
        <span className="text-[8px] md:text-[10px] font-bold tracking-[0.15em] text-brand-red uppercase bg-brand-red/5 px-2 py-0.5 rounded-md">
          {item.category}
        </span>
        <h3 className="text-sm md:text-xl font-serif mt-1.5 mb-0.5 leading-tight line-clamp-1">{item.name}</h3>
        <p className="hidden md:block text-gray-500 text-xs mt-2 leading-relaxed font-light italic line-clamp-2">"{item.description}"</p>
      </div>
      <div className="mt-3 pt-2 border-t border-gray-50 flex justify-between items-center">
        <div className="flex items-baseline gap-1">
          <span className="text-sm md:text-xl font-bold text-brand-red">{item.price}</span>
          <span className="text-[9px] md:text-xs text-gray-400">THB</span>
        </div>
        <button className="md:block hidden bg-brand-red text-white p-2 rounded-full hover:bg-brand-dark transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);