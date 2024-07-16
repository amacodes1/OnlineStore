"use client";

import Image from "next/image";
import React from "react";

export default function FeaturedProducts() {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="Wrapper w-full h-[753px] px-[2%] lg:px-[8%] py-20 flex-col justify-center items-center gap-[52px] inline-flex">
          <div className="Header self-stretch justify-between items-center inline-flex">
            <div className="FeaturedProducts text-center text-dark500 text-[28px] font-bold font-Work_Sans leading-tight">
              Featured Products
            </div>
            <div className="NewSalesButton h-[42px] p-2.5 rounded-lg justify-center items-center gap-1 flex">
              <div className=" justify-center items-center gap-2.5 flex">
                <div className="NewSales text-dark500 text-lg font-semibold font-Work_Sans leading-snug">
                  New Sales
                </div>
              </div>
            </div>
          </div>
          <div className="AllCards self-stretch justify-start items-start gap-4 lg:gap-8 inline-flex">
            {/* First Card */}
            <div className="FirstCard flex-col justify-start items-start gap-4 inline-flex">
              <div className="Image w-[300px] h-[320px] lg:w-[360px] lg:h-[383px] rounded-2xl justify-start items-start gap-2.5 inline-flex">
                <Image
                  className="grow shrink basis-0 rounded-2xl  bg-dark300"
                  src="/images/first-pic.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="NewButton px-6 pt-[13px] pb-3 bg-gray50 rounded-lg border border-white justify-center items-center gap-2.5 flex">
                  <div className="NewText text-white text-base font-medium font-Work_Sans leading-normal tracking-tight">
                    New
                  </div>
                </div>
                <div className="Add w-[64.47px] h-[64.47px] p-[12.89px] bg-gray50 rounded-[51.57px] justify-center items-center flex">
                  <div className="IconCartAdd w-[38.68px] h-[38.68px] relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Content self-stretch h-[72px] flex-col justify-start items-start gap-3 flex">
                <div className="Content self-stretch h-[72px] flex-col justify-start items-start gap-3 flex">
                  <div className="TextPrice self-stretch h-[72px] flex-col justify-start items-start gap-1 flex">
                    <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
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
                    <div className="VisionaryEleganceEyewear self-stretch text-dark400 text-lg font-normal font-Work_Sans leading-snug">
                      Visionary Elegance Eyewear
                    </div>
                    <div className="Price justify-start items-start gap-3 inline-flex">
                      <div className="Amount text-dark500 text-base font-semibold font-Work_Sans leading-relaxed">
                        $149.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="SecondCard w-[383px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="Image w-[300px] h-[320px] lg:w-[360px] lg:h-[383px] rounded-2xl justify-start items-start gap-2.5 inline-flex">
                <Image
                  className="grow shrink basis-0 rounded-2xl  bg-dark300"
                  src="/images/second-pic.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="NewButton px-6 py-3 bg-gray50 rounded-lg border border-white justify-center items-center gap-2.5 flex">
                  <div className="NewText text-white text-base font-medium font-Work_Sans leading-normal tracking-tight">
                    New
                  </div>
                </div>
                <div className="Add w-[64.47px] h-[64.47px] p-[12.89px] bg-gray50 rounded-[51.57px] justify-center items-center flex">
                  <div className="IconCartAdd w-[38.68px] h-[38.68px] relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Content self-stretch h-[72px] flex-col justify-start items-start gap-3 flex">
                <div className="Content self-stretch h-[72px] flex-col justify-start items-start gap-3 flex">
                  <div className="TextPrice self-stretch h-[72px] flex-col justify-start items-start gap-1 flex">
                    <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
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
                    <div className="WomenPartySunglasses self-stretch text-dark400 text-lg font-normal font-Work_Sans leading-snug">
                      Women Party sunglasses
                    </div>
                    <div className="Price justify-start items-start gap-3 inline-flex">
                      <div className="Amount text-dark500 text-base font-semibold font-Work_Sans leading-relaxed">
                        $149.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="ThirdCard grow shrink basis-0 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <div className="Image w-[300px] h-[320px] lg:w-[360px] lg:h-[383px] self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
                <Image
                  className="grow shrink basis-0 rounded-2xl  bg-dark300"
                  src="/images/third-pic.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="NewButton px-6 py-3 bg-gray50 rounded-lg border border-white justify-center items-center gap-2.5 flex">
                  <div className="NewText text-white text-base font-medium font-Work_Sans leading-normal tracking-tight">
                    New
                  </div>
                </div>
                <div className="Add w-[64.47px] h-[64.47px] p-[12.89px] bg-gray50 rounded-[51.57px] justify-center items-center flex">
                  <div className="IconCartAdd w-[38.68px] h-[38.68px] relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Content self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                <div className="Content self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                  <div className="TextPrice self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
                    <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
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
                    <div className="DriverProtectionGlasses self-stretch text-dark400 text-base font-medium font-Work_Sans leading-relaxed">
                      Driver Protection Glasses
                    </div>
                    <div className="Price justify-start items-start gap-3 inline-flex">
                      <div className="14999 text-dark500 text-base font-semibold font-Work_Sans leading-relaxed">
                        $149.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="FirstArrow w-14 h-14 p-2.5 bg-green400 rounded-[99px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="ArrowRight origin-top-left -rotate-90 w-[13.55px] h-[16.50px] relative"></div>
            </div> */}
          </div>
          {/* <div className="SecondArrow w-14 h-14 p-2.5 bg-gray100 rounded-[99px] shadow flex-col justify-center items-center gap-2.5 flex">
            <div className="ArrowLeft origin-top-left rotate-90 w-[13.55px] h-[16.50px] relative"></div>
          </div> */}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="Wrapper w-full h-[507px] px-4 pt-20 pb-10 flex-col justify-center items-center gap-[23px] inline-flex">
          <div className="Header self-stretch h-[102px] flex-col justify-start items-center gap-4 flex">
            <div className="FeaturedProducts self-stretch text-center text-dark400 text-2xl font-medium font-Work_Sans leading-[44px]">
              Featured Products
            </div>
            <div className="NewSalesButton p-2.5 bg-dark50 rounded-lg justify-center items-center gap-1 inline-flex">
              <div className=" justify-center items-center gap-2.5 flex">
                <div className="NewSalesText text-dark400 text-lg font-medium font-Work_Sans leading-snug">
                  New Sales
                </div>
              </div>
            </div>
          </div>
          <div className="AllCards justify-center items-start gap-6 inline-flex">
            {/* First Card */}
            <div className="FirstCard w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Image self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  className="grow shrink basis-0 rounded-2xl  bg-dark300"
                  src="/images/first-pic.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="NewButton px-2 py-1 bg-gray50 rounded-md border border-white justify-center items-center gap-[8.38px] inline-flex">
                  <div className="New text-white text-xs font-semibold font-Work_Sans leading-[14.40px]">
                    New
                  </div>
                </div>
                <div className="Add w-10 h-10 p-2 bg-gray50 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Content self-stretch h-[62px] flex-col justify-start items-start gap-3 flex">
                <div className="TextPrice self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
                  <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
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
                  <div className="SleeksophisticationFrames self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                    SleekSophistication Frames
                  </div>
                  <div className="Price justify-start items-start gap-3 inline-flex">
                    <div className="Amount text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                      $149.99
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="SecondCard w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Image self-stretch h-[188px] bg-dark50 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  className="grow shrink basis-0 rounded-2xl  bg-dark300"
                  src="/images/second-pic.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="NewButton px-2 py-1 bg-gray50 rounded-md border border-white justify-center items-center gap-[8.38px] inline-flex">
                  <div className="NewText text-white text-xs font-semibold font-Work_Sans leading-[14.40px]">
                    New
                  </div>
                </div>
                <div className="Add w-10 h-10 p-2 bg-gray50 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Content self-stretch h-[62px] flex-col justify-start items-start gap-3 flex">
                <div className="TextPrice self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
                  <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
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
                  <div className="SpectraclearPrecisionLenses self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                    SpectraClear Precision Lenses
                  </div>
                  <div className="Price justify-start items-start gap-3 inline-flex">
                    <div className="Amount text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                      $149.99
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="ThirdCard w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Image self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  className="grow shrink basis-0 rounded-2xl  bg-dark300"
                  src="/images/third-pic.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="NewButton px-2 py-1 bg-gray50 rounded-md border border-white justify-center items-center gap-[8.38px] inline-flex">
                  <div className="NewText text-white text-xs font-semibold font-Work_Sans leading-[14.40px]">
                    New
                  </div>
                </div>
                <div className="Add w-10 h-10 p-2 bg-gray50 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Content self-stretch h-[62px] flex-col justify-start items-start gap-3 flex">
                <div className="Content self-stretch h-[62px] flex-col justify-start items-start gap-3 flex">
                  <div className="TextPrice self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
                    <div className="RatingRatingGroup w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
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
                    <div className="VisionaryEleganceEyewear self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                      Visionary Elegance Eyewear
                    </div>
                    <div className="Price justify-start items-start gap-3 inline-flex">
                      <div className="Amount text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                        $149.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
