import React from "react";
import Free from "./components/Free";

const a = [];
for (let i = 0; i < 100; i++) {
  a.push("a_______________" + i);
}

const App = props => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#e9e9e9",
        paddingTop: "100px"
      }}
    >
      <div
        style={{
          margin: "auto",
          border: "1px solid black",
          width: "50vw",
          height: "50vh",
          overflowY: "auto"
        }}
      >
        <div>
          {a.map(e => (
            <div>{e}</div>
          ))}
        </div>
        <Free
          top={500}
          left={330}
          visible
          content={
            <div style={{ width: 200, border: "1px solid red" }}>
              this is a content{" "}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default App;
