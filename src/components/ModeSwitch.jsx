import React, { useState, useEffect, useRef } from "react";
import "../blocks/mode-switch.css";
import "../App.css";

function ModeSwitch() {
  const [isLight, setIsLight] = useState(false);

  const switchMode = () => {
    setIsLight((prev) => !prev);
  };

  useEffect(() => {
    const root = document.getElementById("root");
    const buttons = document.querySelectorAll("button");

    if (isLight) {
      root.classList.add("light");
      buttons.forEach((button) => {
        button.classList.add("button_light");
      });
    } else {
      root.classList.remove("light");
      buttons.forEach((button) => {
        button.classList.remove("button_light");
      });
    }
  }, [isLight]);
  return (
    <>
      <button
        type="button"
        className="mode-switch__button button"
        onClick={switchMode}
      >
        Switch Mode
      </button>
    </>
  );
}

export default ModeSwitch;
