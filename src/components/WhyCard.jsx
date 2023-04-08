import React from 'react'
import Safe from './svgIcons/Safe'
export default function WhyCard({image, title, description}) {
  return (
    <div
      className="p-[30px] flex items-center gap-[16px] rounded-[14px] z-40"
      style={{ background: "rgba(217, 217, 217, 0.17)" }}
    >
      <img src={image} alt="" className="w-[25px] h-[28px] object-cover" />
      <div className="">
        <h2 className="text-[14px] font-bold text-[#8C2529]">{title}</h2>
        <small className="text-[14px] text-[#333333] font-normal">{description}</small>
      </div>
    </div>
  );
}
