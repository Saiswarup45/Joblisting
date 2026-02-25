import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import JobsPage from "./pages/Jobs/JobsPage";

const App = () => {
  return (
    <div>

      {/* react-hot-toast */}
      <Toaster
        position="top-right"
      />

      <Router>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<JobsPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Router>

    </div>
  );
};

export default App;