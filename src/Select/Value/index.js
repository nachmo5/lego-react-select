import React, { isValidElement } from "react";

// Styles
import injectSheet from "react-jss";
import styles from "./style";

import DefaultSingle from "./Single";
import DefaultMulti from "./Multi";

import { classNames, filterKeys } from "../.shared/helpers";

const Value = props => {
  const { classes: c, components, style, className, multiple, value } = props;
  // -components
  const { single, multi } = components;
  const Single = isValidElement(single) ? single : DefaultSingle;
  const Multi = isValidElement(multi) ? multi : DefaultMulti;
  // -styles
  const containerStyle = filterKeys(style, ["single", "multi"]);
  // -className
  const containerClass = filterKeys(className, ["single", "multi"]);

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {multiple ? (
        <Multi
          values={value}
          // trio
          components={components.multi}
          style={style.multi}
          className={className.multi}
        />
      ) : (
        <Single
          value={value}
          // trio
          components={components.single}
          style={style.single}
          className={className.single}
        />
      )}
    </div>
  );
};

Value.defaultProps = {
  theme: {},
  components: {},
  style: {},
  className: {},
  multiple: false
};

export default injectSheet(styles)(Value);
