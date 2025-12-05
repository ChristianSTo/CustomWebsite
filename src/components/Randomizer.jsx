import React, { useState, useEffect, useRef } from "react";
import "../blocks/randomizer.css";
import RandomizerSlots from "./RandomizerSlots";

function Randomizer() {
  const [randNums] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [output, setOutput] = useState([0, 0, 0]);
  const [spin, setSpin] = useState(false);
  const numberRef = useRef(null);

  const generateRandNumbers = () => {
    //if it is spinning, do nothing
    if (spin) return;

    setSpin(true);

    const outcome = Array.from({ length: 3 }, () => {
      return randNums[Math.floor(Math.random() * randNums.length)];
    });

    let index = 0;

    const interval = setInterval(() => {
      setOutput([index, index, index]);
      index = (index + 1) % 10;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setOutput(outcome);
      setSpin(false);
    }, 1250);
  };

  return (
    <div className="randomizer">
      <h2 className="randomizer__title">Randomizer</h2>
      <button
        type="button"
        className="randomizer__button button"
        onClick={generateRandNumbers}
      >
        Generate Random Number:
      </button>

      <div className="randomizer__container">
        <RandomizerSlots output={output} spin={spin} time={100} />
      </div>
    </div>
  );
}

export default Randomizer;
