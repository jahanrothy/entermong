import {createSlice} from "@reduxjs/toolkit";
import {getProfileHttpService} from "@/services/httpServices/profileHttpService.ts";
import {UserState} from "@/types/user";

const initialState: UserState = {
    loading : false,
    data    : null,
    error   : null,
    success : false,
    isAuthenticated: true,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{
        resetUserState(state) {
            state.data = null;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileHttpService.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfileHttpService.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
                state.success = true;
            })
            .addCase(getProfileHttpService.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload as string;
            });
    },
})

export default profileSlice.reducer;