import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { classNames, handleOutsideClick } from "./.shared/helpers";
import injectSheet from "react-jss";
import Dropdown from "./Dropdown";

// dropdown is a component that is shown absolutely, and that positions near its trigger

// TODO: add exceptions to handleoutsideclick
const Index = props => {
  const triggerRef = useRef();
  /* =================== Props ================== */
  const { children, content, classes: c } = props;
  const controlled = typeof children !== "function";
  /* =================== Hooks ================== */
  const [opened, setOpened] = useState(false);
  /* =================== Methods ================== */
  const open = () => setOpened(true);
  const close = () => setOpened(false);
  const toggle = () => setOpened(o => !o);

  return (
    <div>
      {opened && (
        <Dropdown
          ref={triggerRef}
          content={content}
          opened={opened}
          setOpened={setOpened}
        />
      )}
      <div ref={triggerRef} className={c.trigger}>
        {!controlled ? children({ open, close, toggle }, opened) : children}
      </div>
    </div>
  );
};

Index.defaultProps = {
  triggerMode: "click",
  onOutsideClick: l => l,
  onClick: l => l
};

const styles = {
  trigger: {
    border: "1px solid green"
  }
};
export default injectSheet(styles)(Index);
