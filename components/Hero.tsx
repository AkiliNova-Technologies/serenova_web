import { ArrowRight, Star, Play, Sparkles, Leaf, Flower2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-cream/5 to-transparent">
      {/* Decorative background elements - hidden on mobile to reduce visual clutter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sparkle effects - hidden on mobile */}
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-gold-light/20 animate-pulse hidden sm:block" />
        <Sparkles className="absolute bottom-1/3 right-1/4 w-4 h-4 text-gold-light/20 animate-pulse delay-700 hidden sm:block" />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-4 sm:py-6">
        <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[640px] group">
          {/* Enhanced green background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-forest-light" />

          {/* Sophisticated organic pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 30%),
                                radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 35%),
                                radial-gradient(circle at 10% 90%, rgba(255,255,255,0.05) 0%, transparent 25%),
                                repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 8px)`,
              }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full px-4 sm:px-8 md:px-16 py-8 sm:py-12 lg:py-6">
            {/* Left Content - Enhanced with decorative elements */}
            <div className="relative text-center lg:text-left">
              {/* Animated accent line - hidden on mobile/tablet */}
              <div className="absolute -left-8 top-0 w-px h-24 bg-gradient-to-b from-gold-light/40 to-transparent hidden lg:block" />

              {/* Floating badge with enhanced design */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-white/10 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-light"></span>
                </span>
                <p className="text-sage-light text-[11px] sm:text-[13px] uppercase tracking-[2px] sm:tracking-[3px] font-sans font-bold whitespace-nowrap">
                  Premium Spa & Wellness
                </p>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[58px] text-cream leading-[1.1] mb-4 sm:mb-6 font-medium relative px-2 sm:px-0">
                Comprehensive care
                <br className="hidden xs:block" />
                for your{" "}
                <em className="relative italic text-gold-light not-italic">
                  skin&apos;s health
                  {/* Decorative underline - adjusted for mobile */}
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-px bg-gradient-to-r from-gold-light/50 via-gold-light to-gold-light/50 hidden sm:block" />
                </em>
                <br className="hidden sm:block" />
                and beauty
              </h1>

              <p className="text-sage-light/80 text-[14px] sm:text-[16px] leading-relaxed mb-6 sm:mb-10 max-w-[440px] font-light relative mx-auto lg:mx-0 px-4 sm:px-0">
                <span className="absolute -left-4 top-0 text-gold-light/30 text-xl sm:text-2xl hidden sm:block">
                  &ldquo;
                </span>
                At Serenova, we believe true wellness is more than relaxation.
                It is alignment. It is restoration. It is returning to yourself.
                <span className="absolute -bottom-2 right-0 text-gold-light/30 text-xl sm:text-2xl hidden sm:block">
                  &rdquo;
                </span>
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap px-2 sm:px-0">
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-2 sm:gap-2.5 bg-cream text-forest px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-wider hover:bg-white transition-all overflow-hidden"
                >
                  <span className="relative z-10">View Our Services</span>
                  <ArrowRight
                    size={13}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <span className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/20 to-gold-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>

                {/* Secondary CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cream/80 hover:text-cream transition-colors text-[12px] sm:text-[13px] font-bold uppercase tracking-wider"
                >
                  Learn More
                  <span className="w-4 sm:w-6 h-px bg-cream/40 group-hover:w-6 sm:group-hover:w-8 transition-all" />
                </a>
              </div>

              {/* Trust badges - centered on mobile */}
              <div className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold-light" />
                  <span className="text-sage-light/60 text-[10px] sm:text-[11px] uppercase tracking-wider">
                    Certified
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold-light" />
                  <span className="text-sage-light/60 text-[10px] sm:text-[11px] uppercase tracking-wider">
                    Award Winning
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold-light" />
                  <span className="text-sage-light/60 text-[10px] sm:text-[11px] uppercase tracking-wider">
                    Organic
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Area - Hidden on mobile/tablet, shown only on large screens */}
            <div className="relative hidden lg:flex justify-center items-center">
              {/* Enhanced rotating badge with better design */}
              <div className="absolute -left-8 top-1/3 z-20 w-[120px] h-[120px] transform hover:scale-105 transition-transform duration-500 hidden xl:block">
                <div className="relative w-full h-full">
                  {/* Inner circle with gradient */}
                  <Link
                    href="/book?type=general"
                    className="absolute inset-0 rounded-full bg-forest-light border-2 border-sage/30 flex items-center justify-center"
                  >
                    <ArrowRight size={20} className="text-cream" />
                  </Link>

                  {/* Rotating text ring */}
                  <svg
                    className="absolute inset-0 animate-spin-slow"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                      <linearGradient
                        id="textGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#B7CCB9" />
                        <stop offset="50%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#B7CCB9" />
                      </linearGradient>
                    </defs>
                    <text
                      fontSize="7"
                      fill="url(#textGradient)"
                      fontFamily="Lato"
                      fontWeight="700"
                      letterSpacing="3"
                    >
                      <textPath href="#circlePath">
                        CONTACT US • BOOK NOW • SERENOVA •{" "}
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Main Hero Image with enhanced styling */}
              <div className="relative w-full max-w-[460px] group/image">
                {/* Decorative frames */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-light/20 to-sage/20 rounded-[40px] blur-xl opacity-50 group-hover/image:opacity-70 transition-opacity" />
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-light/30 to-sage/30 rounded-[36px]" />

                {/* Main image container */}
                <div className="relative rounded-[32px] overflow-hidden aspect-[3/4] bg-gradient-to-br from-sage to-forest-light shadow-2xl">
                  {/* Image overlay with zoom effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent z-10" />

                  {/* Placeholder image - replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center text-9xl bg-[url('/spa-image.jpg')] bg-cover bg-center transform group-hover/image:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-light/10 to-transparent mix-blend-overlay" />
                    <Image
                      src="/heroImage.png"
                      width={400}
                      height={400}
                      alt="Lady being Massaged on the face"
                      className="h-full w-full object-top object-cover"
                    />
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cream/30 rounded-tl-2xl" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cream/30 rounded-br-2xl" />
                </div>

                {/* Enhanced Play Session Button with animation */}
                <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full pl-2 pr-5 py-2 shadow-2xl hover:bg-white transition-all transform hover:scale-105 cursor-pointer group/play z-20">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center text-cream">
                      <Play size={14} fill="currentColor" />
                    </div>
                    <span className="absolute -inset-1 rounded-full bg-forest/20 animate-ping" />
                  </div>
                  <span className="text-[13px] font-bold text-charcoal">
                    Play Session
                  </span>
                </div>

                {/* Floating wellness badge */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-xl z-20">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-gold-light" />
                    <span className="text-[11px] font-bold text-forest">
                      WELLNESS ESCAPE
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional decorative element */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 opacity-10">
                <Leaf className="w-full h-full text-cream" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}