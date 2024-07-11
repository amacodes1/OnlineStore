import Image from "next/image";
import React from "react";
import { useCart } from "./CartProvider";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { isCartOpen, closeCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    closeCart();
    router.push("/checkoutForm");
  };

  return (
    <div>
      <div className="Cart w-full h-[100%] px-4 pt-28 pb-20 bg-white flex-col justify-start items-center gap-4 inline-flex">
        <div className="Summary self-stretch h-[559px] flex-col justify-start items-start flex">
          <div className="Title self-stretch justify-start items-center gap-4 inline-flex">
            <div className="Cart grow shrink basis-0 text-dark400 text-2xl font-medium font-Work_Sans leading-[34px]">
              Cart
            </div>
            <button
              onClick={closeCart}
              className="relative py-2 flex items-center gap-0.5"
            >
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
            </button>
          </div>
          <img className="Divider self-stretch h-px bg-gray200" />
          <div className="ProductsAdded self-stretch pt-1.5 h-[34px] text-gray800 text-base font-normal font-Work_Sans leading-tight">
            3 Products added
          </div>
          <div className="Divider self-stretch h-px bg-gray200" />
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
        <div className="ElementsCartSummaryMobile self-stretch h-[492px] p-4 mt-10 mb-12 rounded border border-gray300 flex-col justify-start items-start gap-4 flex">
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

            <div className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
              <button
                onClick={handleCheckout}
                className="ShowMore grow shrink basis-0 text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
