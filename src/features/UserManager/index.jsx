import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

function UserManager() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("no data from users api");
            })
            .then((userData) => {
                setUsers(userData.data);
            })
            .catch(error => console.error("something went wrong getting data for users"));
    }, []);

    const handleListItemClick = (event) => {
        event.preventDefault();
        const userID = event.currentTarget.dataset.id;
        console.log("clicked on user: ", userID);
        setSelectedUser(userID);
    };

    const handleUserDelete = (event) => {
        event.preventDefault();
        const userID = parseInt(event.currentTarget.dataset.id);
        console.log("delete user: ", userID);

        fetch(`http://localhost:3000/api/users/${userID}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("no data from users api");
        })
        .then((data) => {
            if (data.result === 200){
                const updatedUsers = users.filter(user => user.id !== userID);
                setUsers(updatedUsers);
            }
        })
        .catch(error => console.error(`something went wrong getting data for users: ${error}`));
    }

    const UserList = () => {
        return (
            <List sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}>
            {users.map((user) => (
                <ListItemButton key={user.id} selected={selectedUser == user.id} onClick={handleListItemClick} data-id={user.id}>
                    <ListItemText primary={user.name} secondary={user.email} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={handleUserDelete} data-id={user.id}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItemButton>
            ))}
          </List>
        );
    }

    return (
        <UserList />
    );
}

export default UserManager;