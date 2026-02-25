import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import API from "../api/axios.js";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  
  const [showPassword, setShowPassword] = useState(false);

  // Email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password strength
  const isStrongPassword = (password) =>
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

   
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.role) {
    toast.error("All fields are required");
    return;
  }

  if (!isValidEmail(formData.email)) {
    toast.error("Invalid email format");
    return;
  }

  if (!isStrongPassword(formData.password)) {
    toast.error("Password must be 8+ chars, include uppercase & number");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    const res = await API.post("register/", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    toast.success(res.data.message);

    setTimeout(() => {
      navigate("/login");
    }, 1500);

  } catch (error) {

    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Server error");
    }

  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-300" />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-300"
            />
          </div>

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
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-300" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
            />
          </div>

          
          {/* Role Selection */}
          <div>
            <p className="text-sm text-gray-300 mb-2">I am a</p>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "jobseeker" })}
                className={`p-4 rounded-lg border ${
                  formData.role === "jobseeker"
                    ? "border-indigo-400 bg-indigo-500/20"
                    : "border-white/20 bg-white/10"
                }`}
              >
                Job Seeker
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "employer" })}
                className={`p-4 rounded-lg border ${
                  formData.role === "employer"
                    ? "border-indigo-400 bg-indigo-500/20"
                    : "border-white/20 bg-white/10"
                }`}
              >
                Employer
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 active:scale-95 transition duration-200"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-white font-semibold cursor-pointer hover:underline"
          >
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;