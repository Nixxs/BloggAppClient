const login = async (dispatch, email, password) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
        const response = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.result === 200) {
            dispatch({ type: "LOGIN_SUCCESS", payload: data.data });
        } else {
            dispatch({ type: "LOGIN_FAILURE", payload: data.message });
        }
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: `something went wrong: ${error}` });
    }
}

const logout = (dispatch) => {
    dispatch({ type: "LOGOUT" });
}

export { login, logout }