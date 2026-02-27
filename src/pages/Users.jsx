import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  // Sob user fetch kora
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/users",
        );
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Specific User details fetch kora (/api/users/:id)
  const handleViewDetails = async (id) => {
    setModalLoading(true);
    try {
      const response = await axios.get(
        `https://task-api-eight-flax.vercel.app/api/users/${id}`,
      );
      setSelectedUser(response.data); // User details set kora
    } catch (err) {
      console.error("Error fetching user details:", err);
    } finally {
      setModalLoading(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Table...</div>;

  return (
    <div className="p-6 bg-[#F4F4F4] min-h-screen relative">
      <h1 className="text-2xl font-bold mb-6 text-[#1A1D1F]">
        User Management
      </h1>

      {/* Table Section */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-50">
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${user.status === "active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleViewDetails(user.id)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-sm transition-all"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- USER DETAILS MODAL --- */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#29BA6A]/10 text-[#29BA6A] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                {selectedUser.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-[#1A1D1F]">
                {selectedUser.name}
              </h2>
              <p className="text-[#6F767E] mb-6">{selectedUser.email}</p>

              <div className="grid grid-cols-2 gap-4 text-left border-t pt-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">
                    Join Date
                  </p>
                  <p className="font-medium text-[#1A1D1F]">
                    {selectedUser.joinDate}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-400 uppercase font-bold">
                    Account Status
                  </p>
                  <p
                    className={`font-bold ${selectedUser.status === "active" ? "text-green-500" : "text-red-500"}`}
                  >
                    {selectedUser.status.toUpperCase()}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
                className="mt-8 w-full bg-[#1A1D1F] text-white py-3 rounded-xl font-semibold"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
