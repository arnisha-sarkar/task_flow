import React, { useState, useEffect } from "react";

const AnalyticsChart = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(analyticsData);
  useEffect(() => {
    fetch("https://task-api-eight-flax.vercel.app/api/analytics")
      .then((response) => response.json())
      .then((data) => {
        setAnalyticsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  const maxViews =
    analyticsData.length > 0
      ? Math.max(...analyticsData.map((item) => item.views))
      : 0;

  return (
    <div className=" bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center ">
        <h3 className="text-lg font-bold text-gray-900">Project Analytics</h3>
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Last 7 Days
        </span>
      </div>

      {/* চার্টের কন্টেইনার */}
      <div className="flex items-end justify-between h-40 gap-2 md:gap-3">
        {analyticsData.map((item, i) => {
          const heightPercentage =
            maxViews > 0 ? (item.views / maxViews) * 100 : 0;

          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center gap-2 group relative"
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-gray-900 text-white text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity w-28 z-20 text-center pointer-events-none">
                <p>Views: {item.views}</p>
                <p>Clicks: {item.clicks}</p>
                <p>Conversions: {item.conversions}</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>

              {/* bar chart */}
              <div
                className={`w-full max-w-[40px] rounded-full transition-all duration-300 ${
                  i === 2 ? "bg-green-500" : "bg-[#1A5336]"
                } group-hover:opacity-80`}
                style={{ height: `${heightPercentage}%` }}
              ></div>

              <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-800 transition-colors">
                {item.date.split("-")[2]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsChart;
