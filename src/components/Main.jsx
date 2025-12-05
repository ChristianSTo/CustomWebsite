import React, { useState, useEffect, useRef } from "react";
import "../blocks/main.css";

import Randomizer from "./Randomizer";
import Hero from "./Hero";
import Grid from "./Grid";
import BackGrid from "./BackGrid";
import Puddle from "./Puddle";
import ModeSwitch from "./ModeSwitch";
import CircleCarousel from "./CircleCarousel";

function Main() {
  return (
    <section className="main space">
      {/* <ModeSwitch /> */}
      <CircleCarousel />
      {/* <Randomizer /> */}
      {/* <Grid /> */}
      {/* <BackGrid /> */}
      <Hero />
    </section>
  );
}

export default Main;
