import React from "react";

// Components
import DefaultValue from "./Value";
import DefaultMenu from "./Menu";

// Styles
import injectSheet from "react-jss";

import { classNames, filterKeys, isComponent } from "./.shared/helpers";

const styles = {
  root: {
    width: "100%",
    position: "relative" // necessary for dropdown
  },
  hidden: { display: "none" },
  menu: { position: "absolute", width: "100%", zIndex: 1, marginTop: 2 }
};

const Select = React.forwardRef((props, ref) => {
  // Main props
  const {
    classes: c,
    components = {},
    style,
    className,
    focused,
    dropped,
    dropIconVisible
  } = props;
  const {
    onClick,
    onValueClick,
    onInputChange,
    onDeleteIconClick,
    onInputKeyPress,
    onGroupHeaderClick,
    onOptionClick,
    onMenuClick,
    inputValue
  } = props;
  // VALUE props
  const { value, multiple } = props;
  // MENU props
  const { options, groupped } = props;
  // -components
  const Value = isComponent(components.value) ? components.value : DefaultValue;
  const Menu = isComponent(components.menu) ? components.menu : DefaultMenu;
  // -styles
  const containerStyle = filterKeys(style, ["value", "menu"]);
  // -className
  const containerClass = classNames(c.root, className["container"] || "");

  return (
    <div
      ref={ref}
      className={containerClass}
      style={containerStyle}
      onClick={onClick}
    >
      <div className={c.value} onClick={onValueClick}>
        <Value
          multiple={multiple}
          value={value}
          focused={focused}
          dropIconVisible={dropIconVisible}
          inputValue={inputValue}
          // trio
          components={components.value}
          style={style.value}
          className={className.value}
          // methods
          onInputChange={onInputChange}
          onDeleteIconClick={onDeleteIconClick}
          onInputKeyPress={onInputKeyPress}
        />
      </div>
      <div
        className={classNames(c.menu, [c.hidden, !dropped])}
        onClick={onMenuClick}
      >
        <Menu
          options={options}
          groupped={groupped}
          // trio
          components={components.menu}
          style={style.menu}
          className={className.menu}
          // methods
          onGroupHeaderClick={onGroupHeaderClick}
          onOptionClick={onOptionClick}
        />
      </div>
    </div>
  );
});

Select.defaultProps = {
  components: {},
  style: {},
  className: "",
  multiple: false,
  theme: {},
  focused: false
};

export default injectSheet(styles)(Select);
