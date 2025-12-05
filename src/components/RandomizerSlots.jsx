import React, { useState, useEffect, useRef } from "react";
import "../blocks/randomizer.css";

function RandomizerSlots({ output, spin, time }) {
  const numberRef = useRef(null);

  useEffect(() => {
    if (spin) {
      setTimeout(() => {
        numberRef.current.classList.add("randomizer__number_spin");
      }, time);
      return () => clearTimeout();
    }
  }, [spin, time]);

  return (
    <div className="randomizer__slot">
      {output.map((slot, index) => (
        <div
          ref={numberRef}
          key={index}
          className={`randomizer__number ${
            spin ? "randomizer__number_spin" : ""
          }`}
        >
          {slot}
        </div>
      ))}
    </div>
  );
}

export default RandomizerSlots;
