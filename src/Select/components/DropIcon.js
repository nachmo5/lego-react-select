import React from "react";

import Label from "./Label";
import Icon from "antd";

// Styles
import injectSheet from "react-jss";

import { classNames } from "../.shared/helpers";

const styles = {
  root: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  centerX: {
    justifyContent: "center"
  },
  centerY: {
    alignItems: "center"
  }
};

const DropIcon = props => {
  const { classes: c, style, className } = props;

  return (
    <div className={classNames(c.root, className)} style={style}>
      <Label
        value={
          <Icon
            type="down"
            style={{
              display: "flex",
              alignItems: "center"
            }}
          />
        }
      />
    </div>
  );
};

DropIcon.defaultProps = {
  style: {},
  className: ""
};

export default injectSheet(styles)(DropIcon);
