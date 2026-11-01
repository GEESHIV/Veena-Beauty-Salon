import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/data";

type NavbarProps = {
  onBookClick: () => void;
};

export default function Navbar({ onBookClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-md shadow-beige-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
        >
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full font-serif text-xl font-bold transition-colors ${
              scrolled ? "bg-gold-500 text-white" : "bg-white/20 text-white backdrop-blur-sm"
            }`}
          >
            V
          </span>
          <span className="text-left leading-none">
            <span
              className={`block font-serif text-lg font-semibold tracking-wide transition-colors ${
                scrolled ? "text-beige-900" : "text-white"
              }`}
            >
              Veena's Beauty Salon
            </span>
            <span
              className={`block text-[10px] uppercase tracking-[0.3em] mt-0.5 transition-colors ${
                scrolled ? "text-gold-600" : "text-gold-200"
              }`}
            >
              Noida • Sector 12
            </span>
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${
                  scrolled ? "text-beige-700" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-beige-700 hover:text-gold-600" : "text-white/90 hover:text-gold-200"
            }`}
          >
            <Phone size={16} /> {BUSINESS.phone}
          </a>
          <button onClick={onBookClick} className="btn-gold !py-2.5 !px-6 text-sm">
            Book Now
          </button>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-beige-900" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 bg-ivory rounded-2xl shadow-xl p-6 border border-gold-200">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left py-3 px-4 rounded-lg text-beige-800 font-medium hover:bg-blush-50 hover:text-gold-600 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-beige-200 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-blush-50 text-beige-800 font-medium"
            >
              <Phone size={18} /> {BUSINESS.phone}
            </a>
            <button
              onClick={() => {
                setOpen(false);
                onBookClick();
              }}
              className="btn-gold w-full"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
