import React from "react";
import { testimonial } from "../data/Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className="container-xxl   bg-dark" 
        dir="rtl"
        data-wow-delay="0.1s"
        // style={{height:"100vh"}}
      >
        <div className="container text-center  ">
          <div className="p-4">
            <h2 className="text-primary mt-1">الخطوات التى يجب إتباعها للقيام بالعمل المساحى</h2>
            <Slider {...settings}>
              {testimonial.map((item, key) => (
                <div
                  key={key}
                  className="bd-white "
                >
                  <div className="d-flex align-items-center border m-2 ">
                    <img
                      className="img-fluid flex-shrink-0 rounded  mx-auto "
                      src={item.img}
                      style={{ width: "70%", height: "auto" }}
                    />
                    <div className="ps-3">
                    </div>
                  </div>
                  <br></br>
                 <p className="mt-2  text-primary fs-4 " style={{height:"20px"}}>{item.name}</p>
                </div>
              ))}
            </Slider>
          </div>
          
        </div>
      </div>
    </>
  );
}
