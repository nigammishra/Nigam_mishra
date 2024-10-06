import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Adjust path if needed
import blackLogo from "../../assets/blacklogo.png"; // Light mode logo
import whiteLogo from "../../assets/whitelogo.png"; // Dark mode logo
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="footer__container">
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div class="col-md-6">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="col-12" style={{ display: "contents" }}>
                <Link to="/Nigam_mishra/" className="">
                  <img
                    src={isDarkMode ? whiteLogo : blackLogo}
                    alt="logo"
                    style={{ width: "200px" }}
                  />
                </Link>
              </div>
            </div>

            <ul className="footer__list">
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="footer__link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <h1 className="footer__title">Nigam Mishra</h1>
            <div className="footer__social">
              <Link
                to="https://x.com/nigammishra1103"
                className="footer__social-link"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Improves security when opening external links
              >
                <i className="uil uil-twitter-alt"></i>
              </Link>
              <Link
                to="https://www.instagram.com/mr_nigam_8199" // Replace this with your Instagram profile link
                className="footer__social-link"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Improves security when opening external links
              >
                <i className="uil uil-instagram"></i>{" "}
                {/* Class name for Instagram icon */}
              </Link>

              <Link
                to="https://github.com/nigammishra"
                className="footer__social-link"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Improves security when opening external links
              >
                <i className="uil uil-github-alt"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/nigam-mishra-2379642ab/"
                className="footer__social-link"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Improves security when opening external links
              >
                <i className="uil uil-linkedin-alt"></i>{" "}
                {/* Corrected class name for LinkedIn icon */}
              </Link>
              <Link
                to="https://wa.me/8260821103"
                className="footer__social-link"
              >
                <i className="uil uil-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>

        <span className="footer__copy">
          &copy; {new Date().getFullYear()} FrontEnd Ace. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
