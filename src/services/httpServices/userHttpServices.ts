import { UserFormInput } from "@/types/form";
import { AxiosErrorResponse } from "@/types/response";
import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../httpService";

export const getUsers = createAsyncThunk(
  "users/get",
  async (
    { role, size, page }: { role: string; size: number; page: number },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await httpService.get(
        `/api/auth/admin/user/?size=${size}&page=${page}${
          role ?? "&role=" + role
        }/`
      );
      return data;
    } catch (error) {
      const typedError = error as AxiosErrorResponse;
      const message =
        typedError.response?.data?.message ||
        typedError.message ||
        "Get users list field!";
      return rejectWithValue(message);
    }
  }
);

export const getSingleUser = createAsyncThunk(
  "user/get",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await httpService.get(`/api/auth/admin/user/${id}/`);
      return data;
    } catch (error) {
      const typedError = error as AxiosErrorResponse;
      const message =
        typedError.response?.data?.message ||
        typedError.message ||
        "Get single user field!";
      return rejectWithValue(message);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/create",
  async (formData: UserFormInput, { rejectWithValue }) => {
    try {
      const { data } = await httpService.post(
        "/api/auth/admin/user/",
        formData
      );
      return data;
    } catch (error) {
      const typedError = error as AxiosErrorResponse;
      const message =
        typedError.response?.data?.message ||
        typedError.message ||
        "User create field!";
      return rejectWithValue(message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (
    { id, formData }: { id: string; formData: UserFormInput },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await httpService.patch(
        `/api/auth/admin/user/${id}`,
        formData
      );
      return data;
    } catch (error) {
      const typedError = error as AxiosErrorResponse;
      const message =
        typedError.response?.data?.message ||
        typedError.message ||
        "User update field!";
      return rejectWithValue(message);
    }
  }
);
