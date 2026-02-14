"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ImageGallery, type GalleryImage } from "@/components/ui/image-gallery";
import { Leaf, Flower2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages: GalleryImage[] = [
  // =========================
  // Treatment Rooms (Modern, Indoor)
  // =========================
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
    alt: "Modern spa treatment room with massage table, candles, and warm ambient lighting",
    category: "Treatment Rooms",
    ratio: 4 / 5,
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800",
    alt: "Minimalist spa treatment room with neutral tones and folded towels",
    category: "Treatment Rooms",
    ratio: 4 / 3,
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800",
    alt: "Elegant spa treatment room with linen textures and modern decor",
    category: "Treatment Rooms",
    ratio: 8 / 11,
  },

  // =========================
  // Relaxation Lounge (Indoor, Calm)
  // =========================
  {
    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=800",
    alt: "Spa relaxation lounge with comfortable seating and soft daylight",
    category: "Relaxation Lounge",
    ratio: 4 / 3,
  },
  {
    src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=800",
    alt: "Minimal spa lounge with neutral tones and modern furniture",
    category: "Relaxation Lounge",
    ratio: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=800",
    alt: "Luxury wellness lounge with soft textures and warm lighting",
    category: "Relaxation Lounge",
    ratio: 4 / 3,
  },

  // =========================
  // Hydrotherapy Suite (Indoor Water)
  // =========================
  {
    src: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=800",
    alt: "Indoor hydrotherapy pool with calm water and stone finishes",
    category: "Hydrotherapy Suite",
    ratio: 4 / 5,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
    alt: "Modern spa hydrotherapy area with warm lighting and clean design",
    category: "Hydrotherapy Suite",
    ratio: 4 / 3,
  },
  {
    src: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=800",
    alt: "Spa hydrotherapy suite with steam, water, and modern architecture",
    category: "Hydrotherapy Suite",
    ratio: 4 / 3,
  },


  // =========================
  // Meditation Garden (Light Outdoor)
  // =========================
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
    alt: "Outdoor meditation space designed for stillness and reflection",
    category: "Meditation Garden",
    ratio: 4 / 5,
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800",
    alt: "Quiet outdoor wellness garden surrounded by nature",
    category: "Meditation Garden",
    ratio: 8 / 11,
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800",
    alt: "Serene spa garden designed for mindfulness and relaxation",
    category: "Meditation Garden",
    ratio: 4 / 3,
  },

  // =========================
  // Couples Suite (Modern & Intimate)
  // =========================
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800",
    alt: "Modern couples wellness suite designed for shared relaxation",
    category: "Couples Suite",
    ratio: 4 / 3,
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800",
    alt: "Elegant spa interior prepared for couples therapy experience",
    category: "Couples Suite",
    ratio: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800",
    alt: "Couples spa room with minimalist design and calming ambiance",
    category: "Couples Suite",
    ratio: 4 / 3,
  },
];


/* ------------------------------------------------------------------ */
/*  Gallery Content Component (uses useSearchParams)                   */
/* ------------------------------------------------------------------ */
function GalleryContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredImages = category
    ? galleryImages.filter(
        (img) =>
          img.category?.toLowerCase() ===
          decodeURIComponent(category).toLowerCase(),
      )
    : galleryImages;

  const categories = [
    ...new Set(galleryImages.map((img) => img.category).filter(Boolean)),
  ];

  const activeCategory = category ? decodeURIComponent(category) : "all";

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory via-white to-ivory">
      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-forest/5 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 z-10">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <Link
            href="/#spaces"
            className="group flex items-center gap-1.5 sm:gap-2 text-forest/60 hover:text-forest transition-colors"
          >
            <ArrowLeft
              size={14}
              className="sm:hidden group-hover:-translate-x-1 transition-transform"
            />
            <ArrowLeft
              size={16}
              className="hidden sm:block group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium">
              Back to Spaces
            </span>
          </Link>

          <div className="text-right">
            <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] text-forest/40 font-bold">
              Gallery
            </span>
            <h1 className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal mt-0.5 sm:mt-1">
              {activeCategory === "all" ? "All Spaces" : activeCategory}
            </h1>
          </div>
        </div>

        {/* Category filter chips */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          <Link
            href="/gallery"
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-wider transition-all ${
              activeCategory === "all"
                ? "bg-forest text-cream shadow-lg"
                : "bg-white text-charcoal/60 hover:text-forest border border-forest/10 hover:border-forest/30"
            }`}
          >
            All Spaces
            <span className="ml-1 sm:ml-2 text-[8px] sm:text-[9px] md:text-[10px] opacity-70">
              ({galleryImages.length})
            </span>
          </Link>

          {categories.map((cat) => {
            const count = galleryImages.filter(
              (img) => img.category === cat,
            ).length;
            const isActive = activeCategory === cat;

            return (
              <Link
                key={cat}
                href={`/gallery?category=${encodeURIComponent(cat!)}`}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-forest text-cream shadow-lg"
                    : "bg-white text-charcoal/60 hover:text-forest border border-forest/10 hover:border-forest/30"
                }`}
              >
                {cat}
                <span className="ml-1 sm:ml-2 text-[8px] sm:text-[9px] md:text-[10px] opacity-70">
                  ({count})
                </span>
              </Link>
            );
          })}
        </div>

        {/* Active filter indicator */}
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="w-4 sm:w-6 md:w-8 h-px bg-forest/20" />
          <span className="text-[10px] sm:text-[11px] md:text-[12px] text-text-muted">
            {activeCategory === "all"
              ? "Showing all spaces"
              : `Showing: ${activeCategory}`}
            {" · "}
            <span className="text-forest font-bold">
              {filteredImages.length} photos
            </span>
          </span>
          <div className="flex-1 h-px bg-forest/20" />
        </div>

        {/* Image Gallery - FIXED: Pass a number, not an object */}
        <ImageGallery images={filteredImages} columns={3} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Gallery Page with Suspense                                    */
/* ------------------------------------------------------------------ */
export default function GalleryPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-ivory flex items-center justify-center">
            <div className="text-center px-4 sm:px-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-forest/20 border-t-forest rounded-full animate-spin mx-auto mb-3 sm:mb-4" />
              <p className="text-forest/60 text-xs sm:text-sm">Loading gallery...</p>
            </div>
          </div>
        }
      >
        <GalleryContent />
      </Suspense>
      <Footer />
    </>
  );
}