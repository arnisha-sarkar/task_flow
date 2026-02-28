import React from "react";
import { MdAdd, MdFileDownload } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none border border-gray-100 md:border-none shadow-sm md:shadow-none">
      {/* Title & Description */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          Overview
        </h1>
        <p className="text-gray-500 text-xs md:text-sm">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <button className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#1A5336] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition-all">
          <MdAdd /> Add Project
        </button>
        <button className="flex w-full sm:w-auto items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all">
          <MdFileDownload /> Import Data
        </button>
      </div>
    </div>
  );
};

export default Header;
