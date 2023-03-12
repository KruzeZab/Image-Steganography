import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import axios, { type AxiosResponse } from "axios";
import type { ResponsePayload, UserPayload } from "./authSlice";

interface LoginUserParams {
  username: string;
  password: string;
}

const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formValues: LoginUserParams, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<ResponsePayload> = await axios.post(
        `${SERVER_URL}/api/user/token/`,
        {
          username: formValues.username,
          password: formValues.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { user_id, username } = jwt_decode<UserPayload>(
        response.data.access
      );

      const user = {
        user_id,
        username,
      };

      localStorage.setItem("authTokens", JSON.stringify(response.data));

      return { user, tokens: response.data };
    } catch (error: any) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);

interface CreateUserParams {
  username: string;
  email: string;
  password: string;
  cfmPassword: string;
}

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (formValues: CreateUserParams, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<ResponsePayload> = await axios.post(
        `${SERVER_URL}/api/user/signup/`,
        {
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          password2: formValues.cfmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { user_id, username } = jwt_decode<UserPayload>(
        response.data.access
      );

      const user = {
        user_id,
        username,
      };

      localStorage.setItem("authTokens", JSON.stringify(response.data));

      return { user, tokens: response.data };
    } catch (error: any) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);
