import {ResponseSingle} from "../response";
import React from "react";

export interface Data {
  id?: number;
  email?: string;
  username?: string;
  token?: string;
  access?: string;
  refresh?: string;
}

export interface AuthState {
  loading: boolean;
  error: string | null;
  isAuthenticated?: boolean | null;
}

export interface LoginState {
  loading: boolean;
  data: ResponseSingle<Data> | null;
  error: string | null;
  success: boolean;
}

export interface AuthCredential {
  email   : string;
  password: string;
}

export interface AuthVerify{
  token: string | undefined;
}

export interface LoginFormProps {
  submitForm: (data: AuthCredential) => void;
}

export interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export interface DecodedToken {
  exp: number;
}