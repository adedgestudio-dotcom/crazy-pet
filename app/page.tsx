import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import WhatsAppBot from "@/components/ui/WhatsAppBot";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppBot />
    </main>
  );
}
