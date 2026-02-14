"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Leaf,
  Flower2,
  Sparkles,
  Star,
  ArrowRight,
  Droplets,
  Wind,
  Trees,
} from "lucide-react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Space definitions                                                  */
/* ------------------------------------------------------------------ */
interface Space {
  label: string;
  count: string;
  image: string;
  gradient: string;
  icon: keyof typeof iconMap;
  description: string;
  imageCount?: number;
}

const iconMap = {
  leaf: Leaf,
  wind: Wind,
  droplets: Droplets,
  trees: Trees,
  flower: Flower2,
};

const spaces: Space[] = [
  {
    label: "Treatment Rooms",
    count: "8 Rooms",
    image: "https://i.pinimg.com/1200x/cc/01/7a/cc017a085f6ba3dd97957ccbeccf80e0.jpg",
    gradient: "from-[#8aab8a] to-[#5d8a60]",
    icon: "leaf",
    description: "Private, serene spaces for personalized care",
    imageCount: 12,
  },
  {
    label: "Relaxation Lounge",
    count: "2 Lounges",
    image: "https://i.pinimg.com/736x/30/2f/04/302f0483300b482cdc0d82166d1984bd.jpg",
    gradient: "from-[#c4a882] to-[#a08560]",
    icon: "wind",
    description: "Tranquil areas for pre and post-treatment",
    imageCount: 8,
  },
  {
    label: "Hydrotherapy Suite",
    count: "3 Suites",
    image: "https://i.pinimg.com/736x/da/d9/66/dad966eeb126b3106257ffcdb5b21a98.jpg",
    gradient: "from-[#7c9a9a] to-[#4a7c7c]",
    icon: "droplets",
    description: "Therapeutic water-based treatments",
    imageCount: 10,
  },
  {
    label: "Meditation Garden",
    count: "1 Garden",
    image: "https://i.pinimg.com/1200x/79/87/f1/7987f19c5fd0d66fa6d3323f54f73bcb.jpg",
    gradient: "from-[#9a8a7c] to-[#7a6a5c]",
    icon: "trees",
    description: "Outdoor sanctuary for mindfulness",
    imageCount: 6,
  },
  {
    label: "Couples Suite",
    count: "2 Suites",
    image: "https://i.pinimg.com/736x/16/26/48/162648b81f7164899ce69731a3cf1893.jpg",
    gradient: "from-[#a89a8a] to-[#8a7a6a]",
    icon: "flower",
    description: "Shared experiences for two",
    imageCount: 9,
  },
];

/* ------------------------------------------------------------------ */
/*  Space Categories Component                                        */
/* ------------------------------------------------------------------ */
interface SpaceCategoriesProps {
  /** Total number of images across all spaces */
  totalImages?: number;
}

export default function SpaceCategories({ totalImages = 45 }: SpaceCategoriesProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSpaceClick = (spaceLabel?: string) => {
    if (spaceLabel) {
      router.push(`/gallery?category=${encodeURIComponent(spaceLabel)}`);
    } else {
      router.push('/gallery');
    }
  };

  return (
    <section
      id="spaces"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-ivory via-white to-ivory overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-forest/5 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
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

          <span className="text-[10px] sm:text-[12px] uppercase tracking-[2px] sm:tracking-[3px] font-bold text-forest/70 bg-white/50 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full backdrop-blur-sm inline-block">
            Our Sanctuary
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-[42px] text-charcoal mt-4 sm:mt-6 mb-3 sm:mb-4">
            Explore{" "}
            <em className="relative italic text-forest not-italic">
              Our Spaces
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-forest/50 via-forest to-forest/50 hidden sm:block" />
            </em>
          </h2>

          <p className="text-text-body text-[13px] sm:text-[14px] md:text-[15px] max-w-[540px] mx-auto px-3 sm:px-0">
            Step into our thoughtfully designed environments, each crafted to
            enhance your wellness journey
          </p>
        </div>

        {/* Space circles */}
        <div ref={ref} className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Individual space filters */}
          {spaces.map((s, i) => {
            const IconComponent = iconMap[s.icon];

            return (
              <button
                key={i}
                onClick={() => handleSpaceClick(s.label)}
                className={`relative group cursor-pointer transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  {/* Dashed ring - hidden on mobile */}
                  <div
                    className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-dashed border-forest/10 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"
                    style={{ animation: "spin 20s linear infinite" }}
                  />

                  <div
                    className={`relative w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-xl border-2 sm:border-4 border-white overflow-hidden transition-all duration-400 group-hover:shadow-2xl`}
                  >
                    {/* Highlight overlay */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 30%),
                                          radial-gradient(circle at 70% 70%, rgba(255,255,255,0.5) 0%, transparent 30%)`,
                        }}
                      />
                    </div>

                    <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Image 
                        src={s.image} 
                        width={150} 
                        height={150} 
                        alt={s.label}
                        className="w-full h-full  object-cover rounded-full"
                      />
                    </span>

                    {IconComponent && (
                      <IconComponent className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 text-white/40 group-hover:text-white/60 transition-colors" />
                    )}

                    {hoveredIndex === i && (
                      <Sparkles className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/60 animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mt-2 sm:mt-3 md:mt-4">
                  <h4 className="font-serif text-[12px] sm:text-[14px] md:text-[16px] text-charcoal group-hover:text-forest transition-colors mb-0.5">
                    {s.label}
                  </h4>
                  <p className="text-text-muted text-[9px] sm:text-[10px] md:text-[12px] font-medium">
                    {s.imageCount} Photos
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}