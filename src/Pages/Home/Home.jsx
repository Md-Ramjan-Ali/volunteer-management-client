import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";
import VolunteerNeeds from "../../Components/VolunteerNeeds/VolunteerNeeds";
import PopularVolunteers from "../../Components/PopularVolunteers/PopularVolunteers";
import VolunteersStories from "../../Components/VolunteersStories/VolunteersStories";
import VolunteerAbout from "../VolunteerAbout/VolunteerAbout";
import OurMission from "../Practice/Practice";



const Home = () => {


  return (
    <div className="">
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
     <OurMission></OurMission>
      </section>
    </div>
  );
};

export default Home;
