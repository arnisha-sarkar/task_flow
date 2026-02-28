import React from "react";
import { MdPlayArrow, MdStop } from "react-icons/md";

const TimeTracker = () => {
  return (
    <div className="lg:col-span-3 bg-[#1A5336] p-6 rounded-3xl text-white flex flex-col items-center justify-center">
      <span className="text-xs font-semibold opacity-70">Time Tracker</span>
      <p className="text-4xl font-mono font-bold mt-2">01:24:08</p>
      <div className="flex gap-3 mt-5">
        <button className="p-3 bg-white/20 rounded-full hover:bg-white/30">
          <MdPlayArrow />
        </button>
        <button className="p-3 bg-red-500 rounded-full hover:bg-red-600">
          <MdStop />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
