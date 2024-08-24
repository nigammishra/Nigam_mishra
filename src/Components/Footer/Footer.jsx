import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Adjust path if needed
import "./footer.css";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="footer__container">
        <h1 className="footer__title">Nigam Mishra</h1>
        <ul className="footer__list">
          <li>
            <a href="/about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="/work" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            {/* <a href="#testimonials" className="footer__link">
              Testimonial
            </a> */}
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://x.com/nigammishra1103"
            className="footer__social-link"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security when opening external links
          >
            <i className="uil uil-twitter-alt"></i>
          </a>
          <a
            href="https://www.instagram.com/mr_nigam_8199" // Replace this with your Instagram profile link
            className="footer__social-link"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security when opening external links
          >
            <i className="uil uil-instagram"></i>{" "}
            {/* Class name for Instagram icon */}
          </a>

          <a
            href="https://github.com/nigammishra"
            className="footer__social-link"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security when opening external links
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nigam-mishra-2379642ab/"
            className="footer__social-link"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security when opening external links
          >
            <i className="uil uil-linkedin-alt"></i>{" "}
            {/* Corrected class name for LinkedIn icon */}
          </a>
          <a href="https://wa.me/8260821103" className="footer__social-link">
            <i className="uil uil-whatsapp"></i>
          </a>
        </div>
        <span className="footer__copy">
          &copy; FrontEnd Ace. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
