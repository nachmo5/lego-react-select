import React from "react";
import injectSheet from "react-jss";
import { classNames } from "../../.shared/helpers";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontFamily: theme.FONT_FAMILY,
    color: theme.PRIMARY_COLOR,
    "&:focus": {
      outline: 0
    },
    "&:empty:before": {
      fontFamily: theme.FONT_FAMILY,
      color: theme.PRIMARY_COLOR,
      content: "attr(placeholder)",
      display: "block",
      opacity: "0.4"
    }
  },
  multiline: {
    whiteSpace: "normal"
  }
});

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
