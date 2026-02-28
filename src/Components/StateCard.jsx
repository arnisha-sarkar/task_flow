import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";

// --- API Fetching Function
const fetchOverviewData = async () => {
  const response = await axios.get(
    "https://task-api-eight-flax.vercel.app/api/overview",
  );
  return response.data;
};

const StateCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOverviewData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching overview data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center text-gray-500 min-h-[200px]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center text-red-500 min-h-[200px]">
        Error loading data.
      </div>
    );
  }

  // Helper component for Stat Cards
  const StatCard = ({ title, value, change, isFeatured }) => (
    <div
      className={`p-5 md:p-6 rounded-3xl ${
        // ✅ Responsive padding
        isFeatured
          ? "bg-[#1A5336] text-white"
          : "bg-white border border-gray-100 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center">
        <span
          className={`text-sm font-medium ${
            isFeatured ? "opacity-80" : "text-gray-500"
          }`}
        >
          {title}
        </span>
        <BsArrowUpRight
          className={isFeatured ? "opacity-80" : "text-gray-400"}
        />
      </div>
      <h2
        className={`text-3xl md:text-4xl font-bold mt-3 md:mt-4 ${
          // ✅ Responsive font size
          isFeatured ? "" : "text-gray-900"
        }`}
      >
        {value}
      </h2>
      <p
        className={`mt-3 md:mt-4 text-xs font-medium ${
          // ✅ Responsive margin
          isFeatured
            ? "bg-white/10 w-fit px-2 py-0.5 rounded-full"
            : "text-gray-400"
        }`}
      >
        {change}
      </p>
    </div>
  );

  return (
    // ✅ প্যাডিং ফিক্সড করা হয়েছে বড় এবং ছোট স্ক্রিনের জন্য
    <div className="p-3 md:p-6 bg-[#F7F7F7]">
      {/* Stats Section */}
      {/* ✅ গ্রিড স্ট্রাকচার রেসপন্সিভ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <StatCard
          title="Total Users"
          value={data?.totalUsers?.toLocaleString() || "0"}
          change="↑ 12% Increased from last month"
          isFeatured
        />
        <StatCard
          title="Active Users"
          value={data?.activeUsers?.toLocaleString() || "0"}
          change="↑ Increased from last month"
        />
        <StatCard
          title="Revenue"
          value={`$${data?.revenue?.toLocaleString() || "0"}`}
          change="↑ Increased from last month"
        />
        <StatCard
          title="Growth"
          value={`${data?.growth || "0"}%`}
          change="↑ Increased from last month"
        />
      </div>
    </div>
  );
};

export default StateCard;
