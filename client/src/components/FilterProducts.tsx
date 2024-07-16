"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useCartStore } from "@/store";
import { FetchAllProducts } from "@/lib/products";

export default function FilterProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await FetchAllProducts();
        setProducts(fetchedProducts.items || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const updateCart = (product: any) => {
    addToCart(product.id);
    setNotification(`${product.name} has been added to your cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  // const handleAddToCart = (productId: string) => {
  //   if (!cart.includes(productId)) {
  //     setCart((prevCart) => [...prevCart, productId]);
  //     setNotification("Item added to cart!");
  //     setTimeout(() => {
  //       setNotification(null);
  //     }, 3000);
  //   } else {
  //     setNotification("Item is already in the cart!");
  //     setTimeout(() => {
  //       setNotification(null);
  //     }, 3000);
  //   }
  // };

  // const updateCart = ({
  //   id,
  //   name,
  //   description,
  //   photos,
  //   current_price,
  //   rating,
  //   categories,
  // }: {
  //   id: any;
  //   name: any;
  //   description: any;
  //   photos: any;
  //   current_price: any;
  //   rating: any;
  //   categories: any;
  // }) => {
  //   dispatch(
  //     addToCart({
  //       id,
  //       name,
  //       description,
  //       photos,
  //       current_price,
  //       rating,
  //       categories,
  //     })
  //   );
  // };

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="Wrapper container mx-auto w-full h-[2549px] px-28 py-20 flex-col justify-center items-center gap-[60px] inline-flex">
          <div className="Header self-stretch justify-between items-center inline-flex">
            <div className="Products text-dark500 text-[40px] font-medium font-Work_Sans leading-[48px]">
              50+ Products
            </div>
            <div className="Filter justify-end items-center gap-2 flex">
              <div className="FilterProductsBy text-dark400 text-sm font-normal font-Work_Sans leading-[21px]">
                Filter Products By:
              </div>
              <div className="Category px-4 py-2 rounded-lg border border-gray600 justify-center items-center gap-1 flex">
                <div className=" justify-center items-center gap-2.5 flex">
                  <div className="AllCategory text-dark400 text-sm font-medium font-Work_Sans leading-tight tracking-tight">
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="all">All Categories</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2200px] self-stretch grid grid-cols-4 justify-start items-center gap-8">
            {products.map((product: any) => (
              <div
                key={product?.id}
                className="FirstCard flex-col justify-start items-center gap-8"
              >
                <div className="Image w-[280px] h-[305px] bg-dark50 rounded-[25.79px] flex-col justify-start items-start gap-[16.12px] flex">
                  <Image
                    className="grow shrink basis-0 rounded-2xl  bg-dark300"
                    src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                    height={305}
                    width={280}
                    alt={product?.name}
                  />
                  <div
                    onClick={updateCart}
                    className="Add w-[64.47px] h-[64.47px] p-[12.89px] bg-dark rounded-[51.57px] justify-center items-center inline-flex"
                  >
                    <Image
                      className="IconCartAdd w-[38.68px] h-[38.68px] relative cursor-pointer flex-col justify-start items-start flex"
                      src="/images/cart-add.svg"
                      height={50}
                      width={50}
                      alt="cart"
                    />
                  </div>
                </div>
                <div className="Info self-stretch h-16 flex-col justify-start items-start flex">
                  <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
                    <Image
                      className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
                      src="/images/Star-Icon.png"
                      height={500}
                      width={500}
                      alt="star"
                    />
                    <Image
                      className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
                      src="/images/Star-Icon.png"
                      height={500}
                      width={500}
                      alt="star"
                    />
                    <Image
                      className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
                      src="/images/Star-Icon.png"
                      height={500}
                      width={500}
                      alt="star"
                    />
                    <Image
                      className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
                      src="/images/Star-Icon.png"
                      height={500}
                      width={500}
                      alt="star"
                    />
                    <Image
                      className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
                      src="/images/Star-Icon.png"
                      height={500}
                      width={500}
                      alt="star"
                    />
                  </div>
                  <div className="ProductName self-stretch text-dark400 text-xl font-normal font-Work_Sans leading-normal">
                    {product?.name}
                  </div>
                  <div className="Price justify-start items-start gap-3 inline-flex">
                    <div className="Amount justify-start items-center gap-2 flex">
                      <div className="80 text-center text-stone-300 text-xl font-normal font-Work_Sans line-through leading-normal">
                        $
                        {product?.current_price[0]?.USD?.length > 0 &&
                          product?.current_price[0]?.USD[0]}
                      </div>
                      <div className="40 text-center text-dark400 text-xl font-normal font-Work_Sans leading-normal">
                        $
                        {product?.current_price[0]?.USD?.length > 0 &&
                          product?.current_price[0]?.USD[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="NavigationControls self-stretch rounded-md justify-between items-center inline-flex">
            <div className="Arrow w-14 h-14 p-2.5 bg-gray100 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="ArrowLeft origin-top-left rotate-90 w-[13.55px] h-[16.50px] relative"></div>
            </div>
            <div className="Pagination justify-center items-center gap-6 flex">
              <div className="PageIndicator justify-center items-center gap-2.5 flex">
                <div className="Text text-center text-dark400 text-xl font-normal font-Work_Sans leading-normal">
                  Page 1 of 3
                </div>
              </div>
              <div className="PaginationList justify-center items-center gap-1 flex">
                <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md border border-green400 flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-dark400 text-sm font-normal font-Work_Sans leading-[16.80px]">
                    1
                  </div>
                </div>
                <div className="TruncatedPages w-6 h-6 p-2 bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-400 text-sm font-normal font-Work_Sans leading-[16.80px]">
                    ...
                  </div>
                </div>
                <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-400 text-sm font-normal font-Work_Sans leading-[16.80px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="Arrow w-14 h-14 p-2.5 bg-green400 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="ArrowRight origin-top-left -rotate-90 w-[13.55px] h-[16.50px] relative"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="Wrapper container mx-auto w-[390px] h-[3450px] px-4 py-20 flex-col justify-center items-center gap-10 inline-flex">
          <div className="Header self-stretch h-[106px] flex-col justify-start items-center gap-4 flex">
            <div className="Products text-dark500 text-2xl font-medium font-Work_Sans capitalize leading-normal">
              50+ Products
            </div>
            <div className="Filter self-stretch h-[66px] flex-col justify-center items-center gap-2 flex">
              <div className="FilterProductsBy text-dark400 text-sm font-normal font-Work_Sans leading-[21px]">
                Filter Products By:
              </div>
              <div className="Category self-stretch px-4 py-2 rounded-lg border border-zinc-600 justify-center items-center gap-1 inline-flex">
                <div className=" justify-center items-center gap-2.5 flex">
                  <div className="AllCategory text-dark400 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="all">All Categories</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </select>
                  </div>
                </div>
                <div className=" p-2 flex-col justify-center items-center gap-2.5 inline-flex" />
              </div>
            </div>
          </div>
          <div className="AllCards h-[3000px] self-stretch grid grid-cols-2 justify-center items-center gap-3">
            {products.map((product: any) => (
              <div
                key={product?.id}
                className="FirstCard w-[173px] flex-col justify-start items-start gap-3 inline-flex"
              >
                <div className="Image self-stretch h-[188px] rounded-2xl flex-col justify-start items-start px-2 gap-2.5 flex">
                  <Image
                    className="grow shrink basis-0 rounded-2xl  bg-dark300"
                    src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                    height={188}
                    width={280}
                    alt={product?.name}
                  />
                  <div
                    onClick={updateCart}
                    className="Add w-10 h-10 p-2 bg-white/opacity-25 rounded-[32px] backdrop-blur-sm justify-center items-center inline-flex"
                  >
                    <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
                <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
                  <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
                    <div className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex" />
                    <div className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex" />
                    <div className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex" />
                    <div className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex" />
                    <div className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                  <div className="ProductName self-stretch text-dark400 text-base font-medium font-Work_Sans leading-relaxed">
                    {product.name}
                  </div>
                  <div className="Price justify-start items-start gap-3 inline-flex">
                    <div className="Amount justify-start items-center gap-2 flex">
                      <div className="100 text-center text-stone-300 text-sm font-normal font-Work_Sans line-through leading-7">
                        $
                        {product?.current_price[0]?.USD?.length > 0 &&
                          product?.current_price[0]?.USD[0]}
                      </div>
                      <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                        $
                        {product?.current_price[0]?.USD?.length > 0 &&
                          product?.current_price[0]?.USD[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="NavigationControls self-stretch rounded-md justify-between items-center inline-flex">
            <div className="Arrow w-14 h-14 p-2.5 bg-gray100 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <Image
                className="ArrowLeft origin-center rotate-360 w-[13.55px] h-[16.20px] relative"
                src="/images/arrow-left.png"
                height={40}
                width={40}
                alt="arrow"
              />
            </div>
            <div className="Pagination justify-start items-center gap-6 flex">
              <div className="PageIndicator w-[87px] h-5 pl-[5px] pr-2 justify-center items-center flex">
                <div className="Text text-center text-dark400 text-sm font-semibold font-Work_Sans leading-tight">
                  Page 1 of 5
                </div>
              </div>
              <div className="PaginationList justify-center items-center gap-1 flex">
                <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md border border-green400 flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-dark400 text-sm font-normal font-Work_Sans leading-tight">
                    1
                  </div>
                </div>
                <div className="TruncatedPages w-6 h-6 p-2 bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-400 text-sm font-normal font-Work_Sans leading-tight">
                    ...
                  </div>
                </div>
                <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-400 text-sm font-normal font-Work_Sans leading-tight">
                    5
                  </div>
                </div>
              </div>
            </div>
            <div className="Arrow w-14 h-14 p-2.5 bg-green400 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <Image
                className="ArrowLeft origin-center -rotate-180 w-[13.55px] h-[16.50px] relative"
                src="/images/arrow-left.png"
                height={40}
                width={40}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
