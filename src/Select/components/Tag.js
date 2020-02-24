import React, { isValidElement } from "react";

// Styles
import injectSheet from "react-jss";

import { classNames, filterKeys } from "../.shared/helpers";
import DefaultLabel from "./Label";
import DefaultCloseIcon from "./CloseIcon";

const styles = theme => ({
  root: {
    display: "inline-flex",
    height: "100%",
    // border
    border: "1px solid " + theme.gray,
    borderRadius: theme.borderRadius,
    // padding
    paddingLeft: 7,
    paddingRight: 7,
    // Remove selection
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none"
  },
  label: {
    marginRight: 5,
    color: theme.primaryColor,
    fontFamily: theme.fontFamily
  },
  closeIcon: {
    cursor: "pointer",
    color: theme.gray,
    "&:hover": {
      color: theme.primaryColor
    }
  }
});

const Tag = props => {
  const { classes: c, style, className, value, components } = props;
  // -components
  const { closeIcon, label } = components;
  const CloseIcon = isValidElement(closeIcon) ? closeIcon : DefaultCloseIcon;
  const Label = isValidElement(label) ? label : DefaultLabel;
  // -styles
  const containerStyle = filterKeys(style, ["closeIcon", "label"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      <div className={c.label}>
        <Label
          style={style.label}
          className={className.label}
          value={value}
          centerY
        />
      </div>
      <div className={c.closeIcon} onClick={e => e.stopPropagation()}>
        <CloseIcon style={style.closeIcon} className={className.closeIcon} />
      </div>
    </div>
  );
};

Tag.defaultProps = {
  components: {},
  style: {},
  className: ""
};

export default injectSheet(styles)(Tag);
