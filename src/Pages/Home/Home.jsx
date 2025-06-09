import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";
import VolunteerNeeds from "../../Components/VolunteerNeeds/VolunteerNeeds";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Helmet>
        <title>Home | SebaConnect</title>
      </Helmet>

      <Slider></Slider>
      <VolunteerNeeds></VolunteerNeeds>
    </div>
  );
};

export default Home;
