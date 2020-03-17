import React, { useEffect, useRef } from "react";

export const useDiv = () => {
  const ref = useRef();
  useEffect(() => {
    const createdDiv = document.createElement("div");
    createdDiv.className = "lego-root-div";
    createdDiv.style.position = "absolute";
    createdDiv.style.top = 0;
    createdDiv.style.left = 0;
    document.body.appendChild(createdDiv);
    ref.current = createdDiv;
    return () => ref.current.remove();
  }, []);
  return ref;
};
