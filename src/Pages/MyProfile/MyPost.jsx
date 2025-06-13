import React, { Suspense } from "react";
import MyPostNeedCard from "./MyPostNeedCard";
import { volunteerCreatedByPromised } from "../../Api/volunteerApi";
import useAuth from "../../Components/Hooks/useAuth";
import MyRequestList from "./MyRequestLIst";
import { volunteerRequestByPromised } from "../../Api/volunteerRequests";
// import React, { useState } from "react";

const MyPost = () => {
  const { user } = useAuth();

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
            {/* My volunteer need post data */}
            <Suspense fallback={<h1>Data Loading...</h1>}>
              <MyPostNeedCard
                volunteerCreatedByPromised={volunteerCreatedByPromised(
                  user.email
                )}
              ></MyPostNeedCard>
            </Suspense>
          </div>

          {/* two tabs layout content */}

          {/* Tab 2 - My Volunteer Requests */}
          <input
            type="radio"
            name="my_tabs"
            className="tab"
            aria-label="My Volunteer Request posts"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {/* My volunteer requested data */}
            <Suspense fallback={'Request Data Loading...'}>
              <MyRequestList
                volunteerRequestByPromised={volunteerRequestByPromised(
                  user.email
                )}
              ></MyRequestList>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
