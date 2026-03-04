import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContentSection from "@/components/ContentSection";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ContentSection />
        <Marquee />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
