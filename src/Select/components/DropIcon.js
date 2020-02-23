import React from "react";

import Label from "./Label";
import { Icon } from "antd";

// Styles
import injectSheet from "react-jss";

import { classNames } from "../.shared/helpers";

const styles = theme => ({
  root: {
    height: theme.size,
    lineHeight: theme.size + "px",
    cursor: "pointer",
    paddingLeft: 3,
    paddingRight: 3,
    color: theme.gray,
    "&:hover": {
      color: theme.primaryColor
    }
  }
});

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
