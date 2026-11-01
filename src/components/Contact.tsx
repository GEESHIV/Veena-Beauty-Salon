import { Phone, MessageCircle, MapPin, ExternalLink, Clock } from "lucide-react";
import { BUSINESS } from "@/data";

type ContactProps = {
  onBookClick: () => void;
};

export default function Contact({ onBookClick }: ContactProps) {
  const waUrl = `https://wa.me/${BUSINESS.phoneRaw}`;

  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <span className="heading-eyebrow">Contact Us</span>
          <h2 className="heading-main">
            Visit <span className="italic text-gold-600">Veena's</span>
          </h2>
          <p className="text-beige-600 mt-4 max-w-xl mx-auto">
            We'd love to welcome you. Reach out, get directions, or book your appointment today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact details */}
          <div className="reveal space-y-5">
            <ContactCard
              icon={<MapPin size={22} />}
              title="Our Location"
              lines={[BUSINESS.address]}
              action={{
                label: "Get Directions",
                href: BUSINESS.mapsDirectionsUrl,
                external: true,
              }}
            />
            <ContactCard
              icon={<Phone size={22} />}
              title="Call Us"
              lines={[BUSINESS.phone]}
              action={{
                label: "Call Now",
                href: `tel:${BUSINESS.phoneRaw}`,
                external: false,
              }}
            />
            <ContactCard
              icon={<MessageCircle size={22} />}
              title="WhatsApp"
              lines={[BUSINESS.phone]}
              action={{
                label: "Chat on WhatsApp",
                href: waUrl,
                external: true,
              }}
            />
            <ContactCard
              icon={<Clock size={22} />}
              title="Planning a Visit?"
              lines={["Contact us to confirm available time slots before visiting."]}
              action={{
                label: "Book an Appointment",
                href: "#booking",
                external: false,
                onClick: onBookClick,
              }}
            />
          </div>

          {/* Map embed */}
          <div className="reveal rounded-3xl overflow-hidden shadow-xl border border-beige-200 min-h-[420px]">
            <iframe
              title="Veena's Beauty Salon Location"
              src={BUSINESS.mapsEmbedUrl}
              className="w-full h-full min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  action: {
    label: string;
    href: string;
    external: boolean;
    onClick?: () => void;
  };
}) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-beige-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-100 to-blush-50 flex items-center justify-center text-gold-600">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-lg text-beige-900 mb-1">{title}</h3>
          {lines.map((line) => (
            <p key={line} className="text-beige-600 text-sm leading-relaxed">
              {line}
            </p>
          ))}
          <a
            href={action.href}
            {...(action.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            onClick={(e) => {
              if (action.onClick) {
                e.preventDefault();
                action.onClick();
              }
            }}
            className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
          >
            {action.label} <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
