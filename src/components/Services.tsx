import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data";

type ServicesProps = {
  onBookClick: () => void;
};

export default function Services({ onBookClick }: ServicesProps) {
  const [active, setActive] = useState(0);
  const category = SERVICE_CATEGORIES[active];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-beige-50 to-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <span className="heading-eyebrow">Our Services</span>
          <h2 className="heading-main">
            Crafted for Your <span className="italic text-gold-600">Beauty</span>
          </h2>
          <p className="text-beige-600 mt-4 max-w-xl mx-auto">
            From everyday grooming to bridal transformations — explore our full range of
            premium beauty services.
          </p>
        </div>

        {/* Category tabs */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === i
                  ? "bg-gold-500 text-white shadow-lg shadow-gold-400/30"
                  : "bg-white text-beige-700 border border-beige-200 hover:border-gold-400 hover:text-gold-600"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="reveal relative rounded-3xl overflow-hidden shadow-xl group min-h-[360px]">
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beige-900/80 via-beige-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-serif text-2xl text-white">{category.title}</h3>
            </div>
          </div>

          <div className="reveal flex flex-col justify-center">
            <ul className="space-y-3 mb-8">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-beige-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-gold-400 to-blush-300" />
                    <span className="font-serif text-lg text-beige-800">{item}</span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-beige-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                  />
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={onBookClick} className="btn-gold">
                Book This Service
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline"
              >
                Contact for Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
