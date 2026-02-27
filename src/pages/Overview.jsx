import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdAdd, MdFileDownload, MdPlayArrow, MdStop } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import AnalyticsChart from "../Components/AnalyticsChart";
import Header from "../Components/Header";
// --- API
const fetchDashboardData = async () => {
  const response = await axios.get(
    "https://task-api-eight-flax.vercel.app/api/dashboard",
  );
  return response.data;
};

const Overview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData()
      .then(setData)
      .catch((error) => console.error("Error fetching dashboard data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading Overview...
      </div>
    );
  }

  <Header />;

  const StatCard = ({ title, value, change, isFeatured }) => (
    <div
      className={`p-6 rounded-3xl ${isFeatured ? "bg-[#1A5336] text-white" : "bg-white border border-gray-100 shadow-sm"}`}
    >
      <div className="flex justify-between items-center">
        <span
          className={`text-sm font-medium ${isFeatured ? "opacity-80" : "text-gray-500"}`}
        >
          {title}
        </span>
        <BsArrowUpRight
          className={isFeatured ? "opacity-80" : "text-gray-400"}
        />
      </div>
      <h2
        className={`text-4xl font-bold mt-4 ${isFeatured ? "" : "text-gray-900"}`}
      >
        {value}
      </h2>
      <p
        className={`mt-4 text-xs font-medium ${isFeatured ? "bg-white/10 w-fit px-2 py-0.5 rounded-full" : "text-gray-400"}`}
      >
        {change}
      </p>
    </div>
  );
  <AnalyticsChart />;
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-7 bg-[#F7F7F7] min-h-screen rounded-2xl">
      <Header />

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        <StatCard
          title="Total Users"
          value={data?.overview?.totalUsers?.toLocaleString() || "0"}
          change="↑ 12% Increased from last month"
          isFeatured
        />
        <StatCard
          title="Active Users"
          value="8234"
          change="↑ Increased from last month"
        />
        <StatCard
          title="Revenue"
          value="245890"
          change="↑ Increased from last month"
        />
        <StatCard
          title="Growth"
          value="23.5"
          change="↑ Increased from last month"
        />
      </div>

      {/* Analytics & Project List */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
        {/* Analytics Chart*/}

        <AnalyticsChart />

        {/* Reminders - Adjusted to col-span-3 */}
        <div className="xl:col-span-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">Reminders</h3>
          <div className="mt-6 bg-gray-50 p-4 rounded-2xl">
            <h4 className="text-md font-bold text-[#1A5336]">
              Meeting with Arc Company
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Time: 02.00 pm - 04.00 pm
            </p>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-[#1A5336] text-white py-3 rounded-xl mt-6 font-semibold text-sm hover:bg-green-900 transition-all">
            <FaVideo />
            Start Meeting
          </button>
        </div>

        {/* Projects List - Adjusted to col-span-3 */}
        <div className="xl:col-span-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">products</h3>
            <button className="text-xs font-semibold text-gray-500 hover:text-gray-800">
              + New
            </button>
          </div>
          <div className="space-y-4">
            {data?.products?.slice(0, 4).map((product, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                {/* Product Initials */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                    i % 2 === 0
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {product.code || product.name.substring(0, 2).toUpperCase()}
                </div>

                {/* Product Name & Category */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">
                    {product.category}
                  </p>
                </div>

                {/* Price & Sales */}
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-xs text-green-600 font-semibold">
                    Sales: {product.sales}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Progress Section - Updated Grid to 12 */}
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Team Collaboration - col-span-5 */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-3.5">
              <h3 className="text-lg font-bold text-gray-900">
                Team Collaboration
              </h3>
              <button className="flex items-center gap-2 text-[#1A5336] px-4 py-2 rounded-full text-sm font-semibold border border-[#1A5336] hover:bg-green-50 transition-all">
                <MdAdd /> Add Members
              </button>
            </div>

            <div className="space-y-5">
              {data?.users?.slice(0, 5).map((user, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    {/* Profile Icon */}
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      {/* Name */}
                      <p className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </p>
                      {/* Email & Date */}
                      <p className="text-xs text-gray-500">
                        {user.email} • Joined: {user.joinDate}
                      </p>
                    </div>
                  </div>
                  {/* Status Badge */}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Progress - col-span-4 */}
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-900 self-start mb-6">
              Project Progress
            </h3>
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
              <div className="absolute inset-0 rounded-full border-8 border-[#1A5336] border-t-transparent -rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                41%
              </div>
            </div>
            <p className="text-xs text-gray-400 font-semibold mt-4">
              Project Ended
            </p>
          </div>

          {/* Time Tracker - col-span-3 */}
          <div className="lg:col-span-3 bg-[#1A5336] p-6 rounded-3xl text-white flex flex-col items-center justify-center">
            <span className="text-xs font-semibold opacity-70">
              Time Tracker
            </span>
            <p className="text-4xl font-mono font-bold mt-2">01:24:08</p>
            <div className="flex gap-3 mt-5">
              <button className="p-3 bg-white/20 rounded-full hover:bg-white/30">
                <MdPlayArrow />
              </button>
              <button className="p-3 bg-red-500 rounded-full hover:bg-red-600">
                <MdStop />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
