import React, { useEffect } from "react";
import "./scrollup.css";

const Scrollup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 340) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scrollup" onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default Scrollup;
