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
          <img src="assets\readme\01.png" alt="" />
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
                <Link to="/Nigam_Portfolio2/" className="">
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
                <a href="/contact" className="footer__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <h1 className="footer__title">Nigam Mishra</h1>
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
              <a
                href="https://wa.me/8260821103"
                className="footer__social-link"
              >
                <i className="uil uil-whatsapp"></i>
              </a>
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
