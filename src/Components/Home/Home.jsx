import React, { useState, useEffect } from "react";
import {  RotatingTriangles } from 'react-loader-spinner'; // Use the correct loader
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { Helmet } from 'react-helmet';

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
    <Helmet>
        {/* Title and Meta Tags for SEO */}
        <title>Nigam's Portfolio - Frontend Ace Developer</title>
        <meta name="description" content="Nigam Mishra's portfolio showcasing frontend development projects, including React, JavaScript, and more." />
        <meta name="keywords" content="Nigam, frontend ace, portfolio, React developer, web development, JavaScript, CSS, HTML, Bhubaneswar" />

        {/* Open Graph meta tags for better sharing */}
        <meta property="og:title" content="Nigam's Portfolio - Frontend Ace Developer" />
        <meta property="og:description" content="Explore the top frontend projects by Nigam Mishra, including tourism management systems and modern web design." />
        <meta property="og:image" content="https://github.com/user-attachments/assets/f3e10850-1740-4b2a-97f6-25b9449eaecf" />
        <meta property="og:url" content="https://nigammishra.github.io/Nigam_Portfolio2/" />
      </Helmet>
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
