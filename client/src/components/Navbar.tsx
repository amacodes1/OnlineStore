import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="Person w-6 h-6 left-[291px] top-[58px] absolute" />
      <div className="Navbar bg-white w-[390px] h-[60px] px-4 py-2 left-0 top-[32px] absolute justify-between items-center inline-flex">
        <div className="Frame1000001072 justify-start items-center flex">
          <div className="NavMenuButton px-1 py-2 rounded-lg justify-center items-center gap-2 flex">
            <div className="Menu w-6 h-6 relative">
              <img src="../images/menu.png" alt="" />
            </div>
          </div>
          <div className="Frame1000001080 px-1 py-2 justify-center items-center gap-2.5 flex">
            <div className="Glaz text-center text-neutral-700 text-lg font-bold font-['Work Sans'] leading-snug">
              GLAZ
            </div>
          </div>
        </div>
        <div className="Frame1618868203 justify-start items-center gap-2 flex">
          <div className="TrailingElements justify-end items-center flex">
            <div className="StTrailingIcon w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="Container rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="StateLayer p-2 justify-center items-center gap-2.5 flex">
                  <div className="Icon w-6 h-6 relative">
                    <img src="../images/icon.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Frame1000001086 h-9 justify-start items-center gap-1 flex">
            <div className="ButtonOpenEmptyCart py-2 justify-start items-center gap-0.5 flex">
              <div className="ShoppingCart02 w-5 h-5 relative">
                <img src="../images/shopping-cart-02.png" alt="" />
              </div>
              <div className=" p-1 left-[8px] top-[2px] justify-center items-center gap-2.5 flex">
                <div className=" w-6 h-3 text-center pt-0.5 pb-3.5 bg-green500 rounded-xl text-green50 text-xs font-semibold font-Work_Sans leading-[14.40px] left-[352px] top-[12px] absolute">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
