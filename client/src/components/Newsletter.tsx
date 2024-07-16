"use client";

import Image from "next/image";
import React from "react";

export default function Newsletter() {
  return (
    <div>
      <div className="block lg:hidden">
        <div className="Newsletter w-full h-[865px] md:h-[590px] px-6 py-20 md:py-32 md:px-20 bg-green500 flex-col md:flex-row justify-start items-center gap-[52px] inline-flex">
          <div className="self-stretch h-[305px] flex-col justify-start items-start gap-8 flex">
            <div className="NewsletterText self-stretch text-center text-dark500 text-[34px] font-bold font-Work_Sans leading-[40.80px]">
              Stay updated with Visionary Vibes!
            </div>
            <div className="EmailText self-stretch opacity-80 text-dark500 text-base font-normal font-Work_Sans leading-tight">
              Enter your email to get updates about new arrivals and exclusive
              offers.
            </div>
            <div className="EmailCapture self-stretch h-[121px] flex-col justify-start items-start gap-4 flex">
              <div className="Input self-stretch px-8 py-4 bg-dark500 rounded-lg border border-dark400 justify-start items-center gap-2 inline-flex">
                <div className="Text opacity-60 text-dark50 text-base font-normal font-Work_Sans leading-tight">
                  Enter your email here|
                </div>
              </div>
              <div className="SubscribeButton self-stretch px-8 py-4 bg-green50 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="Subscribe text-dark500 text-lg font-semibold font-Work_Sans leading-snug">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
          <Image
            className="Image self-stretch h-[349px]"
            src="/images/newsletterImg.png"
            height={500}
            width={500}
            alt="ln"
          />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="NewsletterDesktop w-full h-[726px] px-28 py-20 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Wrapper self-stretch h-[566px] px-28 py-10 bg-green500 rounded-2xl justify-between items-center inline-flex">
            <div className=" flex-col justify-start items-start gap-6 inline-flex">
              <div className="StayUpdatedWithVisionaryVibes w-[354px] text-dark500 text-[40px] font-medium font-Work_Sans leading-[48px]">
                Stay updated with Visionary Vibes!
              </div>
              <div className=" self-stretch opacity-80 text-dark500 text-base font-normal font-Work_Sans leading-tight">
                Enter your email to get updates about new arrivals and exclusive
                offers.
              </div>
              <div className="EmailCapture self-stretch h-[121px] flex-col justify-start items-start gap-4 flex">
                <div className="Input self-stretch px-8 py-4 bg-dark500 rounded-lg border border-gray700 justify-start items-center gap-2 inline-flex">
                  <div className="Text opacity-60 text-gray200 text-base font-normal font-Work_Sans leading-tight">
                    Enter your email here|
                  </div>
                </div>
                <div className=" self-stretch px-8 py-4 bg-green50 rounded-lg justify-center items-center gap-2.5 inline-flex">
                  <div className="Subscribe text-dark500 text-lg font-semibold font-Work_Sans leading-snug">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>

            <Image
              className="Image w-[477.65px] h-[485.58px]"
              src="/images/newsletter-desktop.png"
              height={500}
              width={500}
              alt="ln"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
