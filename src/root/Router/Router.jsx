import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'constants/routes';

const Router = () => {
  return (
    <Switch>
      {routes.map((data) => {
        console.log(data);
        return <Route {...data} />;
      })}
    </Switch>
  );
};

export default Router;
