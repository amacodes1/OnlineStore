import React from "react";

export default function page() {
  return (
    <div>
      <div className="OrderCart w-[390px] h-[744px] px-4 pb-20 bg-white flex-col justify-start items-center gap-8 inline-flex">
        <div className="Frame1000001098 h-[212px] py-4 rounded-2xl flex-col justify-start items-start gap-2 flex">
          <div className="Title self-stretch px-4 py-2 justify-end items-center gap-4 inline-flex">
            <div className="IconsCloseLine w-6 h-6 relative" />
          </div>
          <div className="Steppers self-stretch h-[123px] px-4 py-2 rounded-lg flex-col justify-center items-center gap-4 flex">
            <div className="Checkout self-stretch h-[34px] text-center text-zinc-600 text-base font-bold font-['Work Sans'] leading-tight">
              CHECKOUT
            </div>
            <div className="Frame1618868167 self-stretch justify-center items-center gap-[126px] inline-flex">
              <div className="Frame5360 h-[57px] justify-between items-center flex">
                <div className="Frame1618868164 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green-500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className="IconsCheckLine w-6 h-6 relative" />
                  </div>
                  <div className="Information text-center text-stone-300 text-sm font-semibold font-['Work Sans'] leading-[16.80px]">
                    Information
                  </div>
                </div>
                <div className="Frame1618868163 w-[71px] flex-col justify-start items-center gap-2 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green-500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-emerald-50 text-base font-bold font-['Work Sans'] leading-tight">
                      2
                    </div>
                  </div>
                  <div className="Payment text-center text-zinc-600 text-sm font-semibold font-['Work Sans'] leading-[16.80px]">
                    Payment
                  </div>
                </div>
                <div className="Frame1618868162 w-[102px] flex-col justify-start items-center gap-2 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-zinc-300 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-emerald-50 text-base font-bold font-['Work Sans'] leading-tight">
                      3
                    </div>
                  </div>
                  <div className="Confirmation text-center text-zinc-300 text-sm font-semibold font-['Work Sans'] leading-[16.80px]">
                    Confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Divider self-stretch h-px bg-zinc-100" />
        </div>
        <div className="SelectPaymentMethod self-stretch text-neutral-700 text-xl font-semibold font-['Work Sans'] leading-normal">
          Select Payment Method
        </div>
        <div className="Content self-stretch h-[364px] flex-col justify-start items-start gap-4 flex">
          <div className="RadioButton self-stretch p-4 bg-zinc-100 rounded-2xl justify-start items-start gap-3 inline-flex">
            <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-neutral-700">
              <div className="Check w-2.5 h-2.5 left-[4px] top-[4px] absolute bg-neutral-700 rounded-full" />
            </div>
            <div className="Frame1618868195 grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
              <div className="DirectTransfer self-stretch text-neutral-700 text-base font-semibold font-['Work Sans'] leading-tight">
                Direct Transfer
              </div>
              <div className="MakeYourPaymentDirectlyIntoOurBankAccountPleaseUseYourIdAsThePaymentReference self-stretch text-neutral-700 text-base font-normal font-['Work Sans'] leading-tight">
                Make your payment directly into our bank account. Please use
                your ID as the payment reference.
              </div>
            </div>
          </div>
          <div className="Divider self-stretch h-px bg-zinc-100" />
          <div className="Elements self-stretch px-4 py-[13px] rounded border justify-start items-center gap-[395px] inline-flex">
            <div className="Content pr-[156px] py-[3.50px] justify-start items-center flex">
              <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-zinc-600" />
                <div className="FreeShipping text-zinc-600 text-base font-semibold font-['Work Sans'] leading-tight">
                  Credit/Debit Card
                </div>
              </div>
            </div>
          </div>
          <div className="Divider self-stretch h-px bg-zinc-100" />
          <div className="Elements self-stretch px-4 py-[13px] rounded border justify-start items-center gap-[395px] inline-flex">
            <div className="Content pr-[164px] py-[3.50px] justify-start items-center flex">
              <div className="RadioButton self-stretch justify-start items-center gap-3 inline-flex">
                <div className="RadioButton w-[18px] h-[18px] relative rounded-[100px] border border-zinc-600" />
                <div className="FreeShipping text-zinc-600 text-base font-semibold font-['Work Sans'] leading-tight">
                  Cash on Delivery
                </div>
              </div>
            </div>
          </div>
          <div className="Button self-stretch px-[26px] py-2.5 bg-emerald-400 rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="ContinueToPay grow shrink basis-0 text-center text-emerald-50 text-lg font-semibold font-['Work Sans'] leading-snug">
              Continue to pay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
