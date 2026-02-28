import React from "react";

const ProjectProgress = () => {
  const percentage = 41;
  const radius = 70;
  // অর্ধবৃত্তের পরিধি হিসাব
  const circumference = Math.PI * radius;
  // Percentage অনুযায়ী বারটি ফিল করার অফসেট
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full max-w-sm lg:col-span-4">
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-6">Project Progress</h3>

      {/* Progress Arc & Text Container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* SVG Arc for Semi-circle */}
        <svg className="w-full h-auto" viewBox="0 0 160 85">
          {/* Background Arc (Gray) */}
          <path
            d="M10,80 A70,70 0 0,1 150,80"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Progress Arc (Green) */}
          <path
            d="M10,80 A70,70 0 0,1 150,80"
            fill="none"
            stroke="#1A5336"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-out"
          />
        </svg>

        {/* Percentage & Text in Center */}
        {/* ✅ লেখাটি সেন্টারে আনার জন্য পজিশন ঠিক করা হয়েছে */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-2">
          <p className="text-5xl font-extrabold text-gray-900">{percentage}%</p>
          <p className="text-sm font-semibold text-gray-500 mt-1">
            Project Ended
          </p>
        </div>
      </div>

      {/* Legend / Info */}
      <div className="flex justify-center items-center gap-6 mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#1A5336]"></div>
          <span className="text-xs font-semibold text-gray-600">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#5A8C66]"></div>
          <span className="text-xs font-semibold text-gray-600">
            In Progress
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <span className="text-xs font-semibold text-gray-600">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
