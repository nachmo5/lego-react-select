import React from "react";
import injectSheet from "react-jss";
import Dropdown from "./LastDropdown";
import MaterialSelect from "@material-ui/core/Select";

const a = [];
for (let i = 0; i < 100; i++) {
  a.push((Date.now() + i).toString());
}
const App = props => {
  const { classes: c } = props;
  return (
    <div
      style={{
        width: 1000,
        height: 500,
        margin: "auto",
        paddingTop: 150,
        border: "1px solid gray",
        overflow: "auto"
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          {a.map(b => (
            <div key={b}>{b}</div>
          ))}
        </div>
        <div>
          <Dropdown
            content={
              <div>
                <div>This is option</div>
                <div>This is other option</div>
              </div>
            }
          >
            {({ open, close, toggle }, opened) => (
              <div onClick={open}>
                <input />
              </div>
            )}
          </Dropdown>
          <div>Potatoe</div>
        </div>
        <div>
          <MaterialSelect>
            {a.map(e => (
              <div key={e}>{e} </div>
            ))}
          </MaterialSelect>
        </div>
        <div>
          {a.map(b => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {};
export default injectSheet(styles)(App);
