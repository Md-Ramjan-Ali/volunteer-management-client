import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";
import VolunteerNeeds from "../../Components/VolunteerNeeds/VolunteerNeeds";
import PopularVolunteers from "../../Components/PopularVolunteers/PopularVolunteers";
import VolunteersStories from "../../Components/VolunteersStories/VolunteersStories";


const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5 space-y-10">
      <Helmet>
        <title>Home | SebaConnect</title>
      </Helmet>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <VolunteerNeeds></VolunteerNeeds>
      </section>
      <section>
        <PopularVolunteers></PopularVolunteers>
      </section>
      <section>
        <VolunteersStories></VolunteersStories>
      </section>
    </div>
  );
};

export default Home;
