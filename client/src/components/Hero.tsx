import React from "react";

export default function Hero() {
  return (
    <div>
      <img
        className="HeroImg w-[390px] h-[670px] p-2.5"
        src="../images/hero-mobile.png"
      />

      <div className="HeroText w-[358px] left-[16px] top-[158px] absolute text-dark50 text-[40px] font-medium font-Work_Sans leading-[48px]">
        See better, look better, and feel confident.
      </div>

      <div className="HeroBtn px-4 py-2 left-[16px] top-[334px] absolute bg-green50 rounded-[99px] justify-start items-center gap-4 inline-flex">
        <div className="Frame1000001082 justify-center items-center gap-2.5 flex">
          <div className="ExploreOurProducts text-dark400 text-lg font-semibold font-Work_Sans leading-snug">
            Explore our Products
          </div>
        </div>
        <img
          className="IconChevronRight w-[35px] h-[35px] px-2 py-[5px] bg-green500 rounded-[99px] justify-center items-center gap-2.5 flex"
          src="../images/arrow-right.png"
        />
      </div>
    </div>
  );
}
