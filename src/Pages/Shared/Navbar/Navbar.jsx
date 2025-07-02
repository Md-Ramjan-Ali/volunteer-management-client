import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../../assets/volunteer-logo.png";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import DarkToggler from "../../../Components/DarkToggler/DarkToggler";

const Navbar = () => {
  const { user, logOUt } = use(AuthContext);

  const handleLogOut = () => {
    logOUt();

    Swal.fire({
      icon: "success",
      title: "LogOut Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allVolunteerposts">All volunteer posts</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dash/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-gradient-to-r from-[#1be6dc]/80 to-[#029891]/80 dark:from-[#111827]/70 dark:to-[#111827]/70 backdrop-blur-sm  shadow-sm px-10 sticky top-0 z-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center cursor-pointer">
          <img className="w-16" src={Logo} alt="" />
          <h2 className=" text-2xl font-bold hidden md:flex">
            <span className="text-primary">Seba</span>
            <span className="text-[#02746e] dark:text-white">Connect</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 text-white text-shadow-gray-100 ">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="flex items-center">
          <DarkToggler></DarkToggler>
        </div>

        <div
          className="cursor-pointer "
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={user?.displayName}
        >
          {user ? (
            <img
              className="rounded-full max-w-10 max-h-10  w-full h-full card shadow-sm"
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
            className="btn bg-secondary border-2 dark:border-secondary hover:bg-secondary dark:bg-transparent text-white"
          >
            LogOut
          </button>
        ) : (
          <>
            <Link to="/auth/login">
              <button className="btn bg-primary hover:bg-secondary text-white">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default Navbar;
