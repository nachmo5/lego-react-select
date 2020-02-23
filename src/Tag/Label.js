import React from "react";

// Styles
import injectSheet from "react-jss";

import { classNames } from "../Select/.shared/helpers";
const styles = theme => {
  console.log(theme);

  return {
    root: {
      display: "flex",
      border: "1px solid black",
      width: "100%",
      height: "100%",
      fontFamily: "Helvetica !important",
      color: theme.primaryColor,
      fontSize: theme.fontSize
    },
    centerX: {
      justifyContent: "center"
    },
    centerY: {
      alignItems: "center"
    }
  };
};

const Label = props => {
  const { classes: c, style, className, value, centerX, centerY } = props;

  return (
    <div
      className={classNames(
        c.root,
        className,
        [c.centerX, centerX],
        [c.centerY, centerY]
      )}
      style={style}
    >
      {value}
    </div>
  );
};

Label.defaultProps = {
  centerX: false,
  centerY: false,
  style: {},
  className: "",
};

export default injectSheet(styles)(Label);
