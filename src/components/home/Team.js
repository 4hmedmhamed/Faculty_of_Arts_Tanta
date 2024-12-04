import React from "react";
import { socialIcons, team } from "../data/Data";
import { Link } from "react-router-dom";
import CommonHeading from "../common/CommonHeading";
import { useState } from "react";

export default function Teams() {

  
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Team"
            subtitle="Explore Our"
            title="Team"
          />
          <div className="row g-4  d-flex justify-content-center">
            {team.map((item, index) => (
           
          
              <div
              className={`col-lg-3 col-md-6 col  wow fadeInUp dev_teams  ${activeDropdown === item.id ? "show" : ""}`}
              data-wow-delay="0.1s"
                key={index}
                onClick={() => handleMouseEnter(item.id)}
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img 
                    className={`  img-fluid img_teams m-2 ${activeDropdown === item.id ? "show" :""}`}
                    src={item.image} alt="img" />
                   
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    
                    {
                      activeDropdown === item.id ? 
                      socialIcons.slice(0, 3).map((val, index) => (
                        <a
                        className="btn btn-square btn-primary mt-3
                        mx-1"
                        href=""
                        key={index}
                        >
                    
                          
                          {val.icon}
                        </a>
                      ))
                      :""
                    }
                  
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">{item.name}</h5>
                    <small>{item.designation}</small>
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
