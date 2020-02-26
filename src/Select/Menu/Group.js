import React, { isValidElement } from "react";

import DefaultOption from "../components/Option";
import DefaultHeader from "../components/Header";

// Styles
import injectSheet from "react-jss";
import { filterKeys, classNames } from "../.shared/helpers";

const styles = theme => ({
  root: {
    width: "100%",
    fontSize: theme.size / 2,
    fontFamily: theme.fontFamily
  },
  header: {
    fontSize: theme.size / 2,
    height: theme.size,
    lineHeight: theme.size + "px",
    paddingLeft: theme.optionPadding,
    cursor: "pointer",
    color: "rgb(0, 0, 0, 0.45)"
  },
  option: {
    cursor: "pointer",
    height: theme.size,
    lineHeight: theme.size + "px",
    paddingLeft: theme.optionPadding * 3,
    paddingRight: theme.optionPadding,
    color: theme.primaryColor,
    "&:hover": {
      background: theme.gray2
    }
  }
});

const Flat = props => {
  const {
    classes: c,
    groups,
    style,
    components,
    className,
    onGroupHeaderClick,
    onOptionClick
  } = props;

  // -components
  const { option, header } = components;
  const Option = isValidElement(option) ? option : DefaultOption;
  const Header = isValidElement(header) ? header : DefaultHeader;
  // -styles
  const containerStyle = filterKeys(style, ["option", "header"]);
  // -className
  const containerClass = className["container"] || "";

  const optionClick = (option, group) => e => onOptionClick(option, e, group);
  const groupClick = group => e => onGroupHeaderClick(group, e);

  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {groups.map((group, g) => (
        <div key={g} className={c.group}>
          <div className={c.header} onClick={groupClick(group)}>
            <Header value={group.name} onClick={group.onClick} />
          </div>
          <div className={c.options}>
            {group.options.map((option, o) => (
              <div
                key={o}
                onClick={optionClick(option, group)}
                className={c.option}
              >
                <Option
                  value={option}
                  style={style.option}
                  className={className.option}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Flat.defaultProps = {
  components: {},
  style: {},
  className: "",
  groups: []
};

export default injectSheet(styles)(Flat);
