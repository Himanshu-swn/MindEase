import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
// import ProjectedRoute from "./ProjectedRoute";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
// import VideoChat from "../components/VideoChat/VideoChat";
import Services from "../pages/Services";
import Appointments from "../pages/Appointments";
import Depression from "../pages/tests/Depression"
import Anxiety from "../pages/tests/Anxiety"
import ResultsPage from "../pages/tests/Results";
import PTSDTest from "../pages/tests/PTSD";
import MeetingRoom from "../components/videoCall/MeetingRoom";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      
      <Route path="/services" element={<Services />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/test/depression" element={<Depression />} />
      <Route path="/test/anxiety" element={<Anxiety />} />
      <Route path="/test/ptsd" element={<PTSDTest />} />
      <Route path="/results" element={<ResultsPage />} />

      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/meeting/:meetingId" element={<MeetingRoom />} />
      {/* <Route path="/video_chat" element={<VideoChat />} /> */}
    </Routes>
  );
};

export default Routers;
