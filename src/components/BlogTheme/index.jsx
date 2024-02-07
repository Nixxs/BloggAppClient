import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { ThemeProvider } from '@mui/material/styles';

function BlogTheme({children}) {
    const { theme } = useContext(ThemeContext);
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default BlogTheme;