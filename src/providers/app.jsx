import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import { HelmetProvider } from 'react-helmet-async';

export const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>{children}</Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};
