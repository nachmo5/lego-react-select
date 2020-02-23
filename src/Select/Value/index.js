import React, { isValidElement } from "react";

// Styles
import injectSheet from "react-jss";

import DefaultSingle from "./Single";
import DefaultMulti from "./Multi";
import DefaultDropIcon from "../components/DropIcon";
import { classNames, filterKeys } from "../.shared/helpers";

const styles = theme => ({
  root: {
    display: "flex",
    maxWidth: "100%",
    border: "1px solid " + theme.gray2,
    borderRadius: theme.borderRadius,
    "&:hover": {
      borderColor: theme.primaryColor
    }
  },
  valueBox: {
    flexGrow: 1,
    overflow: "hidden"
  },
  suffix: {
    padding: theme.valuePadding,
    fontSize: theme.size / 2
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
    focused,
    dropIconVisible
  } = props;
  // -components
  const { single, multi, dropIcon } = components;
  const Single = isValidElement(single) ? single : DefaultSingle;
  const Multi = isValidElement(multi) ? multi : DefaultMulti;
  const DropIcon = isValidElement(dropIcon) ? dropIcon : DefaultDropIcon;
  // -styles
  const containerStyle = filterKeys(style, ["single", "multi", "dropIcon"]);
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
      {dropIconVisible && (
        <div className={c.suffix}>
          <DropIcon />
        </div>
      )}
    </div>
  );
};

Value.defaultProps = {
  theme: {},
  components: {},
  style: {},
  className: "",
  multiple: false,
  focused: false,
  dropIconVisible: true
};

export default injectSheet(styles)(Value);
