import React, { useContext } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail, MdSearch } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-30 px-4 md:px-8 py-3 md:py-4">
      {/* Container: Mobile-e vertical column, Desktop-e horizontal row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left/Top Side: Search Bar */}
        <div className="flex-1 w-full max-w-md order-2 md:order-1">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MdSearch className="h-5 w-5 text-[#9A9FA5] group-focus-within:text-[#29BA6A] transition-colors" />
            </div>
            <input
              type="search"
              placeholder="Search tasks..."
              className="w-full bg-[#F4F4F4] border-none text-sm font-medium text-[#1A1D1F] pl-12 pr-4 py-2.5 rounded-2xl focus:ring-2 focus:ring-[#29BA6A]/20 focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        {/* Right Side: Icons & User Profile */}
        <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 order-1 md:order-2 w-full md:w-auto">
          {/* Icons Section */}
          <div className="flex items-center gap-2 pr-4 md:border-r border-gray-100">
            <button className="relative p-2 text-[#6F767E] hover:bg-gray-50 rounded-xl transition-all">
              <MdOutlineMail className="text-2xl" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6A55] rounded-full border-2 border-white"></span>
            </button>
            <button className="relative p-2 text-[#6F767E] hover:bg-gray-50 rounded-xl transition-all">
              <IoIosNotificationsOutline className="text-2xl" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6A55] rounded-full border-2 border-white"></span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <h4 className="text-sm font-bold text-[#1A1D1F] leading-tight">
                {user?.displayName || "Admin Account"}
              </h4>
              <p className="text-[11px] font-semibold text-[#6F767E] truncate max-w-[120px]">
                {user?.email}
              </p>
            </div>
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-[#EFEFEF] overflow-hidden bg-gray-100 flex items-center justify-center">
              {user?.photoURL ? (
                <img
                  className="w-full h-full object-cover"
                  src={user.photoURL}
                  alt="User"
                />
              ) : (
                <span className="text-sm font-bold">
                  {user?.email?.charAt(0).toUpperCase() || "U"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
