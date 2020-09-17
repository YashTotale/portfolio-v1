//React Imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReduxStore from "./Redux/store";

ReactDOM.render(
  <ReduxStore>
    <App />
  </ReduxStore>,
  document.getElementById("root")
);
