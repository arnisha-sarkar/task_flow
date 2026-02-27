import React, { useContext, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail, MdSearch, MdClose, MdMenu } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-[#F7F7F7] border-b border-gray-100 sticky top-0 z-50 px-4 md:px-8 py-3 rounded-2xl">
      <div className="flex items-center justify-between gap-4">
        {/* left side logo search */}
        <div className="flex items-center">
          {/* desktop search bar */}
          <div className="hidden md:flex relative group w-64">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MdSearch className="h-5 w-5 text-[#9A9FA5]" />
            </div>
            <input
              type="search"
              placeholder="Search tasks"
              className="w-full bg-[#FFF] border border-gray-100 text-sm font-medium text-[#1A1D1F] pl-12 pr-4 py-2.5 rounded-2xl focus:ring-2 focus:ring-[#29BA6A]/20 transition-all outline-none"
            />
          </div>

          {/* mobile search icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-2xl text-[#6F767E]"
            >
              {isSearchOpen ? <MdClose /> : <MdSearch />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-gray-100">
              <button className="relative p-2 text-[#6F767E] hover:bg-gray-50 rounded-xl transition-all">
                <MdOutlineMail className="text-2xl" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6A55] rounded-full border-2 border-white"></span>
              </button>
              <button className="relative p-2 text-[#6F767E] hover:bg-gray-50 rounded-xl transition-all">
                <IoIosNotificationsOutline className="text-2xl" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6A55] rounded-full border-2 border-white"></span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex flex-col text-right">
                <h4 className="text-sm font-bold text-[#1A1D1F] leading-tight">
                  {user?.displayName || "Admin Account"}
                </h4>
                <p className="text-[11px] font-semibold text-[#6F767E] truncate max-w-[120px]">
                  {user?.email}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#EFEFEF] overflow-hidden bg-gray-100 flex items-center justify-center">
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-2xl text-[#6F767E]"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* mobile search input */}
      {isSearchOpen && (
        <div className="md:hidden mt-3 p-2 bg-white rounded-2xl border border-gray-100">
          <input
            type="search"
            placeholder="Search tasks..."
            className="w-full text-sm font-medium text-[#1A1D1F] p-3 rounded-xl focus:ring-2 focus:ring-[#29BA6A]/20 transition-all outline-none"
            autoFocus
          />
        </div>
      )}

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center gap-2">
              <button className="relative p-2 text-[#6F767E] hover:bg-gray-50 rounded-xl transition-all">
                <MdOutlineMail className="text-2xl" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6A55] rounded-full border-2 border-white"></span>
              </button>
              <button className="relative p-2 text-[#6F767E] hover:bg-gray-50 rounded-xl transition-all">
                <IoIosNotificationsOutline className="text-2xl" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6A55] rounded-full border-2 border-white"></span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex flex-col text-left">
                <h4 className="text-sm font-bold text-[#1A1D1F] leading-tight">
                  {user?.displayName || "Admin Account"}
                </h4>
                <p className="text-[11px] font-semibold text-[#6F767E] truncate max-w-[120px]">
                  {user?.email}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#EFEFEF] overflow-hidden bg-gray-100 flex items-center justify-center">
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
      )}
    </div>
  );
};

export default NavBar;
