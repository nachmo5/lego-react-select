import React from "react";
import injectSheet from "react-jss";

const Row = props => {
  const { classes: c } = props;
  return <div className={c.root}>I am Row</div>;
};

const styles = theme => ({ root: {} });

export default injectSheet(styles)(Row);
