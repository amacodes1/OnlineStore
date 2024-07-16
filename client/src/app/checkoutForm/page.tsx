"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="CheckoutInformation w-full h-[1276px] lg:h-[1550px] px-4 pb-20 bg-white flex-col justify-start items-center gap-8 inline-flex">
        <div className="CheckoutHeader h-[212px] py-4 md:pt-28  rounded-2xl flex-col justify-start items-start gap-2 flex">
          <div className="Title md:hidden self-stretch px-4 py-2 justify-end items-center gap-4 inline-flex">
            <Image
              className="IconsCloseLine w-6 h-6 relative"
              src="/images/close.png"
              height={500}
              width={500}
              alt="close icon"
            />
          </div>
          <div className="Steppers self-stretch h-[123px] px-4 pb-2 pt-10 rounded-lg flex-col justify-center items-center gap-4 flex">
            <div className="Checkout self-stretch h-[34px] text-center text-dark300 text-base font-bold font-Work_Sans leading-tight">
              CHECKOUT
            </div>
            <div className="Steps self-stretch justify-center items-center gap-[126px] inline-flex">
              <div className="h-[57px] justify-between items-center flex">
                <div className="Step1 flex-col justify-start items-center gap-2 -mr-6 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green700 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-bold font-Work_Sans leading-tight">
                      1
                    </div>
                  </div>
                  <div className="Information text-center text-dark300 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Information
                  </div>
                </div>

                <Image
                  className="text-gray500 pb-5 w-24"
                  src="/images/line-icon.png"
                  height={500}
                  width={500}
                  alt="line"
                />

                <div className="Step2 w-[71px] flex-col justify-start items-center gap-2 -ml-4 -mr-4 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-gray500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-bold font-Work_Sans leading-tight">
                      2
                    </div>
                  </div>
                  <div className="Payment text-center text-gray500 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Payment
                  </div>
                </div>

                <Image
                  className="text-gray500 pb-5 w-24"
                  src="/images/line-icon.png"
                  height={500}
                  width={500}
                  alt="line"
                />

                <div className="Step3 w-[102px] flex-col justify-start items-center gap-2 -ml-8 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-gray500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-bold font-Work_Sans leading-tight">
                      3
                    </div>
                  </div>
                  <div className="Confirmation text-center text-gray500 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Divider self-stretch h-px bg-gray200" />
        </div>

        {/* Form Mobile */}
        <div className="formMobile px-[2%] hidden">
          {/* Information Section */}
          <div className="Form self-stretch h-[406px] bg-white rounded-[10px] flex-col justify-start items-start gap-6 flex">
            <div className="ContactInformation self-stretch h-[34px] text-dark300 text-xl font-semibold font-Work_Sans leading-normal">
              Contact Information
            </div>
            <div className="Name self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="FirstName text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                First Name
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Enter first name
                  </div>
                </div>
              </div>
            </div>
            <div className="Name self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="LastName text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Last Name
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Last name
                  </div>
                </div>
              </div>
            </div>
            <div className="Phone self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="PhoneNumber text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Phone Number
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Phone number
                  </div>
                </div>
              </div>
            </div>
            <div className="Email self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="EmailAddress text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Email Address
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Your Email
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="Form self-stretch h-[499px] bg-white rounded-[10px] flex-col justify-start items-start gap-6 flex">
            <div className="ShippingAddress self-stretch h-[34px] text-dark300 text-xl font-semibold font-Work_Sans leading-[34px]">
              Shipping Address
            </div>
            <div className="Street self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="StreetAddress text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Street Address *
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Stress Address
                  </div>
                </div>
              </div>
            </div>
            <div className="Country self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="Country text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Country *
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Country
                  </div>

                  <Image
                    className="IconDown w-3 h-2 text-gray500 relative"
                    src="/images/arrow-down.png"
                    height={500}
                    width={500}
                    alt="arrow down"
                  />
                </div>
              </div>
            </div>
            <div className="Street self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="TownCity text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Town / City *
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Town / City
                  </div>
                </div>
              </div>
            </div>
            <div className="State self-stretch justify-between items-start inline-flex">
              <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="State text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                  State
                </div>
                <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                  <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                    <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                      State
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Name self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="ZipCode text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Zip Code
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Zip Code
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div>
            <button className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
              <div className="Next text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug">
                <Link href="/checkoutPaymentProcess">Next</Link>
              </div>
              <div className="arrowleft w-6 h-6 text-green50 relative left-1 bottom-0 rotate-0">
                <Link href="/checkoutPaymentProcess">
                  <img
                    className="CarbonArrowLeft text-green50"
                    src="../../images/arrow-left-white.png"
                  />
                </Link>
              </div>
            </button>
          </div>
        </div>

        {/* Form Desktop Screen */}
        <div className="formDesktop">
          <div className=" w-[100%] h-[1276px] px-28 py-4 md:py-20 lg:py-10 justify-start items-start gap-8 inline-flex">
            <div className="OrderCart w-[400px] md:w-[550px] lg:w-[800px] px-4 py-8 bg-gray50 rounded-2xl flex-col justify-start items-end gap-8 inline-flex">
              <div className="Form self-stretch h-[220px] rounded-[10px] flex-col justify-start items-start gap-6 flex">
                <div className="ContactInformation self-stretch h-[34px] text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
                  Contact Information
                </div>
                <div className="Names self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="FirstName text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      First Name
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                          Enter first name
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="LastName text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Last Name
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                          Last name
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Contact self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="Email grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="PhoneNumber self-stretch text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Phone Number
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                          Phone number
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Email grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="EmailAddress self-stretch text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Email Address
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                          Your Email
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Form self-stretch h-[313px] rounded-[10px] flex-col justify-start items-start gap-6 flex">
                <div className="ShippingAddress self-stretch h-[34px] text-dark400 text-xl font-semibold font-Work_Sans leading-[34px]">
                  Shipping Address
                </div>
                <div className="Street self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
                  <div className="StreetAddress text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Street Address *
                  </div>
                  <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                    <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                      <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                        Stress Address
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Address self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="Country grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="Country text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Country *
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                          Country
                        </div>
                        <div className="IconChevronDown w-6 h-6 relative" />
                      </div>
                    </div>
                  </div>
                  <div className="Street grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="TownCity text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Town / City *
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                          Town / City
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="State self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="State grow shrink basis-0 h-[69px] justify-between items-start flex">
                    <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                      <div className="State text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                        State
                      </div>
                      <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                        <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                          <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                            State
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="ZipCode text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Zip Code
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <div className="YourEmail grow shrink basis-0 text-gray600 text-base font-normal font-Work_Sans leading-tight">
                          Zip Code
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="PlaceOrder text-center text-emerald-50 text-xl font-semibold font-Work_Sans leading-normal">
                  <Link href="/checkoutPaymentProcess">Place Order</Link>
                </div>
              </div>
            </div>

            {/* Cart Component */}
            <div className="hidden lg:block">
              <div className="OrderCart w-[385px] px-4 py-8 bg-gray50 rounded-2xl flex-col justify-start items-center gap-8 inline-flex">
                <div className="Summary self-stretch h-[590px] flex-col justify-start items-start flex">
                  <div className="Title self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="Cart grow shrink basis-0 text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
                      Cart
                    </div>
                    <Link href="/">
                      <div className="Price justify-end items-center gap-2 flex">
                        <Image
                          className="IconsCloseLine w-6 h-6 relative"
                          src="/images/close.png"
                          height={500}
                          width={500}
                          alt="close"
                        />

                        <div className="Close text-right text-gray800 text-base font-normal font-Work_Sans leading-tight">
                          close
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="Divider self-stretch h-px bg-gray600" />
                  <div className="ProductsAdded self-stretch h-[34px] text-gray800 text-base font-normal font-Work_Sans leading-tight">
                    3 Products added
                  </div>
                  <div className="Divider self-stretch h-px bg-gray600" />
                  <div className="Products self-stretch h-[489px] flex-col justify-start items-start gap-4 flex">
                    <div className="CartProductCellMobile self-stretch py-6 border-b border-gray200 justify-between items-center inline-flex">
                      <div className="CartItem grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="Content self-stretch justify-start items-center gap-4 inline-flex">
                          <div className="ImagePlaceholder w-[120px] h-[97px] relative">
                            <Image
                              className="FirstImage w-[120px] h-[97px] left-[-0.50px] top-0 absolute rounded-2xl"
                              src="/images/cartImg1.png"
                              height={500}
                              width={500}
                              alt="glasses"
                            />
                          </div>
                          <div className="Info grow shrink basis-0 self-stretch justify-between items-start flex">
                            <div className="Product flex-col justify-center items-start gap-2 inline-flex">
                              <div className=" h-[57px] flex-col justify-start items-start gap-2 flex">
                                <div className="ReadingGlasses self-stretch text-dark400 text-sm font-semibold font-Work_Sans leading-[12px]">
                                  Reading Glasses
                                </div>
                                <div className="SubInfo self-stretch h-2 flex-col justify-start items-start gap-1 flex">
                                  <div className="FrameColourSilver self-stretch">
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[5px]">
                                      Frame Colour:
                                    </span>
                                    <span className="text-dark400 text-xs font-normal font-Work_Sans leading-[5px]">
                                      {" "}
                                    </span>
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[5px]">
                                      Silver
                                    </span>
                                  </div>
                                  <div className="ShippingFree self-stretch">
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[5px]">
                                      Shipping:
                                    </span>
                                    <span className="text-dark400 text-xs font-normal font-Work_Sans leading-[10px]">
                                      {" "}
                                    </span>
                                    <span className="text-green600 text-xs font-normal font-Work_Sans leading-[10px]">
                                      Free
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="QuantityButtonSmall w-20 h-8 px-2 py-3 mt-2 rounded-lg border border-gray800 flex-col justify-center items-center gap-2.5 flex">
                                <div className="Content w-16 justify-center items-center gap-3 inline-flex">
                                  <Image
                                    className="IconMinus w-4 h-4 relative flex-col justify-start items-start flex"
                                    src="/images/minus-icon.png"
                                    height={500}
                                    width={500}
                                    alt="minus"
                                  />

                                  <div className="GetStarted text-center text-zinc-600 text-xs font-semibold font-Work_Sans leading-tight">
                                    2
                                  </div>
                                  <div className="IconAdd w-4 h-4 relative flex-col justify-start items-start flex">
                                    <Image
                                      className="PlusImg w-[14px] h-[14px]"
                                      src="/images/plus-icon.png"
                                      height={500}
                                      width={500}
                                      alt="plus"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Price flex-col justify-center items-end gap-2 inline-flex">
                              <div className="IconsCloseLine w-6 h-6 relative" />
                              <div className="N2000 text-right text-dark400 text-base font-normal font-Work_Sans leading-tight">
                                N2,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CartProductCellMobile self-stretch py-6 border-b border-gray200 justify-between items-center inline-flex">
                      <div className="CartItem grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="Content self-stretch justify-start items-center gap-4 inline-flex">
                          <div className="ImagePlaceholder w-[120px] h-[114px] justify-center items-center flex">
                            <Image
                              className="Image w-[120px] h-[114px] rounded-2xl"
                              src="/images/cartImg2.png"
                              height={500}
                              width={500}
                              alt="glasses"
                            />
                          </div>
                          <div className="Info grow shrink basis-0 self-stretch justify-between items-start flex">
                            <div className="Product flex-col justify-center items-start gap-2 inline-flex">
                              <div className="Frame1000001094 h-[74px] flex-col justify-start items-start gap-2 flex">
                                <div className="Uv400ProtectionGlasses self-stretch text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                                  UV400 Protection Glasses
                                </div>
                                <div className="Frame1000001095 self-stretch h-8 flex-col justify-start items-start gap-1 flex">
                                  <div className="FrameColourYellow self-stretch">
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Frame Colour:
                                    </span>
                                    <span className="text-dark400 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      {" "}
                                    </span>
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Yellow
                                    </span>
                                  </div>
                                  <div className="ShippingFree self-stretch">
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Shipping:
                                    </span>
                                    <span className="text-dark400 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      {" "}
                                    </span>
                                    <span className="text-green600 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Free
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="QuantityButtonSmall w-20 h-8 px-2 py-3 mt-3 rounded-lg border border-gray800 flex-col justify-center items-center gap-2.5 flex">
                                <div className="Content w-16 justify-center items-center gap-3 inline-flex">
                                  <Image
                                    className="IconMinus w-4 h-4 relative flex-col justify-start items-start flex"
                                    src="/images/minus-icon.png"
                                    height={500}
                                    width={500}
                                    alt="minus"
                                  />

                                  <div className="GetStarted text-center text-zinc-600 text-xs font-semibold font-Work_Sans leading-tight">
                                    2
                                  </div>
                                  <div className="IconAdd w-4 h-4 relative flex-col justify-start items-start flex">
                                    <Image
                                      className="PlusImg w-[14px] h-[14px]"
                                      src="/images/plus-icon.png"
                                      height={500}
                                      width={500}
                                      alt="plus"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Price flex-col justify-center items-end gap-2 inline-flex">
                              <div className="IconsCloseLine w-6 h-6 relative" />
                              <div className="N2000 text-right text-dark400 text-base font-normal font-Work_Sans leading-tight">
                                N2,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CartProductCellMobile self-stretch py-6 border-b border-gray200 justify-between items-center inline-flex">
                      <div className="CartItem grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="Content self-stretch justify-start items-center gap-4 inline-flex">
                          <div className="ImagePlaceholder w-[120px] h-[102px] justify-center items-center flex">
                            <Image
                              className="Image w-[120px] h-[102px] rounded-2xl"
                              src="/images/cartImg3.png"
                              height={500}
                              width={500}
                              alt="glasses"
                            />
                          </div>
                          <div className="Info grow shrink basis-0 self-stretch justify-between items-start flex">
                            <div className="Product flex-col justify-center items-start gap-2 inline-flex">
                              <div className="Frame1000001094 h-[62px] flex-col justify-start items-start gap-2 flex">
                                <div className="VintageCatglasses self-stretch text-dark400 text-sm font-semibold font-Work_Sans leading-snug">
                                  Vintage CatGlasses
                                </div>
                                <div className="Frame1000001095 self-stretch h-8 flex-col justify-start items-start gap-1 flex">
                                  <div className="FrameColourSilver self-stretch">
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Frame Colour:
                                    </span>
                                    <span className="text-dark400 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      {" "}
                                    </span>
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Silver
                                    </span>
                                  </div>
                                  <div className="ShippingFree self-stretch">
                                    <span className="text-gray800 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Shipping:
                                    </span>
                                    <span className="text-dark400 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      {" "}
                                    </span>
                                    <span className="text-green600 text-xs font-normal font-Work_Sans leading-[14.40px]">
                                      Free
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="QuantityButtonSmall w-20 h-8 px-2 py-3 mt-3 rounded-lg border border-gray800 flex-col justify-center items-center gap-2.5 flex">
                                <div className="Content w-16 justify-center items-center gap-3 inline-flex">
                                  <Image
                                    className="IconMinus w-4 h-4 relative flex-col justify-start items-start flex"
                                    src="/images/minus-icon.png"
                                    height={500}
                                    width={500}
                                    alt="minus"
                                  />

                                  <div className="GetStarted text-center text-zinc-600 text-xs font-semibold font-Work_Sans leading-tight">
                                    2
                                  </div>
                                  <div className="IconAdd w-4 h-4 relative flex-col justify-start items-start flex">
                                    <Image
                                      className="PlusImg w-[14px] h-[14px]"
                                      src="/images/plus-icon.png"
                                      height={500}
                                      width={500}
                                      alt="plus"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Price flex-col justify-center items-end gap-2 inline-flex">
                              <div className="IconsCloseLine w-6 h-6 relative" />
                              <div className="N2000 text-right text-dark400 text-base font-normal font-Work_Sans leading-tight">
                                N2,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ElementsCartSummaryMobile self-stretch h-[430px] p-4 rounded border border-gray200 flex-col justify-start items-start gap-4 flex">
                  <div className="OrderSummary self-stretch text-dark text-base font-semibold font-Work_Sans leading-relaxed">
                    Order Summary
                  </div>
                  <div className="Content self-stretch h-[418px] flex-col justify-start items-start flex">
                    <div className="Fields self-stretch h-[376px] pb-6 flex-col justify-start items-start flex">
                      <div className="ShippingOptions self-stretch h-[196px] pb-4 flex-col justify-start items-start gap-3 flex">
                        <div className="Elements self-stretch px-4 py-[6px] rounded border border-gray300 justify-start items-center gap-[395px] inline-flex">
                          <div className="Content pt-0.5 pb-[3.50px] justify-center items-start gap-28 flex">
                            <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                              <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-gray800">
                                <Image
                                  className="Check w-3 h-3 left-[2px] top-[2px] absolute bg-dark500 rounded-full"
                                  src="/images/radio-button.png"
                                  height={500}
                                  width={500}
                                  alt="radio button"
                                />
                              </div>
                              <div className="FreeShipping text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                                Free shipping
                              </div>
                            </div>
                            <div className="N000 text-right text-zinc-600 text-base font-normal font-Work_Sans leading-tight">
                              N0.00
                            </div>
                          </div>
                        </div>
                        <div className="Elements self-stretch px-4 py-[6px] rounded border border-gray300 justify-start items-center gap-[395px] inline-flex">
                          <div className="Content pt-0.5 pb-[3.50px] justify-center items-start gap-[69px] flex">
                            <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                              <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-neutral-700" />
                              <div className="ExpressShipping text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                                Express shipping
                              </div>
                            </div>
                            <div className="N1500 text-right text-dark400 text-base font-normal font-Work_Sans leading-tight">
                              +N15.00
                            </div>
                          </div>
                        </div>
                        <div className="Elements self-stretch px-4 py-[5px] rounded border border-gray300 justify-start items-center gap-[395px] inline-flex">
                          <div className="Content pt-0.5 pb-[3.50px] justify-center items-start gap-[150px] flex">
                            <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                              <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-neutral-700" />
                              <div className="PickUp text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                                Pick Up
                              </div>
                            </div>
                            <div className="2100 text-right text-dark400 text-base font-normal font-Work_Sans leading-tight">
                              %21.00
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ElementsOrderSummaryInfoField self-stretch h-[52px] py-[13px] border-b border-gray200 flex-col justify-start items-start flex">
                        <div className="Content self-stretch justify-start items-start gap-40 inline-flex">
                          <div className="TitleAmount w-[326px] h-[26px] relative">
                            <div className="Title left-0 top-[3.50px] absolute justify-start items-center gap-2 inline-flex">
                              <div className="Subtotal text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                                Subtotal
                              </div>
                            </div>
                            <div className="N123400 left-[255px] top-0 absolute text-right text-dark400 text-base font-normal font-Work_Sans leading-tight">
                              N1234.00
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ElementsOrderSummaryInfoField self-stretch h-[52px] py-[13px] border-b border-gray200 flex-col justify-start items-start flex">
                        <div className="Content self-stretch justify-start items-start gap-40 inline-flex">
                          <div className="TitleAmount w-[326px] h-[26px] relative">
                            <div className="Title left-0 top-[3.50px] absolute justify-start items-center gap-2 inline-flex">
                              <div className="ShippingFee text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                                Shipping fee
                              </div>
                            </div>
                            <div className="N000 left-[280px] top-0 absolute text-right text-dark400 text-base font-normal font-Work_Sans leading-tight">
                              N0.00
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ElementsOrderSummaryInfoField self-stretch h-[52px] py-[13px] border-b border-gray200 flex-col justify-start items-start flex">
                        <div className="Content self-stretch justify-start items-start gap-40 inline-flex">
                          <div className="TitleAmount justify-center items-start gap-[195px] flex">
                            <div className="Total text-dark400 text-base font-bold font-Work_Sans leading-tight">
                              Total
                            </div>
                            <div className="Ng134500 text-right text-dark400 text-base font-bold font-Work_Sans leading-relaxed">
                              NG1345.00
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
        </div>
      </div>
    </div>
  );
}
