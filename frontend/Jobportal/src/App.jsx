import Protectedroutes from "./routes/Protectedroutes";  
import EmployerDashboard from "./pages/Employer/EmployerDashboard";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage/Landingpage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard";
import JobDetails from "./pages/JobSeeker/JobDetails";
import SavedJobs from "./pages/JobSeeker/SavedJobs";
import Userprofile from "./pages/JobSeeker/Userprofile";
import JobPostingForm from "./pages/Employer/JobPostingForm";
import Managejob from "./pages/Employer/Managejob";
import ApplicationViewer from "./pages/Employer/ApplicationViewer";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> 

          <Route path="/find-jobs" element={<JobSeekerDashboard />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/profile" element={<Userprofile />} />

          <Route element={<Protectedroutes requiredRole="employer" />}>
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/post-job" element={<JobPostingForm />} />
            <Route path="/manage-job" element={<Managejob />} />
            <Route path="/applicants" element={<ApplicationViewer/>} />
            <Route path="/company-profile" element={<EmployerProfilePage/>} />
            </Route>
            


          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
         
        </Routes>
      </Router>



       <Toaster
       toastOptions={{
        className: "",
        style: {
          fontSize: "13px",
        },
      }}
      />
    </div>
  )
}

export default App