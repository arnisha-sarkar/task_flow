import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // পেজ রিলোড দিলেও লগইন ধরে রাখার জন্য (Bonus Task)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (savedUser && token) {
      try {
        // localStorage থেকে ইউজার ডাটা নিয়ে স্টেটে সেট করা
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("User parsing error", error);
      }
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const authInfo = {
    user,
    setUser,
    logout,
    loading,
  };

  return (
    // ২. নিশ্চিত করুন এখানে .Provider এবং value={authInfo} আছে
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
