import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ClockLoader } from "react-spinners";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <ClockLoader color="#000" />;
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;
