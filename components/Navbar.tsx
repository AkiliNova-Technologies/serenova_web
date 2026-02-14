"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

// Extract section IDs from hash links for scroll spy
const sectionIds = links
  .filter((l) => l.href.includes("#"))
  .map((l) => l.href.split("#")[1]);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();

  // Prevents scroll spy from overriding a click for a short period
  const clickLockRef = useRef(false);
  const clickLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lockScrollSpy = useCallback(() => {
    clickLockRef.current = true;
    if (clickLockTimer.current) clearTimeout(clickLockTimer.current);
    clickLockTimer.current = setTimeout(() => {
      clickLockRef.current = false;
    }, 800); // lock for 800ms so smooth-scroll finishes first
  }, []);

  // ── Scroll spy (only on home page) ──
  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      if (clickLockRef.current) return;

      // If near the very top, treat as "Home"
      if (window.scrollY < 100) {
        setActiveId(null);
        return;
      }

      // Walk sections top-to-bottom; pick the last one whose top has
      // scrolled past the trigger line (120px from viewport top).
      let found: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) {
            found = id;
          }
        }
      }
      setActiveId(found);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // ── Determine active link ──
  const isActive = (href: string): boolean => {
    // Non-home pages (e.g. /gallery)
    if (!href.includes("#") && href !== "/") {
      return pathname === href;
    }

    // We're not on the home page → no home-based link can be active
    if (pathname !== "/") return false;

    // Home link: active when no section is in view
    if (href === "/") return activeId === null;

    // Hash link: active when its section matches
    const id = href.split("#")[1];
    return activeId === id;
  };

  // ── Click handler ──
  const handleClick = (href: string) => {
    setOpen(false);

    if (pathname !== "/") {
      // Navigating to home with hash — Next.js Link handles this;
      // once the page loads the scroll spy will pick up the right section.
      return;
    }

    // On home page: lock scroll spy and set active immediately for snappy feel
    if (href === "/") {
      lockScrollSpy();
      setActiveId(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.includes("#")) {
      const id = href.split("#")[1];
      lockScrollSpy();
      setActiveId(id);
    }
  };

  return (
    <nav className="bg-ivory/95 backdrop-blur-sm py-5 sticky top-0 z-50 border-b border-border-soft/60">
      <div className="mx-auto max-w-[1280px] px-6 flex justify-between items-center">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => handleClick("/")}
        >
          <div className="w-11 h-11 rounded-full bg-forest flex items-center justify-center text-cream group-hover:bg-forest-light group-hover:scale-105 transition-all duration-300">
            <Leaf
              size={20}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          <div>
            <span className="font-serif text-[26px] font-semibold text-forest tracking-tight leading-none group-hover:text-forest-light transition-colors">
              Serenova
            </span>
            <span className="block text-[10px] uppercase tracking-[3px] text-text-muted font-sans font-bold -mt-0.5 group-hover:text-forest/60 transition-colors">
              Wellness
            </span>
          </div>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden lg:flex gap-8 items-center">
          {links.map((l) => {
            const active = isActive(l.href);

            return (
              <li key={l.label} className="group relative">
                <Link
                  href={l.href}
                  onClick={() => handleClick(l.href)}
                  className={`text-[14px] font-medium tracking-wide transition-colors duration-300 relative py-2 ${
                    active ? "text-forest" : "text-text-body hover:text-forest"
                  }`}
                >
                  {l.label}

                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-forest rounded-full transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />

                  {/* Hover underline (only when NOT active) */}
                  {!active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-forest/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA ── */}
        <Link
          href="/book?type=general"
          className="hidden lg:inline-flex items-center gap-2 bg-forest text-cream px-7 py-3 rounded-full text-[13px] font-bold uppercase tracking-wider hover:bg-forest-light transition-all group relative overflow-hidden"
        >
          <span className="relative z-10">Book Appointment</span>
          <ArrowRight
            size={15}
            className="relative z-10 group-hover:translate-x-1 transition-transform"
          />
          <span className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/20 to-gold-light/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>

        {/* ── Mobile toggle ── */}
        <button
          className="lg:hidden text-charcoal hover:text-forest transition-colors p-2 hover:bg-forest/5 rounded-full"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ivory backdrop-blur-sm border-t border-border-soft shadow-xl p-8 z-50">
          <ul className="flex flex-col gap-5">
            {links.map((l) => {
              const active = isActive(l.href);

              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => handleClick(l.href)}
                    className={`block text-[15px] font-medium transition-all duration-300 relative py-2 pl-3 ${
                      active
                        ? "text-forest border-l-2 border-forest pl-4"
                        : "text-text-body hover:text-forest hover:pl-4 hover:border-l-2 hover:border-forest/30"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 mt-2 border-t border-border-soft">
              <Link
                href="/book?type=general"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-full gap-2 bg-forest text-cream px-7 py-4 rounded-full text-[13px] font-bold uppercase tracking-wider hover:bg-forest-light transition-all group relative overflow-hidden"
              >
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <span className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/20 to-gold-light/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}