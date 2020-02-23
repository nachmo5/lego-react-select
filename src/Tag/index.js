import React, { isValidElement } from "react";

// Components
import DefaultCloseIcon from "./CloseIcon";
import DefaultLabel from "../../.shared/Label";

// Styles
import injectSheet from "react-jss";
import styles from "./style";

import { classNames, filterKeys } from "../../../.shared/helpers";

const Tag = props => {
  const { classes: c, components, style, className, value } = props;

  return (
    <div className={classNames(c.root)}>
      <div className={c.label}>
        <Label style={style.label} className={className.label} value={value} />
      </div>
      <div className={c.closeIcon}>
        <CloseIcon style={style.closeIcon} className={className.closeIcon} />
      </div>
    </div>
  );
};

Tag.defaultProps = {
  components: {},
  style: {},
  className: "",
};

export default injectSheet(styles)(Tag);
