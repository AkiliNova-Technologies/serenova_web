import {
  ArrowRight,
  Sparkles,
  Leaf,
  Flower2,
  Star,
  Clock,
  Heart,
} from "lucide-react";
import Link from "next/link";

const promos = [
  {
    badge: "Signature Experience",
    title: "Deep Tissue & Aromatherapy Ritual",
    desc: "Combine our most requested treatments for the ultimate restoration session.",
    gradient: "from-forest to-forest-light",
    textColor: "text-cream",
    btnClass: "bg-cream text-forest hover:bg-white",
    emoji: "🍃",
    features: ["120 min", "Essential Oils", "Hot Stones"],
    discount: "Save 20%",
    pattern: "leaf",
  },
  {
    badge: "Couples Package",
    title: "Reconnect & Restore Together",
    desc: "A shared sanctuary experience with dual treatment rooms and champagne service.",
    gradient: "from-sand to-sand-light",
    textColor: "text-charcoal",
    btnClass: "bg-forest text-cream hover:bg-forest-light",
    emoji: "💑",
    features: ["180 min", "Private Suite", "Champagne"],
    discount: "Perfect for two",
    pattern: "flower",
  },
];

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-ivory via-white to-ivory overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - hidden on mobile */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-forest/5 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />

        {/* Fine grid overlay - opacity reduced on mobile */}
        <div
          className="absolute inset-0 opacity-[0.01] sm:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C3E2F 1px, transparent 0)`,
            backgroundSize: "30px 30px sm:40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 z-10">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
            <div className="flex gap-1 sm:gap-1.5">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-forest/40"
                />
              ))}
            </div>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
          </div>
          <span className="text-[10px] sm:text-[12px] uppercase tracking-[2px] sm:tracking-[3px] font-bold text-forest/70">
            Exclusive Treatments
          </span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal mt-1 sm:mt-2">
            Curated Wellness <span className="text-forest">Experiences</span>
          </h2>
        </div>

        {/* Promo cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {promos.map((p, i) => (
            <div key={i} className="group relative">
              {/* Card glow effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${p.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Main card */}
              <div
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br ${p.gradient} p-6 sm:p-8 md:p-10 lg:p-14 min-h-[320px] sm:min-h-[350px] lg:min-h-[380px] flex flex-col justify-center shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 0%, transparent 30%),
                                    radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 35%)`,
                    }}
                  />
                </div>

                {/* Decorative floating elements - hidden on mobile */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 overflow-hidden hidden sm:block">
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-bl-full" />
                </div>
                <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 overflow-hidden hidden sm:block">
                  <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-tr-full" />
                </div>

                {/* Main emoji with animation */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-6xl sm:text-7xl md:text-8xl opacity-30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {p.emoji}
                </div>

                {/* Decorative pattern based on card type - hidden on mobile */}
                {p.pattern === "leaf" ? (
                  <Leaf className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-white/10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700 hidden sm:block" />
                ) : (
                  <Flower2 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-forest/10 transform rotate-12 group-hover:rotate-0 transition-transform duration-700 hidden sm:block" />
                )}

                {/* Floating sparkles - hidden on mobile */}
                <Sparkles className="absolute top-8 left-8 sm:top-10 sm:left-10 md:top-12 md:left-12 w-3 sm:w-4 h-3 sm:h-4 text-white/30 animate-pulse hidden sm:block" />
                <Sparkles className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white/30 animate-pulse delay-700 hidden sm:block" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge with discount */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                    <span
                      className={`inline-block text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] font-bold ${p.textColor} opacity-70 bg-white/10 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full`}
                    >
                      {p.badge}
                    </span>
                    {p.discount && (
                      <span
                        className={`text-[7px] sm:text-[8px] md:text-[9px] font-bold ${p.textColor} opacity-90 bg-white/20 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full`}
                      >
                        {p.discount}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl md:text-[28px] lg:text-[34px] leading-[1.2] mb-3 sm:mb-4 ${p.textColor} max-w-[280px] sm:max-w-[320px] md:max-w-[360px] relative`}
                  >
                    {p.title}
                    <span className="absolute -bottom-2 left-0 w-12 sm:w-14 md:w-16 h-0.5 bg-white/30 rounded-full group-hover:w-16 sm:group-hover:w-20 md:group-hover:w-24 transition-all duration-500" />
                  </h3>

                  <p
                    className={`${p.textColor} opacity-80 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-[280px] sm:max-w-[300px] md:max-w-[340px]`}
                  >
                    {p.desc}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-7 md:mb-8">
                    {p.features.map((feature, j) => (
                      <div
                        key={j}
                        className={`flex items-center gap-1 ${p.textColor} opacity-70 text-[9px] sm:text-[10px] md:text-[11px] bg-white/10 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full`}
                      >
                        {j === 0 && <Clock size={8} className="sm:hidden" />}
                        {j === 0 && <Clock size={10} className="hidden sm:block" />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button with enhanced styling */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Link
                      href={
                        p.badge === "Signature Experience"
                          ? "/book?type=deep-tissue-aromatherapy"
                          : "/book?type=couples-retreat"
                      }
                      className={`inline-flex items-center gap-2 sm:gap-2.5 w-fit px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-wider transition-all group/btn relative overflow-hidden ${p.btnClass}`}
                    >
                      <span className="relative z-10">Book Now</span>
                      <ArrowRight
                        size={12}
                        className="sm:hidden relative z-10 group-hover/btn:translate-x-1 transition-transform"
                      />
                      <ArrowRight
                        size={14}
                        className="hidden sm:block relative z-10 group-hover/btn:translate-x-1 transition-transform"
                      />
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    </Link>

                    {/* Quick action hint */}
                    <div
                      className={`flex items-center gap-1 ${p.textColor} opacity-60 text-[9px] sm:text-[10px] md:text-[11px]`}
                    >
                      <Heart size={10} className="sm:hidden" />
                      <Heart size={12} className="hidden sm:block" />
                      <span>Limited spots</span>
                    </div>
                  </div>

                  {/* Decorative elements - hidden on mobile */}
                  <div className="absolute bottom-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 hidden sm:block">
                    <div className="absolute bottom-0 right-0 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white/5 rounded-tl-full" />
                  </div>
                </div>

                {/* Rating indicator */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={8}
                      className="sm:hidden fill-white/40 text-white/40"
                    />
                  ))}
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={10}
                      className="hidden sm:block fill-white/40 text-white/40"
                    />
                  ))}
                  <span className={`text-[7px] sm:text-[8px] md:text-[9px] ${p.textColor} opacity-60 ml-0.5 sm:ml-1`}>
                    5.0
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}