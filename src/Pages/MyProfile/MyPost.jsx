import React, { Suspense } from "react";
import MyPostNeedCard from "./MyPostNeedCard";
import useAuth from "../../Components/Hooks/useAuth";
import MyRequestList from "./MyRequestLIst";
import Loading from "../../Components/Loading/Loading";
import useVolunteerApi from "../../Api/useVolunteerApi";
import useRequestApi from "../../Api/useRequestApi";
import { Helmet } from "react-helmet-async";

const MyPost = () => {
  const { user } = useAuth();
  const { volunteerCreatedByPromised } = useVolunteerApi();
  const { volunteerRequestByPromised } = useRequestApi();

  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <Helmet>
              <title>My Post | SebaConnect</title>
            </Helmet>
      <div className="">
        <div className="tabs tabs-lift justify-center w-full dark:bg-gray-900 dark:text-white">
          {/* Tab 1 - My Volunteer Need Posts */}
          <input
            type="radio"
            name="my_tabs"
            className="tab  text-black dark:bg-white"
            aria-label="My Volunteer Posts"
            defaultChecked
          />
          <div className="tab-content bg-base-100 dark:bg-gray-900 border-base-300 p-6 ">
            {/* My volunteer need post data */}
            <Suspense fallback={<Loading></Loading>}>
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
            className="tab text-black dark:bg-white"
            aria-label="My Volunteer Request posts"
          />
          <div className="tab-content bg-base-100 border-base-300 dark:bg-gray-900 p-6">
            {/* My volunteer requested data */}
            <Suspense fallback={<Loading></Loading>}>
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
