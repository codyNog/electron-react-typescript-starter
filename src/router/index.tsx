import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { RootPage } from "../components/pages/root";

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={"/"} component={RootPage} />
      </Switch>
    </HashRouter>
  );
};
