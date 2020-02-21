import React from "react";
import Select from "./Select";
import "antd/dist/antd.css";

function App() {
  const [tags, setTags] = React.useState(["Tesp1", "Test2", "Test3"]);
  const [value, setValue] = React.useState("Jemimah Bradford");
  console.log(tags);
  return (
    <div className="App">
      <div
        style={{
          width: "300px",
          padding: "25px",
          paddingLeft: 200
        }}
      >
        <div style={{ width: 200, marginBottom: 50 }}>
          <Select multiple value={tags} />
        </div>
        <div style={{ width: 200, marginBottom: 50 }}>
          <button onClick={() => setTags([...tags, "Tag " + tags.length + 1])}>
            ADD
          </button>
          <button onClick={() => setTags([...tags].splice(0, tags.length - 1))}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
