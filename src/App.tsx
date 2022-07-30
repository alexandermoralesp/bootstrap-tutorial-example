import { Routes, Route } from "react-router-dom"
import Landing from "./components/general/Landing";
import SignIn from "./components/general/SignIn";
import SignUp from "./components/general/SignUp";
import MainAdminDashboard from "./components/admin/MainAdminDashboard";
import StudentsAdminDashboard from "./components/admin/StudentsAdminDashboard";
import CoursesAdminDashboard from "./components/admin/CoursesAdminDashboard";
import Recovery from "./components/general/Recovery";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/recovery" element={<Recovery/>} />
        <Route path="/admin/dashboard" element={<MainAdminDashboard/>} />
        <Route path="/admin/students" element={<StudentsAdminDashboard/>} />
        <Route path="/admin/courses" element={<CoursesAdminDashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
