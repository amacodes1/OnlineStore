import Image from "next/image";
import React from "react";

export default function FeaturedProducts() {
  return (
    <div>
      {/* Heading */}
      <div className="FeaturedProducts w-full h-auto md:h-auto px-4 md:px-28 pt-20 pb-10 md:py-20 flex-col justify-center items-center gap-[23px] md:gap-[52px]">
        <div className="Heading self-stretch flex-col justify-start md:justify-between items-center gap-4 pb-4 flex">
          <div className="Title self-stretch text-center text-dark text-2xl md:text-[28px] font-medium font-Work_Sans md:leading-[33.60px] leading-[44px]">
            Featured Products
          </div>
          <div className="SubTitle md:h-[42px] p-2.5 bg-gray200 rounded-lg justify-center items-center gap-1 md:flex inline-flex">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="NewSalesText text-dark400 text-lg font-medium md:font-semibold font-Work_Sans leading-snug">
                New Sales
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="Products self-stretch h-auto flex-col md:flex-row justify-start items-start gap-2 md:gap-4 lg:gap-8 flex">
          {/* First Image Section */}
          <div className="ImageSection md:flex-grow md:flex-shrink md:w-1/3 h-[458px] flex-col justify-start items-start gap-4">
            <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <Image
                className="Image grow shrink basis-0 h-[380px]"
                src="/images/first-pic.png"
                height={500}
                width={500}
                alt="line"
              />

              <div className="NewBorder px-6 py-3 bg-white25 rounded-lg border border-white justify-center items-center gap-2.5 flex">
                <div className="NewText text-gray50 text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                  New
                </div>
              </div>
              <div className="Add w-[50px] h-[50px] p-[13px] bg-white25 rounded-[32px] justify-center items-center flex">
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
          <div className="ImageSection md:flex-grow md:flex-shrink md:w-1/3 h-[458px] flex-col justify-start items-start gap-4">
            <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <Image
                className="Image grow shrink basis-0 h-[380px]"
                src="/images/second-pic.png"
                height={500}
                width={500}
                alt="glasses"
              />

              <div className="NewBorder px-6 py-3 bg-white25 rounded-lg border border-white  justify-center items-center gap-2.5 flex">
                <div className="NewText text-white text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                  New
                </div>
              </div>
              <div className="Add w-[50px] h-[50px] p-[13px] bg-white25 rounded-[32px] justify-center items-center flex">
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
          <div className="ImageSection md:flex-grow md:flex-shrink md:w-1/3 h-[458px] rounded-2xl flex-col justify-start items-start gap-4">
            <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <Image
                className="Image grow shrink basis-0 h-[380px]"
                src="/images/third-pic.png"
                height={500}
                width={500}
                alt="glasses"
              />

              <div className=" px-6 py-3 bg-white25 rounded-lg border border-white justify-center items-center gap-2.5 flex">
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
