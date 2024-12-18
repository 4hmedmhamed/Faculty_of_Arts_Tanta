import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Services from "./Service";
import Floors from "./Floors";
import Sliders from "./Slider";
import Teams from "./Team";
import Line from "./Line";
import Scrolling from "./Scrolling";
export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Floors />
      <Line />
      <Scrolling />
      <Sliders />
      <Book />
      <Services />
    </>
  );
}
