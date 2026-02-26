// import React, { useContext, useState } from "react";
// // Icons
// import { motion } from "framer-motion";
// import { Link } from "react-router";
// import { AuthContext } from "../../../context/AuthContext";
// // Optional MenuItem component for cleaner code
// const MenuItem = ({ icon: Icon, label, address }) => (
//   <Link
//     to={address}
//     className="flex items-center px-4 py-2 mt-2 text-[#6F767E]  rounded-lg transition-colors duration-300"
//   >
//     {Icon && <Icon className="w-5 h-5" />}
//     <span className="ml-3">{label}</span>
//   </Link>
// );

// const Sidebar = () => {
//   const { user, handleSignoutFun } = useContext(AuthContext);
//   const [isActive, setActive] = useState(false);

//   // Sidebar toggle for mobile
//   const handleToggle = () => setActive(!isActive);

//   return (
//     <>
//       <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
//         <div>
//           <div className="block cursor-pointer p-4 font-bold">
//             <Link to="/">
//               <img src="" alt="logo" width="100" height="100" />
//             </Link>
//           </div>
//         </div>
//         <button
//           onClick={handleToggle}
//           className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
//         >
//           {/* <AiOutlineBars className="h-5 w-5" /> */}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#F7F7F7] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
//           isActive ? "-translate-x-full" : "translate-x-0"
//         } transition duration-200 ease-in-out`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Top Logo */}
//           <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto">
//             <Link to="/">
//               {/* <MdCarRental className="text-7xl text-white" /> */}
//             </Link>
//             <motion.h1
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-2xl font-semibold cursor-pointer text-white"
//             >
//               <Link to="/">Task Flow</Link>
//             </motion.h1>
//           </div>

//           {/* Menu Items */}
//           <div className="flex flex-col justify-between flex-1 mt-6">
//             <nav>
//               {user ? (
//                 <>
//                   <MenuItem label="Overview" address="/dashboard/overview" />
//                   <MenuItem label="Users" address="/dashboard/users" />
//                   <MenuItem label="analytics" address="/dashboard/Analytics" />

//                   <MenuItem label="products" address="/dashboard/Products" />
//                 </>
//               ) : (
//                 <MenuItem label="Please login" address="/login" />
//               )}
//             </nav>
//           </div>

//           {/* Bottom Logout */}
//           {user && (
//             <div>
//               <hr className="border-gray-400 mb-3" />
//               <button
//                 onClick={handleSignoutFun}
//                 className="flex items-center px-4 py-2 mt-5 w-full text-white hover:bg-red-600 rounded-lg transition-colors duration-300"
//               >
//                 {/* <GrLogout className="w-5 h-5" /> */}
//                 <span className="ml-3 font-medium">Logout</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Link, useNavigate } from "react-router-dom"; // 1. useNavigate eikhane thakte hobe
import { AuthContext } from "../../../context/AuthContext";
import {
  MdDashboard,
  MdPeople,
  MdAnalytics,
  MdInventory,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";

// MenuItem Component (Ager motoi thakbe)
const MenuItem = ({ icon: Icon, label, address }) => (
  <NavLink
    to={address}
    className={({ isActive }) =>
      `flex items-center px-4 py-3 mt-2 transition-all duration-200 group relative ${
        isActive
          ? "text-[#1A1D1F] font-bold"
          : "text-[#6F767E] hover:text-[#1A1D1F] font-medium"
      }`
    }
  >
    {({ isActive }) => (
      <>
        {isActive && (
          <motion.div
            layoutId="activeBar"
            className="absolute left-0 w-1 h-6 bg-[#29BA6A] rounded-r-full"
          />
        )}
        <Icon
          className={`w-6 h-6 ${isActive ? "text-[#29BA6A]" : "text-[#6F767E] group-hover:text-[#1A1D1F]"}`}
        />
        <span className="ml-4 text-[15px]">{label}</span>
      </>
    )}
  </NavLink>
);

const Sidebar = () => {
  // --- VUL FIX NO 1: useContext oboshoy component-er bhetore thakte hobe ---
  const { user, setUser } = useContext(AuthContext);

  // --- VUL FIX NO 2: useNavigate initialization ---
  const navigate = useNavigate();

  const [isActive, setActive] = useState(true);

  // --- VUL FIX NO 3: Function-ti Sidebar component-er bhetore thakte hobe jate shey setUser/navigate access pay ---
  const handleSignoutFun = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleToggle = () => setActive(!isActive);

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="bg-white border-b border-gray-100 text-gray-800 flex justify-between items-center md:hidden p-4 sticky top-0 z-50">
        <div className="font-bold text-xl text-[#1A1D1F]">Task Flow</div>
        <button
          onClick={handleToggle}
          className="p-2 focus:outline-none bg-[#F4F4F4] rounded-lg"
        >
          {isActive ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`z-40 md:fixed flex flex-col justify-between overflow-x-hidden bg-white w-64 border-r border-gray-100 space-y-6 px-4 py-8 absolute inset-y-0 left-0 transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-300 ease-in-out shadow-sm`}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 mb-10">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#29BA6A] rounded-lg flex items-center justify-center text-white">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-[#1A1D1F]">
                Task Flow
              </h1>
            </Link>
          </div>

          <div className="flex flex-col justify-between flex-1">
            <nav>
              {user ? (
                <>
                  <p className="px-4 text-[11px] font-bold text-[#9A9FA5] uppercase tracking-[2px] mb-4">
                    Main Menu
                  </p>
                  <MenuItem
                    icon={MdDashboard}
                    label="Overview"
                    address="/dashboard/overview"
                  />
                  <MenuItem
                    icon={MdPeople}
                    label="Users"
                    address="/dashboard/users"
                  />
                  <MenuItem
                    icon={MdAnalytics}
                    label="Analytics"
                    address="/dashboard/Analytics"
                  />
                  <MenuItem
                    icon={MdInventory}
                    label="Products"
                    address="/dashboard/Products"
                  />
                </>
              ) : (
                <MenuItem
                  icon={MdPeople}
                  label="Please login"
                  address="/login"
                />
              )}
            </nav>
          </div>

          {user && (
            <div className="mt-auto pt-6">
              <div className="p-4 bg-[#F4F4F4] rounded-2xl mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-[#1A1D1F] border border-gray-200">
                  {user?.displayName?.charAt(0) ||
                    user?.email?.charAt(0).toUpperCase() ||
                    "U"}
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-[#1A1D1F] truncate">
                    {user?.displayName || "Admin"}
                  </p>
                  <p className="text-[11px] text-[#6F767E] truncate">
                    {user?.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleSignoutFun}
                className="flex items-center px-4 py-3 w-full text-[#6F767E] hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 group font-bold"
              >
                <MdLogout className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="ml-4 text-[15px]">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
