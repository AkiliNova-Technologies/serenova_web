import { Mail, MapPin, Clock, Sparkles, Leaf, Flower2 } from "lucide-react";

const info = [
  {
    Icon: Mail,
    label: "Contact Us",
    lines: ["hello@serenova.co", "+256 700 123 456"],
    iconBg: "from-blue-500/10 to-purple-500/10",
  },
  {
    Icon: MapPin,
    label: "Our Location",
    lines: ["4517 Wellness Ave, Manchester,", "Kentucky 39495"],
    iconBg: "from-emerald-500/10 to-teal-500/10",
  },
  {
    Icon: Clock,
    label: "Working Hours",
    lines: ["Mon – Fri: 9:00 am to 7:00 pm", "Saturday: 10:00 am to 5pm"],
    iconBg: "from-amber-500/10 to-orange-500/10",
  },
];

export default function InfoBar() {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-ivory to-white overflow-hidden">
      {/* Decorative background elements - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - hidden on mobile */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-forest/5 to-transparent rounded-full blur-3xl hidden sm:block" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-gold-light/5 to-transparent rounded-full blur-3xl hidden sm:block" />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 relative z-10">
        {/* Main grid - stacks on mobile, 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {info.map((item, i) => (
            <div key={i} className="group relative">
              {/* Decorative background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Main card */}
              <div className="relative transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon container with enhanced styling */}
                  <div className="relative flex-shrink-0">
                    {/* Animated background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.iconBg} rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Main icon circle */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-forest/5 to-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <item.Icon size={18} className="sm:hidden relative z-10" />
                      <item.Icon size={22} className="hidden sm:block relative z-10" />

                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border border-forest/10 group-hover:border-cream/20 transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0"> {/* min-w-0 prevents text overflow */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      {/* Animated line */}
                      <div className="w-4 sm:w-6 h-px bg-gradient-to-r from-forest to-forest/30 group-hover:w-6 sm:group-hover:w-8 transition-all duration-300" />

                      <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[1px] sm:tracking-[2px] text-forest/70 group-hover:text-forest transition-colors whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>

                    {/* Contact lines with hover effects */}
                    <div className="space-y-0.5 sm:space-y-1">
                      {item.lines.map((line, j) => (
                        <p
                          key={j}
                          className="text-text-body text-[13px] sm:text-[15px] leading-relaxed transition-transform duration-300 break-words"
                          style={{ transitionDelay: `${j * 50}ms` }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional floating elements - hidden on mobile/tablet */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 sm:w-12 h-16 sm:h-24 opacity-10 pointer-events-none hidden md:block">
          <div className="w-full h-full border-l-2 border-r-2 border-forest/20 rounded-full" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 sm:w-12 h-16 sm:h-24 opacity-10 pointer-events-none hidden md:block">
          <div className="w-full h-full border-l-2 border-r-2 border-forest/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}