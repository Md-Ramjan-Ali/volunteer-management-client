import React, { Suspense } from 'react';
import useAuth from '../../../Components/Hooks/useAuth';
import useVolunteerApi from '../../../Api/useVolunteerApi';
import MyPostNeedCard from '../../MyProfile/MyPostNeedCard';
import Loading from '../../../Components/Loading/Loading';

const MyVolunteer = () => {
    const { user } = useAuth();
    const { volunteerCreatedByPromised } = useVolunteerApi();
  return (
    <div>
      <div className=" bg-base-100 dark:bg-gray-900 border-base-300 p-6 ">
        {/* My volunteer need post data */}
        <Suspense fallback={<Loading></Loading>}>
          <MyPostNeedCard
            volunteerCreatedByPromised={volunteerCreatedByPromised(user.email)}
          ></MyPostNeedCard>
        </Suspense>
      </div>
    </div>
  );
};

export default MyVolunteer;