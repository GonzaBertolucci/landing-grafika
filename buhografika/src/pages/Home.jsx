import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import VideoSection from '../components/VideoSection';
import Gallery from '../components/Gallery';
import WhatsAppButton from '../components/WhatsAppButton';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <VideoSection />
        <Gallery />
        <FAQ />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
