import React, { isValidElement } from "react";

// Components
import DefaultInput from "../../components/Input";
import DefaultLabel from "../../components/Label";

// Styles
import injectSheet from "react-jss";
import styles from "./style";

import { classNames, filterKeys } from "../../.shared/helpers";

const Single = props => {
  const {
    classes: c,
    components,
    style,
    className,
    placeholder,
    value,
    focused
  } = props;

  // -components
  const { input, label } = components;
  const Input = isValidElement(input) ? input : DefaultInput;
  const Label = isValidElement(label) ? label : DefaultLabel;
  // -styles
  const containerStyle = filterKeys(style, ["label"]);
  // -className
  const containerClass = filterKeys(className, ["label"]);

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {focused ? (
        <Input
          style={style.input}
          className={className.input}
          placeholder={value || placeholder}
        />
      ) : (
        <div className={c.label}>
          <Label
            style={style.label}
            className={className.label}
            value={value}
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
  placeholder: "Select an option",
  focused: false
};

export default injectSheet(styles)(Single);
