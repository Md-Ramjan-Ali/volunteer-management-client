import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import DashNavbar from "../DashNavbar/DashNavbar";
import Logo from "../../../assets/volunteer-logo.png";
import "../dashboard.css";

const DashLayOut = () => {
  return (
    <div className="bg-base-200/40 dark:bg-gray-900">
      <div className="hidden lg:flex sticky top-0 z-50">
        <DashNavbar></DashNavbar>
      </div>
      <div className="w-full mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          {/* page content */}
          <div className="drawer-content flex flex-col">
            {/* Mobile Navbar */}
            <div className="navbar flex lg:hidden bg-gradient-to-r from-[#1be6dc]/80 to-[#029891]/80 dark:from-[#111827]/70 dark:to-[#111827]/70 backdrop-blur-sm  shadow-sm px-10 sticky top-0 z-50 dark:text-white">
              <div className="flex-none">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <Link to="/" className="flex items-center cursor-pointer">
                <img className="w-16" src={Logo} alt="" />
                <h2 className=" text-2xl font-bold hidden md:flex">
                  <span className="text-primary">Seba</span>
                  <span className="text-[#02746e] dark:text-white">
                    Connect
                  </span>
                </h2>
              </Link>
            </div>
            <div className="px-5 2xl:px-10 my-10 overflow-auto">
              <Outlet />
            </div>
          </div>

          {/* Drawer Sidebar */}
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="bg-white dark:bg-gray-800 text-base-content w-[70vw] sm:w-72 md:w-80 xl:w-96 p-6 flex flex-col justify-between min-h-screen pt-20 lg:pt-0">
              <div className="space-y-6">
                <Link to="/dash/dashboard">
                  <div className="flex items-center px-6 border-b-2 border-gray-300 pb-4 mt-4">
                    <p className="-mb-2 font-bold text-2xl lg:text-3xl text-black dark:text-white specific-text">
                      Dashboard
                    </p>
                  </div>
                </Link>

                {/* side and navbar Links */}
                <ul className="space-y-4 mt-5">
                  <li>
                    <NavLink
                      to="/dash/dashboard"
                      className="text-gray-700 dark:text-gray-300   text-[1rem] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dash/addVolunteer"
                      className="text-gray-700 dark:text-gray-300   text-[1rem] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      Add Volunteer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dash/myVolunteerList"
                      className="text-gray-700 dark:text-gray-300   text-[1rem] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      My volunteer list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dash/myRequest"
                      className="text-gray-700 dark:text-gray-300   text-[1rem] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      My Request list
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayOut;
