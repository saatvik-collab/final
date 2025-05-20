import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import CTASection from "@/components/CTASection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Immadisetty Crackers - Premium Fireworks Shop in Secunderabad</title>
        <meta name="description" content="Immadisetty Crackers offers premium fireworks for weddings, festivals, and events. Located near Mahankali Temple, Secunderabad. Trusted since 1982." />
        <meta property="og:title" content="Immadisetty Crackers - Premium Fireworks Shop" />
        <meta property="og:description" content="High-quality fireworks for all celebrations. Visit our shop near Mahankali Temple, Secunderabad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://immadisetty-crackers.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <CTASection />
        <ProductsSection />
        <GallerySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
