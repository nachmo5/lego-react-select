import React from "react";
import injectSheet from "react-jss";
import { classNames } from "./Select/.shared/helpers";

const styles = {
  root: {
    "&:focus": {
      outline: 0
    },
    // dimension
    height: "100%",
    width: "100%",
    // text
    overflow: "hidden",
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
  };
  const onChange = e => {};
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
      onInput={onChange}
    />
  );
};

Input.defaultProps = {
  multiline: false,
  placeholder: "",
  focused: true
};
export default injectSheet(styles)(Input);
