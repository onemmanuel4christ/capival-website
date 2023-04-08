import React from 'react'
import Safe from './svgIcons/Safe'
export default function WhyCard() {
  return (
    <div
      className="p-[30px] flex items-center gap-[16px] rounded-[14px] z-40"
      style={{ background: "rgba(217, 217, 217, 0.17)" }}
    >
      <img
        src="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680970702/capival/safe_dltneb.png"
        alt=""
        className="w-[25px] h-[28px] object-cover"
      />
      <div className="">
        <h2 className="text-[14px] font-bold text-[#8C2529]">
          Safe and Secured
        </h2>
        <small className="text-[12px]">
          Safe and Secure Your peace of mind is guaranteed when you transact
          with us. No need to fret.
        </small>
      </div>
    </div>
  );
}
