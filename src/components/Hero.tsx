import { CalendarHeart, ArrowRight } from "lucide-react";

type HeroProps = {
  onBookClick: () => void;
};

export default function Hero({ onBookClick }: HeroProps) {
  const scrollToServices = () =>
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/35983950/pexels-photo-35983950.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Bride receiving professional makeup application"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-beige-900/80 via-beige-900/50 to-beige-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-beige-900/70 via-transparent to-beige-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center pt-24 pb-16">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.4em] text-gold-300 font-medium mb-6">
            ✦ Veena's Beauty Salon ✦
          </span>
        </div>

        <h1
          className="animate-fade-up font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Beauty is an Art.
          <br />
          <span className="italic text-gold-200">Let Yours Shine.</span>
        </h1>

        <p
          className="animate-fade-up text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Experience the perfect blend of beauty, elegance &amp; self-care at Veena's Beauty Salon.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <button onClick={onBookClick} className="btn-gold w-full sm:w-auto">
            <CalendarHeart size={20} /> Book an Appointment
          </button>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/50 text-white font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-beige-900 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Explore Our Services <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-shimmer">
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
}
