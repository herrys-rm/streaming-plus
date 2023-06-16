import React from "react";
import Navbar from "./Navigation/Navbar";
import Carousel from "./Slider/Carousel";
import Main from "./Main/Main";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Main />
    </div>
  );
};

export default Home;
