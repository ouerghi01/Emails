import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            email: "",
            token: "", 
            password: "",           
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.user.email = action.payload.name;
            state.user.token = action.payload.token;
            state.user.password = action.payload.password;
        },
        removeUser: (state) => {
            state.user = { email: "", token: "" , password: ""};
        },
    },
});

export const selectUser = (state) => state.user.user;
export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
