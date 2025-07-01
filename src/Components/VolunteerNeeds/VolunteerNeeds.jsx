import axios from "axios";
import React, { useEffect, useState } from "react";
import VolunteerNeedsCard from "./VolunteerNeedsCard";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { Typewriter } from "react-simple-typewriter";

const VolunteerNeeds = () => {
  const [loading, setLoading] = useState(true);
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://volunteer-management-server-side-five.vercel.app/volunteers/volunteerNeedNow"
      )
      .then((res) => {
        setVolunteerNeeds(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <div className="">
        <h2 className="text-3xl text-secondary dark:text-white text-center font-semibold mb-5">
          <Typewriter
            words={["Volunteer Needs Now"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>
        <p className="px-2 max-w-6xl mx-auto text-center w-full mb-5 text-gray-500 dark:text-white">
          Building Bridges, Changing Lives.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {volunteerNeeds.map((volunteer) => (
          <VolunteerNeedsCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerNeedsCard>
        ))}
      </div>
      <div
        className="text-center mt-8"
        data-aos="zoom-in"
        data-aos-easing="linear"
      >
        <Link to="/allVolunteerPosts">
          <button className="bg-primary hover:bg-secondary text-white btn px-10 font-medium">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeeds;
