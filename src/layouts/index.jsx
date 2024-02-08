import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";
import { ThemeContext } from "../components/ThemeContext";
import { useContext } from "react";

const Root = styled("div")(
    function() {
        const { theme } = useContext(ThemeContext);
        return ({
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default
        });
})

const Main = styled("div")(() => ({
    flex: 1,
    display: "flex",
    flexDirection: "column"
}));

const Layout = () => {
    return (
        <Root>
            <Header />
            <Main>
                <GridItem> 
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                </GridItem>
            </Main>
            <Footer />
        </Root>
    );
}

export default Layout;
