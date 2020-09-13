import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Project from "./Routes/Project";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/project" component={Project} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
