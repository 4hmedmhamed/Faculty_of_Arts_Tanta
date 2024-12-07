import React from 'react'
import { program } from '../data/Data'
function Scrolling() {
  return (
    <div className="container-xxl  my-5">
      <div className="container">
        <div className=' row'>
          {program.map((item, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <a className="  rounded" >
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border  rounded d-flex align-items-center mt-2 justify-content-center">
                    <img src={item.img}
                      style={{   width:"100%" }}
                    />
                  </div>
              <p className="text-body mb-0 fs-3">{item.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Scrolling