
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> 

           
          
            
            


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