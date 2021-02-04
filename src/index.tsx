import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalProvider from "./contexts/GlobalProvider";

//Import Scss
import "./assets/scss/themes.scss";

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);
