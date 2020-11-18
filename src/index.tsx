//React Imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Redux Imports
import ReduxStore from "./Redux/store";

//Service Worker Imports
import { register } from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ReduxStore>
      <App />
    </ReduxStore>
  </React.StrictMode>,
  document.getElementById("root")
);

register();
