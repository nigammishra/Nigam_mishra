import React, { useEffect, useState } from 'react'
import "./work.css"
import Works from './Works'
import { RotatingTriangles } from 'react-loader-spinner';

const Work = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader will be visible for 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
   <>
   {loading ? (
      <div className="loader-container">
         <RotatingTriangles
            visible={true}
            height="100"
            width="100"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            // color={isDarkMode ? '#ffffff' : '#000000'}  // Change the color based on mode
          />
      </div>
    ) : (
   <section className="work section" id='portfolio'>
    <h2 className='section__title'>Portfolio</h2>
    <span className='section__subtitle'>My Collection</span>
    <Works />
   </section>
    )}
        </>
  )
}

export default Work
