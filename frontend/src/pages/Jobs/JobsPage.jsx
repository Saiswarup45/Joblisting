import { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Building2,
  Briefcase,
  IndianRupee,
  CalendarDays,
} from "lucide-react";

import jobs from "../../data/Jobs.json";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const JobsPage = () => {

  const navigate = useNavigate();


  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const [loading] = useState(false);


  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      job.title?.toLowerCase().includes(search.toLowerCase()) &&
      job.company?.toLowerCase().includes(company.toLowerCase()) &&
      job.location?.toLowerCase().includes(location.toLowerCase())
    );
  }, [search, company, location]);


  const JobPerPage = 6;

  const [CurrentPage, setCurrentPage] = useState(1);

  const LastPage = CurrentPage * JobPerPage;
  const FirstPage = LastPage - JobPerPage;

  const CurrentJobs = filteredJobs.slice(FirstPage, LastPage);

  const totalPages = Math.ceil(filteredJobs.length / JobPerPage);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);


  const handleApply = (job) => {

  const user = localStorage.getItem("user");

  if (!user) {
    toast.error("Please login first");
    navigate("/login");
    return;
  }

  toast.success(`Applied successfully to ${job.title}`);
  console.log("Applied to job:", job);

};



  return (

    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16">

      <div className="max-w-6xl mx-auto px-6">



        <h1 className="text-4xl font-bold mb-8 text-center">
          Explore Jobs
        </h1>


        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 mb-10 shadow-lg">

          <div className="grid md:grid-cols-4 gap-4">




            <div className="flex items-center bg-white/20 rounded-lg px-3">

              <Search size={18} />

              <input
                type="text"
                placeholder="Job title"
                className="bg-transparent p-2 w-full outline-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />

            </div>



            <div className="flex items-center bg-white/20 rounded-lg px-3">

              <Building2 size={18} />

              <input
                type="text"
                placeholder="Company"
                className="bg-transparent p-2 w-full outline-none"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  setCurrentPage(1);
                }}
              />

            </div>



            <div className="flex items-center bg-white/20 rounded-lg px-3">

              <MapPin size={18} />

              <input
                type="text"
                placeholder="Location"
                className="bg-transparent p-2 w-full outline-none"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setCurrentPage(1);
                }}
              />

            </div>



            <button
              onClick={() => {
                setSearch("");
                setCompany("");
                setLocation("");
              }}
              className="bg-white text-indigo-700 font-semibold rounded-lg px-4 py-2 hover:scale-105 transition"
            >
              Clear
            </button>


          </div>

        </div>




        {loading ? (

          <p className="text-center">
            Loading...
          </p>

        ) : CurrentJobs.length === 0 ? (

          <p className="text-center">
            No jobs found
          </p>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">


            {CurrentJobs.map((job) => (

              <div
                key={job.id}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg hover:scale-105 transition"
              >

                <h2 className="text-xl font-semibold mb-2">
                  {job.title}
                </h2>


                <div className="flex items-center gap-2 text-sm text-gray-300">

                  <Building2 size={16} />

                  {job.company}

                </div>


                <div className="flex items-center gap-2 text-sm text-gray-300">

                  <MapPin size={16} />

                  {job.location}

                </div>



                <div className="flex items-center gap-2 text-sm text-gray-300">

                  <Briefcase size={16} />

                  {job.job_type}

                </div>



                <div className="flex items-center gap-2 text-sm text-green-300">

                  <IndianRupee size={16} />

                  {job.salary || "Not disclosed"}

                </div>


                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">

                  <CalendarDays size={16} />

                  {job.posted_date || "Recently posted"}

                </div>


                <div className="flex flex-wrap gap-2 mb-3">

                  {job.skills_required?.map((skill, index) => (

                    <span
                      key={index}
                      className="bg-indigo-500/30 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>

                  ))}

                </div>


                <p className="text-sm text-gray-200 line-clamp-3">

                  {job.description}

                </p>


                <button
                  onClick={() => handleApply(job)}
                  className="mt-4 bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Apply Now
                </button>


              </div>

            ))}


          </div>

        )}


        {/* Pagination */}

        {totalPages > 1 && (

          <div className="flex justify-center mt-10 gap-2">

            {[...Array(totalPages)].map((_, index) => (

              <button
                key={index}
                onClick={() => pagination(index + 1)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  CurrentPage === index + 1
                    ? "bg-white text-indigo-700"
                    : "bg-white/20"
                }`}
              >
                {index + 1}
              </button>

            ))}

          </div>

        )}


      </div>

    </div>

  );

};

export default JobsPage;