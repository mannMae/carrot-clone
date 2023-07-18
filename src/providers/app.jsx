import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import { HelmetProvider } from 'react-helmet-async';
import { BottomSheet } from 'components/Elements';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'library/react-query';

export const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>{children}</Router>
          <BottomSheet></BottomSheet>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};
