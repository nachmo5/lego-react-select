import React from "react";
import injectSheet from "react-jss";

import DefaultHeader from "./Header";
import { isComponent, filterKeys, classNames } from "../.shared/helpers";

const Head = props => {
  const { classes: c, components, style, className } = props;
  const { data } = props;
  // -components
  const { header } = components;
  const Header = isComponent(header) ? header : DefaultHeader;
  // -styles
  const containerStyle = filterKeys(style, ["header"]);
  // -className
  const containerClass = className["container"] || "";

  // Data
  const headers = data;
  return (
    <div className={classNames(c.root, containerClass)} style={containerStyle}>
      {headers.map((header, h) => (
        <div key={h} className={c.header}>
          <Header data={header} />
        </div>
      ))}
    </div>
  );
};

Head.defaultProps = {
  components: {},
  style: {},
  className: ""
};

const styles = theme => ({ root: {} });

export default injectSheet(styles)(Head);
