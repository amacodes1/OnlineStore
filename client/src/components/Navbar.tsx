import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="Person w-6 h-6 left-[291px] top-[58px] absolute" />
      <div className="Navbar bg-white w-[390px] h-[60px] px-4 py-2 left-0 top-[32px] absolute justify-between items-center inline-flex">
        <div className="justify-start items-center flex">
          <div className="NavMenuButton px-1 py-2 rounded-lg justify-center items-center gap-2 flex">
            <div className="Menu w-6 h-6 relative">
              <Image
                src="/images/menu.png"
                height={500}
                width={500}
                alt="ticket"
              />
            </div>
          </div>
          <div className="Title px-1 py-2 justify-center items-center gap-2.5 flex">
            <div className="Glaz text-center text-dark500 text-lg font-bold font-Work_Sans leading-snug">
              <Link href="/">GLAZ</Link>
            </div>
          </div>
        </div>
        <div className="Icons justify-start items-center gap-2 flex">
          <div className="TrailingElements justify-end items-center flex">
            <div className="StTrailingIcon w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="Container rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="StateLayer p-2 justify-center items-center gap-2.5 flex">
                  <div className="Icon w-6 h-6 relative">
                    <Image
                      src="/images/icon.png"
                      height={500}
                      width={500}
                      alt="ticket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ShoppingCart h-9 justify-start items-center gap-1 flex">
            <Link href="/cart">
              <div className="ButtonOpenEmptyCart py-2 justify-start items-center gap-0.5 flex">
                <div className="ShoppingCart02 w-5 h-5 relative">
                  <Image
                    src="/images/shopping-cart-02.png"
                    height={500}
                    width={500}
                    alt="ticket"
                  />
                </div>
                <div className=" p-1 left-[8px] top-[2px] justify-center items-center gap-2.5 flex">
                  <div className=" w-6 h-2 text-center pt-0.5 pb-3.5 bg-green500 rounded-xl text-green50 text-xs font-semibold font-Work_Sans leading-[14.40px] left-[352px] top-[12px] absolute">
                    5
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
