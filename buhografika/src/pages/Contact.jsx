import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Contacto <span className="text-primary">Buhografika</span>
          </h1>
          <p className="text-gray-400">Próximamente...</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
