import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function App() {
  useScrollReveal();
  const [bookingKey, setBookingKey] = useState(0);

  // Scrolls to the booking section; remount resets the form's "sent" state.
  const handleBookClick = useCallback(() => {
    setBookingKey((k) => k + 1);
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar onBookClick={handleBookClick} />
      <main>
        <Hero onBookClick={handleBookClick} />
        <About />
        <Services onBookClick={handleBookClick} />
        <WhyChoose />
        <Gallery />
        <Reviews />
        <div key={bookingKey}>
          <Booking />
        </div>
        <Contact onBookClick={handleBookClick} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
