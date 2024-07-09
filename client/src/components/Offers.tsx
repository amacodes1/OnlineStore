import Image from "next/image";
import React from "react";

export default function Offers() {
  return (
    <div>
      <div className="Offers w-[390px] h-[638px] px-4 py-6 flex-col justify-start items-start gap-[52px] inline-flex">
        <div className="Label w-[321px] text-green800 text-[40px] font-bold font-Work_Sans leading-[48px]">
          We provide the best customer experiences
        </div>
        <div className="AllCards self-stretch h-[394px] flex-col justify-start items-start gap-3 flex">
          <div className="Row1 self-stretch justify-start items-start gap-3 inline-flex">
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
          </div>

          <div className="Row2 self-stretch justify-start items-start gap-3 inline-flex">
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
    </div>
  );
}
