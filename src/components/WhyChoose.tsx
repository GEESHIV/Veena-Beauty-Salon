import {
  Sparkles,
  Award,
  Eye,
  Heart,
  Home,
  Smile,
} from "lucide-react";
import { WHY_CHOOSE } from "@/data";

const ICONS: Record<string, typeof Sparkles> = {
  Sparkles,
  Award,
  Eye,
  Heart,
  Home,
  Smile,
};

export default function WhyChoose() {
  return (
    <section id="why-us" className="section-padding bg-beige-900 relative overflow-hidden">
      {/* Decorative gold orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blush-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <span className="heading-eyebrow text-gold-300">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight">
            The Veena's <span className="italic text-gold-300">Difference</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Sparkles;
            return (
              <div
                key={item.title}
                className="reveal group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-400/40 hover:bg-white/10 transition-all duration-400"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-serif text-xl text-ivory mb-3">{item.title}</h3>
                <p className="text-beige-200/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
