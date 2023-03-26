import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import SocialLinks from "./components/sociallinks/SocialLinks";

function App() {
  return (
    <div id="parent-container" className="bg-bodyColor text-lightText px-4" >
      <Router basename="/Christopher-Zavala-React-Portfolio5">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <SocialLinks />
                </>
              }
            />

            <Route path="/features" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <SocialLinks />
          <div id="footer-bottom">
            <FooterBottom />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
