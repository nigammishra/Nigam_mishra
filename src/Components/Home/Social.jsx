import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://x.com/nigammishra1103"
        className="home__social-icon"
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Improves security when opening external links
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://www.instagram.com/mr_nigam_8199" // Replace this with your Instagram profile link
        className="home__social-icon"
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Improves security when opening external links
      >
        <i className="uil uil-instagram"></i>{" "}
        {/* Class name for Instagram icon */}
      </a>

      <a
        href="https://github.com/nigammishra"
        className="home__social-icon"
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Improves security when opening external links
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nigam-mishra-2379642ab/"
        className="home__social-icon"
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Improves security when opening external links
      >
        <i className="uil uil-linkedin-alt"></i>{" "}
        {/* Corrected class name for LinkedIn icon */}
      </a>
    </div>
  );
};

export default Social;
