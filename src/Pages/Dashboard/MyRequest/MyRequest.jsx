import React, { Suspense } from 'react';
import useRequestApi from '../../../Api/useRequestApi';
import useAuth from '../../../Components/Hooks/useAuth';
import MyRequestList from '../../MyProfile/MyRequestLIst';
import Loading from '../../../Components/Loading/Loading';

const MyRequest = () => {
   const { user } = useAuth();
    const { volunteerRequestByPromised } = useRequestApi();
  return (
    <div>
         <div className=" bg-base-100 border-base-300 dark:bg-gray-900 p-6">
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
  );
};

export default MyRequest;