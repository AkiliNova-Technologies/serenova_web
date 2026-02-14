import { ArrowRight, Phone, Sparkles, Leaf, Flower2, Star } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-forest to-forest-light overflow-hidden"
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating organic shapes - hidden on mobile */}
        <div className="absolute top-10 left-10 w-64 h-64 opacity-[0.03] rotate-12 hidden sm:block">
          <Leaf className="w-full h-full text-cream" strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 right-10 w-80 h-80 opacity-[0.03] -rotate-12 hidden sm:block">
          <Leaf className="w-full h-full text-cream" strokeWidth={1} />
        </div>

        {/* Gradient orbs - hidden on mobile */}
        <div
          className="absolute w-[500px] h-[500px] bg-white/[0.03] rounded-full -top-[250px] -right-[150px] animate-pulse hidden lg:block"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-white/[0.02] rounded-full -bottom-[200px] -left-[100px] animate-pulse hidden lg:block"
          style={{ animationDuration: "10s" }}
        />

        {/* Additional floating elements - hidden on mobile */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 opacity-[0.02] hidden sm:block">
          <Star className="w-full h-full text-gold-light" strokeWidth={1} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 opacity-[0.02] hidden sm:block">
          <Sparkles className="w-full h-full text-gold-light" strokeWidth={1} />
        </div>

        {/* Enhanced radial pattern - kept but opacity reduced on mobile */}
        <div
          className="absolute inset-0 opacity-[0.02] sm:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 30%),
                              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 35%),
                              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05) 0%, transparent 25%)`,
          }}
        />

        {/* Grid pattern - hidden on mobile */}
        <div
          className="absolute inset-0 opacity-[0.02] hidden sm:block"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles - reduced count on mobile */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-light/20 rounded-full animate-pulse hidden sm:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        
        {/* Mobile-only simple particles (just 2 for subtle effect) */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`mobile-${i}`}
            className="absolute w-0.5 h-0.5 bg-gold-light/10 rounded-full animate-pulse sm:hidden"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 text-center z-10">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-8">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent" />
          <div className="flex gap-1 sm:gap-1.5">
            {[1, 2, 3].map((dot) => (
              <div key={dot} className="relative">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-cream/40" />
                {dot === 2 && (
                  <div className="absolute inset-0 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gold-light/60 animate-ping" />
                )}
              </div>
            ))}
          </div>
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent" />
        </div>

        {/* Badge with sparkle */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 border border-white/10">
          <Sparkles size={10} className="sm:hidden text-gold-light" />
          <Sparkles size={12} className="hidden sm:block text-gold-light" />
          <span className="text-sage-light/90 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4px] font-bold whitespace-nowrap">
            Your Reset Begins Here
          </span>
          <Sparkles size={10} className="sm:hidden text-gold-light" />
          <Sparkles size={12} className="hidden sm:block text-gold-light" />
        </div>

        {/* Main heading with decorative elements */}
        <h2 className="relative font-serif text-2xl sm:text-3xl md:text-5xl lg:text-[56px] text-cream leading-[1.1] mb-4 sm:mb-5 md:mb-6 max-w-[700px] mx-auto px-2 sm:px-0">
          <span className="relative inline-block">
            This is not indulgence.
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-gold-light/50 to-transparent" />
          </span>
          <br />
          <em className="relative italic text-gold-light not-italic">
            This is maintenance.
            <Leaf className="absolute -right-6 sm:-right-8 -top-3 sm:-top-4 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gold-light/30 rotate-12" />
          </em>
        </h2>

        {/* Description with decorative quotes */}
        <p className="relative text-sage-light/80 text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed max-w-[480px] mx-auto mb-8 sm:mb-10 md:mb-12 px-3 sm:px-0">
          <span className="absolute -left-3 sm:-left-4 md:-left-6 top-0 text-gold-light/20 text-xl sm:text-2xl md:text-3xl hidden sm:block">
            &ldquo;
          </span>
          Book a consultation or speak with our wellness advisors. Your journey
          to restoration starts with a single step.
          <span className="absolute -right-3 sm:-right-4 md:-right-6 bottom-0 text-gold-light/20 text-xl sm:text-2xl md:text-3xl hidden sm:block">
            &rdquo;
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap px-2 sm:px-0">
          <Link
            href="/book?type=consultation"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-cream text-forest px-6 sm:px-7 md:px-9 py-3 sm:py-3.5 md:py-4 rounded-full text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-wider hover:bg-white transition-all overflow-hidden"
          >
            <span className="relative z-10">Book Your Experience</span>
            <ArrowRight
              size={12}
              className="sm:hidden relative z-10 group-hover:translate-x-1 transition-transform"
            />
            <ArrowRight
              size={14}
              className="hidden sm:block md:hidden relative z-10 group-hover:translate-x-1 transition-transform"
            />
            <ArrowRight
              size={15}
              className="hidden md:block relative z-10 group-hover:translate-x-1 transition-transform"
            />
            <span className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/30 to-gold-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>
          <Link
            href="tel:+256700123456"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 border-2 border-cream/30 text-cream px-6 sm:px-7 md:px-9 py-3 sm:py-3.5 md:py-4 rounded-full text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-wider hover:bg-cream/10 hover:border-cream/50 transition-all overflow-hidden"
          >
            <Phone
              size={12}
              className="sm:hidden group-hover:rotate-12 transition-transform"
            />
            <Phone
              size={14}
              className="hidden sm:block md:hidden group-hover:rotate-12 transition-transform"
            />
            <Phone
              size={15}
              className="hidden md:block group-hover:rotate-12 transition-transform"
            />
            <span className="relative z-10">+256 700 123 456</span>
          </Link>
        </div>
      </div>
    </section>
  );
}