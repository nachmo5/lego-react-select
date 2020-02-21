import React from "react";

// Styles
import injectSheet from "react-jss";

import { classNames } from "../../../.shared/helpers";
import { CONFIG } from "../../../.shared/constants";

const styles = {
  root: {
    fontSize: CONFIG.FONT_SIZE,
    lineHeight: "100%",
    color: CONFIG.PRIMARY_COLOR,
    fontFamily: CONFIG.FONT_FAMILY
  }
};

const Label = props => {
  const { classes: c, style, className, value } = props;

  return (
    <div className={classNames(c.root, className)} style={style}>
      {value}
    </div>
  );
};

Label.defaultProps = {
  components: {},
  style: {},
  className: {}
};

export default injectSheet(styles)(Label);
