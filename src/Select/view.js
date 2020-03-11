import React from "react";
import ReactDOM from "react-dom";
// Components
import DefaultValue from "./Value";
import DefaultMenu from "./Menu";

// Styles
import injectSheet, { useTheme, ThemeProvider } from "react-jss";
import { classNames, filterKeys, isComponent } from "./.shared/helpers";
import { MENU } from "./.shared/theme";

const Select = React.forwardRef((props, ref) => {
  // Main props
  const { classes: c, components, style, className, dropIconVisible } = props;
  // VALUE props
  const { value, multiple, placeholder, inputValue, focused } = props;
  const { onClick, onGroupHeaderClick, onOptionClick, onMenuClick } = props;
  const { onValueClick, onInputChange } = props;
  const { onInputKeyPress, onDeleteIconClick } = props;
  // MENU props
  const { options, groupped, dropped } = props;
  // -components
  const Value = isComponent(components.value) ? components.value : DefaultValue;
  const Menu = isComponent(components.menu) ? components.menu : DefaultMenu;
  // -styles
  const containerStyle = filterKeys(style, ["value", "menu"]);
  // -className
  const containerClass = classNames(c.root, className["container"] || "");
  /* =========== Hooks =========== */
  const theme = useTheme();
  const menuRef = React.useRef();
  /* ================== MENU =================== */
  React.useEffect(() => {
    const menuDiv = document.createElement("div");
    menuDiv.id = "lego" + Math.floor(Math.random() * Date.now());
    menuRef.current = menuDiv.id;
    menuDiv.style.position = "absolute";
    menuDiv.style.top = "0px";
    menuDiv.style.left = "0px";
    menuDiv.style.width = "100%";
    document.body.appendChild(menuDiv);
  }, []);
  const getCoordinates = () => {
    if (ref.current) {
      const position = ref.current.getBoundingClientRect();
      return {
        width: ref.current.clientWidth,
        top: position.top,
        left: position.left,
        marginTop: theme.size + theme.distanceBetweenMenuAndValue
      };
    }
    return { display: "none" };
  };

  React.useEffect(() => {
    ReactDOM.render(
      <ThemeProvider theme={{ ...MENU, ...theme }}>
        <div
          className={classNames(c.menu, [c.hidden, !dropped])}
          onClick={onMenuClick}
          style={getCoordinates()}
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
      </ThemeProvider>,
      document.getElementById(menuRef.current)
    );
  });
  /* =============== INIT ================ */
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
          placeholder={placeholder}
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

const styles = {
  root: {
    width: "100%"
  },
  hidden: { display: "none" },
  menu: {
    position: "absolute",
    zIndex: 1300
  }
};

export default injectSheet(styles)(Select);
