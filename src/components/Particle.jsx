import React, { useState, useEffect, useRef } from "react";
import "../blocks/particle.css";
import chopsticks from "../assets/images/chopsticks.svg";

function Particle({ number }) {
  const particleRef = useRef(null);
  const [particleStyle, setParticleStyle] = useState({});
  const [currentDirection, setCurrentDirection] = useState([
    "up",
    "right",
    "down",
    "left",
  ]);
  const [direction, setDirection] = useState("X");
  const [xSign, setXSign] = useState("");
  const [ySign, setYSign] = useState("");
  const distance = 15;

  useEffect(() => {
    let previousX = 0;
    let previousY = 0;

    if (particleRef.current) {
      const currentParticle = particleRef.current.getBoundingClientRect();

      const handleMoveMouse = (evt) => {
        if (evt.clientX < currentParticle.left) {
          setCurrentDirection("right");
          setXSign("");
        } else if (evt.clientX > currentParticle.right) {
          setCurrentDirection("left");
          setXSign("-");
        }
        if (evt.clientY - previousY > 0) {
          setCurrentDirection("up");
          setYSign("");
        } else if (evt.clientY - previousY < 0) {
          setCurrentDirection("down");
          setYSign("-");
        }

        previousX = evt.clientX;
        previousY = evt.clientY;
      };
      document.addEventListener("mousemove", handleMoveMouse);

      return () => {
        document.removeEventListener("mousemove", handleMoveMouse);
      };
    }
  }, []);

  const hoverParticle = () => {
    if (currentDirection === "right") {
      setDirection("X");
    } else if (currentDirection === "up" || currentDirection === "down") {
      setDirection("Y");
    }
    setParticleStyle({
      color: "#fff",
      backgroundColor: "red",
      boxShadow: `${xSign}10px 10px 2.5px rgba(0,0,0,.15)`,
      transform: `translate(${xSign}${distance}px, ${ySign}${distance}px)`,
    });
  };

  const unHoverParticle = () => {
    setParticleStyle({});
  };

  return (
    <>
      <div
        className="particle"
        ref={particleRef}
        style={particleStyle}
        onMouseEnter={hoverParticle}
        onMouseLeave={unHoverParticle}
        // onClick={closeChopsticks}
      >
        <p>{number}</p>
      </div>
    </>
  );
}

export default Particle;
