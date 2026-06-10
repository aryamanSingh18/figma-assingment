import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TomorrowSection } from "./components/TomorrowSection";
import { HelpSection } from "./components/HelpSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Navbar />
      <main>
        <HeroSection />
        <TomorrowSection />
        <HelpSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
