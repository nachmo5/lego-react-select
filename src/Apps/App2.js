import React from "react";
import Table from "./Table";

const App = () => {
  const data = [
    { name: "Med", age: "102", address: "this is an address" },
    { name: "John", age: "88", address: "221B baker street" },
    { name: "Jane", age: "02", address: "Sesame street" }
  ];

  const columns = [
    { id: "name", header: "Name" },
    { id: "age", header: "Age" },
    { id: "Jane", header: "Address" }
  ];

  return (
    <div
      style={{
        width: 1000,
        height: 500,
        margin: "auto",
        background: "#d0d0d0"
      }}
    >
      <Table data={data} columns={columns} />
    </div>
  );
};

export default App;
