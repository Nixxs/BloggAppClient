import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import BlogTheme from './components/BlogTheme/index.jsx';
import { ThemeContextProvider } from './components/ThemeContext/index.jsx';
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeContextProvider>
      <BlogTheme>
        <App />
      </BlogTheme>
    </ThemeContextProvider>
  </React.StrictMode>,
)
