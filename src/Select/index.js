import React, { useRef, useState, useEffect } from "react";

// Styles
import { ThemeProvider } from "react-jss";

import defaultTheme from "./.shared/theme";
import View from "./view";

const Select = props => {
  const {
    theme,
    multiple,
    options,
    groupped,
    value,
    cleanSearchOnEnter,
    menuAccessors,
    valueAccessors,
    accessors,
    selected,
    onEnter,
    onDeleteValue,
    showDownArrow,
    onSelect,
    placeholder
  } = props;
  // Hooks
  const ref = useRef();
  // Internal state
  const [focused, setFocused] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [searched, setSearched] = useState(null);

  const onOutsideClick = e => {
    handleOutsideClick(e, ref, () => {
      setDropped(false);
      setFocused(false);
      setSearched(null);
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  });

  /* ======== Data handlers ======== */
  if (!multiple && Array.isArray(value)) return "You forgot 'multiple' props";
  if (groupped && !options[0].name) return "Invalid groups format given";

  /* ======== Options ======== */
  const safeOptions = options || [];
  const formatOptions = os => {
    const usedAccessors = accessors || menuAccessors;
    if (!Array.isArray(os)) return [{ id: "x", label: "Invalid options" }];
    return os.map((o, i) => {
      if (!o) return { id: i, label: "Null option", data: "" };
      else if (typeof o === "string") {
        return { id: o, label: o, selected: selected.includes(o), data: o };
      }
      const id = o[usedAccessors[0]] || "BAD_MENU_ID_ACCESSOR";
      const label = o[usedAccessors[1]] || "BAD_MENU_LABEL_ACCESSOR";
      return {
        id,
        label,
        selected: selected.includes[id],
        data: o
      };
    });
  };
  const filterOptions = os =>
    !Array.isArray(os)
      ? [{ id: "x", label: "Invalid options" }]
      : os.filter(o => {
          if (searched && searched.length > 0) {
            return o.label.toLowerCase().includes(searched.toLowerCase());
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

  const buildFinalOptions = os => {
    /*
    if (filteredOptions.length === 0 && searched) {
      const oz = [{ id: "_x_", label: searched, data: searched }];
      return groupped ? [{ name: "", options: oz }] : oz;
    }
    */
    return os;
  };
  const formattedOptions = groupped
    ? safeOptions.map(g => ({
        name: g.name,
        options: formatOptions(g.options)
      }))
    : formatOptions(safeOptions);

  const filteredOptions = groupped
    ? filterGroups(formattedOptions)
    : filterOptions(formattedOptions);

  const finalOptions = buildFinalOptions(filteredOptions);

  /* ======== Value ======== */
  const formatValue = v => {
    const usedAccessors = accessors || valueAccessors;

    if (!v) return { id: Date.now().toString(), label: "", data: "" };
    else if (typeof v === "string") {
      return { id: v, label: v, data: v };
    }
    return {
      id: v[usedAccessors[0]] || "BAD_VALUE_ID_ACCESSOR",
      label: v[usedAccessors[0]] || "BAD_VALUE_ID_ACCESSOR",
      data: v
    };
  };

  const safeValue = multiple ? (value ? value : []) : value ? value : "";
  const finalValue = multiple
    ? safeValue.map(formatValue)
    : formatValue(safeValue);
  /* ======== Event handlers ======== */
  // ______________Root
  const onClick = () => {};
  // ______________Value
  const onValueClick = () => {
    setDropped(prev => !prev);
    setFocused(true);
  };
  const onInputChange = e => {
    setFocused(true);
    setDropped(true);
    setSearched(e.target.innerText);
  };
  const onDeleteIconClick = (value, e) => {
    e.stopPropagation();
    onDeleteValue(value.data);
  };
  const onInputKeyPress = e => {
    if (e.key === "Enter") {
      const effect = () => {
        cleanSearchOnEnter && setSearched(null);
      };
      const p = onEnter(searched);
      if (p && p.then) p.then(effect);
      else effect();
    }
  };
  // ______________Menu
  const onGroupHeaderClick = () => {};
  const onOptionClick = option => {
    onSelect(option.data);
  };
  const onMenuClick = () => {
    if (!multiple) {
      setDropped(false);
      setFocused(false);
    }
    setSearched(null);
  };

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <View
        {...props}
        ref={ref}
        focused={focused}
        dropped={dropped}
        options={finalOptions}
        value={finalValue}
        inputValue={searched}
        dropIconVisible={!dropped && showDownArrow}
        placeholder={placeholder}
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
  cleanSearchOnEnter: true,
  theme: {},
  selected: [],
  menuAccessors: [],
  valueAccessors: [],
  accessors: [],
  options: [],
  onEnter: l => l,
  onDeleteValue: l => l,
  showDownArrow: true,
  onSelect: l => l
};

export default Select;
