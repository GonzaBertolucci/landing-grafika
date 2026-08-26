import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import VideoSection from '../components/VideoSection';
import Gallery from '../components/Gallery';
import WhatsAppButton from '../components/WhatsAppButton';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import CtaFinal from '../components/CtaFinal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <VideoSection />
        <Testimonials />
        <FAQ />
        <CtaFinal />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
