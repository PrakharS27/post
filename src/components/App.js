import React from 'react';
import Posts from './Posts';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';


const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Posts />
  </ThemeProvider>
  );
};

export default App;
