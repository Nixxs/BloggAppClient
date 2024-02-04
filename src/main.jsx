import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { getInitialTheme } from './utils/theme'
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    secondary: {
      main: "#3d3d3d",
    },
    background: {
      grey: "#dedede"
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: "#1976D2",
    },
    background: {
      grey: "#3F3F3F"
    }
  },
});

let currentTheme = getInitialTheme() === 'light' ? lightTheme : darkTheme;
currentTheme = responsiveFontSizes(currentTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
