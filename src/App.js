import React from "react";
import Select from "./Select";
import "antd/dist/antd.css";

function App() {
  const [tags, setTags] = React.useState(["Tesp1", "Test2___"]);
  const [value, setValue] = React.useState("Jemimay Bpadford");

  const options = ["One", "Two", "Three"];
  const groups = [
    { name: "Un", options: ["Uno", "Ichi", "Wahd"] },
    { name: "Deux", options: ["Dos", "Ni", "Joj"] }
  ];

  return (
    <div className="App">
      <div>
        <div>Multiple</div>
        <div style={{ width: 300, marginBottom: 50 }}>
          <Select groupped options={groups} multiple value={tags} />
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
      <div>
        <div>Single</div>
        <div style={{ width: 300, marginBottom: 50 }}>
          <Select value={value} options={options} />
        </div>
      </div>
    </div>
  );
}

export default App;
