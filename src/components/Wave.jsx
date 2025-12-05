import React, { useState, useEffect, useRef } from "react";
import "../blocks/wave.css";

function Wave() {
  const waveRef = useRef(null);
  const [waveStyle, setWaveStyle] = useState({});
  const [isMoving, setIsMoving] = useState(false);

  //pageX tracks the location of the evt's x coords relative to the page
  useEffect(() => {
    let stopMoving;

    const handleMoveMouse = (evt) => {
      setIsMoving(true);

      const waveX = evt.pageX;
      const waveY = evt.pageY;

      setWaveStyle({
        left: `${waveX - waveRef.current.offsetWidth / 2}px `,
        top: `${waveY - waveRef.current.offsetHeight / 2}px `,
      });
      if (stopMoving) {
        clearTimeout(stopMoving);
      }

      stopMoving = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    document.addEventListener("mousemove", handleMoveMouse);

    return () => {
      document.removeEventListener("mousemove", handleMoveMouse);
      clearTimeout(stopMoving);
      setIsMoving(false);
    };
  }, []);
  return (
    <div
      className={`wave ${isMoving ? "animate" : ""}`}
      ref={waveRef}
      style={waveStyle}
    ></div>
  );
}

export default Wave;
