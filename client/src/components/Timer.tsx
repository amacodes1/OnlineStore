"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>();

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  // const hours = Math.floor(
  //   (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  // );
  // const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <div className="Content w-full h-[371px] px-8 sm:px-[25%] md:px-[30%] lg:px-[8%] py-20 bg-dark500 flex-col justify-center items-start gap-10 inline-flex">
        <div className="Title self-stretch h-[65px] lg:pt-[3%] flex-col justify-start items-start gap-2 flex">
          <div className="Title self-stretch">
            <span className="text-green200 text-[40px] font-extrabold font-Work_Sans leading-[38px]">
              Super{" "}
            </span>
            <span className="text-gray50 text-[40px] font-extrabold font-Work_Sans leading-[38px]">
              Deals
            </span>
          </div>
          <div className="PhosfluorescentlyEn w-[311px]">
            <span className="text-gray50 text-base font-normal font-Work_Sans leading-tight">
              New daily deals,{" "}
            </span>
            <span className="text-green200 text-base font-normal font-Work_Sans leading-tight">
              50%+ off
            </span>
          </div>
        </div>
        <div className="Timer self-stretch h-[106px] lg:pt-[8%] flex-col justify-center items-start gap-3 flex">
          <div className="OfferExpiresIn w-[360px] text-gray50 text-base font-normal font-Work_Sans leading-tight">
            Offer expires in:
          </div>
          <div className="Cards justify-start items-start gap-4 inline-flex">
            <div className="TimerBlocks w-[60px] self-stretch flex-col justify-start items-center gap-1 inline-flex">
              <div className="TimerNumberCell self-stretch h-[57px] px-[13px] py-2 bg-gray50 rounded-lg flex-col justify-center items-center gap-2.5 flex">
                <div className=" self-stretch text-center text-dark500 text-[34px] font-bold font-Work_Sans leading-[40.80px]">
                  12
                </div>
              </div>
              <div className="Days self-stretch text-center text-gray50 text-xs font-normal font-Work_Sans leading-[14.40px]">
                Days
              </div>
            </div>
            <div className="TimerBlocks w-[60px] self-stretch flex-col justify-start items-center gap-1 inline-flex">
              <div className="TimerNumberCell self-stretch h-[57px] px-[9px] py-2 bg-gray50 rounded-lg flex-col justify-center items-center gap-2.5 flex">
                <div className=" self-stretch text-center text-dark500 text-[34px] font-bold font-Work_Sans leading-[40.80px]">
                  30
                </div>
              </div>
              <div className="Hours self-stretch text-center text-gray50 text-xs font-normal font-Work_Sans leading-[14.40px]">
                Hours
              </div>
            </div>
            <div className="TimerBlocks w-[60px] self-stretch flex-col justify-start items-center gap-1 inline-flex">
              <div className="TimerNumberCell self-stretch h-[57px] px-[9px] py-2 bg-gray50 rounded-lg flex-col justify-center items-center gap-2.5 flex">
                <div className=" self-stretch text-center text-dark500 text-[34px] font-bold font-Work_Sans leading-[40.80px]">
                  20
                </div>
              </div>
              <div className="Minutes self-stretch text-center text-gray50 text-xs font-normal font-Work_Sans leading-[14.40px]">
                Minutes
              </div>
            </div>
            <div className="TimerBlocks w-[60px] self-stretch flex-col justify-start items-center gap-1 inline-flex">
              <div className="TimerNumberCell self-stretch h-[57px] px-[9px] py-2 bg-gray50 rounded-lg flex-col justify-center items-center gap-2.5 flex">
                <div className=" self-stretch text-center text-dark500 text-[34px] font-bold font-Work_Sans leading-[40.80px]">
                  1
                </div>
              </div>
              <div className="Seconds self-stretch text-center text-gray50 text-xs font-normal font-Work_Sans leading-[14.40px]">
                Seconds
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            className="grow shrink basis-0 h-60 rounded-2xl w-[55%] left-[35%] bottom-[6%] absolute"
            src="/images/timerImg.png"
            width={500}
            height={500}
            alt="timer Image"
          />
        </div>
      </div>
    </div>
  );
}
