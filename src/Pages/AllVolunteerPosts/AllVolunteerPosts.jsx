import axios from "axios";
import React, { useEffect, useState } from "react";
import AllVolunteerCard from "./AllVolunteerCard";

const AllVolunteerPosts = () => {
  const [allVolunteerPosts, setAllVolunteerPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axios
      .get(`http://localhost:5000/volunteers?search=${searchTerm}`)
      .then((res) => setAllVolunteerPosts(res.data)).catch(error=>console.log(error));
  }, [searchTerm]);

  console.log(allVolunteerPosts);
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="flex gap-10 bg-base-100  p-2 rounded-md">
        <div className="md:flex-1">
          <input
            type="text"
            placeholder="Search by title..."
            className="input border-1 focus:outline-0 w-full rounded-2xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-5 w-64">
          <button className="btn">btn1</button>
          <button className="btn">btn2</button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mt-15 mb-5">
        All Volunteer Post
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allVolunteerPosts.map((volunteer) => (
          <AllVolunteerCard
            key={volunteer._id}
            volunteer={volunteer}
          ></AllVolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerPosts;
