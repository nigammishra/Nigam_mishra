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
            href="https://www.instagram.com/mr-nigam-8199/"
            className="footer__social-link"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            className="footer__social-link"
          >
            <i className="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com/yourprofile"
            className="footer__social-link"
          >
            <i className="uil uil-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="footer__social-link"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://wa.me/8260821103"
            className="footer__social-link"
          >
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
