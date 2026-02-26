import React, { useContext, useState } from "react";
// Icons
import { motion } from "framer-motion";
import { Link } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
// Optional MenuItem component for cleaner code
const MenuItem = ({ icon: Icon, label, address }) => (
  <Link
    to={address}
    className="flex items-center px-4 py-2 mt-2 text-[#6F767E]  rounded-lg transition-colors duration-300"
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span className="ml-3">{label}</span>
  </Link>
);

const Sidebar = () => {
  const { user, handleSignoutFun } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);

  // Sidebar toggle for mobile
  const handleToggle = () => setActive(!isActive);

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img src="" alt="logo" width="100" height="100" />
            </Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          {/* <AiOutlineBars className="h-5 w-5" /> */}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#F7F7F7] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? "-translate-x-full" : "translate-x-0"
        } transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Top Logo */}
          <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto">
            <Link to="/">
              {/* <MdCarRental className="text-7xl text-white" /> */}
            </Link>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-semibold cursor-pointer text-white"
            >
              <Link to="/">Task Flow</Link>
            </motion.h1>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {user ? (
                <>
                  <MenuItem label="Overview" address="/dashboard/overview" />
                  <MenuItem label="analytics" address="/dashboard/Analytics" />
                  {/* <MenuItem label="Browse Cars" address="/dashboard/brows" /> */}
                  {/* <MenuItem label="My Bookings" address="/dashboard/booking" /> */}
                </>
              ) : (
                <MenuItem label="Please login" address="/login" />
              )}
            </nav>
          </div>

          {/* Bottom Logout */}
          {user && (
            <div>
              <hr className="border-gray-400 mb-3" />
              <button
                onClick={handleSignoutFun}
                className="flex items-center px-4 py-2 mt-5 w-full text-white hover:bg-red-600 rounded-lg transition-colors duration-300"
              >
                {/* <GrLogout className="w-5 h-5" /> */}
                <span className="ml-3 font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
