import React, { useEffect, useState } from "react";
import axios from "axios";

const OverviewPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFullDashboardData = async () => {
      try {
        // dashboard API কল করলেই সব ডেটা একসাথে পাওয়া যাবে
        const response = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/dashboard",
        );
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    getFullDashboardData();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500 font-medium">
        Loading Overview...
      </div>
    );

  return (
    <div className="space-y-7">
      {/* --- অংশ ১: Overview Cards (সংখ্যাগুলো) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
            Total Users
          </p>
          <h3 className="text-2xl font-black text-gray-800 mt-2">
            {data?.overview?.totalUsers.toLocaleString()}
          </h3>
          <p className="text-green-500 text-xs mt-2 font-bold">
            ↑ 12% increase
          </p>
        </div>

        {/* Revenue */}
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
            Total Revenue
          </p>
          <h3 className="text-2xl font-black text-gray-800 mt-2">
            ${data?.overview?.revenue.toLocaleString()}
          </h3>
          <p className="text-blue-500 text-xs mt-2 font-bold">
            Growth: {data?.overview?.growth}%
          </p>
        </div>

        {/* Active Users */}
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
            Active Users
          </p>
          <h3 className="text-2xl font-black text-gray-800 mt-2">
            {data?.overview?.activeUsers.toLocaleString()}
          </h3>
          <div className="w-full bg-gray-100 h-1.5 mt-4 rounded-full overflow-hidden">
            <div
              className="bg-orange-400 h-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        {/* Growth Card */}
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm bg-gradient-to-br from-indigo-500 to-purple-600">
          <p className="text-indigo-100 text-xs font-bold uppercase tracking-wider">
            Overall Growth
          </p>
          <h3 className="text-2xl font-black text-white mt-2">
            {data?.overview?.growth}%
          </h3>
          <p className="text-indigo-200 text-xs mt-2 font-medium">
            Yearly Target
          </p>
        </div>
      </div>

      {/* --- অংশ ২: Detailed Dashboard (টেবিল এবং এনালিটিক্স) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {/* Recent Users Table (বাম পাশে ২ ভাগ) */}
        <div className="lg:col-span-2 bg-white p-7 rounded-[28px] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">
              Recent Customers
            </h3>
            <button className="text-blue-600 text-sm font-bold hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-xs uppercase tracking-widest border-b border-gray-50">
                  <th className="pb-4 font-semibold">User Info</th>
                  <th className="pb-4 font-semibold">Status</th>
                  <th className="pb-4 font-semibold text-right">Join Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {data?.users?.map((user) => (
                  <tr
                    key={user.id}
                    className="group hover:bg-gray-50 transition-all"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            {user.name}
                          </p>
                          <p className="text-[11px] text-gray-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${user.status === "active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 text-right text-sm text-gray-500 font-medium">
                      {user.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products (ডান পাশে ১ ভাগ) */}
        <div className="bg-white p-7 rounded-[28px] border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Popular Plans
          </h3>
          <div className="space-y-5">
            {data?.products?.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-indigo-100 hover:bg-white transition-all cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">
                    {product.name}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                    {product.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-indigo-600">
                    ${product.price}
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold">
                    {product.sales} sold
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
