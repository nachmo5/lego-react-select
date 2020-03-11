import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // select
import App2 from "./App2"; // table
import App3 from "./App3"; // selects all
import App4 from "./App4"; // dropdown
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App4 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
