import React, { useState, useEffect, useRef } from "react";
import "../blocks/grid.css";
import Card from "./Card";

function Grid({ cardData }) {
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
