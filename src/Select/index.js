import React, { useRef, useState, useEffect } from "react";

// Styles
import { ThemeProvider } from "react-jss";

import defaultTheme from "./.shared/theme";
import View from "./view";

const Select = props => {
  const { theme, multiple } = props;
  // Hooks
  const [focused, setFocused] = useState(false);
  const [dropped, setDropped] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  });
  /* ======== Methods ======== */
  const onOutsideClick = e => {
    handleOutsideClick(e, ref, () => {
      setDropped(false);
      setFocused(false);
    });
  };

  // ______________Root
  const onClick = () => {
    setFocused(true);
    console.log("On Click");
  };
  // ______________Value
  const onValueClick = () => {
    setDropped(prev => !prev);
    console.log("onValueClick");
  };
  const onInputChange = () => {
    console.log("onInputChange");
  };
  const onDeleteIconClick = e => {
    e.stopPropagation();
    console.log("onDeleteIconClick");
  };
  const onInputKeyPress = () => {
    console.log("onInputKeyPress");
  };
  // ______________Menu
  const onGroupHeaderClick = () => {
    console.log("onGroupHeaderClick");
  };
  const onOptionClick = () => {
    console.log("onOptionClick");
  };
  const onMenuClick = () => {
    console.log("onMenuClick");
  };

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <View
        {...props}
        ref={ref}
        focused={focused}
        dropped={dropped}
        // Methods
        onClick={onClick}
        onValueClick={onValueClick}
        onInputChange={onInputChange}
        onDeleteIconClick={onDeleteIconClick}
        onInputKeyPress={onInputKeyPress}
        onGroupHeaderClick={onGroupHeaderClick}
        onOptionClick={onOptionClick}
        onMenuClick={onMenuClick}
      />
    </ThemeProvider>
  );
};

const handleOutsideClick = (e, ref, callback) => {
  if (ref && ref.current && !ref.current.contains(e.target)) {
    callback();
  }
};

Select.defaultProps = {
  components: {},
  style: {},
  className: "",
  multiple: false,
  theme: {}
};

export default Select;
