import React from "react";
import injectSheet from "react-jss";

const Header = props => {
  const { classes: c } = props;
  return <div className={c.root}>I am Header</div>;
};

const styles = theme => ({ root: {} });

export default injectSheet(styles)(Header);
