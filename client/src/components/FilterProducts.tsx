"use client";

import { fetchAllProducts } from "@/app/api/product/route";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function FilterProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  console.log(products);

  const [cart, setCart] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchAllProducts();
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

  const handleAddToCart = (productId: string) => {
    if (!cart.includes(productId)) {
      setCart((prevCart) => [...prevCart, productId]);
      setNotification("Item added to cart!");
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } else {
      setNotification("Item is already in the cart!");
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

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
                    onClick={() => handleAddToCart(product.id)}
                    className="Add w-[64.47px] h-[64.47px] p-[12.89px] bg-gray50 rounded-[51.57px] justify-center items-center inline-flex"
                  >
                    <div className="IconCartAdd w-[38.68px] h-[38.68px] relative flex-col justify-start items-start flex">
                      <svg
                        width="40"
                        height="39"
                        viewBox="0 0 40 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="icon / cart-add">
                          <g id="icon">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.32812 3.30848C3.32812 2.41836 4.04971 1.69678 4.93983 1.69678C7.70283 1.69678 10.0472 3.69761 10.5253 6.41499L11.3965 11.367H26.5389C28.3039 11.367 29.7342 11.367 30.8756 11.4669C32.0447 11.5693 33.0985 11.7879 34.0303 12.3467C35.3532 13.1398 36.3641 14.3574 36.8778 15.8035C37.2432 16.8323 37.2256 17.8995 37.0651 19.0343C36.909 20.1371 36.5868 21.4876 36.1924 23.1406L36.1597 23.2778C35.9002 24.3653 35.6843 25.2705 35.4476 26.0048C35.1995 26.7744 34.8969 27.4633 34.4122 28.0882C33.7102 28.9931 32.7833 29.7023 31.7251 30.1534C30.9993 30.4628 30.2515 30.5903 29.4297 30.6501C28.6409 30.7074 27.6833 30.7074 26.5219 30.7074H25.7282C23.1168 30.7074 21.0437 30.7074 19.3712 30.5502C17.6545 30.3889 16.2106 30.0518 14.9007 29.2864C13.9966 28.7579 13.1807 28.0958 12.4834 27.3223C11.4682 26.1961 10.8704 24.8635 10.4092 23.2439C9.96201 21.6735 9.60828 19.6965 9.16531 17.2208L8.45705 13.2626L8.45622 13.2579L7.35063 6.9735C7.13947 5.77323 6.11382 4.92018 4.93983 4.92018C4.04971 4.92018 3.32812 4.1986 3.32812 3.30848ZM30.5944 14.678C29.6103 14.5919 28.3218 14.5904 26.4636 14.5904H11.9692L12.3232 16.5686C12.7848 19.148 13.1118 20.9649 13.5094 22.3611C13.8981 23.726 14.3164 24.5415 14.8776 25.164C15.3502 25.6883 15.9064 26.1406 16.5272 26.5034C17.2721 26.9387 18.1957 27.2021 19.6729 27.341C21.177 27.4824 23.0986 27.484 25.8093 27.484H26.4636C27.6978 27.484 28.5377 27.483 29.1958 27.4351C29.8342 27.3887 30.1901 27.3037 30.461 27.1882C31.0235 26.9484 31.5057 26.5759 31.8653 26.1123C32.0334 25.8957 32.193 25.5948 32.3796 25.0158C32.5734 24.4149 32.7612 23.6325 33.0385 22.4703C33.4559 20.7207 33.7412 19.5178 33.8734 18.5827C34.0036 17.6624 33.9524 17.198 33.8403 16.8824C33.5832 16.1585 33.0698 15.5292 32.3728 15.1112C32.0533 14.9197 31.567 14.7632 30.5944 14.678Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M15.8188 35.5425C16.9315 35.5425 17.8334 34.6405 17.8334 33.5279C17.8334 32.4152 16.9315 31.5133 15.8188 31.5133C14.7062 31.5133 13.8042 32.4152 13.8042 33.5279C13.8042 34.6405 14.7062 35.5425 15.8188 35.5425Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M32.3388 33.5279C32.3388 34.6405 31.4368 35.5425 30.3241 35.5425C29.2115 35.5425 28.3095 34.6405 28.3095 33.5279C28.3095 32.4152 29.2115 31.5133 30.3241 31.5133C31.4368 31.5133 32.3388 32.4152 32.3388 33.5279Z"
                              fill="#FBFBFB"
                            />
                            <path
                              d="M34.7563 3.30848C34.7563 2.41836 34.0347 1.69678 33.1446 1.69678C32.2545 1.69678 31.5329 2.41836 31.5329 3.30848V4.92018H29.9212C29.0311 4.92018 28.3095 5.64177 28.3095 6.53188C28.3095 7.422 29.0311 8.14359 29.9212 8.14359H31.5329V9.75529C31.5329 10.6454 32.2545 11.367 33.1446 11.367C34.0347 11.367 34.7563 10.6454 34.7563 9.75529V8.14359H36.368C37.2581 8.14359 37.9797 7.422 37.9797 6.53188C37.9797 5.64177 37.2581 4.92018 36.368 4.92018H34.7563V3.30848Z"
                              fill="#FBFBFB"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
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
                  <div className="ProductName self-stretch text-neutral-700 text-xl font-normal font-Work_Sans leading-normal">
                    {product?.name}
                  </div>
                  <div className="Price justify-start items-start gap-3 inline-flex">
                    <div className="Amount justify-start items-center gap-2 flex">
                      <div className="80 text-center text-stone-300 text-xl font-normal font-Work_Sans line-through leading-normal">
                        $
                        {product?.current_price[0]?.USD?.length > 0 &&
                          product?.current_price[0]?.USD[0]}
                      </div>
                      <div className="40 text-center text-neutral-700 text-xl font-normal font-Work_Sans leading-normal">
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
            <div className="Frame13 w-14 h-14 p-2.5 bg-zinc-100 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="ArrowLeft origin-top-left rotate-90 w-[13.55px] h-[16.50px] relative"></div>
            </div>
            <div className="Frame53028 justify-center items-center gap-6 flex">
              <div className="PageIndicator justify-center items-center gap-2.5 flex">
                <div className="Text text-center text-neutral-700 text-xl font-normal font-Work_Sans leading-normal">
                  Page 1 of 3
                </div>
              </div>
              <div className="PaginationList justify-center items-center gap-1 flex">
                <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md border border-emerald-300 flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-700 text-sm font-normal font-Work_Sans leading-[16.80px]">
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
            <div className="Frame14 w-14 h-14 p-2.5 bg-emerald-300 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
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
              <div className="FirstCard w-[173px] flex-col justify-start items-start gap-3 inline-flex">
                <div className="Image self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                  <Image
                    className="grow shrink basis-0 rounded-2xl  bg-dark300"
                    src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                    height={188}
                    width={280}
                    alt={product?.name}
                  />
                  <div
                    onClick={() => handleAddToCart(product.id)}
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
                  <div className="ProductName self-stretch text-neutral-700 text-base font-medium font-Work_Sans leading-relaxed">
                    {product.name}
                  </div>
                  <div className="Price justify-start items-start gap-3 inline-flex">
                    <div className="Amount justify-start items-center gap-2 flex">
                      <div className="100 text-center text-stone-300 text-sm font-normal font-Work_Sans line-through leading-7">
                        $
                        {product?.current_price[0]?.USD?.length > 0 &&
                          product?.current_price[0]?.USD[0]}
                      </div>
                      <div className="50 text-center text-neutral-700 text-sm font-normal font-Work_Sans leading-7">
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
            <div className="Frame13 w-14 h-14 p-2.5 bg-zinc-100 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="ArrowLeft origin-top-left rotate-90 w-[13.55px] h-[16.50px] relative"></div>
            </div>
            <div className="Frame53028 justify-start items-center gap-6 flex">
              <div className="PageIndicator w-[87px] h-5 pl-[5px] pr-2 justify-center items-center flex">
                <div className="Text text-center text-neutral-700 text-sm font-semibold font-['Inter'] leading-tight">
                  Page 1 of 5
                </div>
              </div>
              <div className="PaginationList justify-center items-center gap-1 flex">
                <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md border border-emerald-300 flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-700 text-sm font-normal font-['Inter'] leading-tight">
                    1
                  </div>
                </div>
                <div className="TruncatedPages w-6 h-6 p-2 bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">
                    ...
                  </div>
                </div>
                <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Text text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">
                    5
                  </div>
                </div>
              </div>
            </div>
            <div className="Frame14 w-14 h-14 p-2.5 bg-emerald-300 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="ArrowRight origin-top-left -rotate-90 w-[13.55px] h-[16.50px] relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
