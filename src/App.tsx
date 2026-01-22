import { Hero } from './components/Hero';
import Menu from './components/Menu';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { Location } from './components/Location';

// App Component: รวบรวมทุกส่วนของหน้า Landing Page
function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-red selection:text-white">
      <main>
        {/* Landing Section */}
        <Hero />

        {/* About Us Section */}
        <AboutUs/>

        {/* Menu Section with Filtering */}
        <Menu />
        
        {/* สามารถเพิ่ม Section อื่นๆ เช่น About, Contact ต่อตรงนี้ได้ */}
        <Location />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;