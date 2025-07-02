import React from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import useAuth from "../../../Components/Hooks/useAuth";
import DarkToggler from "../../../Components/DarkToggler/DarkToggler";
import Logo from "../../../assets/volunteer-logo.png";

const DashNavbar = () => {
  const { user, logOUt } = useAuth();

  const handleLogOut = () => {
    logOUt();

    Swal.fire({
      icon: "success",
      title: "LogOut Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <nav className="navbar bg-gradient-to-r from-[#1be6dc]/80 to-[#029891]/80 dark:from-[#111827]/70 dark:to-[#111827]/70 backdrop-blur-sm  shadow-sm px-10 sticky top-0 z-50 dark:text-white">
      <div className="navbar-start">
        <Link to="/" className="flex items-center cursor-pointer">
          <img className="w-16" src={Logo} alt="" />
          <h2 className=" text-2xl font-bold hidden md:flex">
            <span className="text-primary">Seba</span>
            <span className="text-[#02746e] dark:text-white">Connect</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8"></ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="card items-center">
          <DarkToggler></DarkToggler>
        </div>
        <div
          className="cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={user?.displayName}
        >
          {user ? (
            <img
              className="rounded-full w-12 h-12 border card shadow-sm"
              src={`${user ? user?.photoURL : ""}`}
              alt=""
            />
          ) : (
            ""
          )}
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-green-500 hover:bg-green-700 text-white"
          >
            LogOut
          </button>
        ) : (
          <>
            <Link to="/auth/login">
              <button className="btn bg-green-500 hover:bg-green-700 text-white">
                Login
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="btn bg-green-500 hover:bg-green-700 text-white">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default DashNavbar;
