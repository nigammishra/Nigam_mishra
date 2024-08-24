import React, { useContext } from "react";
import { ThemeContext } from '../../ThemeContext'; // Adjust path if necessary
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

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext); // Use useContext to get dark mode state

  return (
    <section className={`skills section ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id="skills">
      <h2 className={`section__title ${isDarkMode ? 'dark-mode-title' : 'light-mode-title'}`}>Skills</h2>
      <span className={`section__subtitle ${isDarkMode ? 'dark-mode-subtitle' : 'light-mode-subtitle'}`}>My Technical Skillset</span>
      <div className="skills__icons grid container">
        <DiReact size={50} color="#61DAFB" />
        <DiNodejs size={50} color="#8CC84B" />
        <DiCss3 size={50} color="#1572B6" />
        <DiHtml5 size={50} color="#E34F26" />
        <DiResponsive size={50} color="#E34F26" />
        <DiGithub size={50} color={isDarkMode ? "#FFFFFF" : "#181717"} />
        <DiBootstrap size={50} color="#563D7C" />
        <DiJava size={50} color="#F80000" />
        <DiJavascript1 size={50} color="#F7DF1E" />
        <DiMongodb size={50} color="#4DB33D" />
        <DiPython size={50} color="#306998" />
        <DiGit size={50} color="#F1502F" />
      </div>
      <span className="section__subtitle" style={{ marginTop: "40px" }}>
        Tools I Use
      </span>
      <div className={`skills__icons grid container ${isDarkMode ? 'icon-dark-mode' : 'icon-light-mode'}`}>
        <SiVisualstudiocode size={50} color="#007ACC" />
        <SiWindows11 size={50} color="#0078D4" />
        <SiMacos size={50} color={isDarkMode ? "#FFFFFF" : "#000000"} />
        <SiCodechef size={50} color="#5B4638" />
        <SiSharp size={50} color="#C0C0C0" />
        <SiPostman size={50} color="#FF6C37" />
        <SiLeetcode size={50} color="#F3CA40" />
        <SiNotepadplusplus size={50} color="#5C2D91" />
      </div>
    </section>
  );
};

export default Skills;
