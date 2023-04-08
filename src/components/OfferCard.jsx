import React from "react";

const OfferCard = ({ image, title, description, bg }) => {
  return (
    <div
      className="max-w-[384px] md:h-[365px] rounded-[20px] py-[40px] px-[20px] "
      style={{ background: `${bg}` }}
    >
      <img src={image} alt="" className="w-[48.95px] h-[59.58px] " />
      <h1 className="text-[#181818] text-[24px] font-bold my-[20px]">
        {title}
      </h1>
      <p className="text-[16px] text-[#333333]">{description}</p>
    </div>
  );
};

export default OfferCard;
