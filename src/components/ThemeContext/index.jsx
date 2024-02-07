import { createContext, useState  } from "react";
import { responsiveFontSizes, createTheme } from '@mui/material/styles';


const ThemeContext = createContext();

let lightTheme = createTheme({
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
lightTheme = responsiveFontSizes(lightTheme);
  
let darkTheme = createTheme({
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
darkTheme = responsiveFontSizes(darkTheme);

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(lightTheme); // Default theme

    const userThemeSetting = (themeSetting) => {
        if (themeSetting === "dark") {
            setTheme(darkTheme);
        } 
        
        if (themeSetting === "light") {
            setTheme(lightTheme);
        } 
    }

    const contextValue = {theme, userThemeSetting}
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export { 
    ThemeContext, 
    ThemeContextProvider
};