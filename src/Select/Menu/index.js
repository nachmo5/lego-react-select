import React from "react";

import DefaultGroup from "./Group";
import DefaultFlat from "./Flat";

// Styles
import injectSheet from "react-jss";
import { filterKeys, classNames, isComponent } from "../.shared/helpers";

const styles = theme => ({
  root: {
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
  const {
    classes: c,
    options,
    groupped,
    style,
    components,
    className,
    onGroupHeaderClick,
    onOptionClick
  } = props;

  // -components
  const { flat, group, footer } = components;
  const Flat = isComponent(flat) ? flat : DefaultFlat;
  const Group = isComponent(group) ? group : DefaultGroup;
  const Footer = isComponent(footer) ? footer : null;
  // -styles
  const containerStyle = filterKeys(style, ["flat", "group", "footer"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      <div>
        {groupped ? (
          <Group
            groups={options}
            onGroupHeaderClick={onGroupHeaderClick}
            onOptionClick={onOptionClick}
            // trio
            components={components.group}
            style={style.group}
            className={className.group}
          />
        ) : (
          <Flat
            options={options}
            onOptionClick={onOptionClick}
            // trio
            components={components.flat}
            style={style.flat}
            className={className.flat}
          />
        )}
      </div>
      {Footer && (
        <div>
          <Footer />
        </div>
      )}
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
