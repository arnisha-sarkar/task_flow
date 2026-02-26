import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="bg-[#f6f5f5] min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-[#364d59] font-extrabold text-[100px]">404</h1>
        <h4 className="py-5 text-[#888888] text-4xl font-medium">
          page not found
        </h4>
        <button className="btn bg-[#007bff] text-white">
          <Link to={"/"}>Go Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
