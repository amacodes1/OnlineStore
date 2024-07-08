import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="Footer w-[390px] h-[298px] px-4 pt-20 pb-10 bg-dark500 flex-col justify-start items-center gap-10 inline-flex">
        <div className="Content h-[178px] flex-col justify-start items-start gap-[31px] flex">
          <div className="Dividers w-[358px] h-px justify-center items-center inline-flex">
            <img className="Divider w-[358px] self-stretch bg-dark400" src="" />
          </div>
          <div className="Content self-stretch h-[146px] flex-col justify-start items-start gap-8 flex">
            <div className=" px-1 py-2 justify-center items-center gap-2.5 inline-flex">
              <div className="Glaz text-center text-green50 text-lg font-bold font-Work_Sans leading-snug">
                GLAZ
              </div>
            </div>
            <div className="Icons justify-start items-start gap-6 inline-flex">
              <img
                className="Fb w-6 h-6 relative"
                src="../images/Fb-icon.png"
                alt=""
              />
              <img
                className="Tw w-6 h-6 relative"
                src="../images/Tw-icon.png"
                alt=""
              />
              <img
                className="Ig w-6 h-6 relative"
                src="../images/Ig-icon.png"
                alt=""
              />
              <img
                className="Ln w-6 h-6 relative"
                src="../images/Ln-icon.png"
                alt=""
              />
            </div>
            <div className="2020GlazAllRightsReserved text-dark300 text-sm font-normal font-['Inter'] leading-tight">
              © 2020 GLAZ. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
