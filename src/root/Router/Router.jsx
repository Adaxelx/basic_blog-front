import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'constants/routes';

const Router = () => {
  return (
    <Switch>
      {routes.map((data) => (
        <Route {...data} />
      ))}
    </Switch>
  );
};

export default Router;
