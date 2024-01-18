import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Members from "./components/Members";
import Projects from "./components/Projects";
import MemberDetails from "./components/MemberDetails";
import AddMembers from "./components/AddMember";

import "@fortawesome/fontawesome-free/css/all.css";

export default function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/add-members" element={<AddMembers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/member/:id" element={<MemberDetails />} />
        </Routes>
      </main>
    </Router>
  );
}