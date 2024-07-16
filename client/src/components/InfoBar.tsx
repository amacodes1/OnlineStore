"use client";

import Image from "next/image";
import React from "react";

export default function InfoBar() {
  return (
    <div className="">
      <div className="InfoBar w-full px-8 py-2 left-0 top-0 absolute bg-green100 justify-center items-center gap-[22px] inline-flex">
        <div className="Content justify-center lg:justify-between items-start lg:items-center md:h-[17px] gap-2 flex">
          <div className="TextIcon justify-center items-center gap-2 flex">
            <div className="TicketPercent w-4 h-4 relative">
              <Image
                src="/images/ticket-percent.png"
                height={500}
                width={500}
                alt="ticket"
              />
            </div>
            <div className="OffLimitedTime text-center text-dark400 text-xs md:text-sm font-normal md:font-semibold font-Work_Sans leading-[14.40px] md:leading-[16.80px]">
              50%+ off — Limited time!{" "}
            </div>
          </div>
        </div>
        <div className="IconClose w-4 h-4 relative">
          <Image
            className="Image w-[9.25px] md:w-[13px] h-[9.25px] md:h-[13px] left-[3.38px] md:left-[1px] top-[3.37px] md:top-[0px] absolute"
            src="/images/close.png"
            height={500}
            width={500}
            alt="close"
          />
        </div>
      </div>
    </div>
  );
}
