import React from "react";
import WhyCard from "./WhyCard";

const WhyCapival = () => {
  return (
    <div className="w-full">
      <div className="py-[50px] lg:px-[110px] p-10 flex lg:flex-row flex-col gap-[23px w-[100%]">
        <div className="flex-[2] py-5">
          <div className="max-w-[601px] px-5">
            <h1 className="text-[36px] font-bold text-[#551C24] ">
              Why Capival
            </h1>
            <p className="text-[#333333] font-normal text-[16.5px] leading-[29px] my-[16px] text-justify">
              We’re here to save you the stress of having to worry about your
              finances. With Capival, life is easy peasy.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[29px]  ">
            <WhyCard
              image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680970702/capival/safe_dltneb.png"
              title="Safe and Secure"
              description="Your peace of mind is guaranteed when you transact with us. No need to fret."
            />
            <WhyCard
              image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680974363/capival/hand_ygvriw.svg"
              title="Easy and Accessible"
              description="Access our products and services anywhere, anytime."
            />
            <WhyCard
              image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680974363/capival/contact_geywyk.svg"
              title="Contact Support"
              description="Our quick contact service is ready to serve and cater to your needs."
            />
            <WhyCard
              image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680974363/capival/fast_rrppgr.svg"
              title="Fast Transaction"
              description="Stress-free transactions are our thing. Access our range of products and services without hassle."
            />
          </div>
        </div>
        <div className="flex-[1] relative flex justify-end items-end">
          <img
            src="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680972789/capival/capimg_tbvlf7.png"
            alt=""
            className="lg:absolute bottom-[-120px] object-cover w-full md:h-[500px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCapival;
