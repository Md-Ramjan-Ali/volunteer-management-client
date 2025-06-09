import React from "react";
// import React, { useState } from "react";

const MyPost = () => {
  // const [volunteerPosts, setVolunteerPosts] = useState([]);
  // const [volunteerRequests, setVolunteerRequests] = useState([]);

  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="">
        <div className="tabs tabs-lift justify-center w-full ">
          {/* Tab 1 - My Volunteer Need Posts */}
          <input
            type="radio"
            name="my_tabs"
            className="tab"
            aria-label="My Volunteer Posts"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 ">
            <h2 className="text-xl font-semibold mb-4 text-center">
              My Volunteer Need Posts
            </h2>
            {/* My volunteer need post data */}
          </div>

          {/* Tab 2 - My Volunteer Requests */}
          <input
            type="radio"
            name="my_tabs"
            className="tab"
            aria-label="My Volunteer Requests"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              My Volunteer Request Posts
            </h2>
            {/* My volunteer requested data */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
