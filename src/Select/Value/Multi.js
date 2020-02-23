import React, { isValidElement } from "react";

// Components
import DefaultTag from "../components/Tag";
import DefaultInput from "../components/Input";

// Styles
import injectSheet from "react-jss";

import { classNames, filterKeys } from "../.shared/helpers";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: theme.size / 2,
    padding: theme.valuePadding,
    paddingBottom: theme.valuePadding - theme.spaceBetweenRows,
    paddingRight: theme.valuePadding - theme.spaceBetweenTags
  },
  tag: {
    height: theme.size,
    marginRight: theme.spaceBetweenTags,
    marginBottom: theme.spaceBetweenRows
    /*
    "&:nth-last-child(2)": {
      marginRight: 0
    }
    */
  },
  input: {
    flexGrow: 1,
    color: theme.primaryColor,
    height: theme.size,
    lineHeight: theme.size + "px",
    minWidth: theme.inputMinWidth,
    marginBottom: theme.spaceBetweenRows
  }
});

const Multi = props => {
  const { classes: c, components, style, className, values } = props;
  // -components
  const { input, tag } = components;
  const Input = isValidElement(input) ? input : DefaultInput;
  const Tag = isValidElement(tag) ? tag : DefaultTag;
  // -styles
  const containerStyle = filterKeys(style, ["tag", "input"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {values.map((value, i) => (
        <div key={i} className={c.tag}>
          <Tag
            key={i}
            value={value}
            // trio
            components={components.tag}
            style={style.tag}
            className={className.tag}
          />
        </div>
      ))}
      <div className={c.input}>
        <Input style={style.input} className={className.input} />
      </div>
    </div>
  );
};

Multi.defaultProps = {
  components: {},
  style: {},
  className: ""
};

export default injectSheet(styles)(Multi);