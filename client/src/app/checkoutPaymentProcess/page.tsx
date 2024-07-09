"use client";

import DirectTransferModal from "@/components/DirectTransferModal";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [directTransferModal, setDirectTransferModal] = useState(false);
  return (
    <div>
      <DirectTransferModal
        visible={directTransferModal}
        onClose={() => setDirectTransferModal(false)}
      />
      <div className="PaymentProcess w-full h-[744px] px-4 pb-20 bg-white flex-col justify-start items-center gap-8 inline-flex">
        <div className="PaymentProcessHeader h-[212px] py-4 rounded-2xl flex-col justify-start items-start gap-2 flex">
          <div className="Title self-stretch px-4 py-2 justify-end items-center gap-4 inline-flex">
            <img
              className="IconsCloseLine w-6 h-6 relative"
              src="../../images/close.png"
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
                    <img
                      className="IconsCheckLine w-8 h-8 relative"
                      src="../../images/check-icon.png"
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

        <div className="SelectPaymentMethod self-stretch text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
          Select Payment Method
        </div>
        <div className="Content self-stretch h-[364px] flex-col justify-start items-start gap-4 flex">
          <div className="RadioButton self-stretch p-4 bg-gray200 rounded-2xl justify-start items-start gap-3 inline-flex">
            <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400">
              <img
                className="Check w-3 h-3 left-[2px] top-[2px] absolute bg-dark400 rounded-full"
                src="../../images/radio-button.png"
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
              className="ContinueToPay grow shrink basis-0 text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug"
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
  );
}
