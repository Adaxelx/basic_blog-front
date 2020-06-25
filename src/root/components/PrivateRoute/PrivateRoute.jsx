import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ token, ...rest }) => {
  const checkIfValid = () => {
    if (token) {
      return <Route {...rest} />;
    }
    return <Redirect to="/login" />;
  };

  return checkIfValid();
};

export default PrivateRoute;
