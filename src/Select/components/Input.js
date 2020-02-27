import React from "react";
import injectSheet from "react-jss";
import { classNames } from "../.shared/helpers";

const styles = {
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    // Focus
    "&:focus": {
      outline: 0
    },
    // Placeholder
    "&:empty:before": {
      content: "attr(placeholder)",
      display: "block",
      opacity: "0.4"
    },
    // Multiline
    whiteSpace: "nowrap"
  },
  multiline: {
    whiteSpace: "normal"
  }
};

const Input = props => {
  const {
    classes: c,
    style,
    className,
    multiline,
    placeholder,
    focused,
    controlled,
    value
  } = props;
  const ref = React.useRef();
  React.useEffect(() => {
    if (focused) {
      ref.current && ref.current.focus();
    }
  });

  const onKeyPress = e => {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault();
    }
    props.onKeyPress(e);
  };

  React.useEffect(() => {
    if (controlled && ref.current) {
      ref.current.innerText = value;
      setEndOfContenteditable(ref.current);
    }
  });
  return (
    <div
      ref={ref}
      contentEditable
      placeholder={placeholder}
      // style
      className={classNames(c.root, className, [c.multiline, multiline])}
      style={style}
      // Methods
      onKeyPress={onKeyPress}
      onInput={props.onChange}
    />
  );
};

function setEndOfContenteditable(contentEditableElement) {
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
}

Input.defaultProps = {
  controlled: false,
  multiline: false,
  placeholder: "",
  focused: true,
  value: ""
};
export default injectSheet(styles)(Input);
