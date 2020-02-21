import React, { isValidElement } from "react";

// Components
import DefaultValue from "./Value";
import DefaultMenu from "./Menu";

// Styles
import injectSheet from "react-jss";
import styles from "./style";

import { classNames, filterKeys } from "./.shared/helpers";
import { CONFIG } from "./.shared/constants";
/**
 * -components => {
 *      value:{
 *          container,
 *          single:{ label, placeholder, input },
 *          multi:{ closeIcon,tag,input }
 *      },
 *      menu:{
 *          container,
 *          flat:{option},
 *          group:{header,option}
 *      }}
 */

const Select = props => {
  // Main props
  const { classes: c, components = {}, style, className } = props;
  // VALUE props
  const { value, multiple } = props;
  // MENU props
  const { options, groupped, onSelect } = props;

  // -components
  const Value = isValidElement(components.value)
    ? components.value
    : DefaultValue;
  const Menu = isValidElement(components.menu) ? components.menu : DefaultMenu;
  // -styles
  const containerStyle = filterKeys(style, ["value", "menu"]);
  // -className
  const containerClass = filterKeys(className, ["value", "menu"]);

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      <div className={c.value}>
        <Value
          multiple={multiple}
          value={value}
          // trio
          theme={CONFIG}
          components={components.value}
          style={style.value}
          className={className.value}
        />
      </div>
      <div className={c.menu}>
        <Menu
          options={options}
          // trio
          theme={CONFIG}
          components={components.menu}
          style={style.menu}
          className={className.menu}
        />
      </div>
    </div>
  );
};

Select.defaultProps = {
  components: {},
  style: {},
  className: {},
  multiple: false
};

export default injectSheet(styles)(Select);
