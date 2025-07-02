import React from 'react';
import useAuth from '../../../Components/Hooks/useAuth';
import img from '../../../assets/profileImage.jpg'

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <div>
      {/* profile */}
      <div className="card bg-base-100 dark:bg-gray-700 dark:text-white shadow-sm">
        <div className="">
          <figure>
            <img
              className="w-full h-[400px] rounded-xl-t-xl object-cover"
              src={img}
              alt=""
            />
          </figure>
        </div>
        <div className="flex justify-center -mt-16 ">
          <img
            className="w-32 h-32 rounded-full border-4 border-green-500"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div className="px-5">
          <h2 className="text-center text-2xl font-bold mt-10">My Profile</h2>
          <div className="flex justify-between mt-10 mb-5">
            <div className="text-xl text-gray-700 dark:text-white">
              <h2>Your Name</h2>
              <h2 className="font-bold">{user.displayName}</h2>
            </div>
            <div className="text-xl text-gray-700 dark:text-white">
              <h2>Your Email</h2>
              <h2 className="font-bold">{user.email}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;