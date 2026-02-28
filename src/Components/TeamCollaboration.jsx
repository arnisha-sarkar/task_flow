import React from "react";
import { MdAdd } from "react-icons/md";

const TeamCollaboration = ({ data }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-5 md:mb-6">
        <h3 className="text-lg font-bold text-gray-900">Team Collaboration</h3>

        <button className="flex items-center justify-center gap-2 text-[#1A5336] px-4 py-2 rounded-full text-sm font-semibold border border-[#1A5336] hover:bg-green-50 transition-all w-full sm:w-auto">
          <MdAdd /> Add Members
        </button>
      </div>

      <div className="space-y-4 md:space-y-5">
        {data?.users?.slice(0, 5).map((user, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">
                {user.name.charAt(0)}
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.email} • Joined: {user.joinDate}
                </p>
              </div>
            </div>

            <div className="sm:text-right">
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold inline-block ${
                  user.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaboration;
