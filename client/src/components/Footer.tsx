import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="Footer w-full h-[298px] px-4 pt-20 pb-10 bg-dark500 flex-col justify-start items-center gap-10 inline-flex">
        <div className="Content md:self-stretch h-[178px] flex-col justify-start items-start gap-[31px] flex">
          <div className="Dividers w-[358px] md:w-[1216px] h-px justify-center items-center inline-flex">
            <Image
              className="Divider w-[358px] md:w-[1216px] self-stretch bg-dark400"
              src=""
              height={500}
              width={500}
              alt="dividers"
            />
          </div>
          <div className="Content self-stretch h-[146px] flex-col md:flex-row justify-start md:justify-between md:py-[4%] md:px-[8%] w-[100%] md:inline-flex items-start gap-8 flex">
            <div className=" px-1 py-2 justify-center items-center gap-2.5 inline-flex">
              <div className="Glaz text-center text-green50 text-lg font-bold font-Work_Sans leading-snug">
                <Link href="/">GLAZ</Link>
              </div>
            </div>
            <div className="">
              <div className="Icons justify-start items-start gap-6 inline-flex">
                <Image
                  className="Fb w-6 h-6 relative"
                  src="/images/Fb-icon.png"
                  height={500}
                  width={500}
                  alt="fb"
                />
                <Image
                  className="Tw w-6 h-6 relative"
                  src="/images/Tw-icon.png"
                  height={500}
                  width={500}
                  alt="tw"
                />
                <Image
                  className="Ig w-6 h-6 relative"
                  src="/images/Ig-icon.png"
                  height={500}
                  width={500}
                  alt="ig"
                />
                <Image
                  className="Ln w-6 h-6 relative"
                  src="/images/Ln-icon.png"
                  height={500}
                  width={500}
                  alt="ln"
                />
              </div>
              <div className="2020GlazAllRightsReserved text-dark300 mt-3 text-sm font-normal font-Work_Sans leading-tight">
                © 2020 GLAZ. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
