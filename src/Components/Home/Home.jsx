import React, { useState, useEffect } from "react";
import {  RotatingTriangles } from 'react-loader-spinner'; // Use the correct loader
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = ({ isDarkMode }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loader will be visible for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`home section ${isDarkMode ? "dark-mode" : ""}`} id="home">
      {loading ? (
        <div className="loader-container">
           <RotatingTriangles
              visible={true}
              height="100"
              width="100"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              color={isDarkMode ? '#ffffff' : '#000000'}  // Change the color based on mode
            />
        </div>
      ) : (
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"> </div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      )}
    </section>
  );
};

export default Home;
