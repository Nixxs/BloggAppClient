import UserManager from "../../features/UserManager"
import { createContext } from 'react';
import { useState } from 'react';
import UserProfile from "../../features/UserProfile";
import Grid from '@mui/material/Grid';
import GridItem from "../../components/GridItem";


export const UserContext = createContext();

function Users() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <Grid container justifyContent="center" style={{width: '100%', margin: '0 auto'}}> {/* Ensure the container takes full width and centers its content */}
            <UserContext.Provider value={{ users, setUsers, selectedUser, setSelectedUser }}>
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