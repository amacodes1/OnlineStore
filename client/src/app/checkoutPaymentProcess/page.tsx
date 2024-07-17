"use client";

import Cart from "@/components/Cart";
import DirectTransferModal from "@/components/DirectTransferModal";
import Image from "next/image";
import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";

export default function Page() {
  const [directTransferModal, setDirectTransferModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);
  };

  // Paystack logic
  // const config = {
  //   reference: new Date().getTime().toString(),
  //   email: "graceama@gmail.com",
  //   amount: 5000 * 100,
  //   publicKey: "pk_test_d52da3f7bd43b9df9f5bc3f32eba8daea456eeff",
  // };

  // const onSuccess = (reference: any) => {
  //   console.log(reference);

  //   alert("Payment successful! Reference: " + reference.reference);
  //   setSelectedPaymentMethod("");
  // };

  // const onClose = () => {
  //   console.log("Payment dialog closed");

  //   alert("Payment dialog closed. Please try again.");
  // };

  // const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <div className="PaymentProcess w-full h-[744px] lg:h-[1550px] px-4 pb-20 bg-white flex-col justify-start items-center gap-8 inline-flex">
        <div className="PaymentProcessHeader h-[212px] py-4 md:pt-28 rounded-2xl flex-col justify-start items-start gap-2 flex">
          <div className="Title self-stretch md:hidden px-4 py-4 justify-end items-center gap-4 inline-flex">
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

        {/* Payment method on mobile screen */}
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
          <div className="Cart w-full h-[1276px] px-28 py-20 justify-start items-start gap-8 inline-flex">
            <div className="PaymentMethod w-[800px] px-4 py-8 bg-gray50 rounded-2xl flex-col justify-start items-end gap-8 inline-flex">
              <div className=" self-stretch h-[422px] flex-col justify-start items-start gap-8 flex">
                <div className="SelectPaymentMethod self-stretch text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
                  Select Payment Method
                </div>
                <div className="Contents self-stretch h-[364px] flex-col justify-start items-start gap-4 flex">
                  {/* PayStack */}
                  <div
                    className={`Elements self-stretch p-4 rounded justify-start items-center inline-flex ${
                      selectedPaymentMethod === "paystack" ? "bg-gray200" : ""
                    }`}
                  >
                    <div className="Content pr-[164px] py-[3.50px] justify-start items-center flex">
                      <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                        <input
                          type="radio"
                          id="paystack"
                          name="payment"
                          value="paystack"
                          checked={selectedPaymentMethod === "paystack"}
                          onChange={handlePaymentChange}
                          className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400"
                        />
                        <label
                          htmlFor="paystack"
                          className="FreeShipping text-dark300 text-base font-semibold font-Work_Sans leading-tight"
                        >
                          Payment By PayStack
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="Divider self-stretch h-px bg-gray200" />

                  {/* Direct Transfer */}
                  <div
                    className={`RadioButton self-stretch p-4 rounded-2xl justify-start items-start gap-3 inline-flex ${
                      selectedPaymentMethod === "direct" ? "bg-gray200" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id="direct"
                      name="payment"
                      value="direct"
                      className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400"
                      checked={selectedPaymentMethod === "direct"}
                      onChange={handlePaymentChange}
                    />
                    <div className="DirectTransferTitle grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                      <label
                        htmlFor="direct"
                        className="DirectTransfer self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight"
                      >
                        Direct Transfer
                      </label>
                      <div className="DirectTransferContent self-stretch text-dark400 text-base font-normal font-Work_Sans leading-tight">
                        Make your payment directly into our bank account. Please
                        use your ID as the payment reference.
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="Divider self-stretch h-px bg-gray200" />

                  {/* Credit/Debit Card */}
                  <div
                    className={`Elements self-stretch p-4 rounded justify-start items-center inline-flex ${
                      selectedPaymentMethod === "card" ? "bg-gray200" : ""
                    }`}
                  >
                    <div className="Content pr-[156px] py-[3.50px] justify-start items-center flex">
                      <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                        <input
                          type="radio"
                          id="card"
                          name="payment"
                          value="card"
                          checked={selectedPaymentMethod === "card"}
                          onChange={handlePaymentChange}
                          className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-dark400"
                        />
                        <label
                          htmlFor="card"
                          className="FreeShipping text-dark300 text-base font-semibold font-Work_Sans leading-tight"
                        >
                          Credit/Debit Card
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Continue to pay button */}
                  <button
                    className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex"
                    onClick={(e) => {
                      e.preventDefault();
                      if (selectedPaymentMethod === "paystack") {
                        // initializePayment(onSuccess, onClose);
                      } else if (selectedPaymentMethod === "direct") {
                        setDirectTransferModal(true);
                      }
                    }}
                  >
                    <div className="ContinueToPay cursor-pointer grow shrink basis-0 text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug">
                      Continue to pay
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Component */}
            <div className="OrderCart w-[385px]  bg-gray50 rounded-2xl flex-col justify-start gap-8 inline-flex">
              <Cart />
            </div>
          </div>
        </div>
      </div>

      {/* Direct Transfer Modal */}
      {directTransferModal && (
        <div>
          <DirectTransferModal
            visible={directTransferModal}
            onClose={() => setDirectTransferModal(false)}
          />
        </div>
      )}
    </div>
  );
}
