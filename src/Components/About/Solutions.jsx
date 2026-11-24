
import React, { useRef, useEffect } from "react";
// import "./Solutions.css";

import frontendImg from "../../assets/aboutcard/frontend.png";
import sapImg from "../../assets/aboutcard/sap.png";
import innovationImg from "../../assets/aboutcard/innovation.png";

const Solutions = ({ isDarkMode }) => {
  const cardsRef = useRef([]);

  // 3D Card Tilt Animation
  useEffect(() => {
    const cards = cardsRef.current;

    const handlePointerMove = (e, card) => {
      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `
        perspective(1000px)
        rotateY(${x * 6}deg)
        rotateX(${-y * 6}deg)
      `;
    };

    const handlePointerLeave = (card) => {
      card.style.transform = "";
    };

    cards.forEach((card) => {
      if (!card) return;

      const moveHandler = (e) => handlePointerMove(e, card);
      const leaveHandler = () => handlePointerLeave(card);

      card.addEventListener("pointermove", moveHandler);
      card.addEventListener("pointerleave", leaveHandler);

      card._moveHandler = moveHandler;
      card._leaveHandler = leaveHandler;
    });

    return () => {
      cards.forEach((card) => {
        if (!card) return;

        card.removeEventListener("pointermove", card._moveHandler);
        card.removeEventListener("pointerleave", card._leaveHandler);
      });
    };
  }, []);

  // About Cards Content
  const solutions = [
    {
      category: "Frontend Development",
      title: (
        <>
          Building Digital
          <br />
          Experiences
        </>
      ),
      description:
        "Creating responsive, interactive, and visually engaging web experiences using React.js, JavaScript, and modern frontend technologies.",
      image: frontendImg,
      position: "center",
      backgroundSize: "cover",
    },
    {
      category: "SAP S/4HANA – PP",
      title: (
        <>
          Understanding Business
          <br />
          Processes
        </>
      ),
      description:
        "Exploring end-to-end production planning, from master data and BOM to MRP, routing, production execution, and TECO.",
      image: sapImg,
      position: "center",
      backgroundSize: "cover",
    },
    {
      category: "Problem Solving & Innovation",
      title: (
        <>
          Turning Ideas Into
          <br />
          Solutions
        </>
      ),
      description:
        "Combining analytical thinking, creativity, and technical knowledge to solve real-world challenges and build practical solutions.",
      image: innovationImg,
      position: "center",
      backgroundSize: "cover",
    },
  ];

  return (
    <section className="nigam-sol-section container" id="solutions">

      {/* Section Heading */}
      <div className="nigam-sol-head">
        <div>
          <span className="nigam-sol-chip">What I Do</span>

          <h2>
            Combining technology, creativity & business understanding
          </h2>
        </div>

        <p  color={isDarkMode ? '#ffffff' : '#000000'}>
          From building modern, responsive web applications to understanding
          SAP S/4HANA production planning, I enjoy turning ideas into practical
          solutions through technology, continuous learning, and
          problem-solving.
        </p>
      </div>

      {/* About Cards */}
      <div className="nigam-sol-cards">
        {solutions.map((solution, index) => (
          <article
            className="nigam-sol-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className="nigam-sol-card-bg"
              style={{
                backgroundImage: `url("${solution.image}")`,
                backgroundPosition: solution.position,
                backgroundSize: solution.backgroundSize,
              }}
            />

            <div className="nigam-sol-card-top">
              <span className="nigam-sol-bracket">
                [{solution.category}]
              </span>

              <span className="nigam-sol-circle">→</span>
            </div>

            <div className="nigam-sol-card-copy">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default Solutions;
