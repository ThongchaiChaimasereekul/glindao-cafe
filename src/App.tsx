import { Facebook, Instagram, ArrowUp} from 'lucide-react';
import logoImg from './assets/logo.jpg'
import banoffeeImg from './assets/banoffee.png'

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  img: string;
  category: string;
}

function App() {
  const menu: MenuItem[] = [
    { 
      id: 1, 
      name: "Signature Banoffee", 
      price: "888", 
      description: "บานอฟฟี่เลเยอร์หนานุ่ม กล้วยหอมคัดเกรดราดซอสคาราเมลโฮมเมด และครีมสดละมุนลิ้น", 
      img: banoffeeImg, 
      category: "Signature" 
    },
    { 
      id: 2, 
      name: "Classic English Scone", 
      price: "888", 
      description: "สโคนสูตรดั้งเดิม อบสดใหม่ทุกเช้า ผิวนอกกรอบในนุ่ม เสิร์ฟพร้อมแยมเบอร์รี่และคล็อตเต็ดครีม", 
      img: "https://images.unsplash.com/photo-1589114471223-dec0d8d572c6?w=600", 
      category: "Bakery" 
    },
    { 
      id: 3, 
      name: "Burnt Cheesecake", 
      price: "888", 
      description: "ชีสเค้กหน้าไหม้สไตล์บาสก์ เนื้อเนียนนุ่ม หอมกลิ่นไหม้นิดๆ รสชาติชีสเข้มข้นจากสเปน", 
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600", 
      category: "Bakery" 
    },
    { 
      id: 4, 
      name: "Yippy Choc", 
      price: "888", 
      description: "เมนูช็อกโกแลตซิกเนเจอร์ เข้มข้นระดับพรีเมียม ผสานความกรุบกรอบที่ทำให้คุณรู้สึก 'Yippy' ทุกคำ", 
      img: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600", 
      category: "Signature Drink" 
    },
  ];

  return (
    <div className="min-h-screen w-full bg-brand-cream font-sans text-brand-dark overflow-x-hidden">
      
      {/* --- HEADER พร้อม LOGO --- */}
      <header className="relative w-full py-20 md:py-28 px-4 text-center overflow-hidden">
        {/* พื้นหลังบิดเบี้ยวสีแดงเลือดหมู */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red to-brand-dark -skew-y-3 origin-top-left scale-150 shadow-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          
          {/* --- ส่วนของ LOGO --- */}
          <div className="mb-6 group">
             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-white/50">
                <img 
                  src={logoImg} 
                  alt="Glindao Cafe Logo" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-white font-bold mb-4 drop-shadow-lg tracking-tighter">
            Glindao Cafe
          </h1>
          <p className="text-white/80 text-sm md:text-xl font-light tracking-[0.3em] uppercase">
            Experience the finest roast
          </p>
          
          {/* เส้นขีดตกแต่งเล็กๆ */}
          <div className="w-12 h-1 bg-white/30 mt-8 rounded-full"></div>
        </div>
      </header>

      {/* --- MENU SECTION --- */}
      {/* ใช้ max-w-7xl เพื่อไม่ให้คอนเทนต์แผ่กว้างเกินไปจนอ่านยากในจอคอม (Ultra Wide) */}
      <main className="max-w-7xl mx-auto py-16 px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="border-l-4 border-brand-red pl-6">
            <span className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase">Premium Selection</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-2">Signature Menu</h2>
          </div>
        </div>

        {/* --- RESPONSIVE GRID --- 
            grid-cols-1: มือถือโชว์ 1 แถว
            lg:grid-cols-2: จอคอมโชว์ 2 แถวขนานกัน
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {menu.map((item) => (
            <div key={item.id} className="group flex flex-col sm:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-brand-red/20 transition-all duration-500 border border-brand-red/5">

              {/* Image: ในมือถือสูงเท่ากันหมด พอจอใหญ่ค่อยปรับสัดส่วน */}
              <div className="sm:w-1/2 h-72 sm:h-auto overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="sm:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase bg-brand-red/5 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mt-4 mb-3 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light italic">
                    "{item.description}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Price</span>
                    <span className="text-2xl font-bold text-brand-red">
                      {item.price} <span className="text-sm font-normal text-gray-400">THB</span>
                    </span>
                  </div>
                  <button className="bg-brand-red text-white p-4 rounded-full hover:bg-brand-dark transition-colors shadow-lg">
                    {/* ไอคอนลูกศรแบบง่ายๆ */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- LOCATION SECTION --- */}
      <section id="location" className="w-full bg-white py-20 px-6 border-t border-brand-red/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            {/* ฝั่งซ้าย: ข้อมูลร้าน */}
            <div className="md:w-1/3 text-left">
              <span className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase">Visit Us</span>
              <h2 className="text-4xl font-serif mt-2 mb-6">ที่ตั้งร้านของเรา</h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start gap-3">
                  <span className="text-brand-red font-bold">📍</span>
                  <span>10, 163 หมู่ที่ 8 ถ. เพชรเกษม ตำบล อ้อมใหญ่ อำเภอสามพราน นครปฐม 73160</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-brand-red font-bold">📞</span>
                  <span>+66 95 629 4962</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-brand-red font-bold">⏰</span>
                  <span>เปิดทุกวัน: 08:00 – 17:00 น.</span>
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Glindao+Cafe"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-brand-dark transition-all"
              >
                ขอเส้นทาง (Directions)
              </a>
            </div>

            {/* ฝั่งขวา: Google Maps Iframe */}
            <div className="md:w-2/3 w-full h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                title="Glindao Cafe Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1032843475965!2d100.2784152!3d13.7085668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29580b321560d%3A0xe2d300195d0bb33d!2sGlindao%20Cafe%20(%E0%B8%81%E0%B8%A5%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B8%94%E0%B8%B2%E0%B8%A7%20%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B9%88)!5e0!3m2!1sth!2sth!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER: Full Version with Icons --- */}
      <footer className="w-full bg-brand-dark text-brand-cream pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            
            {/* ฝั่งซ้าย: แบรนด์ */}
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl mb-2 tracking-tighter">Glindao Cafe</h2>
              <p className="text-brand-cream/40 text-[10px] tracking-[0.4em] uppercase font-bold">Artisan Coffee & Bakery</p>
            </div>

            {/* ฝั่งกลาง: Social Media Icons (ใส่ลิงก์จริงได้ที่ href) */}
            <div className="flex gap-6 items-center">
              <a href="https://www.facebook.com/glindao.cafe" target="_blank" rel="noreferrer" 
                 className="p-3 bg-white/5 rounded-full hover:bg-brand-red transition-all duration-300 group">
                <Facebook size={20} className="group-hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/glindao.cafe/" target="_blank" rel="noreferrer"
                 className="p-3 bg-white/5 rounded-full hover:bg-brand-red transition-all duration-300 group">
                <Instagram size={20} className="group-hover:scale-110" />
              </a>
            </div>

            {/* ฝั่งขวา: ปุ่มกลับด้านบนแบบมี Icon */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-all font-bold"
            >
              Back to top 
              <div className="p-2 border border-brand-cream/20 rounded-full group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>

          {/* เส้นคั่นบางๆ */}
          <div className="w-full h-px bg-brand-cream/10 my-12"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-brand-cream/30 tracking-[0.2em] uppercase font-bold">
            <p>© 2026 GLINDAO CAFE. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED BY @BANKISWATCHINGYOU</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App