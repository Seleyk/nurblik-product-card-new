import React from "react";
import Carousel from "./Carousel";
import Slideshow from "./Slideshow";
import SliderNew from "./SliderNew";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");


  return (
    <div>
      <Slideshow />
      <Carousel />
      {isNonMobileScreen && <SliderNew />}
    </div>
  );
};

export default Home;
