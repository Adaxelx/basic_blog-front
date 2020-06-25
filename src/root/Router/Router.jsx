import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'constants/routes';
import { UserContext } from 'context/UserContext';
import PrivateRoute from '../components/PrivateRoute';

const Router = () => {
  const user = useContext(UserContext);

  return (
    <Switch>
      {routes.map(({ component: Component, path, isPrivate, ...rest }) => {
        if (isPrivate) {
          return (
            <PrivateRoute path={path} key={path} {...rest} token={user.token}>
              <Component {...rest} />
            </PrivateRoute>
          );
        }
        return (
          <Route path={path} key={path} {...rest}>
            <Component {...rest} />
          </Route>
        );
      })}
    </Switch>
  );
};

export default Router;
