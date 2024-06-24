import React from "react";
import Slider from "react-slick";
import { iklan1, iklan2, iklan3 } from "../../assets";

const CarouselBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="px-2">
        <div className="box w-full h-[180px] bg-aksen rounded-2xl overflow-hidden">
          <img src={iklan3} className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="px-2">
        <div className="box w-full h-[180px] bg-aksen rounded-2xl overflow-hidden">
          <img src={iklan2} className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="px-2">
        <div className="box w-full h-[180px] bg-aksen rounded-2xl overflow-hidden">
          <img src={iklan1} className="w-full h-full object-cover"/>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselBanner;
