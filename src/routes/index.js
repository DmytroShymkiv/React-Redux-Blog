import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import { ROUTES } from "./routes";

export default function Routes() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            {user ? route.component : <Redirect to={ROUTES.signIN} />}
          </Route>
        ))}

        <Redirect to={ROUTES.home} />
      </Switch>
    </>
  );
}
