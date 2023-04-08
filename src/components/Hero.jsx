import React from "react";

export default function Hero() {
  return (
    <div className="md:px-[110px] px-10 md:flex md:py-10 block items-center gap-[20px]">
      {/* {projects?.map((project) => (
          <div key={project?._id}>{project?.name}</div>
        ))} */}
      <div className="flex-1">
        <h1 className="text-[#551C24] md:text-[45px] text-[36px] font-bold leading-normal max-w-[641px]">
          Bridging the gap to <br className="md:block hidden" /> financial
          independence.
        </h1>

        <p className="py-[24px] text-justify text-[#333333] font-normal leading-relaxed">
          We’re passionate about connecting individuals to a bigger, better
          future. Our products and services are designed to ease you into the
          life you’ve always wanted. Ready to join the Capival side of life?
        </p>
        <button className="flex items-center bgGradient px-[30px] py-[12px] text-[#FFFFFF] font-normal">
          Sign Up Here
        </button>

        <div className="flex items-center my-[60px] gap-[24px]">
          <img
            src="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680912599/capival/goggleBtn_wfdwzy.png"
            alt="googleplay btn"
            className="object-cover cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680912599/capival/iosBtn_goy6ro.png"
            alt="iosBtn"
            className="object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680914766/capival/cap_nvpopa.png"
          alt="heroImg"
          className="md:h-[588px] object-cover"
        />
      </div>
    </div>
  );
}
