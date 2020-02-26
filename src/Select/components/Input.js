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
    focused
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

Input.defaultProps = {
  multiline: false,
  placeholder: "",
  focused: true
};
export default injectSheet(styles)(Input);
