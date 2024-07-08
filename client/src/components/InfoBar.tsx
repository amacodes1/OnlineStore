import React from "react";

export default function InfoBar() {
  return (
    <div className="">
      <div className="NotificationBar w-[390px] px-8 py-2 left-0 top-0 absolute bg-paleGreen justify-center items-center gap-[22px] inline-flex">
        <div className="Content justify-center items-start gap-2 flex">
          <div className="TextIcon justify-center items-center gap-2 flex">
            <div className="TicketPercent w-4 h-4 relative">
              <img src="../images/ticket-percent.png" alt="" />
            </div>
            <div className="OffLimitedTime text-center text-neutral-700 text-xs font-normal font-Work_Sans leading-[14.40px]">
              50%+ off — Limited time!{" "}
            </div>
          </div>
        </div>
        <div className="IconClose w-4 h-4 relative">
          <img
            className="Union w-[9.25px] h-[9.25px] left-[3.38px] top-[3.37px] absolute"
            src="../images/close.png"
          />
        </div>
      </div>
    </div>
  );
}
