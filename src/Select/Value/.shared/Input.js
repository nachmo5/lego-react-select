import React from "react";
import injectSheet from "react-jss";
import { CONFIG } from "../../.shared/constants";
import { classNames } from "../../.shared/helpers";

const styles = {
  root: {
    border: "1px solid black",
    minHeight: CONFIG.FONT_SIZE * 1.15,
    minWidth: CONFIG.INPUT_MIN_WIDTH,
    fontFamily: CONFIG.FONT_FAMILY * 1.15,
    fontSize: CONFIG.FONT_SIZE * 1.15,
    color: CONFIG.PRIMARY_COLOR,
    paddingLeft: 5,
    "&:focus": {
      outline: 0
    },
    "&:empty:before": {
      content: "attr(placeholder)",
      display: "block",
      fontFamily: CONFIG.FONT_FAMILY * 1.15,
      fontSize: CONFIG.FONT_SIZE * 1.15,
      color: CONFIG.PRIMARY_COLOR,
      opacity: "0.4"
    }
  }
};

const Input = props => {
  const {
    classes: c,
    style,
    className,
    breakable,
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
    if (e.key === "Enter" && !breakable) {
      e.preventDefault();
    }
  };
  const onChange = e => {};
  return (
    <div
      className={classNames(c.root, className)}
      style={style}
      ref={ref}
      contentEditable
      onKeyPress={onKeyPress}
      onInput={onChange}
      placeholder={placeholder}
    />
  );
};

Input.defaultProps = {
  breakable: false,
  placeholder: "",
  focused: true
};
export default injectSheet(styles)(Input);
