import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedProducts() {
  return (
    <div>
      <div className="FeaturedProducts w-full h-auto md:h-auto px-4 md:px-28 pt-20 pb-10 md:py-20 flex-col justify-center md:justify-between items-center gap-[23px] md:gap-[52px]">
        {/* Heading */}
        <div className="Heading self-stretch md:px-[4%] w-[100%] md:h-[42px] flex-col md:flex-row md:justify-between items-center gap-4 pb-4 md:inline-flex flex">
          <div className="Title self-stretch md:justify-self-start text-center text-dark text-2xl md:text-xl md:text-[28px] font-medium md:font-bold font-Work_Sans md:leading-[33.60px] leading-[44px]">
            Featured Products
          </div>
          <div className="SubTitle md:h-[42px] p-2.5 bg-gray200 md:bg-white rounded-lg justify-center items-center gap-1 md:flex inline-flex">
            <div className=" items-center gap-2.5 flex">
              <div className="NewSalesText self-stretch  text-dark400 text-lg font-medium md:font-semibold font-Work_Sans leading-snug">
                New Sales
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="Products self-stretch h-auto flex-row  gap-12 md:gap-4 lg:gap-8 flex">
          {/* First Image Section */}
          <div className="ImageSection flex-grow flex-shrink w-1/3 h-[458px] gap-4">
            <Link href="/cart">
              <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
                <Image
                  className="Image grow shrink basis-0 h-[200px] sm:h-[300px] md:h-[350px]"
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
            </Link>
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
          <div className="ImageSection flex-grow flex-shrink w-1/3 h-[458px] flex-col justify-start items-start gap-4">
            <Link href="/cart">
              <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
                <Image
                  className="Image grow shrink basis-0 h-[200px] sm:h-[300px] md:h-[350px]"
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
            </Link>
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
          <div className="ImageSection flex-grow flex-shrink w-1/3 h-[450px] rounded-2xl flex-col justify-start items-start gap-4">
            <Link href="/cart">
              <div className="Image self-stretch rounded-2xl justify-start items-start gap-2.5 inline-flex">
                <Image
                  className="Image grow shrink basis-0 h-[200px] sm:h-[300px] md:h-[350px]"
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
            </Link>
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
