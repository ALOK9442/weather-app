import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            name: 'John Doe',
            status: 'active',
            addedDate: '2021-01-01'
        },
        {
            id: 2,
            name: 'Mitchell Stark',
            status: 'active',
            addedDate: '2021-05-05'
        },
        {
            id: 3,
            name: 'Virat Kohli',
            status: 'active',
            addedDate: '2022-01-01'
        },
        {
            id: 4,
            name: 'Rohit Sharma',
            status: 'active',
            addedDate: '2022-12-11'
        },
        {
            id: 5,
            name: 'Nick Jonas',
            status: 'active',
            addedDate: '2024-01-02'
        }
    ],
    user: null,
    status: "",
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            state.isAuthenticated = true
            state.status = "active"
        },
        signOut(state) {
            state.user = null
            state.isAuthenticated = false
            state.status = "inactive"
        },
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        },
        updateUserStatus: (state, action) => {
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return { ...user, status: action.payload.status };
                }
                return user;
            });
        },
        selectUser: (state, action) => {
            return state.users;
        }
    }
})

export const { setUser, setStatus, signOut, addUser, deleteUser, updateUserStatus,selectUser } = authSlice.actions
export default authSlice.reducer