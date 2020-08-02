import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { useSelector } from 'react-redux';
import { InterfaceAllTypes } from './redux/types';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const theme = useSelector((state: InterfaceAllTypes) => {
    return (state.userReducer.theme);
  });

  return (
    <ThemeProviderStyled theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProviderStyled>
  );
}

export default App;
