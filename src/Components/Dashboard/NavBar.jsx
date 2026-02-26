import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
const NavBar = () => {
  return (
    <div className="p-6 flex justify-center border border-red-400">
      <div className="border border-green-400 flex justify-between w-[80%]">
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>

        {/* email */}
        <MdOutlineMail className="text-3xl" />

        {/* icons */}

        <IoIosNotificationsOutline className="text-3xl" />

        {/* একটু প্যাডিং দিলাম দেখার সুবিধার জন্য */}
        {/* একটি মেইন কন্টেইনার যা ছবি এবং লেখাকে পাশাপাশি রাখবে */}
        <div className="flex items-center gap-4">
          {/* ১. ইমেজ অংশ (এটাকে সব সময় আলাদা রাখবেন) */}
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-2">
              <img
                className="rounded-full object-cover"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User Profile"
              />
            </div>
          </div>

          {/* ২. টেক্সট অংশ (ইমেইল এবং নাম এর জন্য আলাদা ডিভ) */}
          <div className="flex flex-col text-left">
            <h4 className="text-sm font-bold text-gray-800 leading-none">
              Totok Michael
            </h4>
            <p className="text-[11px] text-gray-500 mt-1">email@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
