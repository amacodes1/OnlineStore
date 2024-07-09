import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="CheckoutConfirmation w-full h-[695px] px-4 pb-20 bg-white flex-col justify-start items-center gap-10 inline-flex">
        <div className=" h-[214px] py-4 rounded-2xl flex-col justify-start items-start gap-2 flex">
          <div className="Title self-stretch px-4 py-2 justify-end items-center gap-4 inline-flex">
            <Image
              className="IconsCloseLine w-6 h-6 relative text-dark300"
              src="/images/close.png"
              height={500}
              width={500}
              alt="close-icon"
            />
          </div>
          <div className="Steppers self-stretch h-[125px] px-4 pb-2 pt-10 rounded-lg flex-col justify-center items-center gap-4 flex">
            <div className="Checkout self-stretch h-[34px] text-center text-dark400 text-lg font-bold font-Work_Sans leading-tight">
              CHECKOUT
            </div>
            <div className="Steps self-stretch justify-center items-center gap-[126px] inline-flex">
              <div className="h-[59px] justify-between items-center flex">
                <div className="Step1 flex-col justify-start items-center gap-2 -mr-6 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <Image
                      className="IconsCheckLine w-6 h-6 relative"
                      src="/images/check-icon.png"
                      height={500}
                      width={500}
                      alt="check"
                    />
                  </div>
                  <div className="Information text-center text-gray300 text-base font-semibold font-Work_Sans leading-tight">
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
                    <Image
                      className="IconsCheckLine w-6 h-6 relative"
                      src="/images/check-icon.png"
                      height={500}
                      width={500}
                      alt="check"
                    />
                  </div>
                  <div className="Payment text-center text-gray300 text-base font-semibold font-Work_Sans leading-tight">
                    Payment
                  </div>
                </div>
                <Image
                  className="text-gray500 pb-5 w-24"
                  src="/images/line-icon-green.png"
                  height={500}
                  width={500}
                  alt="line"
                />
                <div className="Step3 w-[102px] flex-col justify-start items-center gap-2 -ml-8 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-medium font-Work_Sans leading-[34px]">
                      3
                    </div>
                  </div>
                  <div className="Confirmation text-center text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                    Confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Divider self-stretch h-px bg-gray200" />
        </div>
        <div className="CharmCircleTick w-[100px] h-[100px] relative">
          <div className="Group w-[78.13px] h-[78.05px] left-[10.93px] top-[11.02px] absolute">
            <Image
              src="/images/circle-tick.png"
              height={500}
              width={500}
              alt="circle tick"
            />
          </div>
        </div>
        <div className="Thankyou self-stretch h-[49px] flex-col justify-center items-start gap-2 flex">
          <div className="ThanksForPurchasing self-stretch text-center text-dark400 text-2xl font-semibold font-Work_Sans leading-snug">
            Thanks for purchasing!
          </div>
          <div className="YourOrderWouldBeShippedIn24hours self-stretch text-center text-dark400 text-base font-normal font-Work_Sans leading-tight">
            Your order would be shipped in 24hours.
          </div>
        </div>
        <div className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="ShowMore grow shrink basis-0 text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug">
            <Link href="/">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
