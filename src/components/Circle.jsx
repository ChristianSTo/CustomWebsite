import React, { useState, useEffect, useRef } from "react";
import "../blocks/circle.css";

function Circle({ circleImage, order, number }) {
  const circleRef = useRef(null);
  const [circleStyle, setCircleStyle] = useState({
    backgroundImage: `url(${circleImage})`,
    order: order,
    borderRaidus: "50%",
    zIndex: 1,
  });

  useEffect(() => {
    if (circleRef.current) {
      const computedStyle = window.getComputedStyle(circleRef.current);
      const orderValue = computedStyle.getPropertyValue("order");
      console.log("The computed order is:", orderValue);
      if (orderValue === "0") {
        console.log(circleRef.current);
        setCircleStyle({
          backgroundImage: `url(${circleImage})`,
          order: order,
          top: "40%",
          left: "50%",
          right: "unset",
          borderRadius: "10%",
          transform: "scale(1) translateX(-50%)",
          zIndex: 2,
        });
      } else {
        setCircleStyle({
          backgroundImage: `url(${circleImage})`,
          order: order,
          top: `${0.3333}%`,
          borderRadius: "50%",
          transform: `scale(${0.15})`,
          zIndex: 0,
        });
      }
    }
  }, [order]);

  return (
    <div ref={circleRef} className={`circle`} style={circleStyle}>
      {/* <p>{number}</p> */}
      <div></div>
    </div>
  );
}

export default Circle;
