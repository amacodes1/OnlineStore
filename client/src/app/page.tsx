"use client";

import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProducts />
      <Offers />
    </main>
  );
}
