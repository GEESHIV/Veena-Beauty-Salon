import { Check } from "lucide-react";
import { ABOUT_POINTS, BUSINESS } from "@/data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image collage */}
        <div className="reveal relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/7446910/pexels-photo-7446910.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Makeup artist applying cosmetics to a client"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Facial treatment with beautician applying a mask"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Contemporary beauty salon interior"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/20695691/pexels-photo-20695691.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Indian bride with exquisite jewelry and makeup"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-gradient-to-br from-gold-200 to-blush-100 -z-0" />
        </div>

        {/* Text */}
        <div className="reveal">
          <span className="heading-eyebrow">About Us</span>
          <h2 className="heading-main mb-6">
            Where Beauty Meets <span className="italic text-gold-600">Elegance</span>
          </h2>
          <p className="text-beige-700 leading-relaxed mb-6">
            Welcome to {BUSINESS.name}, a premier beauty destination in the heart of Noida
            Sector 12. We believe every person deserves to feel radiant, confident, and
            beautifully themselves. Our salon brings together artistry, premium products, and a
            warm, personalised approach to create looks that celebrate you.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {ABOUT_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-gold-600" />
                </span>
                <span className="text-sm text-beige-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
            >
              Discover Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
