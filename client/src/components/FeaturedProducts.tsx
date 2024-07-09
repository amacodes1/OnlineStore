import Image from "next/image";
import React from "react";

export default function FeaturedProducts() {
  return (
    <div>
      {/* Heading */}
      <div className="FeaturedProducts w-[390px] h-[1683px] px-4 pt-20 pb-10 flex-col justify-center items-center gap-[23px] inline-flex">
        <div className="Heading self-stretch h-[102px] flex-col justify-start items-center gap-4 flex">
          <div className="Title self-stretch text-center text-dark text-2xl font-medium font-Work_Sans leading-[44px]">
            Featured Products
          </div>
          <div className="SubTitle p-2.5 bg-gray200 rounded-lg justify-center items-center gap-1 inline-flex">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="NewSalesText text-dark400 text-lg font-medium font-Work_Sans leading-snug">
                New Sales
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="Products self-stretch h-[1438px] flex-col justify-start items-start gap-8 flex">
          {/* First Image Section */}
          <div className="ImageSection self-stretch h-[458px] flex-col justify-start items-start gap-4 flex">
            <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <Image
                className="Image grow shrink basis-0 h-[380px]"
                src="/images/first-pic.png"
                height={500}
                width={500}
                alt="line"
              />

              <div className="NewBorder px-6 py-3 bg-white25 rounded-lg border border-white backdrop-blur-2xl justify-center items-center gap-2.5 flex">
                <div className="NewText text-gray50 text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                  New
                </div>
              </div>
              <div className="Add w-[50px] h-[50px] p-[13px] bg-white25 rounded-[32px] backdrop-blur-sm justify-center items-center flex">
                <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
              </div>
            </div>
            <div className="ImageContent self-stretch h-[62px] flex-col justify-start items-start gap-3 flex">
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
                  <div className="Description self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                    Visionary Elegance Eyewear
                  </div>
                  <div className="Price justify-start items-start gap-3 inline-flex">
                    <div className="PriceNumber text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                      $149.99
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Image Section */}
          <div className="ImageSection self-stretch h-[458px] flex-col justify-start items-start gap-4 flex">
            <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <Image
                className="Image grow shrink basis-0 h-[380px]"
                src="/images/second-pic.png"
                height={500}
                width={500}
                alt="glasses"
              />

              <div className="NewBorder px-6 py-3 bg-white25 rounded-lg border border-white backdrop-blur-2xl justify-center items-center gap-2.5 flex">
                <div className="NewText text-white text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                  New
                </div>
              </div>
              <div className="Add w-[50px] h-[50px] p-[13px] bg-white25 rounded-[32px] backdrop-blur-sm justify-center items-center flex">
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
                  <Image
                    className="StarIcon w-4 h-4 relative flex-col justify-start items-start flex"
                    src="/images/Star-Icon.png"
                    height={500}
                    width={500}
                    alt="star"
                  />
                </div>
                <div className="Description self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                  Party sunglasses
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="PriceNumber text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                    $149.99
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Image Section */}
          <div className="ImageSection self-stretch h-[458px] rounded-2xl flex-col justify-start items-start gap-4 flex">
            <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <Image
                className="Image grow shrink basis-0 h-[380px]"
                src="/images/third-pic.png"
                height={500}
                width={500}
                alt="glasses"
              />

              <div className="Frame76 px-6 py-3 bg-white25 rounded-lg border border-white backdrop-blur-2xl justify-center items-center gap-2.5 flex">
                <div className="New text-white text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                  New
                </div>
              </div>
              <div className="Add w-[50px] h-[50px] p-[13px] bg-white25 rounded-[32px] backdrop-blur-sm justify-center items-center flex">
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
                <div className="Description self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                  Driver Protection Glasses
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="PriceNumber text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                    $149.99
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
