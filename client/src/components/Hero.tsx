// import Image from "next/image";
// import React from "react";

// export default function Hero() {
//   return (
//     <div className="">
//       <div className="w-full">
//         {/* Mobile View */}
//         <Image
//           className="w-full h-[670px] md:hidden p-2.5"
//           src="/images/hero-mobile.png"
//           height={500}
//           width={500}
//           alt="glasses"
//         />

//         {/* Large Screens */}
//         <div className="hidden md:block w-full h-[670px] px-4 md:px-[105px] py-32 flex items-center justify-center">
//           <div className="w-[70%] max-w-[1440px] flex flex-col items-center justify-center text-center">
//             <div className="relative w-full h-[670px]">
//               <Image
//                 className="w-full h-full object-cover"
//                 src="/images/hero-mobile.png"
//                 layout="fill"
//                 alt="glasses"
//               />
//             </div>
//             <div className="absolute left-0 top-[158px] w-full px-4 text-dark50 text-5xl font-bold font-Work_Sans leading-tight">
//               See better, look better, and feel confident.
//             </div>
//             <div className="absolute left-0 top-[334px] w-full px-4 flex justify-center">
//               <div className="bg-green50 rounded-full px-6 py-3 flex items-center">
//                 <div className="text-xl font-semibold text-dark400 font-Work_Sans leading-tight">
//                   Explore our Products
//                 </div>
//                 <div className="ml-4">
//                   <Image
//                     src="/images/arrow-right.png"
//                     height={35}
//                     width={35}
//                     alt="arrow"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View Text and Button */}
//       <div className="absolute left-[16px] top-[158px] w-full px-4 text-dark50 text-4xl font-medium font-Work_Sans leading-tight md:hidden">
//         See better, look better, and feel confident.
//       </div>
//       <div className="absolute left-0 top-[334px] w-full px-4 flex justify-center md:hidden">
//         <div className="bg-green50 rounded-full px-6 py-3 flex items-center">
//           <div className="text-lg font-semibold text-dark400 font-Work_Sans leading-tight">
//             Explore our Products
//           </div>
//           <div className="ml-4">
//             <Image
//               src="/images/arrow-right.png"
//               height={35}
//               width={35}
//               alt="arrow"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="mobile block md:hidden">
        <Image
          className="HeroImg w-full h-[670px] p-0 md:p-0"
          src="/images/hero-mobile.png"
          height={500}
          width={500}
          alt="glasses"
        />

        <div className=" ">
          <div className="HeroText w-[358px] md:w-[450px] left-[16px] md:left-[150px] top-[158px] md:top-[200px] absolute text-dark50 text-[40px] md:text-[50px] font-medium md:font-semibold font-Work_Sans md:leading-[70px] leading-[48px]">
            See better, look better, and feel confident.
          </div>

          <div className="HeroBtn px-4 py-2 md:py-4 md:my-20 left-[16px] md:left-[150px] top-[334px] md:top-[380px] absolute bg-green50 rounded-[99px] justify-start items-center gap-4 inline-flex">
            <div className="justify-center md:justify-start items-center gap-2.5 flex">
              <div className="ExploreOurProducts text-dark400 text-lg font-semibold font-Work_Sans leading-snug">
                Explore our Products
              </div>
            </div>
            <Image
              className="IconChevronRight w-[35px] h-[35px] px-2 py-[5px] bg-green500 rounded-[99px] justify-center items-center gap-2.5 flex"
              src="/images/arrow-right.png"
              height={500}
              width={500}
              alt="glasses"
            />
          </div>
        </div>
      </div>

      <div className="desktop hidden md:block">
        <Image
          src="/images/hero-desktop.png"
          height={824}
          width={1440}
          alt=""
        />
      </div>
    </div>
  );
}
