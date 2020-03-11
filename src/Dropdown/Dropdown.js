import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import injectSheet from "react-jss";
import { classNames } from "./.shared/helpers";
import { useRootDiv } from "./.shared/hooks";

const Dropdown = React.forwardRef((props, anchorRef) => {
  const rootDiv = useRootDiv();
  const containerRef = useRef();
  const { opened } = props;
  const { content, classes: c } = props;
  const [position, setPosition] = React.useState({});
  const [dimensions, setDimensions] = React.useState({});

  useEffect(() => {
    const sayHi = e => {
      console.log(e.target);
      console.log("outside anchor ", !anchorRef.current.contains(e.target));
      console.log(
        "outside dropdown ",
        !containerRef.current.contains(e.target)
      );
      if (
        !anchorRef.current.contains(e.target) &&
        !containerRef.current.contains(e.target)
      ) {
        props.setOpened(false);
      }
    };

    document.addEventListener("mousedown", sayHi);
    return () => document.removeEventListener("mousedown", sayHi);
  });

  React.useEffect(() => {
    const rects = anchorRef.current.getBoundingClientRect();
    const container = { top: rects.top, left: rects.left };
    const phantomTrigger = { width: rects.width, height: rects.height };
    setPosition(container);
    setDimensions(phantomTrigger);
  }, [anchorRef]);

  if (!rootDiv.current) return <></>;
  return ReactDOM.createPortal(
    <div className={classNames(c.overlay, [c.hidden, !opened])}>
      <div
        className={classNames(c.container)}
        style={position}
        ref={containerRef}
      >
        <div style={dimensions} />
        <div className={classNames(c.content)}>{content}</div>
      </div>
    </div>,
    rootDiv.current
  );
});

const styles = {
  overlay: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,100,120,0.4)",
    position: "fixed"
  },
  container: {
    position: "absolute",
    border: "1px solid #eaf"
  },
  hidden: {
    display: "none",
    background: "red"
  },
  trigger: {
    border: "1px solid green"
  }
};
export default injectSheet(styles)(Dropdown);
