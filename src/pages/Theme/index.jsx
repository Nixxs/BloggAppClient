import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { Button } from '@mui/material';

function Theme() {
    const { userThemeSetting } = useContext(ThemeContext);
    return (
        <>
            <Button variant="contained" onClick={() => userThemeSetting("dark")}>Dark Mode</Button>
            <Button variant="contained" onClick={() => userThemeSetting("light")}>Light Mode</Button>
        </>
    );
}

export default Theme;