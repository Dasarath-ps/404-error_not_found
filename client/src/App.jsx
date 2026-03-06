import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InterRoom from "./pages/InterRoom.jsx";
import Candidate from "./pages/Candidate.jsx";

const App = () => {
  return (
    <div className="w-100 h-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interroom" element={<InterRoom />} />
        <Route path="/joinroom" element={<Candidate />} />
      </Routes>
    </div>
  );
};

export default App;
