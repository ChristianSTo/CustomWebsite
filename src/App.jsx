import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import "./App.css";
import Hero from "./components/Hero";
import CircleCarousel from "./components/CircleCarousel";
import Header from "./components/Header";
import Glasses from "./Glasses";
import ControlLogger from "./ControlLogger"; // Import the new logger

const TRANSITION_DURATION = 1.5;
function App() {
  const controlsRef = useRef();
  const [isEntered, setIsEntered] = useState(false);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [isWebsites, setIsWebsites] = useState(false);
  const [isArtwork, setIsArtwork] = useState(false);

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
      ease: "power2.inOut",
    });

    // 2. Animate the OrbitControls' target
    gsap.to(controls.target, {
      duration: TRANSITION_DURATION,
      ...newTargetPosition, // Use the new target
      onUpdate: () => controls.update(),
      ease: "power2.inOut",
    });
  };
  const cameraToMenu = () => {
    setIsEntered(true);
    setControlsEnabled(false);
    // Coords for Menu View
    const camPos = [0, 0, 5];
    const target = [0, 0, 0];
    animateCameraTo(camPos, target);
  };
  const cameraToWebsites = () => {
    // Coords for Detail View (e.g., looking close at the glasses)
    const camPos = [2.527, -2.907, 5.2];
    const target = [0.128, -0.167, 0.126];
    animateCameraTo(camPos, target);
    setIsWebsites(true);
    setIsArtwork(false);
  };
  const cameraToArtwork = () => {
    // Coords for Detail View (e.g., looking close at the glasses)
    const camPos = [6.488, -1.978, 1.991];
    const target = [0.149, 0.035, -0.025];
    animateCameraTo(camPos, target);
    setIsArtwork(true);
    setIsWebsites(false);
  };
  // Handler to reset to "Initial" view (example new button)
  const cameraToInitialView = () => {
    // Initial Coords
    setIsEntered(false);
    setIsWebsites(false);
    setIsArtwork(false);
    setControlsEnabled(true);
    const camPos = [1.646, -0.908, 5.844];
    const target = [0.149, 0.035, -0.025];
    animateCameraTo(camPos, target);
  };
  return (
    <div className="app space">
      <Header
        enterHandler={cameraToMenu}
        websitesHandler={cameraToWebsites}
        artworkHandler={cameraToArtwork}
        resetHandler={cameraToInitialView}
        isEntered={isEntered}
        isWebsites={isWebsites}
        isArtwork={isArtwork}
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
          camera={{ position: [1.646, -0.908, 5.844] }}
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
            target={[0.149, 0.035, -0.025]}
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
      {isArtwork ? <CircleCarousel /> : <></>}
      {isWebsites ? <Hero /> : <></>}
    </div>
  );
}

export default App;
