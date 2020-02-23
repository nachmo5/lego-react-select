import React, { isValidElement } from "react";

// Styles
import injectSheet from "react-jss";
import DefaultLabel from "./Label";
import { classNames, filterKeys } from "../Select/.shared/helpers";

const styles = theme => ({
  root: {
    display: "inline-flex",
    height: "100%",
    // border
    border: "1px solid " + theme.gray,
    borderRadius: "4px",
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
    marginRight: 5
  },
  closeIcon: {}
});

const Tag = props => {
  const { classes: c, style, className, value, components } = props;
  // -components
  const { closeIcon, label } = components;
  const CloseIcon = isValidElement(closeIcon) ? closeIcon : DefaultLabel;
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
      <div className={c.closeIcon}>
        <CloseIcon
          style={style.closeIcon}
          className={className.closeIcon}
          value="x"
        />
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
