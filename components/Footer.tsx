import {
  Leaf,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Flower2,
  Sparkles,
  Heart,
  Award,
  Star,
} from "lucide-react";

const quickLinks = [
  "About Us",
  "Our Services",
  "Treatments",
  "The Space",
  "Memberships",
  "Contact",
];
const serviceLinks = [
  "Deep Tissue Therapy",
  "Rejuvenating Facial",
  "Aromatherapy Ritual",
  "Detox Body Wrap",
  "Sound Therapy",
  "Couples Retreat",
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-forest-dark to-forest text-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - hidden on mobile */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-cream/5 rounded-full blur-3xl hidden sm:block" />

        {/* Grid pattern - opacity reduced on mobile */}
        <div
          className="absolute inset-0 opacity-[0.01] sm:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "30px 30px sm:50px 50px",
          }}
        />
      </div>

      {/* Newsletter strip with enhanced design */}
      <div className="relative border-b border-white/10 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12 md:py-16">
          <div className="relative">
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 z-10">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 justify-center md:justify-center">
                  <Sparkles size={12} className="sm:hidden text-gold-light" />
                  <Sparkles size={16} className="hidden sm:block text-gold-light" />
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] text-gold-light/80 font-bold">
                    Wellness Newsletter
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-cream mb-1 sm:mb-2">
                  Stay in your{" "}
                  <em className="relative italic text-gold-light not-italic">
                    wellness
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-gold-light/50 via-gold-light to-gold-light/50 hidden sm:block" />
                  </em>
                </h4>
                <p className="text-sage-light/60 text-[12px] sm:text-[13px] md:text-[14px] max-w-[400px] px-2 sm:px-0">
                  Receive seasonal offers, wellness insights, and exclusive
                  invitations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto px-2 sm:px-0">
                <div className="relative group/input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border border-white/15 rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-[12px] sm:text-[13px] md:text-[14px] text-cream placeholder:text-white/30 outline-none focus:border-gold-light/50 transition-colors w-full sm:w-[260px] md:w-[280px] pr-10 sm:pr-12"
                  />
                  <Mail
                    size={14}
                    className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2 text-white/30 group-hover/input:text-gold-light/50 transition-colors"
                  />
                  <Mail
                    size={16}
                    className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover/input:text-gold-light/50 transition-colors"
                  />
                </div>
                <button className="group relative bg-gold-light text-forest-dark px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-wider hover:bg-gold transition-all overflow-hidden inline-flex items-center justify-start gap-1.5 sm:gap-2">
                  <span className="relative z-10">Subscribe</span>
                  <ArrowRight
                    size={12}
                    className="sm:hidden relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <ArrowRight
                    size={14}
                    className="hidden sm:block relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        {/* Decorative top line */}
        <div className="absolute top-0 left-4 sm:left-6 right-4 sm:right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.5fr] gap-8 sm:gap-10 lg:gap-12 relative">
          {/* Brand - Enhanced */}
          <div className="relative group text-left sm:text-left">
            <div className="absolute -inset-4" />

            <div className="relative">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 justify-start sm:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-light/20 rounded-full blur-md" />
                  <div className="relative w-12 h-12 sm:w-13 md:w-14 sm:h-13 md:h-14 rounded-full bg-gradient-to-br from-cream/10 to-cream/5 border border-cream/20 flex items-center justify-center text-cream">
                    <Leaf size={18} className="sm:hidden" />
                    <Leaf size={22} className="hidden sm:block md:hidden" />
                    <Leaf size={24} className="hidden md:block" />
                  </div>
                </div>
                <div>
                  <span className="font-serif text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-cream tracking-tight leading-none">
                    Serenova
                  </span>
                  <span className="block text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] text-cream/30 font-bold -mt-0.5">
                    Wellness Sanctuary
                  </span>
                </div>
              </div>

              <p className="text-cream/40 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed mb-5 sm:mb-6 max-w-[280px] mx-auto sm:mx-0">
                A premium wellness sanctuary. Restore your body, mind, and
                energy in a space designed for intentional renewal.
              </p>

              {/* Social links with hover effects */}
              <div className="flex gap-1.5 sm:gap-2 justify-start sm:justify-start">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="group/social relative">
                    <div className="absolute inset-0 bg-gold-light/20 rounded-full blur-lg opacity-0 group-hover/social:opacity-100 transition-opacity" />
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-light hover:border-gold-light hover:text-forest-dark transition-all">
                      <Icon size={12} className="sm:hidden" />
                      <Icon size={14} className="hidden sm:block md:hidden" />
                      <Icon size={16} className="hidden md:block" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="text-left sm:text-left">
            <h5 className="flex items-start gap-2 text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[1.5px] sm:tracking-[2px] font-bold text-cream mb-4 sm:mb-5 md:mb-6 justify-start sm:justify-start">
              <div className="w-3 sm:w-4 h-px bg-gold-light/50 hidden sm:block" />
              Quick Links
            </h5>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {quickLinks.map((l, i) => (
                <li key={l} className="group/link">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-cream/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-gold-light transition-colors justify-start sm:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-light/0 group-hover/link:bg-gold-light/50 transition-all group-hover/link:w-1.5 sm:group-hover/link:w-2" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Enhanced */}
          <div className="text-left sm:text-left">
            <h5 className="flex items-start gap-2 text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[1.5px] sm:tracking-[2px] font-bold text-cream mb-4 sm:mb-5 md:mb-6 justify-start sm:justify-start">
              <div className="w-3 sm:w-4 h-px bg-gold-light/50 hidden sm:block" />
              Services
            </h5>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {serviceLinks.map((l, i) => (
                <li key={l} className="group/link">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-cream/50 text-[12px] sm:text-[13px] md:text-[14px] hover:text-gold-light transition-colors justify-start sm:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-light/0 group-hover/link:bg-gold-light/50 transition-all group-hover/link:w-1.5 sm:group-hover/link:w-2" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Enhanced */}
          <div className="text-left sm:text-left">
            <h5 className="flex items-center gap-2 text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[1.5px] sm:tracking-[2px] font-bold text-cream mb-4 sm:mb-5 md:mb-6 justify-start sm:justify-start">
              <div className="w-3 sm:w-4 h-px bg-gold-light/50 hidden sm:block" />
              Get in Touch
            </h5>
            <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <li className="group/contact flex items-start gap-2 sm:gap-3 text-cream/50 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed justify-start sm:justify-start">
                <div className="relative flex-shrink-0">
                  <MapPin
                    size={14}
                    className="sm:hidden text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                  <MapPin
                    size={16}
                    className="hidden sm:block text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                </div>
                <span className="text-center sm:text-left">4517 Wellness Ave, Manchester, Kentucky 39495</span>
              </li>
              <li className="group/contact flex items-start gap-2 sm:gap-3 text-cream/50 text-[12px] sm:text-[13px] md:text-[14px] justify-start sm:justify-start">
                <div className="relative flex-shrink-0">
                  <Phone
                    size={14}
                    className="sm:hidden text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                  <Phone
                    size={16}
                    className="hidden sm:block text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                </div>
                <span>+256 700 123 456</span>
              </li>
              <li className="group/contact flex items-start gap-2 sm:gap-3 text-cream/50 text-[12px] sm:text-[13px] md:text-[14px] justify-start sm:justify-start">
                <div className="relative flex-shrink-0">
                  <Mail
                    size={14}
                    className="sm:hidden text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                  <Mail
                    size={16}
                    className="hidden sm:block text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                </div>
                <span>hello@serenova.co</span>
              </li>
              <li className="group/contact flex items-start gap-2 sm:gap-3 text-cream/50 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed justify-start sm:justify-start">
                <div className="relative flex-shrink-0">
                  <Clock
                    size={14}
                    className="sm:hidden text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                  <Clock
                    size={16}
                    className="hidden sm:block text-gold-light mt-0.5 group-hover/contact:scale-110 transition-transform"
                  />
                </div>
                <span className="text-center sm:text-left">
                  Mon – Fri: 9AM – 7PM
                  <br />
                  Saturday: 10AM – 5PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with enhanced design */}
      <div className="relative border-t border-white/10">
        {/* Decorative top line */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light/20 to-transparent" />

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-6 sm:py-7 md:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright with heart */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] md:text-[12px] text-cream/35 flex-wrap justify-start">
              <span>© 2026 Serenova Wellness.</span>
              <Heart size={8} className="sm:hidden text-gold-light/50" />
              <Heart size={10} className="hidden sm:block text-gold-light/50" />
              <span>All rights reserved by AkiliNova Technologies.</span>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap justify-start">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group/link relative text-[9px] sm:text-[10px] md:text-[11px] text-cream/35 hover:text-gold-light transition-colors"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-light/50 group-hover/link:w-full transition-all duration-300" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Floating back to top button - hidden on mobile */}
          <div className="absolute right-4 sm:right-6 bottom-6 sm:bottom-7 md:bottom-8 hidden sm:block">
            <a href="#top" className="group/top relative">
              <div className="absolute inset-0 bg-gold-light/20 rounded-full blur-lg opacity-0 group-hover/top:opacity-100 transition-opacity" />
              <div className="relative w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-start hover:bg-gold-light hover:border-gold-light hover:text-forest-dark transition-all">
                <ArrowRight size={14} className="sm:hidden rotate-[-90deg]" />
                <ArrowRight size={16} className="hidden sm:block rotate-[-90deg]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}