// import { menuData } from './data/menu';
// import { MenuCard } from './components/MenuCard';
import { Hero } from './components/Hero';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import Menu from './components/Menu';

function App() {
  return (
    <div className="min-h-screen w-full bg-brand-cream font-sans text-brand-dark overflow-x-hidden">
      
      {/* ส่วนหัวและสโลแกน */}
      <Hero />

      {/* About Us Section - ที่น้องต้องการ */}
      <AboutUs />

      {/* ส่วนรายการเมนู */}
      <Menu />

      {/* 3. ส่วนแผนที่และที่ตั้ง */}
      <Location />

      {/* 4. ส่วนท้ายเว็บ */}
      <Footer />
      
    </div>
  );
}

export default App;