import React from "react";
import useAxiosSecure from "../Components/Hooks/useAxiosSecure";

const useVolunteerApi = () => {
  const axiosSecure = useAxiosSecure();

  const volunteerCreatedByPromised = (email) => {
    return axiosSecure
      .get(`/volunteers/myPost?email=${email}`)
      .then((res) => res.data);
  };
  return {
    volunteerCreatedByPromised,
  };
};

export default useVolunteerApi;
