import React, { useRef, useState, useEffect } from "react";

// Styles
import { ThemeProvider } from "react-jss";

import defaultTheme from "./.shared/theme";
import View from "./view";

const Select = props => {
  const { theme, multiple, options, groupped, value } = props;
  // Hooks
  const [focused, setFocused] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [searched, setSearched] = useState(null);
  const [finalValue, setFinalValue] = useState(value);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  });

  /* ======== Data handlers ======== */
  const filterOptions = os =>
    os.filter(o => {
      if (searched && searched.length > 0) {
        return o.toLowerCase().includes(searched.toLowerCase());
      }
      return o;
    });
  const filterGroups = gs => {
    const filtered = gs.map(g => ({
      name: g.name,
      options: filterOptions(g.options)
    }));
    return filtered.filter(g => g.options.length > 0);
  };
  /* ======== Event handlers ======== */
  const onOutsideClick = e => {
    handleOutsideClick(e, ref, () => {
      setDropped(false);
      setFocused(false);
      setSearched(null);
    });
  };

  // ______________Root
  const onClick = () => {};
  // ______________Value
  const onValueClick = () => {
    setDropped(prev => !prev);
    setFocused(true);
  };
  const onInputChange = e => setSearched(e.target.innerHTML);
  const onDeleteIconClick = (value, e) => {
    e.stopPropagation();
    setFinalValue(finalValue.filter(v => v !== value));
  };
  const onInputKeyPress = e => {
    console.log("a");
  };
  // ______________Menu
  const onGroupHeaderClick = () => {};
  const onOptionClick = option => {
    if (!multiple) {
      setFinalValue(option);
    } else {
      setFinalValue([...finalValue, option]);
    }
  };
  const onMenuClick = () => {
    if (!multiple) {
      setDropped(false);
      setFocused(false);
    }
    setSearched(null);
  };

  const finalOptions = groupped
    ? filterGroups(options)
    : filterOptions(options);

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <div>
        <div>{focused ? "focused" : "not focused"}</div>
        <View
          {...props}
          ref={ref}
          focused={focused}
          dropped={dropped}
          options={finalOptions}
          value={finalValue}
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
      </div>
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
