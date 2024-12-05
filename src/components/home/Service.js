import React from "react";
import CommonHeading from "../common/CommonHeading";
import Sliders from "./Slider";
import { services , testimonial } from "../data/Data";

export default function Services() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="Our Services"
              title="خدماتنا"
              subtitle="اكتشف "
            />
          </div>
          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <a className="service-item rounded" >
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-body mb-0 fs-3">{item.discription}</p>
                </a>
              </div>
            ))}
            <br></br>
            <br></br>
            <br></br>
            {testimonial.map((item, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp border-rounded" data-wow-delay="0.1s">
                <a className="service-item rounded" >
                  <div className=" bg-transparent border rounded p-1">
                    <div className="w-100">
                    <img
                      className="img-fluid flex-shrink-0 rounded  mx-auto w-100 p-2 "
                      src={item.img}
                      // style={{ width: "200px", height: "auto" }}
                    />
                    </div>
                  </div>
                  <p className="text-body mb-0 fs-5">{item.name}</p>
                </a>
              </div>
            ))}
            <br></br>
            <br></br>
            <br></br>
            {testimonial.map((item, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp border-rounded" data-wow-delay="0.1s">
                <a className="service-item rounded" >
                  <div className=" bg-transparent border rounded p-1">
                    <div className="w-100">
                    <img
                      className="img-fluid flex-shrink-0 rounded  mx-auto w-100 p-2 "
                      src={item.img}
                      // style={{ width: "200px", height: "auto" }}
                    />
                    </div>
                  </div>
                  {/* <p className="text-body mb-0 fs-5">{item.name}</p> */}
                </a>
              </div>
            ))}
            
          </div>

< Sliders />
        </div>
      </div>
    </>
  );
}
