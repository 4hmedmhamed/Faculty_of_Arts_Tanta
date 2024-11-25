import React from "react";

import 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/css/lg-video.css';

import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'lightgallery/css/lg-pager.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-comments.css';
import 'lightgallery/css/lg-fullscreen.css';

import "react-image-gallery/styles/css/image-gallery.css";


import LightGallery from 'lightgallery/react';

import lgVideo from 'lightgallery/plugins/video';
import lgShare from 'lightgallery/plugins/share';
import lgZoom from 'lightgallery/plugins/zoom';
import lgpager from 'lightgallery/plugins/pager';
import lgfullscreen from 'lightgallery/plugins/fullscreen';
import lgthumbnail from 'lightgallery/plugins/thumbnail';
import lgcomments from 'lightgallery/plugins/comment';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";

export default function Rooms() {
  

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    {/* <img className="img-fluid" src={item.img} alt="img" /> */}
            <LightGallery plugins={[lgZoom, lgVideo, lgShare, lgfullscreen, lgpager, lgthumbnail, lgcomments,]} className="img-fluid">
              <div  
                //  data-lg-size="1600-1600"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                data-src={item.img}  className=''>
                <div>
                <img src={item.img} alt="img" className="img-fluid"/>
                </div>
              </div>
            </LightGallery>

                    {/*  */}
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <div className="d-flex mb-3">
                      {facility.map((item, index) => (
                        <small className="border-end me-3 pe-3">
                          {item.icon}
                          {item.quantity} {item.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                 
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
