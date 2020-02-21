import React, { isValidElement } from "react";

// Components
import DefaultInput from "../.shared/Input";
import DefaultLabel from "./Label";

// Styles
import injectSheet from "react-jss";
import styles from "./style";

import { classNames, filterKeys } from "../../.shared/helpers";

const Single = props => {
  const { classes: c, components, style, className } = props;
  // -components
  const { input, label } = components;
  const Input = isValidElement(input) ? input : DefaultInput;
  const Label = isValidElement(label) ? label : DefaultLabel;
  // -styles
  const containerStyle = filterKeys(style, ["placeholder", "label"]);
  // -className
  const containerClass = filterKeys(className, ["placeholder", "label"]);

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      <div className={c.placeholder}>
        <Input style={style.input} className={className.input} />
      </div>
      <div className={c.label}>
        <Label style={style.label} className={className.label} />
      </div>
    </div>
  );
};

Single.defaultProps = {
  components: {},
  style: {},
  className: {}
};

export default injectSheet(styles)(Single);
