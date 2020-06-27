import React, { createContext, useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const UserContext = createContext({
  token: undefined,
  setToken: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(cookies.get('token'));
  const [vote, setVote] = useState(cookies.get('vote'));
  const user = {
    token,
    vote,
    setToken: (newToken) => {
      cookies.set('token', newToken, {
        path: '/',
      });
      setToken(newToken);
    },
    setVote: () => {
      console.log('xd');
      cookies.set('vote', 1, {
        path: '/',
      });
      setVote(1);
    },
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
