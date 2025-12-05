import React, { useState, useEffect, useRef } from "react";
import "../blocks/puddle.css";

function Puddle() {
  const puddleRef = useRef(null);
  const [waveStyle, setWaveStyle] = useState({});
  const [isMoving, setIsMoving] = useState(false);
  const [isStill, setIsStill] = useState(false);

  //pageX tracks the location of the evt's x coords relative to the page
  useEffect(() => {
    // generates a random number from 1 to 2
    // const randScale = Math.floor(Math.random() * 2 + 1);

    let stopMoving;

    const handleClick = (evt) => {
      const spaces = document.querySelectorAll(".space");

      console.log(evt.target);
      spaces.forEach((space) => {
        if (evt.target !== space) {
          return;
        }
      });

      if (isMoving || isStill) return;

      setIsMoving(true);

      const waveX = evt.pageX;
      const waveY = evt.pageY;

      //this tells the browser to do these simultaneously
      requestAnimationFrame(() => {
        setWaveStyle({
          left: `${waveX - puddleRef.current.offsetWidth / 2}px `,
          top: `${waveY - puddleRef.current.offsetHeight / 2}px `,
          // transform: `scale(${randScale})`,
        });
      });

      clearTimeout(stopMoving);

      stopMoving = setTimeout(() => {
        setIsMoving(false);
        setIsStill(true);
        setTimeout(() => setIsStill(false), 800);
      }, 800);
    };
    document.addEventListener("click", handleClick);
    // document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("click", handleClick);
      // document.removeEventListener("mouseup", handleMouseUp);

      clearTimeout(stopMoving);
    };
  }, [isStill]);

  const handlePuddleClick = (evt) => {
    evt.stopPropagation();
  };
  return (
    <div
      className={`puddle ${isMoving ? "animate" : ""} ${
        isStill ? "stopAnimate" : ""
      }`}
      ref={puddleRef}
      style={waveStyle}
      onClick={handlePuddleClick}
    ></div>
  );
}

export default Puddle;
