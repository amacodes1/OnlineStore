import FeaturedProducts from "@/components/FeaturedProducts";
import FilterProducts from "@/components/FilterProducts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Offers from "@/components/Offers";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Offers />
      <FilterProducts />
      <Timer />
      <Newsletter />
    </main>
  );
}
