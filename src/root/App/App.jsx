import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'root/Router';
import { Navigation } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import ThemeProvider from 'context/ThemeContext';
import UserProvider from 'context/UserContext';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
