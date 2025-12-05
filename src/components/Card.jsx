import React, { useState, useEffect, useRef } from "react";
import "../blocks/card.css";

function Card({ cardName, cardImage }) {
  const cardRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const [cardStyle, setCardStyle] = useState({});
  const [isScroll, setIsScroll] = useState(false);

  //array of hex codes based on the color scheme

  const hexCodes = [{ code: `3b28cc` }, { code: `1C5D99` }, { code: `56203D` }];

  // script to indicate hover state, must use since normal css cannot use random numbers

  const cardHover = () => {
    setIsHover(true);
  };

  const cardUnHover = () => {
    setIsHover(false);
  };

  const cardClick = () => {
    if (!isClicked && isClickable) {
      setIsClicked(true);

      setCardStyle({
        top: `33.33%`,
        left: `50%`,
        transform: `translateX(-50%) scale(2)`,
      });

      setIsClickable(false);
    }
  };

  const cardClose = () => {
    if (isClicked) {
      //reset position and states after card is closed
      setIsClicked(false);
      setCardStyle({
        transform: `rotate(0deg) translateY(0px) scale(1.00)`,
        opacity: 1,
        transform: `scale(1)`,
        borderRadius: `20px`,
      });
      setIsClickable(true);
    }
  };

  useEffect(() => {
    const scroll = () => {
      // render cards when scrolled between 200 and 1500 px away from the top of the window
      if (!isHover) {
        if (window.scrollY > 200 && window.scrollY <= 1500) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      }
    };
    window.addEventListener("scroll", scroll);

    // afterwards, stop listening and stop
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [isHover, isScroll]);

  useEffect(() => {
    // use a random time to stagger card rendering
    const randTime = Math.random() * 1500;

    if (isScroll) {
      const scrollTimer = setTimeout(() => {
        cardRef.current.classList.add("card_scroll");
      }, randTime);
      return () => clearTimeout(scrollTimer);
    }
  }, [isScroll]);

  useEffect(() => {
    // console.log("Hover:", isHover);
    // console.log("Clicked:", isClicked);
    // console.log("Scroll:", isScroll);

    // generates a random number from -2.5 to + 2.5 for the rotation of card
    const randDeg = Math.random() * 5 - 2.5;

    // generates a random number from 1 to + 3 for the color of card
    const randHex = Math.floor(Math.random() * hexCodes.length);

    // if hovered and not clicked
    if (isHover && !isClicked) {
      setCardStyle({
        transform: `rotate(${randDeg}deg) translateY(8px) scale(1.025)`,
        backgroundColor: `#${hexCodes[randHex].code}`,
        opacity: 1,
        borderRadius: `20px`,
      });
      // if not hovered, not clicked and is rendered by isScroll...
    } else if (!isHover && !isClicked && isScroll) {
      setCardStyle({
        transform: `rotate(0deg) translateY(0px) scale(1.00)`,
        opacity: 1,
        borderRadius: `20px`,
      });
      setIsClicked(false);
    }
  }, [isHover]);

  return (
    <div className={`card__holder ${isScroll ? "scroll" : ""}`}>
      <div
        className={`card
        ${isClicked ? "active" : ""}
        ${isScroll ? "scroll" : ""} `}
        ref={cardRef}
        onMouseEnter={cardHover}
        onMouseLeave={cardUnHover}
        onClick={cardClick}
        style={cardStyle}
      >
        <p className="card__name">{cardName}</p>
        <img className="card__image" src={cardImage} alt={cardName}></img>
      </div>
      <div
        className={`card__overlay ${isClicked ? "active" : ""}`}
        onClick={cardClose}
      />
    </div>
  );
}

export default Card;
