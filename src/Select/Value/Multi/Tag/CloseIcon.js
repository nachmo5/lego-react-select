import React from "react";

// Styles
import injectSheet from "react-jss";
import { classNames } from "../../../.shared/helpers";
import { CONFIG } from "../../../.shared/constants";

const styles = {
  root: {
    position: "relative",
    bottom: CONFIG.FONT_SIZE * 0.1,
    cursor: "pointer",
    color: CONFIG.GRAY,
    fontSize: CONFIG.FONT_SIZE * 1.15,
    lineHeight: "100%",
    fontFamily: CONFIG.FONT_FAMILY,
    "&:hover": {
      color: CONFIG.PRIMARY_COLOR
    }
  }
};

const CloseIcon = props => {
  const { classes: c, style, className } = props;

  return (
    <div className={classNames(c.root, className)} style={style}>
      x
    </div>
  );
};

CloseIcon.defaultProps = {
  components: {},
  style: {},
  className: {}
};

export default injectSheet(styles)(CloseIcon);
