import React from "react";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "../swiper.css";

import { Autoplay, Pagination } from "swiper";
function TestimonialSlider() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px] mx-auto">
                  <img
                    className="rounded-2xl "
                    src={authorImg}
                    alt={authorImg}
                  />
                </div>
                <div className="flex flex-col max-w-3xl justify-center">
                  <h5 className="font-body text-2xl text-center mb-8 italic font-normal">
                    {authorText}
                  </h5>
                  <div className="text-end lg:text-center">
                    <p className="text-lg text-accent">{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default TestimonialSlider;
