import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://volunteer-management-server-side-five.vercel.app",
});
const useAxiosSecure = () => {
  const { user, logOUt } = useAuth();

  //interceptors request
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  //interceptor response
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOUt()
          .then(() => {
            console.log("LogOut user for 401 status code");
          })
          .catch((error) => {
            console.log(error);
          });
      }

      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
