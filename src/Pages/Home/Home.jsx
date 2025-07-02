import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";
import VolunteerNeeds from "../../Components/VolunteerNeeds/VolunteerNeeds";
import PopularVolunteers from "../../Components/PopularVolunteers/PopularVolunteers";
import VolunteersStories from "../../Components/VolunteersStories/VolunteersStories";
import VolunteerAbout from "../VolunteerAbout/VolunteerAbout";
import VolunteersMission from "../VolunteersMission/VolunteersMission";
import BecomeVolunteer from "../../Components/BecomeVolunteer/BecomeVolunteer";



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
        <BecomeVolunteer></BecomeVolunteer>
      </section>
      <section>
        <VolunteerAbout></VolunteerAbout>
      </section>
      <section>
        <VolunteersMission></VolunteersMission>
      </section>

      {/* <section>
        <PopularVolunteers></PopularVolunteers>
      </section>
      <section>
        <VolunteersStories></VolunteersStories>
      </section> */}

      {/*  */}
      <section></section>
    </div>
  );
};

export default Home;
