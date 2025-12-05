import React, { useState, useEffect, useRef } from "react";
import "../blocks/grid.css";
import Card from "./Card";
import taiOVillage from "../assets/images/TaiOVillage.jpg";
import HongKongPeak from "../assets/images/HongKongPeak.jpg";

function Grid() {
  const cardData = [
    { name: "Skills", src: "src2" },
    { name: "Education", src: "src2" },
    { name: "Career", src: "src2" },
    { name: "Passions", src: "src3" },
    { name: "Hobbies", src: taiOVillage },
    { name: "Values", src: "src3" },
    { name: "My Dream", src: HongKongPeak },
  ];

  return (
    <div className="grid">
      <h2 className="grid__title">About Me</h2>
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
