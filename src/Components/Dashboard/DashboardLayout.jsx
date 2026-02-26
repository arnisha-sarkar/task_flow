import React from "react";
import Sidebar from "./SideBar/SideBar";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const DashboardLayout = () => {
  return (
    // 'flex' ব্যবহারের ফলে সাইডবার বামে এবং বাকি অংশ ডানে বসবে।
    // 'p-5' এবং 'gap-5' আপনার পাঠানো 'Donezo' ছবির মতো গ্যাপ তৈরি করবে।
    <div className="flex h-screen bg-[#F0F2F5] p-5 gap-5">
      {/* বাম পাশের সাইডবার */}
      <div className="w-64 shrink-0 h-full">
        <Sidebar />
      </div>

      {/* ডান পাশের অংশ (NavBar + Content) */}
      <div className="flex-1 flex flex-col gap-5 overflow-hidden">
        {/* উপরে নেভবার */}
        <NavBar />

        {/* নিচে মূল কন্টেন্ট এরিয়া */}
        <div className="flex-1 bg-white rounded-[32px] p-8 shadow-sm overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
