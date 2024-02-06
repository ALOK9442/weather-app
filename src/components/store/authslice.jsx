import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    status: "idle",
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            state.isAuthenticated = true
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        signOut(state) {
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const { setUser, setStatus, signOut } = authSlice.actions
export default authSlice.reducer