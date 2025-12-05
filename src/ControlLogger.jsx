import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ControlLogger({ orbitRef, onSettingsChange }) {
  const { camera } = useThree();
  const lastLoggedSettings = useRef(null);

  useFrame(() => {
    // Check if OrbitControls is mounted and has an enabled camera
    if (orbitRef.current && orbitRef.current.enabled) {
      const controls = orbitRef.current;

      // Get the camera's current position (rotation is implicit in the position/target)
      const currentPosition = camera.position.clone();

      // Get the current target (the point the camera is looking at)
      const currentTarget = controls.target.clone();

      // Format the settings into a readable object
      const currentSettings = {
        cameraX: currentPosition.x.toFixed(3),
        cameraY: currentPosition.y.toFixed(3),
        cameraZ: currentPosition.z.toFixed(3),
        targetX: currentTarget.x.toFixed(3),
        targetY: currentTarget.y.toFixed(3),
        targetZ: currentTarget.z.toFixed(3),
      };

      // Simple check to only log when settings change significantly
      if (JSON.stringify(currentSettings) !== lastLoggedSettings.current) {
        lastLoggedSettings.current = JSON.stringify(currentSettings);

        // Use the callback to update parent state or just log directly
        // If you want to use state: onSettingsChange(currentSettings);

        // Log to console for debugging and finding desired views
        console.log("Camera Settings:", currentSettings);
      }
    }
  });

  return null; // This component is purely logic, rendering nothing visible
}

export default ControlLogger;
