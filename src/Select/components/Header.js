import React from "react";
import Label from "./Label";

import injectSheet from "react-jss";
import { classNames } from "../.shared/helpers";

const styles = theme => ({
  root: {}
});

const Header = props => {
  const { classes: c, value, style, className } = props;
  return (
    <div style={style} className={classNames(c.root, className)}>
      <Label value={value} />
    </div>
  );
};

Header.defaultProps = {
  onClick: l => l
};

export default injectSheet(styles)(Header);
