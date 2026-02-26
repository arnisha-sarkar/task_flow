// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useContext(AuthContext);
//   const handleLogin = async () => {
//     if (!email || !password) {
//       alert("Please fill in both fields");
//       return;
//     }
//     try {
//       const res = await axios.post(
//         "https://task-api-eight-flax.vercel.app/api/login",
//         {
//           email: email,
//           password: password,
//         },
//       );
//       localStorage.setItem("user", JSON.stringify(res.data));
//       const token = res.data.token || "dummy-token";
//       localStorage.setItem("token", token);
//       setUser(res.data);
//       navigate("/dashboard");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//         <legend className="fieldset-legend">Login</legend>

//         <label className="label">Email</label>
//         <input
//           type="email"
//           className="input"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label className="label">Password</label>
//         <input
//           type="password"
//           className="input"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin} className="btn btn-neutral mt-4">
//           Login
//         </button>
//       </fieldset>
//     </div>
//   );
// };

// export default Login;

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://task-api-eight-flax.vercel.app/api/login",
        { email, password },
      );

      // --- BONUS TASK IMPLEMENTATION ---
      // 1. Backend theke asha token-ti ninn
      const token = res.data.token;

      if (token) {
        // 2. Token-ti localStorage-e save kora (Gate Pass)
        localStorage.setItem("token", token);

        // 3. User info save kora persistence-er jonno
        localStorage.setItem("user", JSON.stringify(res.data));

        // 4. Global Auth State update kora
        setUser(res.data);

        // 5. Success redirection
        navigate("/dashboard/overview");
      }
    } catch (error) {
      console.error("Login Error:", error);
      // Backend error message thakle seta dekhano, nahole default message
      const errorMsg =
        error.response?.data?.message ||
        "Login failed! Check your credentials.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4] p-4 font-sans">
      <div className="bg-white w-full max-w-[450px] p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-[#29BA6A] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-green-100">
            <div className="w-4 h-4 bg-white rounded-sm animate-pulse"></div>
          </div>
          <h2 className="text-3xl font-extrabold text-[#1A1D1F]">
            Welcome Back
          </h2>
          <p className="text-[#6F767E] mt-2 font-medium">
            Log in to manage your workspace
          </p>
        </div>

        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-bold text-[#1A1D1F] mb-2 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#9A9FA5] group-focus-within:text-[#29BA6A] transition-colors">
                <MdOutlineEmail size={20} />
              </span>
              <input
                type="email"
                required
                className="w-full bg-[#F4F4F4] border-2 border-transparent focus:border-[#29BA6A]/20 focus:bg-white text-sm font-semibold text-[#1A1D1F] pl-12 pr-4 py-4 rounded-2xl transition-all outline-none"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-bold text-[#1A1D1F] mb-2 ml-1">
              Password
            </label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#9A9FA5] group-focus-within:text-[#29BA6A] transition-colors">
                <MdLockOutline size={20} />
              </span>
              <input
                type="password"
                required
                className="w-full bg-[#F4F4F4] border-2 border-transparent focus:border-[#29BA6A]/20 focus:bg-white text-sm font-semibold text-[#1A1D1F] pl-12 pr-4 py-4 rounded-2xl transition-all outline-none"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-bold text-white transition-all shadow-lg shadow-green-100 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1A1D1F] hover:bg-black active:scale-[0.98]"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-[#6F767E] text-sm mt-8 font-medium">
          Don't have an account?{" "}
          <span className="text-[#29BA6A] font-bold cursor-pointer hover:underline">
            Contact Admin
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
