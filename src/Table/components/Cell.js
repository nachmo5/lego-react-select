import React from "react";
import injectSheet from "react-jss";

const Cell = props => {
  const { classes: c } = props;
  return <div className={c.root}>I am cell</div>;
};

const styles = theme => ({ root: {} });

export default injectSheet(styles)(Cell);
