import { useContext, useEffect } from "react";
import { UserContext } from "../../pages/Users";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Alert from "@mui/material/Alert";

function UserManager() {
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then((userData) => {
                switch (userData.result) {
                    case 200:
                        dispatch({ type: "SET_USERS", payload: userData.data });
                        break;
                    case 404:
                        dispatch({ type: "FETCH_USERS_FAILURE", payload: userData.message });
                        break;
                    case 500:
                        dispatch({ type: "FETCH_USERS_FAILURE", payload: userData.message });
                        break;
                    default:
                        dispatch({ type: "FETCH_USERS_FAILURE", payload: "unknown error while fetching user data" });
                        break;
                }
            })
            .catch((error) => {
                dispatch({ type: "FETCH_USERS_FAILURE", payload: `something went wrong fetching the data: ${error}` });
            });
    }, []);

    const handleListItemClick = (event) => {
        event.preventDefault();
        const userID = event.currentTarget.dataset.id;
        console.log("clicked on user: ", userID);
        dispatch({ type: "SET_SELECTED_USER", payload: userID });
    };

    const handleUserDelete = (event) => {
        event.preventDefault();
        const userID = parseInt(event.currentTarget.dataset.id);
        console.log("delete user: ", userID);

        fetch(`http://localhost:3000/api/users/${userID}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
            switch (data.result) {
                case 200:
                    dispatch({ type: "DELETE_USER_SUCCESS", payload: state.users.filter((user) => user.id != parseInt(userID) ) });
                    break;
                case 404:
                    dispatch({ type: "DELETE_USER_FAILURE", payload: data.message });
                    break;
                case 500:
                    dispatch({ type: "DELETE_USER_FAILURE", payload: data.message });
                    break;
                default:
                    dispatch({ type: "DELETE_USER_FAILURE", payload: "unknown error while deleting user" });
                    break;
            }
        })
        .catch((error) => {
            dispatch({ type: "DELETE_USER_FAILURE", payload: `something went wrong deleting the data: ${error}` });
        });
    }

    const UserList = () => {
        return (
            <>
                <h1>User List:</h1>
                <List sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}>
                {state.users.map((user) => (
                    <ListItemButton key={user.id} selected={state.selectedUser == user.id} onClick={handleListItemClick} data-id={user.id}>
                        <ListItemText primary={user.name} secondary={user.email} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={handleUserDelete} data-id={user.id}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItemButton>
                ))}
                </List>
            </>
        );
    }

    return (
        <>
            <UserList />
            {state.error && <Alert severity="error">{state.error}</Alert>}
        </>
    );
}

export default UserManager;