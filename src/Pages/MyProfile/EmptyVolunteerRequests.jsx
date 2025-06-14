import React from "react";
import { MdVolunteerActivism } from "react-icons/md";
import { Link } from "react-router";

const EmptyVolunteerRequests = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <MdVolunteerActivism className="text-7xl text-secondary mb-4" />
      <h2 className="text-2xl font-bold mb-2">
        No Volunteer Requests Found
      </h2>
      <p className=" mb-6 max-w-md">
        You haven't requested to volunteer for any posts yet.
        <br />
        Explore events and become a helping hand today!
      </p>
      <Link to="/allVolunteerPosts">
        <button className="btn bg-primary hover:bg-secondary  text-white px-5 py-2 transition-all duration-200">
          Browse Volunteer Posts
        </button>
      </Link>
    </div>
  );
};

export default EmptyVolunteerRequests;
