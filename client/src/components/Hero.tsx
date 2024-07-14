import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="mobile block md:hidden">
        <Image
          className="HeroImg w-full h-[670px] p-0"
          src="/images/hero-mobile.png"
          height={500}
          width={500}
          alt="glasses"
        />

        <div className=" ">
          <div className="HeroText w-[358px] md:w-[450px] left-[16px] md:left-[150px] top-[158px] absolute text-dark50 text-[40px] md:text-[50px] font-medium md:font-semibold font-Work_Sans md:leading-[70px] leading-[48px]">
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
          className="pt-[100px]"
          src="/images/hero-desktop.png"
          height={824}
          width={1440}
          alt=""
        />
      </div>
    </div>
  );
}
