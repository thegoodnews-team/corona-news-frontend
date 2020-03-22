import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
