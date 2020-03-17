import React, { useState, useRef } from "react";
import { useDiv } from "./.shared/hooks";
import Dropdown from "./Dropdown";

const Index = props => {
  /* =================== Props ================== */
  const { children, content, classes: c } = props;
  const controlled = typeof children !== "function";
  /* =================== Hooks ================== */
  const rootDiv = useDiv();
  const [opened, setOpened] = useState(false);
  /* =================== Methods ================== */
  const open = () => setOpened(true);
  const close = () => setOpened(false);
  const toggle = () => setOpened(o => !o);

  return (
    <div>
      {!controlled ? children({ open, close, toggle }, opened) : children}
      <Dropdown />
    </div>
  );
};

export default Index;
