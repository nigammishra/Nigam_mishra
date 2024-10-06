import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import "./work.css";
import Works from './Works';
import { RotatingTriangles } from 'react-loader-spinner';

const Work = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loader will be visible for 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Nigam Mishra's Portfolio - My Works</title>
        <meta
          name="description"
          content="Explore Nigam Mishra's portfolio showcasing a collection of frontend development projects using React, JavaScript, and modern web design techniques."
        />
        <meta
          name="keywords"
          content="Nigam Mishra portfolio, frontend developer, React projects, web development, JavaScript, CSS, HTML"
        />
        <meta
          name="author"
          content="Nigam Mishra"
        />
        <meta property="og:title" content="Nigam Mishra's Portfolio - My Works" />
        <meta
          property="og:description"
          content="View Nigam Mishra's portfolio featuring a range of projects built using React, JavaScript, and modern web development practices."
        />
        <meta
          property="og:image"
          content="https://github.com/user-attachments/assets/f3e10850-1740-4b2a-97f6-25b9449eaecf" // Replace with a link to your portfolio's featured image
        />
        <meta property="og:url" content="https://nigammishra.github.io/work" /> {/* Replace with your actual URL */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Main content */}
      {loading ? (
        <div className="loader-container">
          <RotatingTriangles
            visible={true}
            height="100"
            width="100"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <section className="work section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">My Collection</span>
          <Works />
        </section>
      )}
    </>
  );
};

export default Work;
