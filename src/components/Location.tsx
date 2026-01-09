// src/components/Location.tsx
export const Location = () => {
    return (
      <section id="location" className="w-full bg-white py-20 px-6 border-t border-brand-red/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-left">
              <span className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase">Visit Us</span>
              <h2 className="text-4xl font-serif mt-2 mb-6">ที่ตั้งร้านของเรา</h2>
              <div className="space-y-4 text-gray-600 text-sm md:text-base">
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
                href="https://maps.google.com/?q=Glindao+Cafe"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-brand-dark transition-all"
              >
                ขอเส้นทาง (Directions)
              </a>
            </div>
  
            <div className="md:w-2/3 w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                title="Glindao Cafe Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.103445100000!2d100.2741!3d13.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQyJzAwLjAiTiAxMDDCsDE2JzI2LjgiRQ!5e0!3m2!1sth!2sth!4v1620000000000!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };