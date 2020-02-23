import React from "react";
import Select from "./Select";
import { ThemeProvider } from "react-jss";
import "antd/dist/antd.css";
import Input from "./Input";
import { Row, Col } from "antd";
function App() {
  const [tags, setTags] = React.useState(["Tesp1", "Test2___"]);
  const [value, setValue] = React.useState("Jemimay Bpadford");
  const [crap, setCrap] = React.useState(false);
  console.log(tags);
  return (
    <ThemeProvider
      theme={{ fontSize: 12, gray: "gray", fontFamily: "Helvetica" }}
    >
      <div className="App">
        <div
          style={{
            border: "1px solid red",
            width: 300,
            display: "flex",
            padding: 25
          }}
        >
          <div
            style={{
              border: "1px solid black",
              flexGrow: 1,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                width: "100%",
                // display
                overflow: "hidden",
                textOverflow: "clip"
              }}
            >
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{" "}
            </div>
          </div>
        </div>

        <br />
        <br />
        <div
          style={{
            border: "1px solid red",
            width: 300,
            padding: 20,
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <Input style={{}} />
          </div>
        </div>
        <div>
          <div>Multiple</div>
          <div style={{ width: 300, marginBottom: 50 }}>
            <Select multiple value={tags} />
          </div>
          <div style={{ width: 200, marginBottom: 50 }}>
            <button
              onClick={() => setTags([...tags, "Tag " + tags.length + 1])}
            >
              ADD
            </button>
            <button
              onClick={() => setTags([...tags].splice(0, tags.length - 1))}
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
