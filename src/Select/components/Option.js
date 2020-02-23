import React from "react";
import Label from "./Label";

import injectSheet from "react-jss";
import { classNames } from "../.shared/helpers";

const styles = theme => ({
  root: {}
});

const Option = props => {
  const { classes: c, value, style, className } = props;
  return (
    <div style={style} className={classNames(c.root, className)}>
      <Label value={value} />
    </div>
  );
};

Option.defaultProps = {
  onClick: l => l
};

export default injectSheet(styles)(Option);
