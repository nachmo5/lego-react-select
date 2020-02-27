import React from "react";
import Label from "./Label";

import injectSheet from "react-jss";
import { Icon } from "antd";
import { classNames } from "../.shared/helpers";

const styles = theme => ({
  root: { display: "flex" },
  label: { flexGrow: 1 },
  selected: { color: theme.primaryColor, marginRight: 10 }
});

const Option = props => {
  const { classes: c, value, style, className, selected } = props;
  return (
    <div style={style} className={classNames(c.root, className)}>
      <div className={c.label}>
        <Label value={value} />
      </div>
      {selected && (
        <div className={c.selected}>
          <Icon type="check" />
        </div>
      )}
    </div>
  );
};

Option.defaultProps = {
  onClick: l => l,
  selected: false
};

export default injectSheet(styles)(Option);
