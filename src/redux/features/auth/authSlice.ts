import {createSlice} from "@reduxjs/toolkit";
import {AuthState} from "@/types/auth/auth";
import {authService} from "@/services/httpServices/authHttpServices.ts";

const initialState: AuthState = {
    loading: false,
    error: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(authService.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authService.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(authService.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
})

export default authSlice.reducer;