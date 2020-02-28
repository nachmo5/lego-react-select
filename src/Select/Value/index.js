import React, {  } from "react";

// Styles
import injectSheet from "react-jss";

import DefaultSingle from "./Single";
import DefaultMulti from "./Multi";
import DefaultDropIcon from "../components/DropIcon";
import { classNames, filterKeys, isComponent} from "../.shared/helpers";

const styles = theme => ({
  root: {
    display: "flex",
    maxWidth: "100%",
    border: "1px solid " + theme.gray2,
    borderRadius: theme.borderRadius,
    "&:hover": {
      borderColor: theme.primaryColor,
      "& $suffix": {
        color: theme.primaryColor
      }
    }
  },
  focused: {
    borderColor: theme.primaryColor
  },
  valueBox: {
    flexGrow: 1,
    overflow: "hidden"
  },
  suffix: {
    color: theme.gray2,
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
    dropIconVisible,
    onInputChange,
    onDeleteIconClick,
    onInputKeyPress,
    inputValue
  } = props;
  // -components
  const { single, multi, dropIcon } = components;
  const Single = isComponent(single) ? single : DefaultSingle;
  const Multi = isComponent(multi) ? multi : DefaultMulti;
  const DropIcon = isComponent(dropIcon) ? dropIcon : DefaultDropIcon;
  // -styles
  const containerStyle = filterKeys(style, ["single", "multi", "dropIcon"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <div
      className={classNames(c.root, containerClass, [c.focused, focused])}
      style={containerStyle}
    >
      <div className={c.valueBox}>
        {multiple ? (
          <Multi
            values={value}
            inputValue={inputValue}
            // trio
            components={components.multi}
            style={style.multi}
            className={className.multi}
            // methods
            onInputChange={onInputChange}
            onDeleteIconClick={onDeleteIconClick}
            onInputKeyPress={onInputKeyPress}
          />
        ) : (
          <Single
            value={value}
            focused={focused}
            inputValue={inputValue}
            // trio
            components={components.single}
            style={style.single}
            className={className.single}
            // methods
            onInputChange={onInputChange}
            onInputKeyPress={onInputKeyPress}
          />
        )}
      </div>
      {dropIconVisible && (
        <div className={c.suffix}>
          <DropIcon style={style.dropIcon} className={className.dropIcon} />
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
