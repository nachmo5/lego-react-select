import React, { isValidElement } from "react";

// Components
import DefaultValue from "./Value";
import DefaultMenu from "./Menu";

// Styles
import injectSheet, { ThemeProvider } from "react-jss";
import styles from "./style";

import { classNames, filterKeys } from "./.shared/helpers";
import defaultTheme from "./.shared/theme";

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
  const { classes: c, components = {}, style, className, theme } = props;
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
  const containerClass = className["container"] || ""

  const [focused, setFocused] = React.useState();
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <div
        className={classNames(c.root, containerClass)}
        style={containerStyle}
      >
        <div className={c.value}>
          <Value
            multiple={multiple}
            value={value}
            focused={focused}
            // trio
            components={components.value}
            style={style.value}
            className={className.value}
          />
        </div>
        <div className={c.menu}>
          <Menu
            options={options}
            // trio
            components={components.menu}
            style={style.menu}
            className={className.menu}
          />
        </div>
      </div>
      <div onClick={() => setFocused(!focused)}>Toggle</div>
    </ThemeProvider>
  );
};

Select.defaultProps = {
  components: {},
  style: {},
  className: "",
  multiple: false,
  theme: {}
};

export default injectSheet(styles)(Select);
