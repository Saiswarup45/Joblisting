import { Search, Handshake, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleFindJob = () => {
    navigate("/jobs");
  };

  return (
    <section className="relative py-24 bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      
      <div className="container mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Dream Job Today
        </h1>

        <p className="text-gray-200 max-w-2xl mx-auto mb-10">
          Discover thousands of opportunities and connect with top companies.
        </p>

        <button
          onClick={handleFindJob}
          className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          Find Job
        </button>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-xl">
            <Search className="w-10 h-10 mb-4 text-blue-400 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Seamless Search
            </h3>
            <p className="text-gray-200 text-sm">
              Explore thousands of opportunities with intelligent filters.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-xl">
            <Handshake className="w-10 h-10 mb-4 text-purple-400 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Connect & Apply
            </h3>
            <p className="text-gray-200 text-sm">
              Directly apply or network with top companies.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-xl">
            <TrendingUp className="w-10 h-10 mb-4 text-indigo-400 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Grow Your Career
            </h3>
            <p className="text-gray-200 text-sm">
              Access resources for skill development and growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;