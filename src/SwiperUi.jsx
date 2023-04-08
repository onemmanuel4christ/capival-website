// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import OfferCard from "./components/OfferCard";
const SwiperUi = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        450: {
          slidesPerView: 1.3,
        },
        630: {
          slidesPerView: 1.5,
        },
        920: {
          slidesPerView: 2.5,
        },
        1232: {
          slidesPerView: 3.5,
        },
        1520: {
          slidesPerView: 3.5,
        },
      }}
    >
      <SwiperSlide>
        <OfferCard
          image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680953659/capival/capiflex_sa5evp.png"
          title="Capiflex"
          description="Need quick funds? CapiFlex allows you access up to N4million in credit to fund your personal needs – from school fees, medical expenses, funding a new project e.t.c."
          bg="rgba(36, 99, 98, 0.1) "
        />
      </SwiperSlide>
      <SwiperSlide>
        <OfferCard
          image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680968355/capival/pledge_mt0mb3.png"
          title="Pledge"
          description="Need quick funds? CapiFlex allows you access up to N4million in credit to fund your personal needs – from school fees, medical expenses, funding a new project e.t.c."
          bg="rgba(176, 103, 53, 0.1)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <OfferCard
          image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680968564/capival/bumber_iflkgl.png"
          title="Bumpr by Capival"
          description="Need quick funds? CapiFlex allows you access up to N4million in credit to fund your personal needs – from school fees, medical expenses, funding a new project e.t.c."
          bg="rgba(56, 95, 177, 0.2)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <OfferCard
          image="https://res.cloudinary.com/dzcpsb02f/image/upload/v1680968975/capival/star_qnzvqg.png"
          title="Capival"
          description="Need quick funds? CapiFlex allows you access up to N4million in credit to fund your personal needs – from school fees, medical expenses, funding a new project e.t.c."
          bg="#E6E3D5"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperUi;
