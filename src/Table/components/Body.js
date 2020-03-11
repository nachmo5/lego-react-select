import React from "react";
import injectSheet from "react-jss";

const Body = props => {
  const { classes: c } = props;
  return <div className={c.root}>I am Body</div>;
};

const styles = theme => ({ root: {} });

export default injectSheet(styles)(Body);
