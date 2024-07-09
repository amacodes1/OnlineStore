import Link from "next/link";
import React from "react";

export default function DirectTransferModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: any;
}) {
  if (!visible) return null;

  const handleClose = (e: any) => {
    if (e.target.id) {
      onClose();
    }
  };

  return (
    <div>
      <div
        id="container"
        onClick={(e) => handleClose(e)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white0 bg-opacity-25 backdrop-blur-sm"
      >
        <div className="relative rounded-lg bg-gray50 p-2 sm:w-[50%]">
          <p
            className="absolute right-[-10px] w-10 cursor-pointer text-[1.5rem] font-bold text-dark400"
            id="container"
            onClick={(e) => handleClose(e)}
          >
            x
          </p>
          <div className="DirectTransferModal w-full h-[484px] px-4 py-6 bg-gray50 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="Title self-stretch py-2 justify-end items-center gap-4 inline-flex">
              <div className="OrderSummary grow shrink basis-0 text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
                Order Summary
              </div>
              <div className="IconsCloseLine w-6 h-6 relative text-dark400" />
            </div>
            <div className="ElementsOrderSummaryInfoField self-stretch h-[52px] py-[13px] border-b border-gray200 flex-col justify-start items-start flex">
              <div className="Content self-stretch justify-start items-start gap-40 inline-flex">
                <div className="TitleAmount w-[326px] h-[26px] relative">
                  <div className="Title left-0 top-[2px] absolute justify-start items-center gap-2 inline-flex">
                    <div className="Label text-dark200 text-lg font-semibold font-Work_Sans leading-snug">
                      Subtotal
                    </div>
                  </div>
                  <div className="Value left-[255px] top-0 absolute text-right text-dark200 text-base font-normal font-Work_Sans leading-tight">
                    N1234.00
                  </div>
                </div>
              </div>
            </div>
            <div className="ElementsOrderSummaryInfoField self-stretch h-[52px] py-[13px] border-b border-gray-200 flex-col justify-start items-start flex">
              <div className="Content self-stretch justify-start items-start gap-40 inline-flex">
                <div className="TitleAmount w-[326px] h-[26px] relative">
                  <div className="Title left-0 top-[2px] absolute justify-start items-center gap-2 inline-flex">
                    <div className="Label text-dark200 text-lg font-semibold font-Work_Sans leading-snug">
                      Shipping fee
                    </div>
                  </div>
                  <div className="Value left-[280px] top-0 absolute text-right text-dark200 text-base font-normal font-Work_Sans leading-tight">
                    N0.00
                  </div>
                </div>
              </div>
            </div>
            <div className="ElementsOrderSummaryInfoField self-stretch h-[52px] py-[13px] flex-col justify-start items-start flex">
              <div className="Content self-stretch justify-start items-start gap-40 inline-flex">
                <div className="TitleAmount pb-[7px] justify-center items-start gap-[200px] flex">
                  <div className="Label text-dark400 text-base font-bold font-Work_Sans leading-tight">
                    Total
                  </div>
                  <div className="Value text-right text-dark400 text-base font-bold font-Work_Sans leading-tight">
                    NG1345.00
                  </div>
                </div>
              </div>
            </div>
            <div className="Summary self-stretch p-4 bg-gray200 rounded-2xl justify-start items-start gap-3 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                <div className="PaymentInformation self-stretch text-dark400 text-base font-semibold font-Work_Sans leading-tight">
                  Payment Information
                </div>
                <div className="Details self-stretch h-[55px] flex-col justify-start items-start gap-0.5 flex">
                  <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="AccountName grow shrink basis-0 text-dark300 text-sm font-normal font-Work_Sans leading-[16.80px]">
                      Account Name
                    </div>
                    <div className="Glaz grow shrink basis-0 text-dark300 text-sm font-normal font-Work_Sans leading-[16.80px]">
                      GLAZ
                    </div>
                  </div>
                  <div className="AccountNumber self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="AccountNumber grow shrink basis-0 text-dark300 text-sm font-normal font-Work_Sans leading-[16.80px]">
                      Account Number
                    </div>
                    <div className=" grow shrink basis-0 text-dark300 text-sm font-normal font-Work_Sans leading-[16.80px]">
                      12345678912
                    </div>
                  </div>
                  <div className="AccountName self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="AccountName grow shrink basis-0 text-dark300 text-sm font-normal font-Work_Sans leading-[16.80px]">
                      Account Name
                    </div>
                    <div className="WemBank grow shrink basis-0 text-dark300 text-sm font-normal font-Work_Sans leading-[16.80px]">
                      WEM BANK
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
              <div className="ShowMore grow shrink basis-0 text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug">
                <Link href="/checkoutConfirmation"></Link>I have made payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
