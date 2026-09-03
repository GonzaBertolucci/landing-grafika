import { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMap, FaRegClock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#110f0f] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-16 px-6 flex flex-col items-center justify-center relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-6xl text-center md:text-left mb-6 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Contacto <span className="text-primary neon-text">Buhografika</span>
          </h1>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
              Si Tenes Alguna Consulta,<br />
              No Dudes En Contactarnos!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 mt-8">
              <ContactCard icon={<FaEnvelope />} title="Email" text="buhografika@gmail.com" />
              <ContactCard icon={<FaPhone />} title="Whatsapp" text={<span>11-2238-9792<br />11-6740-1899</span>} />
              <ContactCard icon={<FaMap />} title="Nuestra ubicacion" text={<span>Eva Perón 2923<br />B1614CLF Villa de Mayo<br />Provincia de Buenos Aires</span>} />
              <ContactCard icon={<FaRegClock />} title="Horarios De Atencion" text={<span>De lunes a Sabados,<br />9:00 am - 6:00 pm</span>} />
            </div>
          </div>
          <ContactForm />

        </div>
      </main>

      <Footer />
    </div>
  );
}