import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import SocialLinks from "./components/sociallinks/SocialLinks";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Router basename="/Christopher-Zavala-React-Portfolio5">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
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
          {/* <Footer /> */}
          <FooterBottom />
        </div>
      </Router>
    </div>
  );
}

export default App;
