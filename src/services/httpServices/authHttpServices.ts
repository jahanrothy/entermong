import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosErrorResponse} from "@/types/response";
import {AuthCredential, AuthVerify} from "@/types/auth/auth";
import httpService from "@/services/httpService.ts";

export const loginService = createAsyncThunk(
    'auth/login',async (formData:AuthCredential,{rejectWithValue}) => {
        try {
            const { data } = await httpService.post("/api/auth/login/admin/", formData);
            return data;
        } catch (error) {
            const typedError = error as AxiosErrorResponse;
            const message = typedError.response?.data?.message || typedError.message || 'Login failed';
            return rejectWithValue(message);
        }
    }
);

export const logoutService = createAsyncThunk(
    'auth/logout',async (_,{rejectWithValue}) => {
        try {
            const { data } = await httpService.get("/api/auth/logout/",);
            return data;
        } catch (error) {
            const typedError = error as AxiosErrorResponse;
            const message = typedError.response?.data?.message || typedError.message || 'Logout failed';
            return rejectWithValue(message);
        }
    }
);

export const authService = createAsyncThunk(
    'auth/verify',async (formData:AuthVerify,{rejectWithValue}) => {
        try {
            const { data } = await httpService.post("/api/auth/token/verify/", formData);
            return data;
        } catch (error) {
            const typedError = error as AxiosErrorResponse;
            const message = typedError.response?.data?.message || typedError.message || 'Verification failed';
            return rejectWithValue(message);
        }
    }
);