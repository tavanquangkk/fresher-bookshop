import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: {
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
    },
};

export const accountSlice = createSlice({
    name: "account",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        doLoginAction: (state, action) => {
            (state.isAuthenticated = true), (state.user = action.payload);
        },
        doGetAccountAcction: (state, action) => {
            (state.isAuthenticated = true), (state.user = action.payload);
        },
    },

    extraReducers: (builder) => {},
});

export const { doLoginAction, doGetAccountAcction } = accountSlice.actions;

export default accountSlice.reducer;
