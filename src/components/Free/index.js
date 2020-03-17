import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDiv } from "./hooks";

const Free = props => {
  const { top, left, visible, content, style, className } = props;
  const containerRef = useDiv();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    containerRef.current && setContainer(containerRef.current);
  }, [containerRef]);

  if (!container) return <></>;

  const freeStyle = visible
    ? { position: "absolute", top, left }
    : { display: "none" };

  return ReactDOM.createPortal(
    <div style={{ ...freeStyle, ...style }} className={className}>
      {content}
    </div>,
    container
  );
};

Free.defaultProps = {
  style: {},
  className: "",
  top: 0,
  left: 0,
  visible: false
};

export default Free;
