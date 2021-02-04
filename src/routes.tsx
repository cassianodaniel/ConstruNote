import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
