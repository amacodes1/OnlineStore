import FeaturedProducts from "@/components/FeaturedProducts";
import FilterProducts from "@/components/FilterProducts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Offers from "@/components/Offers";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="overflow-x-hidden h-[100%] w-[100%]">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <FilterProducts />
      <Offers />
      <Timer />
      <Newsletter />
    </main>
  );
}
