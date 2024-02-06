import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    status: "idle",

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        signOut(state) {
            state.user = null
            state.status = "idle"
        }
    }
})

export const { setUser, setStatus, signOut } = authSlice.actions
export default authSlice.reducer