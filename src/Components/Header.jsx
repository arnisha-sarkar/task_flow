import React from "react";
import { MdAdd, MdFileDownload } from "react-icons/md";

const Header = () => {
  return (
    // ✅ 'sm:hidden' ক্লাসটি এখান থেকে সরিয়ে দেওয়া হয়েছে
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        <p className="text-gray-500 text-sm">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-[#1A5336] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition-all">
          <MdAdd /> Add Project
        </button>
        <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all">
          <MdFileDownload /> Import Data
        </button>
      </div>
    </div>
  );
};

export default Header;
