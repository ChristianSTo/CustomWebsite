import React, { useState, useEffect, useRef } from "react";
import "../blocks/circle.css";
import Circle from "./Circle";
import avacadoToast from "../assets/images/avacadoToast.png";
import burger from "../assets/images/burger.png";
import ebiTempura from "../assets/images/ebiTempura.png";
import icecream from "../assets/images/icecream.png";
import kebabs from "../assets/images/kebabs.png";
import muShu from "../assets/images/muShu.png";
import mussels from "../assets/images/mussels.png";
import onigiri from "../assets/images/onigiri.png";
import pancakes from "../assets/images/pancakes.png";
import pizza from "../assets/images/pizza.png";
import shrimpCocktail from "../assets/images/shrimpCocktail.png";
import springRolls from "../assets/images/springRolls.png";
import steak from "../assets/images/steak.png";
import tofu from "../assets/images/tofu.png";
import udon from "../assets/images/udon.png";

function CircleCarousel() {
  //   const circles = new Array(31).fill(null);
  const circles = [
    { name: avacadoToast },
    { name: burger },
    { name: ebiTempura },
    { name: icecream },
    { name: kebabs },
    { name: muShu },
    { name: mussels },
    { name: onigiri },
    { name: pancakes },
    // { name: pizza },
    { name: shrimpCocktail },
    { name: springRolls },
    { name: steak },
    { name: tofu },
    { name: udon },
  ];
  const totalCircles = circles.length;
  const carouselRef = useRef(null);
  const maxSize = 1;
  const minSize = 0.01;

  const centerOrder = Math.floor(totalCircles / 2);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWheel = (event) => {
    // Determine scroll direction
    // if (event.deltaY > 0) {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCircles);
    // }
    // else {
    //   setActiveIndex(
    //     (prevIndex) => (prevIndex - 1 + totalCircles) % totalCircles
    //   );
    // }
  };

  useEffect(() => {
    const nextItemTimer = setInterval(() => {
      handleWheel();
    }, 2000);
    return () => clearInterval(nextItemTimer);
  }, []);

  return (
    <>
      {/* <h2 className="circle__title">Fun Art</h2> */}
      <ul className="circle__container" ref={carouselRef} onClick={handleWheel}>
        {circles.map((circle, index) => {
          let order = (index - activeIndex + totalCircles) % totalCircles;

          if (order > totalCircles / 2) {
            order = order - totalCircles;
          }
          const circleOrder = order;

          return (
            <li key={index} className="circle__item">
              <Circle
                circleImage={circle.name}
                order={circleOrder}
                number={index + 1}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CircleCarousel;
