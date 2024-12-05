import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/About";
import Team from "../components/home/Team";
import Line from "../components/home/Line";
export default function AboutUs() {
  return (
    <>
      <Heading heading="About" title="Home" subtitle="About" />
      <About />
      <Line />
      <Team />
    </>
  );
}
