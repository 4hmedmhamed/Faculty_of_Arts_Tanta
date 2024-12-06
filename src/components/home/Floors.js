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
import {  floorItems } from "../data/Data";

export default function Floors() {
  
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Floors"
            title="Floors"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {floorItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded ">
                  <div className="position-relative">
                    {/* <img className="img-fluid" src={item.img} alt="img" /> */}
            <LightGallery plugins={[ lgVideo, lgShare, lgfullscreen, lgpager, lgthumbnail, lgcomments,]}>
              <div  
                 data-lg-size="1600-1600"
                data-sub-html="<h4>Photo by -Ahmed <h4>"
                data-src={item.img}  className=''>
                <div>
                <img src={item.img} alt="img" className="img-fluid" style={{height:"200px" ,width:"400px"}}/>
                </div>
              </div>
            </LightGallery>

                    {/*  */}
                    <small className="position-absolute end-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4 fs-5">
                      {item.name}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="ps-2">{item.star}</div>
                      <h5 className="mb-0">{item.name}</h5>
                    </div>
                    <div className="d-flex mb-3">
                   
                    </div>
                    {/* <p className="text-body mb-3">{item.description}</p> */}
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
