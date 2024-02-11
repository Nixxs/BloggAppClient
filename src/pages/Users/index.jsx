import UserManager from "../../features/UserManager"
import { createContext } from 'react';
import { useReducer } from 'react';
import UserProfile from "../../features/UserProfile";
import Grid from '@mui/material/Grid';
import GridItem from "../../components/GridItem";
import { initialState, userReducer } from "./userReducer";

export const UserContext = createContext();

function Users() {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <Grid container justifyContent="center" style={{width: '100%', margin: '0 auto'}}> {/* Ensure the container takes full width and centers its content */}
            <UserContext.Provider value={{ state, dispatch }}>
                <Grid item container justifyContent="center" spacing={2}> {/* Use justifyContent="center" to align items and spacing for some gap between them */}
                    <GridItem>
                        <UserManager />
                    </GridItem>
                    <GridItem>
                        <UserProfile />
                    </GridItem>
                </Grid>
            </UserContext.Provider>
        </Grid>
    );
}

export default Users;