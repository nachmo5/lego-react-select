import React from "react";

// Styles
import injectSheet from "react-jss";

import { classNames } from "../../.shared/helpers";

const styles = theme => ({
  root: {
    lineHeight: "100%",
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.SIZE * 1.15
  }
});

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
  className: ""
};

export default injectSheet(styles)(Label);
