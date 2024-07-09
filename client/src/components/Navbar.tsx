"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="w-6 h-6 absolute left-[291px] top-[58px]" />
      <div className="bg-white w-full h-[60px] md:h-[80px] px-4 md:px-28 py-2 md:py-6 absolute left-0 top-[32px] flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="md:hidden px-1 py-2 rounded-lg flex items-center gap-2"
            onClick={toggleMenu}
          >
            <Image src="/images/menu.png" height={24} width={24} alt="menu" />
          </button>
          <div className="px-1 py-2 flex items-center">
            <h1 className="text-dark500 text-lg md:text-[34px] font-bold md:font-medium font-['Work Sans'] leading-snug">
              <Link href="/">GLAZ</Link>
            </h1>
          </div>
        </div>

        {/* Search Bar on large screen */}
        <div className="hidden md:flex h-12 px-4 w-1/2 rounded-[99px] border border-neutral-700 items-center mx-auto">
          <div className="flex items-center gap-1 flex-grow p-2">
            <div className="flex items-center gap-2.5 flex-grow">
              <span className="text-zinc-600 text-base font-normal font-['Work Sans'] leading-tight">
                Hinted search text|
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 relative">
                <Image
                  src="/images/icon.png"
                  height={24}
                  width={24}
                  alt="search"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Cart and Search icon on small screen */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center">
            <div className="w-6 h-6 relative">
              <Image
                src="/images/icon.png"
                height={24}
                width={24}
                alt="search"
              />
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="flex items-center gap-1">
            <Link href="/cart">
              <div className="relative py-2 flex items-center gap-0.5">
                <div className="relative w-5 h-5">
                  <Image
                    src="/images/shopping-cart-02.png"
                    height={20}
                    width={20}
                    alt="cart"
                  />
                  <span className="absolute top-[-10px] right-[-10px] bg-green500 text-green50 text-xs font-semibold rounded-xl py-1 px-2">
                    5
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Shopping Cart on large screen */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/cart">
            <div className="relative py-2 flex items-center gap-0.5">
              <div className="relative w-5 h-5">
                <Image
                  src="/images/shopping-cart-02.png"
                  height={20}
                  width={20}
                  alt="cart"
                />
                <span className="absolute top-[-10px] right-[-10px] bg-green500 text-green50 text-xs font-semibold rounded-xl p-1">
                  5
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function Navbar() {
//   return (
//     <div>
//       <div className="Person w-6 h-6 left-[291px] top-[58px] absolute" />
//       <div className="Navbar bg-white w-full h-[60px] md:h-[80px] px-4 md:px-28 py-2 md:py-6 left-0 top-[32px] absolute justify-between items-center inline-flex">
//         <div className="justify-start items-center flex">
//           <div className="NavMenuButton md:hidden px-1 py-2 rounded-lg justify-center items-center gap-2 md:gap-2.5 flex">
//             <div className="Menu w-6 h-6 relative">
//               <Image
//                 src="/images/menu.png"
//                 height={500}
//                 width={500}
//                 alt="ticket"
//               />
//             </div>
//           </div>
//           <div className="Title px-1 py-2 justify-center items-center gap-2.5 flex">
//             <div className="Glaz text-center text-dark500 text-lg md:text-[34px] font-bold md:font-medium font-Work_Sans leading-snug">
//               <Link href="/">GLAZ</Link>
//             </div>
//           </div>
//         </div>

//         {/* Search Bar on large screen */}
//         <div className="SearchBar h-16 px-4 rounded-[99px] border border-neutral-700 justify-between items-center flex">
//           <div className="StateLayer grow shrink basis-0 self-stretch p-2 justify-start items-center gap-1 flex">
//             <div className="Content grow shrink basis-0 self-stretch justify-start items-center gap-2.5 flex">
//               <div className="SupportingText grow shrink basis-0 text-zinc-600 text-base font-normal font-['Work Sans'] leading-tight">
//                 Hinted search text|
//               </div>
//             </div>
//             <div className="TrailingElements justify-end items-center flex">
//               <div className="StTrailingIcon w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
//                 <div className="Container rounded-[100px] justify-center items-center gap-2.5 inline-flex">
//                   <div className="StateLayer p-2 justify-center items-center gap-2.5 flex">
//                     <div className="Icon w-6 h-6 relative" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search icon on small screen */}
//         <div className="SearchIcon justify-start items-center gap-2 flex">
//           <div className="TrailingElements justify-end items-center flex">
//             <div className="StTrailingIcon w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
//               <div className="Container rounded-[100px] justify-center items-center gap-2.5 inline-flex">
//                 <div className="StateLayer p-2 justify-center items-center gap-2.5 flex">
//                   <div className="Icon w-6 h-6 relative">
//                     <Image
//                       src="/images/icon.png"
//                       height={500}
//                       width={500}
//                       alt="search"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ShoppingCart h-9 justify-start items-center gap-1 flex">
//             <Link href="/cart">
//               <div className="ButtonOpenEmptyCart py-2 justify-start items-center gap-0.5 flex">
//                 <div className="ShoppingCart02 w-5 h-5 relative">
//                   <Image
//                     src="/images/shopping-cart-02.png"
//                     height={500}
//                     width={500}
//                     alt="ticket"
//                   />
//                 </div>
//                 <div className=" p-1 left-[8px] top-[2px] justify-center items-center gap-2.5 flex">
//                   <div className=" w-6 h-2 text-center pt-0.5 pb-3.5 bg-green500 rounded-xl text-green50 text-xs font-semibold font-Work_Sans leading-[14.40px] left-[352px] top-[12px] absolute">
//                     5
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
