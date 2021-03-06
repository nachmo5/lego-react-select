import React from "react";

// Components
import DefaultInput from "../components/Input";
import DefaultLabel from "../components/Label";

// Styles
import injectSheet from "react-jss";

import { classNames, filterKeys, isComponent } from "../.shared/helpers";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: theme.size / 2,
    paddingTop: theme.valueVerticalPadding,
    paddingBottom: theme.valueVerticalPadding,
    paddingLeft: theme.valueHorizontalPadding * 3,
    paddingRight: theme.valueHorizontalPadding
  },
  input: {
    flexGrow: 1,
    color: theme.primaryColor,
    height: theme.size,
    lineHeight: theme.size + "px",
    maxWidth: "100%"
  },
  label: {
    height: theme.size,
    width: "100%",
    color: theme.primaryColor,
    lineHeight: theme.size + "px"
  }
});

const Single = props => {
  const {
    classes: c,
    components,
    style,
    className,
    placeholder,
    value,
    focused,
    onInputChange,
    onInputKeyPress,
    inputValue
  } = props;

  // -components
  const { input, label } = components;
  const Input = isComponent(input) ? input : DefaultInput;
  const Label = isComponent(label) ? label : DefaultLabel;
  // -styles
  const containerStyle = filterKeys(style, ["label"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {focused ? (
        <div className={c.input}>
          <Input
            controlled
            value={inputValue}
            focused={focused}
            style={style.input}
            className={className.input}
            placeholder={value.label || placeholder}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
          />
        </div>
      ) : (
        <div className={c.label}>
          <Label
            style={style.label}
            className={className.label}
            value={value.label}
          />
        </div>
      )}
    </div>
  );
};

Single.defaultProps = {
  components: {},
  style: {},
  className: "",
  placeholder: "",
  focused: false
};

export default injectSheet(styles)(Single);
