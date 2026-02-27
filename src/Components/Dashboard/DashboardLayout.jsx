import React from "react";
import Sidebar from "./SideBar/SideBar";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[green] p-5 gap-5">
      {/* left sidebar */}
      <div className="w-64 shrink-0 h-full">
        <Sidebar />
      </div>

      {/* Navbar */}
      <div className="flex-1 flex flex-col gap-5 overflow-hidden">
        <NavBar />

        <div className="flex-1 bg-white rounded-[32px] p-8 shadow-sm overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
