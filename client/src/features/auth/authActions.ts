import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import axios, { AxiosResponse } from "axios";
import type { ResponsePayload, UserPayload } from "./authSlice";

interface LoginUserParams {
  username: string;
  password: string;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

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
      return rejectWithValue(error.message);
    }
  }
);
