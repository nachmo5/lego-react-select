import React from "react";

import Label from "./Label";

const CloseIcon = props => {
  const { style, className } = props;

  return (
    <div
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
    >
      <Label value="x" />
    </div>
  );
};

CloseIcon.defaultProps = {
  style: {},
  className: ""
};

export default CloseIcon;
