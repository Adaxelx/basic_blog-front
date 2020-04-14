import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'root/Router';

import GlobalStyle from 'styles/GlobalStyle';
import ThemeProvider from 'context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
