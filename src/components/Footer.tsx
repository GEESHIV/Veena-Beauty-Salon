import { MapPin, Phone, ArrowUp } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICE_CATEGORIES } from "@/data";

export default function Footer() {
  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-beige-900 text-beige-100 pt-16 pb-8 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-500 text-white font-serif text-xl font-bold">
                V
              </span>
              <span className="font-serif text-lg font-semibold text-ivory">
                Veena's Beauty Salon
              </span>
            </div>
            <p className="text-beige-200/60 text-sm leading-relaxed mb-4">
              A premier beauty destination in Noida Sector 12, blending artistry, premium
              products, and personalised care to help your beauty shine.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-beige-200/60 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.title}>
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-beige-200/60 text-sm hover:text-gold-300 transition-colors text-left"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-beige-200/60">
                <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2 text-beige-200/60 hover:text-gold-300 transition-colors"
                >
                  <Phone size={16} className="text-gold-400 flex-shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-300 hover:text-gold-200 transition-colors text-sm"
                >
                  View on Google Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-beige-200/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-sm text-beige-200/60 hover:text-gold-300 transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
