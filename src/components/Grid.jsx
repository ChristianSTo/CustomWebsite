import React, { useState, useEffect, useRef } from "react";
import "../blocks/grid.css";
import Card from "./Card";
import taiOVillage from "../assets/images/TaiOVillage.jpg";
import education from "../assets/images/education.png";
import skills from "../assets/images/skills.png";
import hobbies from "../assets/images/hobbies.png";
import passions from "../assets/images/passions.png";

function Grid() {
  const cardData = [
    { name: "Skills", src: skills },
    { name: "Education", src: education },
    { name: "Passions", src: passions },
    { name: "Hobbies", src: hobbies },
  ];

  return (
    <div className="grid">
      <ul className="grid__container space">
        {cardData.map((card, index) => (
          <li key={index} className="grid__card">
            <Card cardName={card.name} cardImage={card.src} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grid;
