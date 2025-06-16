import React from 'react';
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';

const useRequestApi = () => {
  const axiosSecure=useAxiosSecure()

  const volunteerRequestByPromised=email=>{
   return axiosSecure.get(`/requests?email=${email}`).then(res=>res.data);
  }
  return {
    volunteerRequestByPromised,
  };
};

export default useRequestApi;