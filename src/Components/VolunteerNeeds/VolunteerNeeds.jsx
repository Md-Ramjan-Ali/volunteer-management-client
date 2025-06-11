import axios from "axios";
import React, { useEffect, useState } from "react";
import VolunteerNeedsCard from "./VolunteerNeedsCard";

const VolunteerNeeds = () => {
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteers/volunteerNeedNow")
      .then((res) => setVolunteerNeeds(res.data))
      .catch((error) => console.log(error));

    // fetch("http://localhost:5000/volunteers/volunteerNeedNow").then(res=>res.json()).then(result=>{
    //   setVolunteerNeeds(result)
    //   }).catch(error=>{
    //     console.log(error);
    //   });
  }, []);

  console.log(volunteerNeeds);

  return (
    <div className="mt-10">
      <h2 className="text-3xl text-center font-semibold mt-25 mb-5">
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
    </div>
  );
};

export default VolunteerNeeds;
