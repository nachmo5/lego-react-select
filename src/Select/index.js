import React, { useRef, useState, useEffect } from "react";

// Styles
import { ThemeProvider } from "react-jss";

import defaultTheme from "./.shared/theme";
import View from "./view";

const Select = props => {
  const { theme } = props;
  // Hooks
  const [focused, setFocused] = useState(false);
  const [dropped, setDropped] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  });
  // Methods
  const onOutsideClick = e => {
    handleOutsideClick(e, ref, () => {
      setDropped(false);
      setFocused(false);
    });
  };

  const onClick = () => {
    setFocused(true);
  };
  const onValueClick = () => {
    setDropped(prev => !prev);
  };

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <View
        {...props}
        ref={ref}
        focused={focused}
        dropped={dropped}
        onClick={onClick}
        onValueClick={onValueClick}
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
