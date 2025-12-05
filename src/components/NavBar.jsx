import React, { useState, useEffect, useRef } from "react";
import "../blocks/navbar.css";
import avacadoToast from "../assets/images/avacadoToast.png";

function NavBar() {
  const sections = [{ name: avacadoToast }];

  return (
    <>
      <div className="nav__container">
        <button className="nav__button">Tech Projects</button>
        <button className="nav__button">Art Projects</button>
        <button className="nav__button">About Me</button>
      </div>
    </>
  );
}

export default NavBar;
