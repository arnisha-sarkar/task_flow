import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/analytics",
        );
        setData(response.data);
      } catch (error) {
        console.error("Analytics fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  const totalViews = data.reduce((sum, item) => sum + item.views, 0);
  const totalClicks = data.reduce((sum, item) => sum + item.clicks, 0);
  const totalConv = data.reduce((sum, item) => sum + item.conversions, 0);

  if (loading)
    return (
      <div className="p-10 text-center font-bold text-gray-500">
        Generating Insights...
      </div>
    );

  return (
    <div className="p-8 bg-[#F4F4F4] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1D1F]">
          Performance Analytics
        </h1>
        <p className="text-[#6F767E]">
          Monitor your views, clicks, and conversion trends
        </p>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
          <p className="text-[#6F767E] text-xs font-bold uppercase tracking-widest mb-2">
            Total Views
          </p>
          <h3 className="text-3xl font-bold text-[#1A1D1F]">
            {totalViews.toLocaleString()}
          </h3>
          <div className="mt-2 text-[#29BA6A] text-sm font-bold">
            ↑ 12.5% vs last month
          </div>
        </div>
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
          <p className="text-[#6F767E] text-xs font-bold uppercase tracking-widest mb-2">
            Total Clicks
          </p>
          <h3 className="text-3xl font-bold text-[#1A1D1F]">
            {totalClicks.toLocaleString()}
          </h3>
          <div className="mt-2 text-[#29BA6A] text-sm font-bold">
            ↑ 8.2% vs last month
          </div>
        </div>
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
          <p className="text-[#6F767E] text-xs font-bold uppercase tracking-widest mb-2">
            Conversions
          </p>
          <h3 className="text-3xl font-bold text-[#1A1D1F]">
            {totalConv.toLocaleString()}
          </h3>
          <div className="mt-2 text-[#29BA6A] text-sm font-bold">
            ↑ 4.1% vs last month
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-[#1A1D1F] mb-6">
          Views & Traffic Trend
        </h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#29BA6A" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#29BA6A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F1F1F1"
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9A9FA5", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9A9FA5", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#29BA6A"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorViews)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
