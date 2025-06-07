import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading/Loading";
import { AuthContext } from "../Context/AuthContext";

const PrivetRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivetRouter;
