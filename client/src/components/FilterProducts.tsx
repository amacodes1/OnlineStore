"use client";

import Image from "next/image";
import React, { useState } from "react";

const productData = [
  {
    id: 1,
    name: "StyleOptics",
    originalPrice: 100,
    salePrice: 50,
    image: "/images/productImg1.png",
    category: "category1",
  },
  {
    id: 2,
    name: "Casual Dark Shade",
    originalPrice: 120,
    salePrice: 60,
    image: "/images/productImg2.png",
    category: "category2",
  },
  {
    id: 3,
    name: "SpectraClear Lense",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg3.png",
    category: "category1",
  },
  {
    id: 4,
    name: "Blue Light Blocker",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg4.png",
    category: "category3",
  },
  {
    id: 5,
    name: "Klaidescope Glasses",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg5.png",
    category: "category2",
  },
  {
    id: 6,
    name: "Trendlense",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg6.png",
    category: "category1",
  },
  {
    id: 7,
    name: "Sleek Sight",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg7.png",
    category: "category1",
  },
  {
    id: 8,
    name: "Elite Eyes",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg8.png",
    category: "category2",
  },
  {
    id: 9,
    name: "Pure Vision",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg9.png",
    category: "category3",
  },
  {
    id: 10,
    name: "Fashion Sunglass",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg10.png",
    category: "category2",
  },
  {
    id: 11,
    name: "White Sunglass",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg11.png",
    category: "category1",
  },
  {
    id: 12,
    name: "Gaze DarGlo Glasses",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg12.png",
    category: "category3",
  },
  {
    id: 13,
    name: "Tobiipro Glasses",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg13.png",
    category: "category2",
  },
  {
    id: 14,
    name: "Wearable eye tracker",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg14.png",
    category: "category2",
  },
  {
    id: 15,
    name: "Adjustable Eye Glasses",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg15.png",
    category: "category1",
  },
  {
    id: 16,
    name: "Brown Frame lense",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg16.png",
    category: "category3",
  },
  {
    id: 17,
    name: "Flex focus Adjustable",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg17.png",
    category: "category1",
  },
  {
    id: 18,
    name: "Halo Frame Glass",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg18.png",
    category: "category1",
  },
  {
    id: 19,
    name: "Black Glass lense",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg19.png",
    category: "category2",
  },
  {
    id: 20,
    name: "Blue Light Blocker",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg20.png",
    category: "category3",
  },
];

export default function FilterProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <div className="Wrapper w-full px-4 py-20 flex flex-col justify-between items-center gap-6">
      {/* Header Section */}
      <div className="Header self-stretch w-[100%] md:px-[10%] h-[106px] flex-col flex md:flex-row justify-between items-center gap-4">
        <div className="Products text-dark500 text-2xl font-bold font-Work_Sans capitalize md:leading-[48px] leading-normal">
          50+ Products
        </div>
        <div className="Filter flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="FilterProductsBy text-dark300 text-sm font-normal font-Work_Sans leading-[21px]">
            Filter Products By:
          </div>
          <select
            className=" px-[100%] flex-grow py-1 md:px-4 md:py-2 rounded-lg border border-dark300 text-dark300 text-sm font-semibold font-Work_Sans"
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

      {/* Products Section */}
      <div className="Products grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-16 md:gap-10 lg:gap-20">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="Card flex-col justify-start items-start gap-0 inline-flex"
          >
            <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[290px] h-[155px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
              <Image
                src={product.image}
                height={500}
                width={500}
                alt={product.name}
              />
              <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center">
                <div className="IconCartAdd w-6 h-6 relative flex" />
              </div>
            </div>
            <div className="Info flex flex-col gap-0 leading-tight pt-[10%] lg:pt-[1px]">
              <div className="RatingRatingGroup flex gap-0.5">
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
              <div className="ProductName text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                {product.name}
              </div>
              <div className="Price flex gap-2">
                <div className="text-gray600 text-sm font-normal font-Work_Sans line-through">
                  ${product.originalPrice}
                </div>
                <div className="text-dark400 text-sm font-normal font-Work_Sans">
                  ${product.salePrice}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Section */}
      <div className="NavigationControls pt-8 px-[6%] self-stretch rounded-md justify-between items-center inline-flex">
        <div className=" w-14 h-14 md:ml-10 p-2 bg-gray600 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="ArrowLeft  origin-top-left text-dark rotate-0 w-[13.55px] h-[16.50px] relative">
            <Image
              src="/images/arrow-left.png"
              height={500}
              width={500}
              alt="glasses"
            />
          </div>
        </div>
        <div className="Pagination justify-start items-center gap-6 flex">
          <div className="PageIndicator w-[90px] md:w-[200px] h-5 pl-[5px] md:pl-20 pr-2 md:pr-10 justify-center items-center flex">
            <div className="Text text-center text-dark400 text-xs md:text-sm font-semibold font-Work_Sans leading-tight">
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
              <div className="Text text-center text-gray600 text-lg font-medium font-Work_Sans leading-tight">
                ...
              </div>
            </div>
            <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
              <div className="Text text-center text-gray600 text-lg font-medium font-Work_Sans leading-tight">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="w-14 h-14 p-2.5 bg-green400 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="ArrowRight origin-top-left text-white -rotate-0 w-[13.55px] h-[16.50px] relative">
            <Image
              src="/images/arrow-right-hand.png"
              height={500}
              width={500}
              alt="glasses"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
