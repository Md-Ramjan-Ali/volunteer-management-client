import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Loading from "../Components/Loading/Loading";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const { state } = useNavigation();

  return (
    <div className="bg-base-200 dark:bg-gray-900 dark:text-white">
      <Navbar></Navbar>

      <main>{state == "loading" ? <Loading /> : <Outlet></Outlet>}</main>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
