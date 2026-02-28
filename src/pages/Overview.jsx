// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { MdAdd, MdFileDownload, MdPlayArrow, MdStop } from "react-icons/md";
// import AnalyticsChart from "../Components/AnalyticsChart";
// import Reminder from "../Components/Reminder";
// import StateCard from "../Components/StateCard";
// import Header from "../Components/Header";
// import ProjectProgress from "../Components/ProjectProgress";
// import TimeTracker from "../Components/TimeTracker";
// import TeamCollaboration from "../Components/TeamCollaboration";
// import Products from "../Components/Products";
// // --- API
// const fetchDashboardData = async () => {
//   const response = await axios.get(
//     "https://task-api-eight-flax.vercel.app/api/dashboard",
//   );
//   return response.data;
// };

// const Overview = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDashboardData()
//       .then(setData)
//       .catch((error) => console.error("Error fetching dashboard data:", error))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Loading Overview...
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 md:p-6 lg:p-8 space-y-7 bg-[#F7F7F7] min-h-screen rounded-2xl">
//       {/* Header */}
//       <Header />

//       {/* Stats Section */}
//       <StateCard />
//       {/* Analytics & Project List */}
//       <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
//         {/* Analytics Chart*/}
//         <AnalyticsChart />

//         {/* Reminders - Adjusted to col-span-3 */}
//         <Reminder />

//         {/* Projects List - Adjusted to col-span-3 */}
//         <Products data={data} />
//         {/* Team & Progress Section - Updated Grid to 12 */}
//         <div className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-5 ">
//           {/* Team Collaboration - col-span-5 */}
//           <TeamCollaboration data={data} />

//           {/* Project Progress - col-span-4 */}
//           <ProjectProgress />

//           {/* Time Tracker - col-span-3 */}
//           <TimeTracker />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;

import React, { useEffect, useState } from "react";
import axios from "axios";
// MdAdd, MdFileDownload, MdPlayArrow, MdStop এগুলি এখানে প্রয়োজন নেই কারণ কম্পোনেন্টগুলো আলাদা
import AnalyticsChart from "../Components/AnalyticsChart";
import Reminder from "../Components/Reminder";
import StateCard from "../Components/StateCard";
import Header from "../Components/Header";
import ProjectProgress from "../Components/ProjectProgress";
import TimeTracker from "../Components/TimeTracker";
import TeamCollaboration from "../Components/TeamCollaboration";
import Products from "../Components/Products";

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

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-7 bg-[#F7F7F7] min-h-screen rounded-2xl">
      {/* Header */}
      <Header />

      {/* Stats Section */}
      <StateCard />

      {/* Analytics & Project List - Responsive Grid */}
      {/* ✅ Responsive: মোবাইল-১ কলাম, ট্যাবলেট-২ কলাম, বড় স্ক্রিন-১২ কলাম */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 items-start">
        {/* Analytics Chart - 6/12 columns */}
        <div className="md:col-span-2 xl:col-span-5">
          <AnalyticsChart />
        </div>

        {/* Reminders - 3/12 columns */}
        <div className="md:col-span-1 xl:col-span-3">
          <Reminder />
        </div>

        {/* Products List - 3/12 columns */}
        <div className="md:col-span-1 xl:col-span-4">
          <Products data={data} />
        </div>

        {/* Team Collaboration - 5/12 columns */}
        <div className="md:col-span-1 xl:col-span-5">
          <TeamCollaboration data={data} />
        </div>

        {/* Project Progress - 4/12 columns */}
        <div className="md:col-span-1 xl:col-span-4">
          <ProjectProgress />
        </div>

        {/* Time Tracker - 3/12 columns */}
        <div className="md:col-span-2 xl:col-span-3">
          <TimeTracker />
        </div>
      </div>
    </div>
  );
};

export default Overview;
