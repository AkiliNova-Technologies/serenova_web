"use client";

import { useRef, useEffect, useState } from "react";
import {
  Smile,
  CalendarDays,
  HeartPulse,
  Building2,
  Sparkles,
  Leaf,
  TrendingUp,
  Award,
} from "lucide-react";

const stats = [
  {
    Icon: Smile,
    value: 96,
    suffix: "%",
    label: "Client Satisfaction Rate",
    color: "from-blue-400/20 to-purple-400/20",
    iconColor: "from-blue-500 to-purple-500",
    trend: "+12% vs last year",
  },
  {
    Icon: CalendarDays,
    value: 12,
    suffix: "+",
    label: "Years Of Experience",
    color: "from-emerald-400/20 to-teal-400/20",
    iconColor: "from-emerald-500 to-teal-500",
    trend: "Since 2012",
  },
  {
    Icon: HeartPulse,
    value: 1000,
    suffix: "+",
    label: "Successful Treatments",
    color: "from-amber-400/20 to-orange-400/20",
    iconColor: "from-amber-500 to-orange-500",
    trend: "Monthly average: 85+",
  },
  {
    Icon: Building2,
    value: 30,
    suffix: "+",
    label: "State-Of-The-Art Facilities",
    color: "from-rose-400/20 to-pink-400/20",
    iconColor: "from-rose-500 to-pink-500",
    trend: "Globally located",
  },
];

function Counter({
  target,
  suffix,
  start,
  delay,
}: {
  target: number;
  suffix: string;
  start: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!start || hasAnimated) return;

    const timeout = setTimeout(() => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          setHasAnimated(true);
        }
        setCount(Math.floor(current));
      }, 30);
      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, target, delay, hasAnimated]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3, rootMargin: "50px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-12 sm:py-20 bg-gradient-to-b from-ivory via-white to-ivory overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Organic wave pattern - hidden on mobile */}
        <svg
          className="absolute top-0 left-0 w-full opacity-[0.03] hidden sm:block"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            className="text-forest"
          />
        </svg>

        {/* Gradient orbs - hidden on mobile */}
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-forest/5 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />

        {/* Grid pattern - opacity reduced on mobile */}
        <div
          className="absolute inset-0 opacity-[0.01] sm:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C3E2F 1px, transparent 0)`,
            backgroundSize: "30px 30px sm:50px 50px",
          }}
        />
      </div>

      {/* Decorative separator lines - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent hidden sm:block" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 z-10">
        {/* Stats grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Hover background effect */}
              <div
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl blur-xl duration-500`}
              />

              {/* Main card */}
              <div className="relative backdrop-blur-sm transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon container with enhanced styling */}
                  <div className="relative">
                    {/* Animated background */}
                    <div
                      className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Main icon circle */}
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-forest/5 to-forest/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <div
                        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity`}
                      />
                      <s.Icon
                        size={20}
                        className="sm:hidden text-forest group-hover:text-forest-light transition-colors"
                        strokeWidth={1.5}
                      />
                      <s.Icon
                        size={28}
                        className="hidden sm:block text-forest group-hover:text-forest-light transition-colors"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal group-hover:text-forest transition-colors">
                        <Counter
                          target={s.value}
                          suffix={s.suffix}
                          start={visible}
                          delay={i * 150}
                        />
                      </span>
                    </div>

                    <p className="text-text-muted text-[10px] sm:text-[12px] uppercase tracking-wider font-bold">
                      {s.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}