import { useAuth, login } from "../../features/AuthManager/AuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

function Login() {
    const { state: {error}, dispatch } = useAuth(); 

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        login(dispatch, email, password);
    }

    return (
        < form onSubmit={handleLogin} >
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="password"
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >Login</Button>
            {error && <Alert severity="error">{error}</Alert>}
        </form>
    );
}

export default Login;