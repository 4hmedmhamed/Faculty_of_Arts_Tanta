import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div class="container-xxl py-5">
        <div class="container">
          <CommonHeading
            heading=""
            subtitle="Contact "
            title="For Any Query"
          />
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
          
              </div>
            </div>
            {/* <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9690.918869553318!2d31.00484748966086!3d30.823457865518975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9edec98268b%3A0xef51ceb0d3f2888c!2z2YPZhNmK2Kkg2KfZhNii2K_Yp9io2Iwg2KzYp9mF2LnYqSDYt9mG2LfYpw!5e0!3m2!1sar!2seg!4v1732808239536!5m2!1sar!2seg"
             width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div class="col wow fadeIn" data-wow-delay="0.1s">
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9690.918869553318!2d31.00484748966086!3d30.823457865518975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9edec98268b%3A0xef51ceb0d3f2888c!2z2YPZhNmK2Kkg2KfZhNii2K_Yp9io2Iwg2KzYp9mF2LnYqSDYt9mG2LfYpw!5e0!3m2!1sar!2seg!4v1732808239536!5m2!1sar!2seg"

                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
}
