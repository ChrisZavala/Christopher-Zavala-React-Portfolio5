import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  // Define a component that includes the Footer
  const PageWithFooter = ({ children }) => (
    <>
      {children}
      <div id="footer-bottom">
        <Footer />
      </div>
    </>
  );

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<PageWithFooter><Features /></PageWithFooter>} />
      <Route path="/projects" element={<PageWithFooter><Projects /></PageWithFooter>} />
      <Route path="/resume" element={<PageWithFooter><Resume /></PageWithFooter>} />
      <Route path="/contact" element={<PageWithFooter><Contact /></PageWithFooter>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;
