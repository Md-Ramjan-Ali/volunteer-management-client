import axios from 'axios';
import React from 'react'

const axiosPublic= axios.create({
  baseURL: "https://volunteer-management-server-side-five.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
