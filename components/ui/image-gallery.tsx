"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  /** 
   * Aspect ratio expressed as width / height.  
   * e.g. 16/9 for landscape, 9/16 for portrait, 1 for square 
   */
  ratio?: number;
  placeholder?: string;
}

export interface ImageGalleryProps {
  images: GalleryImage[];
  /** Only show images matching this category (case-insensitive). 
   *  Pass `undefined` or `"all"` to show everything. */
  activeCategory?: string;
  /** Number of masonry columns at lg breakpoint (default 3) */
  columns?: 2 | 3 | 4;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function useInView(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once]);

  return inView;
}

/** Distribute images across N columns for masonry layout */
function distributeToColumns<T>(items: T[], colCount: number): T[][] {
  const cols: T[][] = Array.from({ length: colCount }, () => []);
  items.forEach((item, i) => cols[i % colCount].push(item));
  return cols;
}

/* ------------------------------------------------------------------ */
/*  AnimatedImage (single cell)                                        */
/* ------------------------------------------------------------------ */
interface AnimatedImageProps {
  image: GalleryImage;
}

function AnimatedImage({ image }: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const ratio = image.ratio ?? 16 / 9;
  const paddingBottom = `${(1 / ratio) * 100}%`;
  const displaySrc = hasError && image.placeholder ? image.placeholder : image.src;

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-xl border border-border-soft/50 bg-cream-dark group"
      style={{ paddingBottom }}
    >
      {/* Shimmer placeholder while loading */}
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-cream-dark via-sand-light/40 to-cream-dark bg-[length:200%_100%]" />
        </div>
      )}

      <img
        alt={image.alt}
        src={displaySrc}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
          isInView && !isLoading
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105"
        )}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300 z-20" />

      {/* Category badge - hidden on mobile */}
      {image.category && (
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-30 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold bg-white/90 backdrop-blur-sm text-forest px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          {image.category}
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ImageGallery (main export)                                         */
/* ------------------------------------------------------------------ */
export function ImageGallery({
  images,
  activeCategory,
  columns = 3,
  className,
}: ImageGalleryProps) {
  const filtered =
    !activeCategory || activeCategory.toLowerCase() === "all"
      ? images
      : images.filter(
          (img) =>
            img.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  const colCountMap = { 
    2: "grid-cols-1 sm:grid-cols-2", 
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
  };
  const distributed = distributeToColumns(filtered, columns);

  return (
    <div
      className={cn(
        "relative w-full",
        className
      )}
    >
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-text-muted">
          <p className="text-xs sm:text-sm">No images found for this category.</p>
        </div>
      ) : (
        <div className={cn("grid gap-3 sm:gap-4 md:gap-5", colCountMap[columns])}>
          {distributed.map((col, colIndex) => (
            <div key={colIndex} className="grid gap-3 sm:gap-4 md:gap-5 content-start">
              {col.map((image, imgIndex) => (
                <AnimatedImage
                  key={`${colIndex}-${imgIndex}-${image.src}`}
                  image={image}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}