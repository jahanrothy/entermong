import {createAsyncThunk} from "@reduxjs/toolkit";
import httpService from "@/services/httpService.ts";
import {AxiosErrorResponse} from "@/types/response";

export const getProfileHttpService = createAsyncThunk(
    'user/profile',async (_,{rejectWithValue}) => {
        try {
            const { data } = await httpService.get("/api/auth/profile/");
            return data;
        } catch (error) {
            const typedError = error as AxiosErrorResponse;
            const message = typedError.response?.data?.message || typedError.message || 'Load profile failed';
            return rejectWithValue(message);
        }
    }
);