import React, { isValidElement } from "react";

// Styles
import injectSheet from "react-jss";

import DefaultSingle from "./Single";
import DefaultMulti from "./Multi";
import Label from "../components/Label";
import { Icon } from "antd";
import { classNames, filterKeys } from "../.shared/helpers";

const styles = theme => ({
  root: { display: "flex", maxWidth: "100%" },
  valueBox: {
    flexGrow: 1,
    overflow: "hidden"
  },
  suffix: {
    padding: theme.valuePadding,
    fontSize: theme.size / 2,
  },
  dropIcon: {
    // icon
    height: theme.size,
    lineHeight: theme.size + "px"
  }
});

const Value = props => {
  const {
    classes: c,
    components,
    style,
    className,
    multiple,
    value,
    focused
  } = props;
  // -components
  const { single, multi } = components;
  const Single = isValidElement(single) ? single : DefaultSingle;
  const Multi = isValidElement(multi) ? multi : DefaultMulti;
  // -styles
  const containerStyle = filterKeys(style, ["single", "multi"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      <div className={c.valueBox}>
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
            focused={focused}
            // trio
            components={components.single}
            style={style.single}
            className={className.single}
          />
        )}
      </div>
      <div className={c.suffix}>
        <div className={c.dropIcon}>
          <Label
            value={
              <Icon
                type="down"
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

Value.defaultProps = {
  theme: {},
  components: {},
  style: {},
  className: "",
  multiple: false,
  focused: false
};

export default injectSheet(styles)(Value);
