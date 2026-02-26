import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }
    try {
      const res = await axios.post(
        "https://task-api-eight-flax.vercel.app/api/login",
        {
          email: email,
          password: password,
        },
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      const token = res.data.token || "dummy-token";
      localStorage.setItem("token", token);
      setUser(res.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="btn btn-neutral mt-4">
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
