"use client";

import DirectTransferModal from "@/components/DirectTransferModal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [directTransferModal, setDirectTransferModal] = useState(false);
  return (
    <div>
      <DirectTransferModal
        visible={directTransferModal}
        onClose={() => setDirectTransferModal(false)}
      />
      <div className="PaymentProcess w-full h-[744px] px-4 pb-20 bg-white flex-col justify-start items-center gap-8 inline-flex">
        <div className="PaymentProcessHeader h-[212px] py-4 rounded-2xl flex-col justify-start items-start gap-2 flex">
          <div className="Title self-stretch px-4 py-4 justify-end items-center gap-4 inline-flex">
            <Image
              className="IconsCloseLine w-6 h-6 relative"
              src="/images/close.png"
              height={20}
              width={20}
              alt=""
            />
          </div>
          <div className="Steppers self-stretch h-[123px] px-4 pb-2 pt-10 rounded-lg flex-col justify-center items-center gap-4 flex">
            <div className="Checkout self-stretch h-[34px] text-center text-dark300 text-base font-bold font-Work_Sans leading-tight">
              CHECKOUT
            </div>
            <div className="Steps self-stretch justify-center items-center gap-[126px] inline-flex">
              <div className="h-[57px] justify-between items-center flex">
                <div className="Step1 flex-col justify-start items-center gap-2 -mr-6 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <Image
                      className="IconsCheckLine w-8 h-8 relative"
                      src="/images/check-icon.png"
                      height={500}
                      width={500}
                      alt="line"
                    />
                  </div>
                  <div className="Information text-center text-gray600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Information
                  </div>
                </div>

                <Image
                  className="text-gray500 pb-5 w-24"
                  src="/images/line-icon-green.png"
                  height={500}
                  width={500}
                  alt="line"
                />

                <div className="Step2 w-[71px] flex-col justify-start items-center gap-2 -ml-4 -mr-4 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-bold font-Work_Sans leading-tight">
                      2
                    </div>
                  </div>
                  <div className="Payment text-center text-dark300 text-sm font-semibold font-Work_Sans leading-[16.80px]">
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

                <div className="Step3 w-full flex-col justify-start items-center gap-2 -ml-8 inline-flex">
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

        <div className="block lg:hidden">
          <div className="SelectPaymentMethod self-stretch text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
            Select Payment Method
          </div>
          <div className="Content self-stretch h-[364px] flex-col justify-start items-start gap-4 flex">
            <div className="RadioButton self-stretch p-4 bg-gray200 rounded-2xl justify-start items-start gap-3 inline-flex">
              <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400">
                <Image
                  className="Check w-3 h-3 left-[2px] top-[2px] absolute bg-dark400 rounded-full"
                  src="/images/radio-button.png"
                  height={500}
                  width={500}
                  alt="line"
                />
              </div>
              <div className="DirectTransferTitle grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                <div className="DirectTransfer self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                  Direct Transfer
                </div>
                <div className="DirectTransferContent self-stretch text-dark400 text-base font-normal font-Work_Sans leading-tight">
                  Make your payment directly into our bank account. Please use
                  your ID as the payment reference.
                </div>
              </div>
            </div>
            <div className="Divider self-stretch h-px bg-gray200" />

            <div className="Elements self-stretch px-4 py-[13px] rounded justify-start items-center gap-[395px] inline-flex">
              <div className="Content pr-[156px] py-[3.50px] justify-start items-center flex">
                <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400" />
                  <div className="FreeShipping text-dark300 text-base font-semibold font-Work_Sans leading-tight">
                    Credit/Debit Card
                  </div>
                </div>
              </div>
            </div>
            <div className="Divider self-stretch h-px bg-gray200" />

            <div className="Elements self-stretch px-4 py-[13px] rounded justify-start items-center gap-[395px] inline-flex">
              <div className="Content pr-[164px] py-[3.50px] justify-start items-center flex">
                <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400" />
                  <div className="FreeShipping text-dark300 text-base font-semibold font-Work_Sans leading-tight">
                    Cash on Delivery
                  </div>
                </div>
              </div>
            </div>
            <div className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
              <div
                className="ContinueToPay cursor-pointer grow shrink basis-0 text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug"
                onClick={(e) => {
                  e.preventDefault();
                  setDirectTransferModal(true);
                }}
              >
                Continue to pay
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Screen */}
        <div className="hidden lg:block">
          <div className="Cart w-full h-full px-28 py-20 justify-start items-start gap-8 inline-flex">
            <div className="PaymentMethod w-[800px] px-4 py-8 bg-gray50 rounded-2xl flex-col justify-start items-end gap-8 inline-flex">
              <div className=" self-stretch h-[422px] flex-col justify-start items-start gap-8 flex">
                <div className="SelectPaymentMethod self-stretch text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
                  Select Payment Method
                </div>
                <div className="Content self-stretch h-[364px] flex-col justify-start items-start gap-4 flex">
                  <div className="RadioButton self-stretch p-4 bg-gray200 rounded-2xl justify-start items-start gap-3 inline-flex">
                    <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400">
                      <Image
                        className="Check w-3 h-3 left-[2px] top-[2px] absolute bg-dark400 rounded-full"
                        src="/images/radio-button.png"
                        height={500}
                        width={500}
                        alt="line"
                      />
                    </div>
                    <div className="DirectTransferTitle grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                      <div className="DirectTransfer self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                        Direct Transfer
                      </div>
                      <div className="DirectTransferContent self-stretch text-dark400 text-base font-normal font-Work_Sans leading-tight">
                        Make your payment directly into our bank account. Please
                        use your ID as the payment reference.
                      </div>
                    </div>
                  </div>
                  <div className="Divider self-stretch h-px bg-gray200" />

                  <div className="Elements self-stretch px-4 py-[13px] rounded justify-start items-center gap-[395px] inline-flex">
                    <div className="Content pr-[156px] py-[3.50px] justify-start items-center flex">
                      <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                        <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400" />
                        <div className="FreeShipping text-dark300 text-base font-semibold font-Work_Sans leading-tight">
                          Credit/Debit Card
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Divider self-stretch h-px bg-gray200" />

                  <div className="Elements self-stretch px-4 py-[13px] rounded justify-start items-center gap-[395px] inline-flex">
                    <div className="Content pr-[164px] py-[3.50px] justify-start items-center flex">
                      <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                        <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400" />
                        <div className="FreeShipping text-dark300 text-base font-semibold font-Work_Sans leading-tight">
                          Cash on Delivery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div
                      className="ContinueToPay cursor-pointer grow shrink basis-0 text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug"
                      onClick={(e) => {
                        e.preventDefault();
                        setDirectTransferModal(true);
                      }}
                    >
                      Continue to pay
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  );
}
