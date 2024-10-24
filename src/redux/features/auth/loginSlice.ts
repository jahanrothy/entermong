import {createSlice} from "@reduxjs/toolkit";
import {LoginState} from "@/types/auth/auth";
import {loginService, logoutService} from "@/services/httpServices/authHttpServices.ts";

const initialState: LoginState = {
    loading : false,
    data    : null,
    error   : null,
    success : false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        handleErrorState(state, action) {
            state.error = action.payload;
        },
        resetLoginState(state) {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginService.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginService.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
                state.success = true;
            })
            .addCase(loginService.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(logoutService.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutService.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(logoutService.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
})

export const { handleErrorState, resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;