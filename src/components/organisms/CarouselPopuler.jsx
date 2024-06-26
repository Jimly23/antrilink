import React from "react";
import Slider from "react-slick";
import CardMerchant from "./CardMerchant";
import { layanan } from "../../api/api";

const CarouselPopuler = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "", borderRadius: '50%', position: 'absolute', right:"-5px", width: "25px"}}
            onClick={onClick}
            />
        );
    }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 7000,
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
      {layanan.map((item, index) => (
        <div key={index} className="px-5 flex justify-center items-center">
          <CardMerchant style={'mb-0'} logo={item.logo} tempatImg={item.tempatImg} nama={item.nama} alamat={item.alamat} desc={item.deskripsi} maps={item.maps}/>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselPopuler;
