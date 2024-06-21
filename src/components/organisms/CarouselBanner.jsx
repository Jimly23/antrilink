import React from "react";
import Slider from "react-slick";

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
        <div className="box w-full h-[180px] bg-slate-700 rounded-2xl"></div>
      </div>
      <div className="px-2">
        <div className="box w-full h-[180px] bg-slate-700 rounded-2xl"></div>
      </div>
      <div className="px-2">
        <div className="box w-full h-[180px] bg-slate-700 rounded-2xl"></div>
      </div>
    </Slider>
  );
};

export default CarouselBanner;
