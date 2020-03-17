import React from "react";
import Table from "./Table";
import { Select, Empty } from "antd";
import ReactSelect from "react-select";
import MedSelect from "./Select";
import injectSheet from "react-jss";
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
        position: "relative"
      }}
    >
      <div
        style={{
          border: "1px solid black",
          height: 350,
          overflowY: "scroll",
          paddingTop: 320,
          display: "flex"
        }}
      >
        <div>
          <Select style={{ width: 200 }}>
            {a.map(e => (
              <Select.Option key={e}>{e} </Select.Option>
            ))}
          </Select>
        </div>

        <div>
          <MedSelect
            multiple
            value={["abc", "def"]}
            options={a}
            style={{ width: 200 }}
            components={{
              menu: true
                ? () => (
                    <div
                      style={{
                        width: "100%",
                        height: 100,
                        background: "#fff",
                        boxShadow: "0 0 8px 0 rgba(97, 97, 97, 0.5)"
                      }}
                    >
                      <Empty
                        imageStyle={{ height: 70 }}
                        style={{ fontSize: 12 }}
                      />
                    </div>
                  )
                : {
                    group: {
                      option: props2 => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: 12
                            }}
                          >
                            <div>{props.value}</div>
                          </div>
                        );
                      }
                    }
                  }
            }}
          />
        </div>
        <div>
          <MaterialSelect>
            {a.map(e => (
              <div key={e}>{e} </div>
            ))}{" "}
          </MaterialSelect>
        </div>
        <div style={{ color: "white" }}>
          {a.map(e => (
            <div key={e}>{e} </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {};
export default injectSheet(styles)(App);
