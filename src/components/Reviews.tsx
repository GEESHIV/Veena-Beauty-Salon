import { Star, ExternalLink, Quote } from "lucide-react";
import { BUSINESS } from "@/data";

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-blush-50 to-ivory">
      <div className="max-w-5xl mx-auto text-center">
        <div className="reveal">
          <span className="heading-eyebrow">Customer Reviews</span>
          <h2 className="heading-main mb-6">
            Loved by Our <span className="italic text-gold-600">Clients</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="fill-gold-400 text-gold-400" />
            ))}
          </div>
          <p className="text-beige-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            We are proud of the experiences we create for every guest who walks through our
            doors. Read what our clients have to say about their visits on our Google Business
            Profile.
          </p>
          <p className="text-sm text-beige-500 mb-10">
            We do not display reviews directly on this page to ensure you always read authentic,
            verified feedback.
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <ExternalLink size={18} /> Read Our Google Reviews
          </a>
        </div>

        {/* Decorative quote */}
        <div className="reveal mt-16 max-w-3xl mx-auto">
          <Quote size={48} className="text-gold-300 mx-auto mb-4" />
          <p className="font-serif text-xl sm:text-2xl text-beige-700 italic leading-relaxed">
            True beauty begins the moment you decide to be yourself, and we are here to help
            that beauty shine.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gold-600">Veena's Beauty Salon</p>
        </div>
      </div>
    </section>
  );
}
