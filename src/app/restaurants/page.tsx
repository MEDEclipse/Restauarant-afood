// src/app/restaurants/page.tsx

"use client";
import React from "react";
import { StickyScroll } from "@/Components/ui/sticky-scroll-reveal";
import { Restaurants } from "@/Components/restaurants";


export default function Page() {
  return (
    <div className="w-full py-4 h-screen p-10">
      <Restaurants />
    </div>
  );
}
