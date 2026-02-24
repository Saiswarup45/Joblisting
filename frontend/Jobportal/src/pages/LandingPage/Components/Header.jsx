import React from "react";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; // Adjust path as needed
import { toast } from "react-toastify";

const Header = () => {
  const { user, logout } = useAuth(); // Get actual auth state
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleDashboardClick = () => {
    if (user?.role === "employer") {
      navigate("/employer-dashboard");
    } else if (user?.role === "jobseeker") {
      navigate("/find-jobs");
    } else {
      navigate("/dashboard"); // Default dashboard
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-wide">
              jobPortal
            </span>
          </div>

          {/* Navigation - Show based on auth status */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => navigate("/find-jobs")}
              className="relative text-gray-600 font-medium transition hover:text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Find Jobs
            </button>

            <button
              onClick={() => {
                if (user?.role === "employer") {
                  navigate("/employer-dashboard");
                } else if (user) {
                  toast.info("Switch to employer account to access this");
                } else {
                  navigate("/login?redirect=employer");
                }
              }}
              className="relative text-gray-600 font-medium transition hover:text-purple-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full"
            >
              For Employers
            </button>

            {/* Show additional nav items when logged in */}
            {user && (
              <button
                onClick={() => navigate("/saved-jobs")}
                className="relative text-gray-600 font-medium transition hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all hover:after:w-full"
              >
                Saved Jobs
              </button>
            )}
          </nav>

          {/* Right Side - Dynamic based on auth */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* User Menu for logged in users */}
                <div className="flex items-center space-x-4 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200">
                  <div className="flex items-center space-x-2">
                    {/* User Avatar/Initial */}
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {user.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Welcome back,</span>
                      <span className="text-gray-700 text-sm font-semibold">
                        {user.name?.split(' ')[0] || 'User'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Dashboard Button - Changes based on role */}
                    <button
                      onClick={handleDashboardClick}
                      className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
                    >
                      {user.role === 'employer' ? 'Dashboard' : 'My Jobs'}
                    </button>

                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="text-gray-600 hover:text-red-600 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Non-authenticated buttons */
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;