import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import "./App.css";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
// import Qualification from "./Components/Qualification/Qualification";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Scrollup from "./Components/Scroll-Up/Scrollup";
import Work from "./Components/Work/Work";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const App = () => {
  const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext

  // Apply the dark-mode class to the body element
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/Nigam_Portfolio2/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/qualification" element={<Qualification />} /> */}
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Scrollup />
    </Router>
  );
};

export default App;
