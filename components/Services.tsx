"use client";

import { useRef, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Globe,
  Sparkles,
  Leaf,
  Clock,
  Star,
  Heart,
  Flower2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Deep Tissue Therapy",
    desc: "Targeted pressure techniques to release chronic tension and restore muscular balance.",
    gradient: "from-[#8aab8a] to-[#5d8a60]",
    image: "/deepTissueTherapy.png",
    duration: "60/90 min",
    price: "$95+",
    features: ["Muscle relief", "Chronic tension", "Recovery"],
  },
  {
    title: "Rejuvenating Facial",
    desc: "Clinical-grade facial treatments that restore radiance and promote cellular renewal.",
    gradient: "from-[#c4a882] to-[#a08560]",
    image: "/rejuvenatingFacial.png",
    duration: "75 min",
    price: "$120+",
    features: ["Anti-aging", "Deep cleansing", "Hydration"],
  },
  {
    title: "Aromatherapy Ritual",
    desc: "Essential oil infused massage and breathwork for deep nervous system restoration.",
    gradient: "from-[#7c9a82] to-[#4a7c5f]",
    image: "/aromatherapyRitual.png",
    duration: "90 min",
    price: "$110+",
    features: ["Essential oils", "Breathwork", "Stress relief"],
  },
  {
    title: "Detox Body Wrap",
    desc: "Mineral-rich body treatment designed to draw out toxins and deeply hydrate the skin.",
    gradient: "from-[#b8a88a] to-[#8a7a62]",
    image: "/detoxBodyWrap.png",
    duration: "80 min",
    price: "$135+",
    features: ["Detoxification", "Hydration", "Skin renewal"],
  },
  {
    title: "Sound Therapy",
    desc: "Vibrational healing using crystal bowls and tuning forks for energetic realignment.",
    gradient: "from-[#6d8a93] to-[#4a6a73]",
    image: "/soundTherapy.png",
    duration: "60 min",
    price: "$85+",
    features: ["Energy balance", "Deep relaxation", "Meditation"],
  },
  {
    title: "Couples Retreat",
    desc: "A curated dual-treatment experience designed to reconnect and restore together.",
    gradient: "from-[#9a8a7c] to-[#7a6a5c]",
    image: "/couplesRetreat.png",
    duration: "120 min",
    price: "$250+",
    features: ["Side-by-side", "Champagne", "Private suite"],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-cream via-white to-cream overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - hidden on mobile */}
        <div className="absolute top-40 -left-20 w-96 h-96 bg-forest/5 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
            <div className="flex gap-1 sm:gap-1.5">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="relative">
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-forest/40" />
                  {dot === 2 && (
                    <div className="absolute inset-0 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gold-light/40 animate-ping" />
                  )}
                </div>
              ))}
            </div>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
          </div>

          <div className="relative inline-block">
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[2px] sm:tracking-[3px] font-bold text-forest/70 bg-white/50 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
              Our Services
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-[44px] leading-[1.15] text-charcoal mb-3 sm:mb-5 text-balance mt-4 sm:mt-6 px-2 sm:px-0">
            Comprehensive wellness services
            <br className="hidden xs:block" />
            <em className="relative italic text-forest not-italic">
              for every need
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-forest/50 via-forest to-forest/50 hidden sm:block" />
            </em>
          </h2>

          <p className="text-text-body text-[13px] sm:text-[15px] leading-relaxed max-w-[540px] mx-auto relative px-3 sm:px-0">
            <span className="absolute -left-4 top-0 text-forest/10 text-2xl sm:text-3xl hidden sm:block">
              &ldquo;
            </span>
            From preventive care to specialized treatments, our wide range of
            services is designed to support your health at every stage.
            <span className="absolute -bottom-2 right-0 text-forest/10 text-2xl sm:text-3xl hidden sm:block">
              &rdquo;
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card glow effect on hover */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${s.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              <div className="relative bg-white h-full">
                {/* Image area with overlay */}
                <div className="relative h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-transform duration-700 group-hover:scale-110`}
                  >
                    {/* Decorative pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 30%),
                                      radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 30%)`,
                      }}
                    />
                  </div>

                  {/* Main emoji with animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-full h-full transform group-hover:scale-110 transition-all duration-500">
                      <Image
                        src={s.image}
                        width={340}
                        height={340}
                        alt={s.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </span>
                  </div>

                  {/* Top decorative elements */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-1.5 sm:gap-2">
                    <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/80">
                      <Clock size={14} className="sm:hidden" />
                      <Clock size={14} className="hidden sm:block" />
                    </div>
                    <div className="px-2 sm:px-3 py-1 sm:py-1 rounded-full bg-white/20 backdrop-blur-sm">
                      <span className="text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-wider">
                        {s.duration}
                      </span>
                    </div>
                  </div>

                  {/* Price badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <div className="px-2 sm:px-3 py-1 sm:py-1 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                      <span className="text-[9px] sm:text-[11px] font-bold text-forest">
                        {s.price}
                      </span>
                    </div>
                  </div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content area */}
                <div className="relative p-4 sm:p-5 lg:p-7">
                  {/* Decorative corner accent - hidden on mobile */}
                  <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden hidden sm:block">
                    <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-gold-light/20 to-transparent rounded-bl-2xl sm:rounded-bl-3xl" />
                  </div>

                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1 sm:mb-2">
                        <h4 className="font-serif text-base sm:text-lg lg:text-xl text-charcoal group-hover:text-forest transition-colors">
                          {s.title}
                        </h4>
                      </div>
                      <p className="text-text-body text-[11px] sm:text-[12px] lg:text-[13px] leading-relaxed mb-3 sm:mb-4">
                        {s.desc}
                      </p>

                      {/* Feature chips */}
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {s.features.map((feature, j) => (
                          <span
                            key={j}
                            className="text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-wider bg-forest/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-forest/70"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <Link
                        href={`/book?type=${encodeURIComponent(s.title.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="w-8 h-8 sm:w-9 lg:w-10 sm:h-9 lg:h-10 rounded-full border border-border-soft flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-cream group-hover:border-forest transition-all group-hover:scale-110"
                      >
                        <ArrowUpRight size={12} className="sm:hidden" />
                        <ArrowUpRight size={14} className="hidden sm:block lg:hidden" />
                        <ArrowUpRight size={16} className="hidden lg:block" />
                      </Link>

                      {/* Ripple effect on hover */}
                      {hoveredIndex === i && (
                        <span className="absolute inset-0 rounded-full border-2 border-forest/20 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Bottom decorative elements */}
                  <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border-soft">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={8}
                          className="sm:hidden fill-gold-light/40 text-gold-light/40"
                        />
                      ))}
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={10}
                          className="hidden sm:block fill-gold-light/40 text-gold-light/40"
                        />
                      ))}
                      <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-forest/60 ml-0.5 sm:ml-1">
                        (24 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating icon - hidden on mobile */}
              <div className="absolute -bottom-2 -right-2 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                <div className="w-full h-full bg-gradient-to-br from-white to-cream rounded-full shadow-lg flex items-center justify-center transform rotate-12">
                  <Leaf size={12} className="sm:hidden lg:block lg:h-4 lg:w-4" />
                  <Leaf size={16} className="hidden sm:block lg:hidden" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}