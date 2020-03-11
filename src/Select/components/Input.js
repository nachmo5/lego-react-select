import React, { useState } from "react";
import injectSheet from "react-jss";
import { classNames } from "../.shared/helpers";

const styles = {
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    cursor: "text"
  },
  input: {
    width: "1px",
    // Focus
    "&:focus": {
      outline: 0
    },
    // Multiline
    whiteSpace: "nowrap"
  },
  multiline: {
    whiteSpace: "normal"
  },
  placeholder: {
    marginLeft: "-1px",
    flexGrow: 1,
    opacity: 0.4,
    cursor: "text",
    userSelect: "none",
    MozUserSelect: "none",
    KhtmlUserSelect: "none",
    WebkitUserSelect: "none",
    OUserSelect: "none"
  }
};

const Input = props => {
  const ref = React.useRef();
  /* =============== Props =================== */
  const { classes: c, style, className } = props;
  const { multiline, placeholder, focused, controlled, value } = props;
  const { onKeyPress, onChange } = props;
  /* =============== HOoks =================== */
  const [_value, setValue] = useState(controlled ? value : "");

  React.useEffect(() => {
    if (focused) {
      ref.current && ref.current.focus();
    }
  });
  React.useEffect(() => {
    if (ref.current) {
      ref.current.innerText = _value;
    }
    focused && setEndOfContenteditable(ref.current);
  });
  React.useEffect(() => {
    if (controlled) setValue(value);
  }, [value, controlled]);
  /* =============== Methods =================== */
  const _onKeyPress = e => {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault();
    }
    onKeyPress(e);
  };
  const _onChange = e => {
    // remove breaks
    const formatted = (e.target.innerText || "")
      .split("")
      .filter(v => v !== "\n")
      .join("");
    setValue(formatted);
    onChange(e);
  };

  const onParentClick = () => {
    ref.current && ref.current.focus();
    setEndOfContenteditable(ref.current);
  };
  const onInputClick = e => {
    e.stopPropagation();
  };
  const isBlank = v => !v || v.length === 0;
  const placeholderMode = isBlank(ref.current ? ref.current.innerText : "");

  return (
    <div className={c.root} onClick={onParentClick}>
      <div
        ref={ref}
        onClick={onInputClick}
        contentEditable
        // style
        className={classNames(
          c.input,
          className,
          [c.multiline, multiline],
          [c.placeholderMode, placeholderMode]
        )}
        style={style}
        // Methods
        onKeyPress={_onKeyPress}
        onInput={_onChange}
      />
      {placeholderMode && <div className={c.placeholder}>{placeholder}</div>}
    </div>
  );
};

const setEndOfContenteditable = contentEditableElement => {
  var range, selection;
  if (document.createRange) {
    //Firefox, Chrome, Opera, Safari, IE 9+
    range = document.createRange(); //Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection(); //get the selection object (allows you to change selection)
    selection.removeAllRanges(); //remove any selections already made
    selection.addRange(range); //make the range you have just created the visible selection
  } else if (document.selection) {
    //IE 8 and lower
    range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
    range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
    range.select(); //Select the range (make it the visible selection
  }
};

Input.defaultProps = {
  controlled: false,
  multiline: false,
  placeholder: "",
  focused: false,
  value: "",
  onKeyPress: l => l,
  onChange: l => l
};
export default injectSheet(styles)(Input);
