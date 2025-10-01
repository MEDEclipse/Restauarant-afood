"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Star } from "lucide-react";

// Définition du type pour un seul témoignage
type Testimonial = {
  quote: string;
  name: string;
  title: string;
  rating: number;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Dupliquer le contenu pour un défilement infini
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[90vw] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)] p-8 sm:w-[350px] md:w-[450px]"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              {/* --- Section pour afficher les étoiles --- */}
              <div className="flex gap-0.5 text-yellow-500 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={`star-filled-${i}`} size={18} fill="currentColor" />
                ))}
                {[...Array(5 - item.rating)].map((_, i) => (
                  <Star key={`star-empty-${i}`} size={18} className="text-zinc-600" />
                ))}
              </div>

              {/* --- Contenu du témoignage --- */}
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-300">
                    {item.name}
                  </span>
                  <span className="text-xs font-normal text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

