import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Dashboard from "./boards/Dashboard";
import Favicon from "react-favicon";
import "./assets/scss/app.scss";

function App() {
  return (
    <Router>
      <Favicon url="./favicon.ico" />
      <Dashboard>
        <Routes />
      </Dashboard>
    </Router>
  );
}

export default App;
