import { useContext } from 'react';
import { UserContext } from '../../pages/Users';

function UserProfile() {
    const { users, setUsers, selectedUser, setSelectedUser } = useContext(UserContext);
    console.log(users);

    if(selectedUser) {
        const user = users.find(user => user.id === parseInt(selectedUser));

        return (
            <div>
                <h1>User Profile:</h1>
                <ul>
                    <li>
                        <strong>ID:</strong> {user.id}
                    </li>
                    <li>
                        <strong>Name:</strong> {user.name}
                    </li>
                    <li>
                        <strong>Email:</strong> {user.email}
                    </li>
                </ul>
            </div>
        );
    } else {
        return(
            <div>
                <h1>User Profile:</h1>
                <p>Select a user to view their profile</p>
            </div>
        );
    }
}

export default UserProfile;