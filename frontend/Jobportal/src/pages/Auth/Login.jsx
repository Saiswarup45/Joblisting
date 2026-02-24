import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../api/axios";

const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {

      toast.error("Please fill all fields");
      return;

    }

    try {

      const res = await API.post("/login/", formData);

      toast.success(res.data.message);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/");

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.error ||
        "Server not responding"
      );

    }

  };

 
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Login to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-300" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
            />

            <div
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-300" />
              ) : (
                <Eye className="w-5 h-5 text-gray-300" />
              )}
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="hover:text-white transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 active:scale-95 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-white font-semibold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;