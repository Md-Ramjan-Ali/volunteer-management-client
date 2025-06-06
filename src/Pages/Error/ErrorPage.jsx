import React from "react";
import errorPage from "../../assets/ErrorPage.png";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Error | SebaConnect</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center space-y-4 pt-10 lg:pt-15">
        <div className="card bg-base-100 w-96 shadow-sm">
          <img src={errorPage} alt="" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-[#e11111]">
          404 - Page Not Found
        </h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
          <button className="btn bg-primary text-white font-bold rounded">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
