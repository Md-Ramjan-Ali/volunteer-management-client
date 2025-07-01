import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";
import VolunteerNeeds from "../../Components/VolunteerNeeds/VolunteerNeeds";
import PopularVolunteers from "../../Components/PopularVolunteers/PopularVolunteers";
import VolunteersStories from "../../Components/VolunteersStories/VolunteersStories";
import VolunteerAbout from "../VolunteerAbout/VolunteerAbout";



const Home = () => {


  return (
    <div className=" space-y-10">
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
        <VolunteerAbout></VolunteerAbout>
      </section>
      {/* <section>
        <PopularVolunteers></PopularVolunteers>
      </section>
      <section>
        <VolunteersStories></VolunteersStories>
      </section> */}

      {/*  */}
      <section>
      {/* <AboutUs></AboutUs> */}
      </section>
    </div>
  );
};

export default Home;
