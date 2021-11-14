import React from 'react';
import HomePage from './screens/HomePage';
import theme from './mui/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
