import React from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Slider/Slider";
import VolunteerNeeds from "../../Components/VolunteerNeeds/VolunteerNeeds";
import VolunteerAbout from "../VolunteerAbout/VolunteerAbout";
import VolunteersMission from "../VolunteersMission/VolunteersMission";
import BecomeVolunteer from "../../Components/BecomeVolunteer/BecomeVolunteer";
import Accordion from "../Practice/Practice";
import VolunteersStories from "../../Components/VolunteersStories/VolunteersStories";
import VolunteerGroup from "../../Components/VolunteerGroup/VolunteerGroup";



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
      <section>
        <VolunteerGroup></VolunteerGroup>
      </section>
      <section>
        <VolunteersStories></VolunteersStories>
      </section>

      {/*  */}
      <section>
        {/* <Accordion></Accordion> */}
      </section>
    </div>
  );
};

export default Home;
