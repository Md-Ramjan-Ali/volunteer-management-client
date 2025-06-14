import axios from "axios";
import React, { useEffect, useState } from "react";
import VolunteerNeedsCard from "./VolunteerNeedsCard";
import { Link } from "react-router";

const VolunteerNeeds = () => {
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteers/volunteerNeedNow")
      .then((res) => setVolunteerNeeds(res.data))
      .catch((error) => console.log(error));
  }, []);

  

  return (
    <div className="mt-10">
      <h2 className="text-3xl text-secondary dark:text-white text-center font-semibold mt-25 mb-5">
        Volunteer Needs Now
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {volunteerNeeds.map((volunteer) => (
          <VolunteerNeedsCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerNeedsCard>
        ))}
      </div>
      <div className="text-center mt-8">
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
