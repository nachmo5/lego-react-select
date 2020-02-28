import React from "react";

import { Icon } from "antd";

// Styles
import injectSheet from "react-jss";

import { classNames } from "../.shared/helpers";

const styles = theme => ({
  root: {
    height: 12,
    width: 12,
    border: "1px solid",
    borderColor: theme.gray,
    background: "white",
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      border: "1px solid " + theme.primaryColor
    }
  },
  icon: {
    fontSize: 8
  },
  checked: {
    background: theme.primaryColor,
    borderColor: theme.primaryColor,
    color: "white"
  }
});

const Checkbox = props => {
  const { classes: c, style, className, checked, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={classNames(c.root, className, [c.checked, checked])}
      style={style}
    >
      {checked && <Icon type="check" className={c.icon} />}
    </div>
  );
};

Checkbox.defaultProps = {
  style: {},
  className: "",
  checked: false,
  onClick: l => l
};

export default injectSheet(styles)(Checkbox);
