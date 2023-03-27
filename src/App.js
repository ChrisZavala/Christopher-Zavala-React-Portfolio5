import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SocialLinks from "./components/sociallinks/SocialLinks";
import AnimatedRoutes from "./components/animated/AnimatedRoutes";

function App() {
  
  return (
    <div id="parent-container" className="bg-bodyColor text-lightText px-4">
      <Router basename="/Christopher-Zavala-React-Portfolio5">
        <Navbar />
        <SocialLinks />
        <div className="max-w-screen-xl mx-auto">
          <AnimatedRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
