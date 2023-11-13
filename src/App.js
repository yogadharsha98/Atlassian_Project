import React from "react";
import { BrowserRouter as Router, Routes, Route,Switch } from "react-router-dom";
import Home from "./screens/Home";
import Progress from "./screens/Progress";
import Completed from "./screens/Completed";
import Enroll from "./screens/Enroll";
import './index.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/training" element={<Training_Dashboard />} />
        <Route path="/progress" element={<Course_Progress />} />
      </Routes>
    </>
  );
}

export default App;

