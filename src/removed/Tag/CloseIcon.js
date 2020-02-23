import React from "react";

// Styles
import injectSheet from "react-jss";
import { classNames } from "../../../.shared/helpers";

const styles = theme => ({
  root: {
    position: "relative",
    bottom: theme.SIZE * 0.1,
    cursor: "pointer",
    color: theme.GRAY,
    fontSize: theme.SIZE * 1.15,
    lineHeight: "100%",
    fontFamily: theme.FONT_FAMILY,
    "&:hover": {
      color: theme.PRIMARY_COLOR
    }
  }
});

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
  className: "",
};

export default injectSheet(styles)(CloseIcon);
