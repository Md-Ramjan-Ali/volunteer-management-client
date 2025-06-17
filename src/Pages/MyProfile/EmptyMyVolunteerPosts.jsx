import React from "react";
import { TbMoodEmpty } from "react-icons/tb";
import { Link } from "react-router";

const EmptyMyVolunteerPosts = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[70vh] text-center px-4"
      data-aos="zoom-in"
      data-aos-easing="linear"
    >
      <TbMoodEmpty className="text-7xl text-secondary mb-4" />
      <h2 className="text-2xl font-bold mb-2">No Volunteer Posts Found</h2>
      <p className=" mb-6">
        You haven't added any volunteer need posts yet.
        <br />
        Start making an impact by adding your first post!
      </p>
      <Link to="/addVolunteer">
        <button className="btn bg-primary hover:bg-secondary  text-white px-5 py-2 transition-all duration-200">
          Create a Volunteer Post
        </button>
      </Link>
    </div>
  );
};

export default EmptyMyVolunteerPosts;
