import React, { useState, useCallback } from "react";
import useEventListener from "./useEventListener";

const MouseMove = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", handler);

  return (
    <h1 className="mouse-move">
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
};

export default MouseMove;
