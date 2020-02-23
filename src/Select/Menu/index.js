import React, { isValidElement } from "react";

import DefaultGroup from "./Group";
import DefaultFlat from "./Flat";

// Styles
import injectSheet from "react-jss";
import { filterKeys, classNames } from "../.shared/helpers";

const styles = theme => ({
  root: {
    width: "100%",
    background: "white",
    maxHeight: theme.menuMaxHeight,
    overflowX: "hidden",
    overflowY: "auto",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",

    WebkitBoxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    MozBoxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)"
  }
});

const Menu = props => {
  const { classes: c, options, groupped, style, components, className } = props;

  // -components
  const { flat, group } = components;
  const Flat = isValidElement(flat) ? flat : DefaultFlat;
  const Group = isValidElement(group) ? group : DefaultGroup;
  // -styles
  const containerStyle = filterKeys(style, ["flat", "group"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {groupped ? <Group groups={options} /> : <Flat options={options} />}
    </div>
  );
};

Menu.defaultProps = {
  groupped: false,
  components: {},
  style: {},
  className: ""
};

export default injectSheet(styles)(Menu);
