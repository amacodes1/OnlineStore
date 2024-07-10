import Image from "next/image";
import React from "react";

export default function Newsletter() {
  return (
    <div>
      <div className="Newsletter w-full h-[865px] px-6 py-20  md:rounded-lg bg-green500 flex-col justify-start items-center gap-[52px] inline-flex">
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
  );
}
