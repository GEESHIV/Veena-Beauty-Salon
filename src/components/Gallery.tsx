import { GALLERY_IMAGES } from "@/data";

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <span className="heading-eyebrow">Our Beauty Gallery</span>
          <h2 className="heading-main">
            A Glimpse of Our <span className="italic text-gold-600">Artistry</span>
          </h2>
          <p className="text-beige-600 mt-4 max-w-xl mx-auto">
            Transformations, treatments, and moments of beauty crafted at Veena's Beauty Salon.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beige-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <p className="absolute bottom-0 left-0 p-4 text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
