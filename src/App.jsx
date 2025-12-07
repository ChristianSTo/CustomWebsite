import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import "./App.css";
import Hero from "./components/Hero";
import CircleCarousel from "./components/CircleCarousel";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Glasses from "./Glasses";
import ControlLogger from "./ControlLogger"; // Import the new logger
import education from "./assets/images/education.png";
import skills from "./assets/images/skills.png";
import hobbies from "./assets/images/hobbies.png";
import passions from "./assets/images/passions.png";
import liliLogo from "./assets/images/LILIHonorsLogo.png";
import shirtMerch from "./assets/images/AnimeClubChosenDesign.jpg";
import catCareIcon from "./assets/images/CatCareIcon.png";
let TRANSITION_DURATION = 1.5;
function App() {
  const controlsRef = useRef();
  const [isEntered, setIsEntered] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [isWebsites, setIsWebsites] = useState(false);
  const [isArtwork, setIsArtwork] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const cardDataAbout = [
    { name: "Skills", src: skills },
    { name: "Education", src: education },
    { name: "Passions", src: passions },
    { name: "Hobbies", src: hobbies },
  ];
  const cardDataDesigns = [
    {
      name: `"Live It Learn It" Logo Design`,
      src: liliLogo,
      link: "https://www.liveitlearnit.org/honor-roll",
      description: `Live It Learn It (LILI) is an educational organization in Washington D.C. with a goal to rejuvenize education so children will attentively learn in accessible environments.
      
I was tasked to design a logo with a distinct identity for recurring supporters. They wanted a new logo as a branch without the design deviating too far from their main logo.`,
    },
    {
      name: "Animation Club Merch Design",
      src: shirtMerch,
      // link: "https://christiantoportfolio.wixsite.com/workportfolio/animeclub",
      description: `DESIGNED MERCHANDISE
      
My design was chosen and made into merchandise for the Animation/Anime Club. It was narrowed down to the top 3, where the members voted in a poll. There were around 40 participants; 36 shown and the rest were final decisions by the board.`,
    },
    {
      name: "Cat Care Indie Game Design",
      src: catCareIcon,
      link: "https://fallgazer.itch.io/cat-care",
      figma:
        "https://www.figma.com/design/ORQNi57R9UxWCZ3EBxRnNr/CatGame?node-id=0-1&p=f&t=2LhkYfuAhXvLuLB0-0",
      description: `I found a proactive group of people to work on an indie game together. The team has a main gameplay developer (Pratiksha Prakash) and a main artist (me).

I initiated the project, designed the gameplay concept, and created most of the artwork.`,
    },
  ];
  const animateCameraTo = (newCamPos, newTarget) => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;
    const controls = controlsRef.current;

    // Convert array coordinates to plain objects for GSAP
    const newCameraPosition = {
      x: newCamPos[0],
      y: newCamPos[1],
      z: newCamPos[2],
    };
    const newTargetPosition = {
      x: newTarget[0],
      y: newTarget[1],
      z: newTarget[2],
    };

    // Stop any active GSAP animations on the camera/controls
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);

    // 1. Animate the camera's position
    gsap.to(camera.position, {
      duration: TRANSITION_DURATION,
      ...newCameraPosition, // Use the new coordinates
      onUpdate: () => controls.update(),
      ease: "sine.out",
    });

    // 2. Animate the OrbitControls' target
    gsap.to(controls.target, {
      duration: TRANSITION_DURATION,
      ...newTargetPosition, // Use the new target
      onUpdate: () => controls.update(),
      ease: "sine.out",
    });
  };
  const cameraToMenu = () => {
    setIsMoving(true);
    TRANSITION_DURATION = 0.75;
    setControlsEnabled(false);
    // Coords for Menu View
    const camPos = [0, 0, 5];
    const target = [0, 0, 0];
    animateCameraTo(camPos, target);
    setTimeout(() => {
      setIsEntered(true);
      setIsMenu(true);
      setIsMoving(false);
    }, TRANSITION_DURATION * 1000);
  };
  const cameraToWebsites = () => {
    setIsMoving(true);

    TRANSITION_DURATION = 1;
    const camPos = [2.527, -2.907, 5.2];
    const target = [0.128, -0.167, 0.126];
    animateCameraTo(camPos, target);
    setIsMenu(false);
    setIsArtwork(false);
    setIsAbout(false);
    setTimeout(() => {
      setIsWebsites(true);
      setIsMoving(false);
    }, TRANSITION_DURATION * 1000);
  };
  const cameraToArtwork = () => {
    setIsMoving(true);
    TRANSITION_DURATION = 1;
    const camPos = [6.488, -1.978, 1.991];
    const target = [0.149, 0.035, -0.025];
    animateCameraTo(camPos, target);
    setIsMenu(false);
    setIsWebsites(false);
    setIsAbout(false);
    setTimeout(() => {
      setIsArtwork(true);
      setIsMoving(false);
    }, TRANSITION_DURATION * 1000);
  };
  const cameraToAbout = () => {
    setIsMoving(true);
    TRANSITION_DURATION = 1;
    // const camPos = [0.178, 6.805, -0.315];
    // const target = [0.194, 0.038, 0.272];
    // const camPos = [-0.847, 8.823, 0.886];
    // const target = [-0.758, 0.033, 0.881];
    const camPos = [1.646, -0.908, 5.844];
    const target = [0.149, 0.035, -0.025];
    animateCameraTo(camPos, target);
    setIsMenu(false);
    setIsArtwork(false);
    setIsWebsites(false);
    setTimeout(() => {
      setIsAbout(true);
      setIsMoving(false);
    }, TRANSITION_DURATION * 1000);
  };
  // Handler to reset to "Initial" view (example new button)
  const cameraToInitialView = () => {
    setIsMoving(true);
    // Initial Coords
    setTimeout(() => {
      setIsMoving(false);
      setControlsEnabled(true);
    }, TRANSITION_DURATION * 1000);

    // const camPos = [1.646, -0.908, 5.844];
    // const target = [0.149, 0.035, -0.025];
    const camPos = [-0.847, 8.823, 0.886];
    const target = [-0.758, 0.033, 0.881];
    animateCameraTo(camPos, target);
    setIsEntered(false);
    setIsMenu(false);
    setIsWebsites(false);
    setIsArtwork(false);
    setIsAbout(false);
  };
  return (
    <div className="app space">
      <Header
        enterHandler={cameraToMenu}
        websitesHandler={cameraToWebsites}
        artworkHandler={cameraToArtwork}
        aboutHandler={cameraToAbout}
        resetHandler={cameraToInitialView}
        isEntered={isEntered}
        isMenu={isMenu}
        isWebsites={isWebsites}
        isArtwork={isArtwork}
        isAbout={isAbout}
        isMoving={isMoving}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          margin: "0px auto",
        }}
      >
        {/* 
cameraX: "1.646", cameraY: "-1.386", cameraZ: "5.756", targetX: "0.149", targetY: "0.035", target:"-0.025" */}
        <Canvas
          style={{ backgroundColor: "#ffffff" }}
          // camera={{ position: [1.765, -2.663, 6.824] }}
          // camera={{ position: [1.646, -0.908, 5.844] }}
          camera={{ position: [-0.847, 8.823, 0.886] }}
          flat // Useful for consistent color display
          gl={{
            antialias: true,
            toneMapping: THREE.NoToneMapping,
          }}
        >
          {/* Add ambient light so the model isn't completely black */}
          <ambientLight intensity={1} />

          {/* Render the 3D model inside the Canvas */}
          <group rotation={[0, Math.PI / 4, 0]}>
            <Glasses scale={1} />
          </group>
          {/* Allows you to rotate the scene with your mouse/touch */}
          <OrbitControls
            ref={controlsRef}
            target={[-0.758, 0.033, 0.881]}
            enabled={controlsEnabled}
            enablePan={true}
            minDistance={5}
            maxDistance={15}
            mouseButtons={{
              LEFT: THREE.MOUSE.ROTATE,
              MIDDLE: THREE.MOUSE.DOLLY, // Dolly is zoom/in-out
              RIGHT: THREE.MOUSE.PAN, // Pan is left/right up/down movement
            }}
          />
          <ControlLogger orbitRef={controlsRef} />
        </Canvas>
      </div>{" "}
      {isArtwork ? (
        <>
          <CircleCarousel />
          <Grid cardData={cardDataDesigns} />
        </>
      ) : (
        <></>
      )}
      {isWebsites ? <Hero /> : <></>}
      {isAbout ? <Grid cardData={cardDataAbout} /> : <></>}
    </div>
  );
}

export default App;
