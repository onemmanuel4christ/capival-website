import SwiperUi from "../SwiperUi";

export default function Offers() {
  return (
    <>
      <div className="pt-[112px]">
        <div className="md:pl-[110px] p-10">
          <div className="max-w-[601px]">
            <h1 className="text-[36px] font-bold text-[#551C24] ">
              What we offer
            </h1>
            <p className="text-[#333333] font-normal text-[16.5px] leading-[29px] my-[16px] text-justify">
              We’re passionate about connecting individuals to a bigger, better
              future. Our products and services are designed to ease you in
            </p>
          </div>
          <div>
            <SwiperUi />
          </div>
        </div>
      </div>
    </>
  );
}
