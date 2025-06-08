import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Helmet>
        <title>Home | SebaConnect</title>
      </Helmet>

      <Slider></Slider>
    </div>
  );
};

export default Home;
