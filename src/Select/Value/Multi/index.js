import React, { isValidElement } from "react";

// Components
import DefaultTag from "./Tag";
import DefaultInput from "../.shared/Input";

// Styles
import injectSheet from "react-jss";
import styles from "./style";

import { classNames, filterKeys } from "../../.shared/helpers";

const Multi = props => {
  const { classes: c, components, style, className, values } = props;
  // -components
  const { input, tag } = components;
  const Input = isValidElement(input) ? input : DefaultInput;
  const Tag = isValidElement(tag) ? tag : DefaultTag;
  // -styles
  const containerStyle = filterKeys(style, ["tag", "input"]);
  // -className
  const containerClass = filterKeys(className, ["tag", "input"]);

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {values.map((value, i) => (
        <div key={i} className={c.tag}>
          <Tag
            key={i}
            value={value}
            // trio
            components={components.tag}
            style={style.tag}
            className={className.tag}
          />
        </div>
      ))}
      <div className={c.input}>
        <Input style={style.input} className={className.input} />
      </div>
    </div>
  );
};

Multi.defaultProps = {
  components: {},
  style: {},
  className: {}
};

export default injectSheet(styles)(Multi);
