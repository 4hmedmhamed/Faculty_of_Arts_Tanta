import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import Teams from "./Team";
export default function About() {
  return (
    <>
      <div className="container-xxl py-" dir="rtl" >
        
        <div className="container">
          <div className="row g-5 align-items-center">
          
            <div className="col-lg-6 ">
              <h6 className="section-title text-end text-primary  fs-5">
              كلية الآداب
              </h6>
              <h1 className="mb-2">
              كلية الآداب جامعة طنطا {" "}
                <span className="text-primary text-uppercase">فى مجمع سبرباى</span>
              </h1>
              <p className="mb-4 fs-4 ">
              
              المجمع والتى تم إفتتاحها عام 1908  م ثم أخذت الكلية تنمو وتتسع سنة بعد أخرى بشكل ملحوظ ظهر التوسع فى إنشاء أقسام جديدة ولزيادة اعداد المقبولين بها من الطلاب وقد صاحب هذا النمو تطور ملموس فى المجالات العلمية حيث إزدادت وتنوعت مجالات التخصص وقدتم إفتتاح المبنى الجديد للكلية وأصبحت جاهزة للدراسة فى العام الدراسى 2023/2024 وقد 
              إهتمت برعاية ذوى الإعاقة  
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
        
                  <div className="col-sm-4 wow fadeIn  " data-wow-delay="0.1s ">
                    <div className="border rounded p-1 img_about">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6  ">
              <div className="row g-3 img_about">
               
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="\assets\img\IMG-20241012-WA0205.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="\assets\img\IMG-20241012-WA0221.jpg"
                    style={{ marginTop: "40%" }}
                  />
                </div>
                <div className="col-6 text-start ">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/Logo.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/IMG-20241012-WA0177.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Teams /> */}
      </div>
    </>
  );
}
