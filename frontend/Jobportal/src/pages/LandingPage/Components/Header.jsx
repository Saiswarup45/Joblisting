import React from "react";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticated = true;
  const user = { fullName: "ROHIT", role: "employer" };
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer"
               onClick={() => navigate("/")}>
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-wide">
              jobPortal
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => navigate("/find-jobs")}
              className="relative text-gray-600 font-medium transition hover:text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-2px after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Find Jobs
            </button>

            <button
              onClick={() =>
                navigate(
                  isAuthenticated && user?.role === "employer"
                    ? "/employer-dashboard"
                    : "/login"
                )
              }
              className="relative text-gray-600 font-medium transition hover:text-purple-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-2px after:bg-purple-600 after:transition-all hover:after:w-full"
            >
              For Employers
            </button>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200">
                <span className="text-gray-700 text-sm font-medium">
                  Welcome, <span className="font-semibold">{user?.fullName}</span>
                </span>

                <button
                  onClick={() =>
                    navigate(
                      user?.role === "employer"
                        ? "/employer-dashboard"
                        : "/find-jobs"
                    )
                  }
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
                >
                  Dashboard
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
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

