import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import { ThemeContext } from "../../ThemeContext"; // Adjust path if necessary
import "./skill.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiBootstrap,
  DiCss3,
  DiGithub,
  DiResponsive,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiNotepadplusplus,
  SiLeetcode,
  SiPostman,
  SiSharp,
  SiCodechef,
  SiMacos,
  SiWindows11,
} from "react-icons/si";
import { RotatingTriangles } from "react-loader-spinner";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  // Simulate loading time with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nigam Mishra's Portfolio - My Skills</title>
        <meta
          name="description"
          content="Discover the technical skills of Nigam Mishra, a frontend developer specializing in React.js, Node.js, JavaScript, MongoDB, and more. View the full skillset in web development and modern technologies."
        />
        <meta
          name="keywords"
          content="Nigam Mishra, React.js developer, frontend developer, Node.js, JavaScript, HTML, CSS, MongoDB, Git, Python, Java, GitHub, Visual Studio Code, Bootstrap, web development, technical skills"
        />
        <meta name="author" content="Nigam Mishra" />

        <meta
          property="og:title"
          content="Nigam Mishra's Portfolio - My Skills"
        />
        <meta
          property="og:description"
          content="Explore the full technical skillset of Nigam Mishra, specializing in modern web development technologies like React, JavaScript, Node.js, and more."
        />
        <meta
          property="og:image"
          content="https://github.com/user-attachments/assets/f3e10850-1740-4b2a-97f6-25b9449eaecf"
        />
        <meta
          property="og:url"
          content="https://nigammishra.github.io/skills"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      {loading ? (
        <div className="loader-container">
          <RotatingTriangles
            visible={true}
            height="100"
            width="100"
            ariaLabel="hourglass-loading"
            color={isDarkMode ? "#ffffff" : "#000000"}
          />
        </div>
      ) : (
        <section
          className={`skills section ${
            isDarkMode ? "dark-mode" : "light-mode"
          }`}
          id="skills"
        >
          <h2
            className={`section__title ${
              isDarkMode ? "dark-mode-title" : "light-mode-title"
            }`}
          >
            Skills
          </h2>
          <span
            className={`section__subtitle ${
              isDarkMode ? "dark-mode-subtitle" : "light-mode-subtitle"
            }`}
          >
            My Technical Skillset
          </span>
          <div className="skills__icons grid container">
            {/* Skills Icons */}
            <div className="icon-container">
              <DiReact size={50} color="#61DAFB" />
              <span className="tooltip-text">React.js</span>
            </div>
            <div className="icon-container">
              <DiNodejs size={50} color="#8CC84B" />
              <span className="tooltip-text">Node.js</span>
            </div>
            <div className="icon-container">
              <DiCss3 size={50} color="#1572B6" />
              <span className="tooltip-text">CSS</span>
            </div>
            <div className="icon-container">
              <DiHtml5 size={50} color="#E34F26" />
              <span className="tooltip-text">HTML</span>
            </div>
            <div className="icon-container">
              <DiResponsive size={50} color="#E34F26" />
              <span className="tooltip-text">Responsive</span>
            </div>
            <div className="icon-container">
              <DiGithub size={50} color={isDarkMode ? "#FFFFFF" : "#181717"} />
              <span className="tooltip-text">GitHub</span>
            </div>
            <div className="icon-container">
              <DiBootstrap size={50} color="#563D7C" />
              <span className="tooltip-text">Bootstrap</span>
            </div>
            <div className="icon-container">
              <DiJava size={50} color="#F80000" />
              <span className="tooltip-text">Java</span>
            </div>
            <div className="icon-container">
              <DiJavascript1 size={50} color="#F7DF1E" />
              <span className="tooltip-text">JavaScript</span>
            </div>
            <div className="icon-container">
              <DiMongodb size={50} color="#4DB33D" />
              <span className="tooltip-text">MongoDB</span>
            </div>
            <div className="icon-container">
              <DiPython size={50} color="#306998" />
              <span className="tooltip-text">Python</span>
            </div>
            <div className="icon-container">
              <DiGit size={50} color="#F1502F" />
              <span className="tooltip-text">Git</span>
            </div>
          </div>

          <span className="section__subtitle" style={{ marginTop: "40px" }}>
            Tools I Use
          </span>
          <div
            className={`skills__icons grid container ${
              isDarkMode ? "icon-dark-mode" : "icon-light-mode"
            }`}
          >
            {/* Tools Icons */}
            <div className="icon-container">
              <SiVisualstudiocode size={50} color="#007ACC" />
              <span className="tooltip-text">Visual Studio Code</span>
            </div>
            <div className="icon-container">
              <SiWindows11 size={50} color="#0078D4" />
              <span className="tooltip-text">Windows</span>
            </div>
            <div className="icon-container">
              <SiMacos size={50} color={isDarkMode ? "#FFFFFF" : "#000000"} />
              <span className="tooltip-text">MacOS</span>
            </div>
            <div className="icon-container">
              <SiCodechef size={50} color="#5B4638" />
              <span className="tooltip-text">CodeChef</span>
            </div>
            <div className="icon-container">
              <SiSharp size={50} color="#C0C0C0" />
              <span className="tooltip-text">Sharp</span>
            </div>
            <div className="icon-container">
              <SiPostman size={50} color="#FF6C37" />
              <span className="tooltip-text">Postman</span>
            </div>
            <div className="icon-container">
              <SiLeetcode size={50} color="#F3CA40" />
              <span className="tooltip-text">LeetCode</span>
            </div>
            <div className="icon-container">
              <SiNotepadplusplus size={50} color="#5C2D91" />
              <span className="tooltip-text">Notepad++</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Skills;
