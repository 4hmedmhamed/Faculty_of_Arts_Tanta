

import React, { Component, useState } from 'react';
import { render } from 'react-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import './ImageSlider.css';
// import './style.css';
import 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/css/lg-video.css';



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




const Book = (AppProps, AppState) => {




  return (

    <div>
    <h1>Slider</h1>
      <br></br>
      <br></br>
      <div className="slider-container">
          <div className=''>
          <div className='eddit'>
            <LightGallery plugins={[lgZoom, lgVideo, lgShare, lgfullscreen, lgpager, lgthumbnail, lgcomments,]} mode="lg-fade">

              <div     data-lg-size="1600-1600"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                data-src="../assets/img/room-2.jpg"  className='c-eddet'>
                <div>
                <img src="../assets/img/room-2.jpg" style={{width:'300px' , height:"150px"}}  />
                </div>
              </div>
           
              <div     data-lg-size="1600-1600"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                data-src="../assets/img/room-2.jpg"  className='c-eddet'>
                <div>
                <img src="../assets/img/room-2.jpg" style={{width:'300px' , height:"150px"}}  />
                </div>
              </div>
           
              <div     data-lg-size="1600-1600"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                // data-tweet-text="Shinimamiya, Osaka, Japan"
                data-src="img/2.jpeg"  className='c-eddet'>
                <div>
                <img src="img/2.jpeg" style={{width:'300px' , height:"150px"}}  />
                </div>
              </div>
           
          

            </LightGallery>

          </div>
        {/* </Slider> */}
          </div>
      </div>
    </div>
  );
}


export default Book;



