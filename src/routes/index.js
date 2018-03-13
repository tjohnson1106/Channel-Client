import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" exact component={Register} />
  </Switch>
);
