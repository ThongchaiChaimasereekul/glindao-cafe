import { menuData } from './data/menu';
import { MenuCard } from './components/MenuCard';
import { Hero } from './components/Hero';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen w-full bg-brand-cream font-sans text-brand-dark overflow-x-hidden">
      
      {/* ส่วนหัวและสโลแกน */}
      <Hero />

      {/* About Us Section - ที่น้องต้องการ */}
      <AboutUs />

      {/* ส่วนรายการเมนู */}
      <main id="menu-section" className="max-w-7xl mx-auto py-16 px-6">
        <div className="border-l-4 border-brand-red pl-6 mb-16">
          <span className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase">
            Premium Selection
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2">Signature Menu</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 px-4">
          {menuData.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      {/* 3. ส่วนแผนที่และที่ตั้ง */}
      <Location />

      {/* 4. ส่วนท้ายเว็บ */}
      <Footer />
      
    </div>
  );
}

export default App;