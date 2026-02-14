"use client";

import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  CheckSquare,
  Users,
  Leaf,
  Sparkles,
  Flower2,
  Award,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";

const checkpoints = [
  "Commitment to Excellence in Skin Health",
  "State-of-the-Art Facility and Technology",
  "Trusted by Thousands of Satisfied Clients",
];

const achievements = [
  { icon: Award, label: "Award Winning", value: "2024" },
  { icon: Shield, label: "Certified", value: "ISO 9001" },
  { icon: Star, label: "5-Star Rating", value: "2k+ Reviews" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-ivory to-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - hidden on mobile */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-forest/5 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />

        {/* Floating particles - hidden on mobile */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-light/20 rounded-full animate-pulse hidden sm:block" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-forest/20 rounded-full animate-pulse delay-700 hidden sm:block" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-sage/20 rounded-full animate-pulse delay-300 hidden sm:block" />
      </div>

      <div
        ref={ref}
        className="relative mx-auto max-w-[1280px] px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center z-10"
      >
        {/* Image Side */}
        <div
          className={`relative transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-forest/10 to-gold-light/10 rounded-[40px] blur-xl opacity-50 hidden sm:block" />
          <div className="absolute -inset-2 bg-gradient-to-r from-forest/20 to-gold-light/20 rounded-[36px] hidden sm:block" />

          {/* Main image container */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] group/image">
            {/* Image overlay with zoom effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent z-10" />

            {/* Placeholder image - replace with actual image */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] bg-gradient-to-br from-[#6d9a73] to-[#4a7c5f] overflow-hidden">
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 20%),
                                  radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 20%)`,
                  }}
                />
              </div>

              {/* Content - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-8xl transform group-hover/image:scale-110 transition-transform duration-700">
                <Image
                  src="/aboutImage.png"
                  width={300}
                  height={300}
                  alt="Lady having facial skin care"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-cream/40 rounded-tl-2xl z-20" />
            <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-cream/40 rounded-br-2xl z-20" />
          </div>

          {/* Enhanced circular contact badge - hidden on mobile/tablet */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-[140px] h-[140px] hidden lg:block group/badge">
            <div className="relative w-full h-full transform group-hover/badge:rotate-12 transition-transform duration-500">
              {/* Inner circle with gradient */}
              <div className="absolute inset-[18px] rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center shadow-xl">
                <ArrowRight
                  size={26}
                  className="text-cream group-hover/badge:translate-x-1 transition-transform"
                />
              </div>

              {/* Rotating text ring */}
              <svg
                className="absolute inset-0 animate-spin-slow"
                viewBox="0 0 140 140"
              >
                <defs>
                  <path
                    id="aboutCircle"
                    d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                  />
                  <linearGradient
                    id="ringGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#1B4332" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#1B4332" />
                  </linearGradient>
                </defs>
                <text
                  fontSize="10"
                  fill="url(#ringGradient)"
                  fontFamily="Lato"
                  fontWeight="700"
                  letterSpacing="3"
                >
                  <textPath href="#aboutCircle">
                    ✦ CONTACT US • BOOK NOW • SERENOVA • ✦
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {/* Decorative header with animation */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="flex gap-1">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-2 h-2 rounded-full bg-forest/60"
                  style={{ animationDelay: `${dot * 100}ms` }}
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[2px] sm:tracking-[3px] font-bold text-forest/70">
              About Us
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-forest/20 to-transparent" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-[42px] leading-[1.15] text-charcoal mb-4 sm:mb-6 relative">
            Why choose us for all your{" "}
            <em className="relative italic text-forest not-italic">
              wellness
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-forest/50 via-forest to-forest/50 hidden sm:block" />
            </em>{" "}
            needs
          </h2>

          <p className="text-text-body text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-[500px] relative">
            <span className="absolute -left-4 top-0 text-forest/20 text-2xl sm:text-3xl hidden sm:block">
              &ldquo;
            </span>
            We&apos;re dedicated to helping you achieve and maintain beautiful,
            healthy skin. Trust us to provide exceptional care tailored to you.
            Every treatment is intentional. Every detail is curated. Every
            moment is yours.
            <span className="absolute -bottom-2 right-0 text-forest/20 text-2xl sm:text-3xl hidden sm:block">
              &rdquo;
            </span>
          </p>

          {/* Enhanced Checklist */}
          <ul className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
            {checkpoints.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14px] text-charcoal font-medium group/item"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="relative">
                  <CheckSquare
                    size={16}
                    className="sm:hidden text-forest shrink-0 group-hover/item:scale-110 transition-transform"
                  />
                  <CheckSquare
                    size={20}
                    className="hidden sm:block text-forest shrink-0 group-hover/item:scale-110 transition-transform"
                  />
                  {/* Decorative dot */}
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gold-light rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </div>
                <span className="group-hover/item:translate-x-1 transition-transform">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {/* Primary CTA */}
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 sm:gap-2.5 bg-forest text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-wider hover:bg-forest-light transition-all overflow-hidden"
            >
              <span className="relative z-10">About More</span>
              <ArrowRight
                size={13}
                className="sm:hidden relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <ArrowRight
                size={15}
                className="hidden sm:block relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/20 to-gold-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>

            {/* Play button with enhanced animation */}
            <button className="group/play inline-flex items-center gap-2 sm:gap-3 text-[12px] sm:text-[14px] font-bold text-charcoal hover:text-forest transition-colors">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-forest flex items-center justify-center text-forest group-hover/play:bg-forest group-hover/play:text-cream transition-all group-hover/play:scale-105">
                  <Play size={12} className="sm:hidden" fill="currentColor" />
                  <Play
                    size={14}
                    className="hidden sm:block"
                    fill="currentColor"
                  />
                </div>
                <span className="absolute -inset-1 rounded-full border-2 border-forest/20 animate-ping" />
              </div>
              Play Session
            </button>
          </div>

          {/* Achievement badges for mobile/tablet */}
        </div>
      </div>
    </section>
  );
}
