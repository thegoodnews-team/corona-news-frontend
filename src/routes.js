import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import RegisterNews from "./register-news";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register-news" exact component={RegisterNews} />
      </Switch>
    </BrowserRouter>
  );
}
