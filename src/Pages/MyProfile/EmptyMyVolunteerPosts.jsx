import React from "react";

import { TbMoodEmpty } from "react-icons/tb";
import { Link } from "react-router";

const EmptyMyVolunteerPosts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <TbMoodEmpty className="text-7xl text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        No Volunteer Posts Found
      </h2>
      <p className="text-gray-500 mb-6">
        You haven't added any volunteer need posts yet.
        <br />
        Start making an impact by adding your first post!
      </p>
      <Link to="/addVolunteer">
        <button className="btn bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-all duration-200">
          Create a Volunteer Post
        </button>
      </Link>
    </div>
  );
};

export default EmptyMyVolunteerPosts;
