import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>{children}</Router>
    </ThemeProvider>
  );
};
