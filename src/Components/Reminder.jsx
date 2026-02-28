import React from "react";
import { FaVideo } from "react-icons/fa";

const Reminder = () => {
  return (
    // ✅ Responsive classes: 'w-full' for full width on mobile,
    // and responsive padding 'p-4 md:p-6'
    <div className="w-full bg-white p-4 md:p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">Reminders</h3>

      {/* Responsive background padding */}
      <div className="mt-5 md:mt-6 bg-gray-50 p-4 md:p-5 rounded-2xl">
        <h4 className="text-md font-bold text-[#1A5336] truncate">
          Meeting with Arc Company
        </h4>
        <p className="text-xs text-gray-500 mt-1">Time: 02.00 pm - 04.00 pm</p>
      </div>

      {/* Button with responsive padding */}
      <button className="w-full flex items-center justify-center gap-2 bg-[#1A5336] text-white py-3 rounded-xl mt-5 md:mt-6 font-semibold text-sm hover:bg-green-900 transition-all">
        <FaVideo />
        Start Meeting
      </button>
    </div>
  );
};

export default Reminder;
