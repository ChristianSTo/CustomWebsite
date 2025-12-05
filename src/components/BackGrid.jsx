import React, { useState, useEffect, useRef } from "react";
import "../blocks/backgrid.css";
import Particle from "./Particle";
import chopsticks from "../assets/images/chopsticks.svg";

function BackGrid() {
  const [month, setMonth] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const particles = new Array(31).fill(null);
  return (
    <div className="backgrid space">
      <h2 className="backgrid__title">Calendar</h2>
      <ul className="backgrid__container">
        <li className="backgrid__parts">
          {particles.map((_, index) => (
            <Particle key={index} number={index + 1} />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default BackGrid;
