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
    category: "category3",
  },
  {
    id: 6,
    name: "Trendlense",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg6.png",
    category: "category3",
  },
  {
    id: 7,
    name: "Sleek Sight",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg7.png",
    category: "category3",
  },
  {
    id: 8,
    name: "Elite Eyes",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg8.png",
    category: "category3",
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
    category: "category3",
  },
  {
    id: 11,
    name: "White Sunglass",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg11.png",
    category: "category3",
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
    category: "category3",
  },
  {
    id: 14,
    name: "Wearable eye tracker",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg14.png",
    category: "category3",
  },
  {
    id: 15,
    name: "Adjustable Eye Glasses",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg15.png",
    category: "category3",
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
    category: "category3",
  },
  {
    id: 18,
    name: "Halo Frame Glass",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg18.png",
    category: "category3",
  },
  {
    id: 19,
    name: "Black Glass lense",
    originalPrice: 140,
    salePrice: 70,
    image: "/images/productImg19.png",
    category: "category3",
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
      <div className="Products grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-3 md:gap-10 lg:gap-20">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="Card flex-col justify-start items-start gap-0 inline-flex"
          >
            <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[155px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
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
            <div className="Info h-[50px] flex flex-col gap-1">
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
    </div>
  );
}

// import Image from "next/image";
// import React from "react";

// export default function FilterProducts() {
//   return (
//     <div className="container">
//       <div className="Wrapper w-full lg:w-[1216px] h-[1800px] lg:h-auto px-4 py-20 flex-col justify-center md:justify-between items-center gap-10 inline-flex">
//         Header Section
//         <div className="Header container self-stretch h-[106px] flex-col md:flex-row justify-start md:justify-between items-center gap-4 flex">
//           <div className="Products text-dark500 text-2xl md:ml-24 font-bold font-Work_Sans capitalize md:leading-[48px] leading-normal">
//             50+ Products
//           </div>
//           <div className="Filter self-stretch h-[66px] flex-col md:flex-row justify-center items-center gap-2 flex">
//             <div className="FilterProductsBy text-dark300 text-sm font-normal font-Work_Sans leading-[21px]">
//               Filter Products By:
//             </div>
//             <div className="Category self-stretch px-4 md:px-8 py-2 md:py-0 rounded-lg md:rounded-full border border-dark300 justify-center items-center gap-1 inline-flex">
//               <div className=" justify-center items-center gap-2.5 flex">
//                 <div className="AllCategory text-dark300 text-sm font-semibold md:font-medium font-Work_Sans leading-tight tracking-tight">
//                   All Category
//                 </div>
//               </div>
//               <Image
//                 className="CategoryImg p-2 flex-col justify-center items-center gap-2.5 inline-flex"
//                 src="/images/arrow-down.png"
//                 height={25}
//                 width={30}
//                 alt="arrow down"
//               />
//             </div>

//             <select className="px-4 py-2 rounded-lg border border-dark300 text-dark300 text-sm font-semibold font-Work_Sans">
//               <option value="all">All Categories</option>
//               <option value="category1">Category 1</option>
//               <option value="category2">Category 2</option>
//               <option value="category3">Category 3</option>
//             </select>
//           </div>
//         </div>

//         Products Section
//         <div className="Products h-[1398px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-3 md:gap-8 ">
//           First Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg1.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />

//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="Styleoptics self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 StyleOptics
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $100
//                   </div>
//                   <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $50
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Second Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg2.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="CasualDarkShade self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 Casual Dark Shade
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="120 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $120
//                   </div>
//                   <div className="60 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $60
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Third Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg3.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="SpectraclearLense self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 SpectraClear Lense
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="140 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $140
//                   </div>
//                   <div className="70 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $70
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Forth Card
//           <div className="Project  flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg4.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="BlueLightBlocker self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 Blue Light Blocker
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="140 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $140
//                   </div>
//                   <div className="70 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $70
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Fifth Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] bg-black/opacity-20 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg5.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="Trendlens self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 TrendLens
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className=" justify-start items-center gap-2 flex">
//                   <div className="170 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $170
//                   </div>
//                   <div className="85 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $85
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Sixth Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg6.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="Sleeksight self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 SleekSight
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $100
//                   </div>
//                   <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $50
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Seventh Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg7.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="Eliteeyes self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 EliteEyes
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $100
//                   </div>
//                   <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $50
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Eight Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] bg-black/opacity-20 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg8.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="PureVision self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 Pure Vision
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="50 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $50
//                   </div>
//                   <div className="25 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $25
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Ninth Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg9.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="Chicframes self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 ChicFrames
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $100
//                   </div>
//                   <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $50
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           Tenth Card
//           <div className="Project flex-col justify-start items-start gap-3 inline-flex">
//             <div className="Img self-stretch w-[150px] lg:w-[200px] lg:h-[308px] h-[188px] bg-black/opacity-30 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
//               <Image
//                 src="/images/productImg10.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//               <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
//                 <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//               </div>
//             </div>
//             <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
//               <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//                 <Image
//                   className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                   src="/images/Star-Icon.png"
//                   height={500}
//                   width={500}
//                   alt="star"
//                 />
//               </div>
//               <div className="UrbanopticsLense self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
//                 UrbanOptics Lense
//               </div>
//               <div className="Price justify-start items-start gap-3 inline-flex">
//                 <div className="justify-start items-center gap-2 flex">
//                   <div className="41 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
//                     $41
//                   </div>
//                   <div className="205 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
//                     $20.5
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         Navigation Section
//         <div className="NavigationControls self-stretch rounded-md justify-between items-center inline-flex">
//           <div className=" w-14 h-14 md:ml-10 p-2 bg-gray600 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
//             <div className="ArrowLeft  origin-top-left text-dark rotate-0 w-[13.55px] h-[16.50px] relative">
//               <Image
//                 src="/images/arrow-left.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//             </div>
//           </div>
//           <div className="Pagination justify-start items-center gap-6 flex">
//             <div className="PageIndicator w-[90px] md:w-[200px] h-5 pl-[5px] md:pl-20 pr-2 md:pr-10 justify-center items-center flex">
//               <div className="Text text-center text-dark400 text-sm font-semibold font-Work_Sans leading-tight">
//                 Page 1 of 5
//               </div>
//             </div>
//             <div className="PaginationList justify-center items-center gap-1 flex">
//               <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md border border-green400 flex-col justify-center items-center gap-2 inline-flex">
//                 <div className="Text text-center text-dark400 text-sm font-normal font-Work_Sans leading-tight">
//                   1
//                 </div>
//               </div>
//               <div className="TruncatedPages w-6 h-6 p-2 bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
//                 <div className="Text text-center text-gray600 text-lg font-medium font-Work_Sans leading-tight">
//                   ...
//                 </div>
//               </div>
//               <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
//                 <div className="Text text-center text-gray600 text-lg font-medium font-Work_Sans leading-tight">
//                   5
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-14 h-14 p-2.5 bg-green400 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
//             <div className="ArrowRight origin-top-left text-white -rotate-0 w-[13.55px] h-[16.50px] relative">
//               <Image
//                 src="/images/arrow-right-hand.png"
//                 height={500}
//                 width={500}
//                 alt="glasses"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
