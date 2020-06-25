import React, { createContext, useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const UserContext = createContext({
  token: undefined,
  setToken: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(cookies.get('token'));

  const user = {
    token,
    setToken: (newToken) => {
      cookies.set('token', newToken, {
        path: '/',
      });
      setToken(newToken);
    },
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
