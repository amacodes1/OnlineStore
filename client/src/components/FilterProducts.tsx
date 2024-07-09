import Image from "next/image";
import React from "react";

export default function FilterProducts() {
  return (
    <div>
      <div className="Wrapper w-full h-[1800px] px-4 py-20 flex-col justify-center items-center gap-10 inline-flex">
        {/* Header Section */}
        <div className="Header self-stretch h-[106px] flex-col justify-start items-center gap-4 flex">
          <div className="Products text-dark500 text-2xl font-bold font-Work_Sans capitalize leading-normal">
            50+ Products
          </div>
          <div className="Filter self-stretch h-[66px] flex-col justify-center items-center gap-2 flex">
            <div className="FilterProductsBy text-dark300 text-sm font-normal font-Work_Sans leading-[21px]">
              Filter Products By:
            </div>
            <div className="Category self-stretch px-4 py-2 rounded-lg border border-dark300 justify-center items-center gap-1 inline-flex">
              <div className=" justify-center items-center gap-2.5 flex">
                <div className="AllCategory text-dark300 text-sm font-semibold font-['Roboto'] leading-tight tracking-tight">
                  All Category
                </div>
              </div>
              <Image
                className="CategoryImg p-2 flex-col justify-center items-center gap-2.5 inline-flex"
                src="/images/arrow-down.png"
                height={500}
                width={500}
                alt="arrow down"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="Products h-[1398px] flex-col justify-start items-start gap-3 flex">
          <div className=" self-stretch justify-start items-center gap-3 inline-flex">
            {/* First Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg1.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />

                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="Styleoptics self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  StyleOptics
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $100
                    </div>
                    <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $50
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg2.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="CasualDarkShade self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  Casual Dark Shade
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="120 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $120
                    </div>
                    <div className="60 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $60
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Row2 self-stretch justify-start items-center gap-3 inline-flex">
            {/* Third Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg3.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="SpectraclearLense self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  SpectraClear Lense
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="140 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $140
                    </div>
                    <div className="70 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $70
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forth Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg4.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="BlueLightBlocker self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  Blue Light Blocker
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="140 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $140
                    </div>
                    <div className="70 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $70
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Row3 self-stretch justify-start items-center gap-3 inline-flex">
            {/* Fifth Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] bg-black/opacity-20 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg5.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="Trendlens self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  TrendLens
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className=" justify-start items-center gap-2 flex">
                    <div className="170 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $170
                    </div>
                    <div className="85 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $85
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sixth Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg6.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="Sleeksight self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  SleekSight
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $100
                    </div>
                    <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $50
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Row4 self-stretch justify-start items-center gap-3 inline-flex">
            {/* Seventh Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg7.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="Eliteeyes self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  EliteEyes
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $100
                    </div>
                    <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $50
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eight Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] bg-black/opacity-20 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg8.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="PureVision self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  Pure Vision
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="50 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $50
                    </div>
                    <div className="25 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $25
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Row5 self-stretch justify-start items-center gap-3 inline-flex">
            {/* Ninth Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg9.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="Chicframes self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  ChicFrames
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="100 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $100
                    </div>
                    <div className="50 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $50
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tenth Card */}
            <div className="Project w-[173px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="Img self-stretch h-[188px] bg-black/opacity-30 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
                <Image
                  src="/images/productImg10.png"
                  height={500}
                  width={500}
                  alt="glasses"
                />
                <div className="Add w-10 h-10 p-2 bg-white25 rounded-[32px] justify-center items-center inline-flex">
                  <div className="IconCartAdd w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
              <div className="Info self-stretch h-[70px] flex-col justify-start items-start flex">
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
                <div className="UrbanopticsLense self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-relaxed">
                  UrbanOptics Lense
                </div>
                <div className="Price justify-start items-start gap-3 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="41 text-center text-gray600 text-sm font-normal font-Work_Sans line-through leading-7">
                      $41
                    </div>
                    <div className="205 text-center text-dark400 text-sm font-normal font-Work_Sans leading-7">
                      $20.5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="NavigationControls self-stretch rounded-md justify-between items-center inline-flex">
          <div className=" w-14 h-14 p-2.5 bg-gray600 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="ArrowLeft origin-top-left text-dark rotate-0 w-[13.55px] h-[16.50px] relative">
              <Image
                src="/images/arrow-left.png"
                height={500}
                width={500}
                alt="glasses"
              />
            </div>
          </div>
          <div className="Pagination justify-start items-center gap-6 flex">
            <div className="PageIndicator w-[87px] h-5 pl-[5px] pr-2 justify-center items-center flex">
              <div className="Text text-center text-dark400 text-sm font-semibold font-['Inter'] leading-tight">
                Page 1 of 5
              </div>
            </div>
            <div className="PaginationList justify-center items-center gap-1 flex">
              <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md border border-green400 flex-col justify-center items-center gap-2 inline-flex">
                <div className="Text text-center text-dark400 text-sm font-normal font-['Inter'] leading-tight">
                  1
                </div>
              </div>
              <div className="TruncatedPages w-6 h-6 p-2 bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                <div className="Text text-center text-gray600 text-lg font-medium font-['Inter'] leading-tight">
                  ...
                </div>
              </div>
              <div className="PageNumber w-6 h-6 p-[13px] bg-white rounded-md flex-col justify-center items-center gap-2 inline-flex">
                <div className="Text text-center text-gray600 text-lg font-medium font-['Inter'] leading-tight">
                  5
                </div>
              </div>
            </div>
          </div>
          <div className="w-14 h-14 p-2.5 bg-green400 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="ArrowRight origin-top-left text-white -rotate-0 w-[13.55px] h-[16.50px] relative">
              <Image
                src="/images/arrow-right-hand.png"
                height={500}
                width={500}
                alt="glasses"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
