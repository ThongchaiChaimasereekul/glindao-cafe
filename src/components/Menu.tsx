import { useState } from 'react';
import { menuData } from '../data/menu';

const Menu = () => {
  // 1. สร้าง State สำหรับเก็บหมวดหมู่ที่เลือก (เริ่มต้นที่ 'All')
  const [activeCategory, setActiveCategory] = useState('All');

  // 2. ดึงรายชื่อ Category ทั้งหมดออกมาแบบไม่ซ้ำ (Unique)
  const categories = ['All', ...new Set(menuData.map((item) => item.category))];

  // 3. กรองข้อมูลตาม Category ที่เลือก
  const filteredMenu = activeCategory === 'All' 
    ? menuData 
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <section id="menu-section" className="py-24 bg-[#0c0a09] scroll-mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-red-400 mb-4 uppercase tracking-tighter">
            Our Divine Menu
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-red-800"></div>
            <div className="w-3 h-3 bg-red-800 rotate-45"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-red-800"></div>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-[#7f1d1d] border-[#7f1d1d] text-white shadow-lg shadow-red-900/40'
                  : 'bg-transparent border-stone-700 text-stone-400 hover:border-red-800 hover:text-red-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredMenu.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-[#1c1917] rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-red-900/50 shadow-2xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.img} // ปรับเป็น item.img ตาม interface ใหม่ของคุณ
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-10">
                   <span className="bg-black/60 backdrop-blur-md text-red-400 text-[10px] font-bold px-3 py-1 rounded-full border border-red-900/30 uppercase tracking-widest">
                     {item.category}
                   </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.name}
                  </h3>
                  {/* <span className="text-red-500 font-bold text-xl">
                    ฿{item.price}
                  </span> */}
                </div>
                
                <p className="text-stone-400 text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* <button className="w-full py-4 bg-[#7f1d1d] hover:bg-[#991b1b] text-white rounded-xl font-bold uppercase tracking-widest shadow-lg transform transition-all active:scale-95 border border-red-700/30">
                  Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;