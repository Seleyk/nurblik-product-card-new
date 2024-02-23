import React from "react";
import Carousel from "./Carousel";
import Slideshow from "./Slideshow";
import SliderNew from "./SliderNew";
import { useMediaQuery } from "@mui/material";
import Grid from "./Grid";
import Footer from "./Footer";

const Home = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");


  return (
    <div>
      <Slideshow />
      <Carousel />
      <Grid />
      <Carousel />
      {isNonMobileScreen && <SliderNew />}
      <Footer />

    </div>
  );
};

export default Home;
