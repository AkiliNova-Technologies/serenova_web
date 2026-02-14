"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Quote, Sparkles, Leaf } from "lucide-react";

const testimonials = [
  {
    quote:
      "Serenova redefined what I thought wellness could be. The deep tissue therapy didn't just relax me — it reset me completely. I left feeling like a different person.",
    name: "Catherine M.",
    role: "Entrepreneur",
    initial: "C",
  },
  {
    quote:
      "My partner and I did the couples retreat and it was transformative. The attention to detail, the silence, the intentionality — everything was perfect.",
    name: "James & Aisha K.",
    role: "Couple",
    initial: "J",
  },
  {
    quote:
      "As someone who runs 60-hour weeks, this isn't a luxury for me — it's maintenance. Serenova understands that. Their executive wellness program is essential.",
    name: "David N.",
    role: "Tech Executive",
    initial: "D",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
    <section className="relative py-16 sm:py-24 bg-cream overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 z-10">
        {/* Simple header */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
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

        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[2px] sm:tracking-[3px] font-bold text-forest/70 bg-white/50 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full backdrop-blur-sm inline-block">
              Testimonials
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[42px] text-charcoal text-balance px-2 sm:px-0">
            What our <em className="italic text-forest">clients</em> say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-ivory rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-600 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.06)] relative ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Simple decorative elements */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-forest/5">
                <Quote size={30} className="sm:hidden" />
                <Quote size={40} className="hidden sm:block" />
              </div>

              <Quote size={18} className="sm:hidden text-forest/30 mb-3 sm:mb-4" />
              <Quote size={24} className="hidden sm:block text-forest/30 mb-4" />

              <div className="flex gap-1 mb-3 sm:mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star 
                    key={j} 
                    size={12} 
                    className="sm:hidden fill-gold text-gold" 
                  />
                ))}
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star 
                    key={j} 
                    size={14} 
                    className="hidden sm:block fill-gold text-gold" 
                  />
                ))}
              </div>

              <blockquote className="text-text-body text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6] sm:leading-[1.7] md:leading-[1.8] mb-6 sm:mb-8 relative">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-border-soft">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-forest/10 flex items-center justify-center text-forest text-[13px] sm:text-[14px] md:text-[15px] font-bold">
                  {t.initial}
                </div>
                <div>
                  <strong className="block text-[12px] sm:text-[13px] md:text-[14px] text-charcoal">
                    {t.name}
                  </strong>
                  <span className="text-[10px] sm:text-[11px] md:text-[12px] text-text-muted">
                    {t.role}
                  </span>
                </div>
              </div>

              {/* Small accent line */}
              <div className="absolute bottom-0 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 h-px bg-gradient-to-r from-transparent via-forest/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}