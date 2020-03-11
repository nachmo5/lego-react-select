import React from "react";
import injectSheet, { ThemeProvider } from "react-jss";
import defaultTheme from "./.shared/theme";

import DefaultHead from "./components/Head";
import DefaultBody from "./components/Body";

import { classNames, isComponent, filterKeys } from "./.shared/helpers";

const Table = props => {
  const { classes: c, components, style, className, theme } = props;
  const { columns, data } = props;

  const headData = columns.map(column => column.header);
  const bodyData = data;

  // -components
  const { head, body } = components;
  const Head = isComponent(head) ? head : DefaultHead;
  const Body = isComponent(body) ? body : DefaultBody;
  // -styles
  const containerStyle = filterKeys(style, ["head", "body"]);
  // -className
  const containerClass = className["container"] || "";

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <div
        className={classNames(c.root, containerClass)}
        style={containerStyle}
      >
        <div className={c.table}>
          <div className={c.head}>
            <Head data={headData} />
          </div>
          <div className={c.body}>
            <Body data={bodyData} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

Table.defaultProps = {
  components: {},
  style: {},
  className: "",
  theme: {}
};

const styles = {
  root: {
    width: "100%",
    height: "100%",
    border: "1px solid black"
  }
};

export default injectSheet(styles)(Table);
