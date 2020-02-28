import React, {  } from "react";

import DefaultOption from "../components/Option";

// Styles
import injectSheet from "react-jss";
import { filterKeys, classNames, isComponent } from "../.shared/helpers";

const styles = theme => ({
  root: {
    width: "100%",
    fontSize: theme.size / 2,
    fontFamily: theme.fontFamily
  },
  option: {
    cursor: "pointer",
    height: theme.size,
    lineHeight: theme.size + "px",
    paddingLeft: theme.optionPadding,
    paddingRight: theme.optionPadding,
    color: theme.primaryColor,
    "&:hover": {
      background: theme.gray2
    }
  }
});

const Flat = props => {
  const {
    classes: c,
    options,
    style,
    components,
    className,
    onOptionClick
  } = props;

  // -components
  const { option } = components;
  const Option = isComponent(option) ? option : DefaultOption;
  // -styles
  const containerStyle = filterKeys(style, ["option"]);
  // -className
  const containerClass = className["container"] || "";

  const optionClick = option => e => onOptionClick(option, e);

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {options.map(option => (
        <div key={option.id} onClick={optionClick(option)} className={c.option}>
          <Option
            value={option.label}
            style={style.option}
            className={className.option}
            selected={option.selected}
          />
        </div>
      ))}
    </div>
  );
};

Flat.defaultProps = {
  components: {},
  style: {},
  className: "",
  options: []
};

export default injectSheet(styles)(Flat);
