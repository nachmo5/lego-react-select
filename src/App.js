import React from "react";
import Select from "./Select";
import "antd/dist/antd.css";
import { Button, Checkbox } from "antd";
import Input from "./Select/components/Input";

const App = props => {
  const [tags, setTags] = React.useState(["Tesp1", "Test2___"]);
  const [value, setValue] = React.useState("Jemimay Bpadford");
  const [inputValue, setInputValue] = React.useState("");
  const ref = React.useRef();
  const options = ["One", "Two", "Three"];

  const groups = [
    { name: "Un", options: ["Uno", "Ichi", "Wahd"] },
    { name: "Deux", options: ["Dos", "Ni", "Joj"] }
  ];
  const width = inputValue.length >= 0 ? inputValue.length * 8 + "px" : "100%";
  return (
    <div
      className="App"
      style={{ paddingLeft: 350, paddingTop: 100, width: "100%" }}
    >
      <div style={{ width: 300, height: 50, border: "1px solid black" }}>
        <Input  />
      </div>
      <div>
        <div>Multiple</div>
        <div style={{ width: 300, marginBottom: 50 }}>
          <Select
            groupped
            selected={["Document"]}
            options={[{ name: "Tags", options: ["BU", "Car", "Document"] }]}
            multiple
            value={tags}
            components={{
              menu: {
                group: {
                  option: props => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: 12
                        }}
                      >
                        <div>
                          <Checkbox checked={props.selected} />
                        </div>
                        <div>{props.value}</div>
                      </div>
                    );
                  }
                },
                footer: () => (
                  <div
                    style={{
                      marginTop: 10,
                      borderTop: "1px solid #e9e9e9",
                      padding: 10,
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Button
                      size="small"
                      style={{ marginRight: 10, fontSize: 12 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="small"
                      type="primary"
                      style={{ fontSize: 12 }}
                    >
                      Add 3 Tags
                    </Button>
                  </div>
                )
              }
            }}
          />
        </div>
      </div>
      <div>
        <div>Single</div>
        <div style={{ width: 300, marginBottom: 50 }}>
          <Select value={value} options={options} selected={["One"]} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
