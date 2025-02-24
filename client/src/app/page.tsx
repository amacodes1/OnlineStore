import FeaturedProducts from "@/components/FeaturedProducts";
import FilterProducts from "@/components/FilterProducts";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Offers from "@/components/Offers";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="overflow-x-hidden h-[100%] w-[100%]">
      <Hero />
      <FeaturedProducts />
      <FilterProducts />
      <Offers />
      <Newsletter />
      <Timer />
    </main>
  );
}
