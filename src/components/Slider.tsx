"use client";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      className="mt-5"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          src="https://janebi.com/janebi/9fd2/files/normal/438066.jpg"
          alt="slide 1"
          className="rounded-2xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://janebi.com/janebi/9fd2/files/normal/438068.jpg"
          alt="slide 2"
          className="rounded-2xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://janebi.com/janebi/9fd2/files/normal/438065.jpg"
          alt="slide 3"
          className="rounded-2xl"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
