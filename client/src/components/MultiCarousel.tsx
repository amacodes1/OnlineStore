// // components/ProductCarousel.tsx
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Image from "next/image";
// import Link from "next/link";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 3,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// }

// interface MultiCarouselProps {
//   products: Product[];
// }

// const MultiCarousel: React.FC<MultiCarouselProps> = ({ products }) => {
//   return (
//     <Carousel responsive={responsive}>
//       {products.map((product) => (
//         <div key={product.id} className="p-4">
//           <Link href="/cart">
//             <div className="ImageSection flex-grow flex-shrink w-1/3 h-[458px] gap-4">
//               <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
//                 <Image
//                   className="Image grow shrink basis-0 h-[188px] sm:h-[300px] md:h-[350px]"
//                   src={product.image}
//                   height={500}
//                   width={500}
//                   alt={product.name}
//                 />
//                 <div className="NewBorder px-6 py-3 bg-white25 rounded-lg border border-white justify-center items-center gap-2.5 flex">
//                   <div className="NewText text-gray50 text-base font-medium font-['Roboto'] leading-normal tracking-tight">
//                     New
//                   </div>
//                 </div>
//                 <div className="Add w-[50px] h-[50px] p-[13px] bg-white25 rounded-[32px] justify-center items-center flex">
//                   <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
//                 </div>
//               </div>
//             </div>
//           </Link>
//           <div className="ImageContent self-stretch h-[62px] flex-col justify-start items-start gap-3 flex">
//             <div className="Content self-stretch h-[62px] flex-col justify-start items-start gap-3 flex">
//               <div className="TextPrice self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
//                 <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
//                   <Image
//                     className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                     src="/images/Star-Icon.png"
//                     height={500}
//                     width={500}
//                     alt="star"
//                   />
//                   <Image
//                     className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                     src="/images/Star-Icon.png"
//                     height={500}
//                     width={500}
//                     alt="star"
//                   />
//                   <Image
//                     className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                     src="/images/Star-Icon.png"
//                     height={500}
//                     width={500}
//                     alt="star"
//                   />
//                   <Image
//                     className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                     src="/images/Star-Icon.png"
//                     height={500}
//                     width={500}
//                     alt="star"
//                   />
//                   <Image
//                     className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
//                     src="/images/Star-Icon.png"
//                     height={500}
//                     width={500}
//                     alt="star"
//                   />
//                 </div>
//                 <div className="Description self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
//                   {product.name}
//                 </div>
//                 <div className="Price justify-start items-start gap-3 inline-flex">
//                   <div className="PriceNumber text-dark400 text-base font-semibold font-Work_Sans leading-tight">
//                     ${product.price}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default MultiCarousel;
