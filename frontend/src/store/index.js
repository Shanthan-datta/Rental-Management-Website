import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
    user: localStorage.getItem("user") || "",
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    isStaffLoggedIn: localStorage.getItem("isStaffLoggedIn") === "true",
    isAdminLoggedIn: localStorage.getItem("isAdminLoggedIn") === "true"
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem("user", state.user);
            localStorage.setItem("isLoggedIn", "true");
        },
        logout(state) {
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn", "false");
        },
        staffLogin(state) {
            state.isStaffLoggedIn = true;
            localStorage.setItem("isStaffLoggedIn", "true");
        },
        staffLogout(state) {
            state.isStaffLoggedIn = false;
            localStorage.setItem("isStaffLoggedIn", "false");
        },
        adminLogin(state) {
            state.isAdminLoggedIn = true;
            localStorage.setItem("isAdminLoggedIn", "true");
        },
        adminLogout(state) {
            state.isAdminLoggedIn = false;
            localStorage.setItem("isAdminLoggedIn", "false");
        }
    }
});

export const authActions = authSlice.actions;
export const store = configureStore({
    reducer: authSlice.reducer,
});
