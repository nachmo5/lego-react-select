import React from "react";
import Select from "./Select";
import { ThemeProvider } from "react-jss";
import "antd/dist/antd.css";
import Tag from "./Tag/Tag";
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
        <div>
          <div>Single</div>
          <div style={{ width: 300, marginBottom: 50 }}>
            <Select value={value} />
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            paddingTop: 0,
            paddingLeft: 100
          }}
        >
          <div
            style={{
              height: 100,
              width: 300,
              background: "#eaf"
            }}
          >
            <Tag value={"Hply"} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
