import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Solutions from "./sections/Solutions";
import Features from "./sections/Features";
import WhyChoose from "./sections/WhyChoose";
import Pricing from "./sections/Pricing";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Stats />
      <Solutions />
      <Features />
      <WhyChoose />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
