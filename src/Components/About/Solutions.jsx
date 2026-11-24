
import React, { useRef, useEffect } from "react";
// import "./Solutions.css";

const Solutions = () => {
  const cardsRef = useRef([]);

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

  const solutions = [
    {
      category: "Nature-based solutions",
      title: <>Forest & peatland<br />carbon projects</>,
      description:
        "Continuous flux measurement replaces sampled estimates, so credits reflect what the land actually absorbs.",
      image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261106_025630_9a37a1e0-2547-4973-8160-c75205993914.png&w=1400&q=82",
      position: "22% 70%",
      backgroundSize: "260%",
    },
    {
      category: "Supply chain solutions",
      title: <>Scope 3 sourcing<br />verification</>,
      description:
        "Trace commodities to the plots that grew them, with deforestation-free evidence attached to every shipment.",
      image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261106_025545_b003e5cc-e68f-4fee-b686-c217a5d81eea.png&w=1400&q=82",
      position: "50% 50%",
      backgroundSize: "190%",
    },
    {
      category: "Biodiversity credits",
      title: <>Living species<br />baselines</>,
      description:
        "Acoustic and eDNA monitoring builds a measurable biodiversity baseline you can report against year over year.",
      image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261106_025630_9a37a1e0-2547-4973-8160-c75205993914.png&w=1400&q=82",
      position: "62% 30%",
      backgroundSize: "230%",
    },
  ];

//   const stats = [
//     { count: "1,240", label: "Sensors deployed" },
//     { count: "38", label: "Countries monitored" },
//     { count: "2.1", label: "Mt CO₂e verified" },
//     { count: "99.4%", label: "% Data uptime" },
//   ];

  return (
    <section className="nigam-sol-section" id="solutions">

      <div className="nigam-sol-head">
        <div>
          <span className="nigam-sol-chip">Our solutions</span>

          <h2>
            Validating what the ecosystem does naturally
          </h2>
        </div>

        <p>
          Field sensors, atmospheric flux towers and satellite data fused into
          one auditable record — so every tonne you report can be traced back
          to the ground it came from.
        </p>
      </div>

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

      {/* <div className="nigam-sol-stats">

        {stats.map((stat, index) => (
          <div className="nigam-sol-stat" key={index}>
            <strong>{stat.count}</strong>
            <span>{stat.label}</span>
          </div>
        ))}

      </div> */}

    </section>
  );
};

export default Solutions;
