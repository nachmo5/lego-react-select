import React, { useEffect, useRef } from "react";

export const useDiv = () => {
  const rootRef = useRef();
  useEffect(() => {
    const rootDiv = document.createElement("div");
    rootDiv.id = "lego" + Math.floor(Math.random() * Date.now());
    rootDiv.style.position = "absolute";
    rootDiv.style.top = 0;
    rootDiv.style.left = 0;
    document.body.appendChild(rootDiv);
    rootRef.current = rootDiv;
    return () => rootRef.current.remove();
  }, []);
  return rootRef;
};
