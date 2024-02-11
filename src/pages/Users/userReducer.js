export const initialState = {
    users: [],
    selectedUser: null,
    error: null
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.payload };
        case "SET_SELECTED_USER":
            return { ...state, selectedUser: action.payload };
        case "FETCH_USERS_SUCCESS":
            return { ...state, users: action.payload };
        case "FETCH_USERS_FAILURE":
            return { ...state, error: action.payload };
        case "DELETE_USER_SUCCESS":
            return { ...state, users: action.payload, selectedUser: null};
        case "DELETE_USER_FAILURE":
            return { ...state, error: action.payload };
        default:
            return state;
    }
}