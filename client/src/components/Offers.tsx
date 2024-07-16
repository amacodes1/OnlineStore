"use client";

import Image from "next/image";
import React from "react";

export default function Offers() {
  return (
    <div>
      <div className="block lg:hidden">
        <div className="Offers w-full h-[638px] px-4 md:pl-14 md:pr-5 py-2 md:pt-16 flex-col justify-start items-start gap-[52px] inline-flex">
          <div className="Label w-[321px] md:w-[569px] text-green800 text-[40px] md:text-[50px] font-bold md:font-extrabold font-Work_Sans leading-[48px]">
            We provide the best customer experiences
          </div>
          <div className="AllCards self-stretch h-[394px] grid grid-cols-2 md:grid-cols-4 flex-col justify-start items-start gap-3">
            {/* First Card */}
            <div className="Card01 grow shrink basis-0 px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/van-icon.png"
                height={500}
                width={500}
                alt="van"
              />

              <div className="Text h-[61px] flex-col justify-start items-start gap-1 flex">
                <div className="FreeShipping text-dark400 text-base font-bold font-Work_Sans leading-tight">
                  Free Shipping
                </div>
                <div className="OrderAbove100 w-[120px] text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  Order <br />
                  above $100
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="Card2 grow shrink basis-0 px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/outline-money.png"
                height={500}
                width={500}
                alt="van"
              />

              <div className="Text h-[61px] flex-col justify-start items-start gap-1 flex">
                <div className="MoneyBack text-dark400 text-base font-bold font-Work_Sans leading-tight">
                  Money-back
                </div>
                <div className="DaysGuarantee w-[120px] text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  30 days <br />
                  guarantee
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="Card4 grow shrink basis-0 px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/lock-icon.png"
                height={500}
                width={500}
                alt="van"
              />

              <div className="Text h-[65px] flex-col justify-start items-start gap-2 flex">
                <div className="SecurePayments text-dark400 text-base font-bold font-Work_Sans leading-tight">
                  Secure Payments
                </div>
                <div className="SecuredByPaystack w-[120px] text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  Secured <br />
                  by paystack
                </div>
              </div>
            </div>

            {/* Forth Card */}
            <div className="Card3 grow shrink basis-0 px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/phone-icon.png"
                height={500}
                width={500}
                alt="van"
              />

              <div className="Text h-[65px] flex-col justify-start items-start gap-2 flex">
                <div className="7Support text-dark400 text-base font-bold font-Work_Sans leading-tight">
                  24/7 Support
                </div>
                <div className="PhoneAndEmailSupport w-[120px] text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  Phone and <br />
                  Email support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="Values w-full h-[499px] px-28 py-20 flex-col justify-start items-start gap-8 inline-flex">
          <div className="Label w-[569px] text-green800 text-[54px] font-semibold font-Work_Sans leading-[64.80px]">
            We provide the best customer experiences
          </div>
          <div className=" self-stretch justify-start items-center gap-8 inline-flex">
            {/* First Card */}
            <div className="Card01 w-[280px] px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/van-icon.png"
                height={500}
                width={500}
                alt="van"
              />
              <div className="Text h-[45px] flex-col justify-start items-start gap-1 flex">
                <div className="FreeShipping text-dark500 text-lg font-semibold font-Work_Sans leading-snug">
                  Free Shipping
                </div>
                <div className="OrderAbove100 text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  Order above $100
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="Card2 w-[280px] px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/outline-money.png"
                height={500}
                width={500}
                alt="van"
              />

              <div className="Text h-[45px] flex-col justify-start items-start gap-1 flex">
                <div className="MoneyBack text-dark500 text-lg font-semibold font-Work_Sans leading-snug">
                  Money-back
                </div>
                <div className="DaysGuarantee text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  30 days guarantee
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="Card3 w-[280px] px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/lock-icon.png"
                height={500}
                width={500}
                alt="van"
              />

              <div className="Text self-stretch h-[49px] flex-col justify-start items-start gap-2 flex">
                <div className="SecurePayments text-dark500 text-lg font-semibold font-Work_Sans leading-snug">
                  Secure Payments
                </div>
                <div className="SecuredByPaystack text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  Secured by paystack
                </div>
              </div>
            </div>

            {/* Forth Card */}
            <div className="Card4 w-[280px] px-4 py-8 bg-gray100 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
              <Image
                className="CardImg w-12 h-12 relative"
                src="/images/phone-icon.png"
                height={500}
                width={500}
                alt="van"
              />
              <div className="Text self-stretch h-[49px] flex-col justify-start items-start gap-2 flex">
                <div className="7Support text-dark500 text-lg font-semibold font-Work_Sans leading-snug">
                  24/7 Support
                </div>
                <div className="PhoneAndEmailSupport text-gray800 text-base font-normal font-Work_Sans leading-tight">
                  Phone and Email support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
