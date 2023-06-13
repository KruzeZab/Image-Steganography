import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AxiosResponse } from "axios";
import server from "../../lib/axios/server";
import {
  type DecryptPayload,
  type EncryptPayload,
  type ProfilePayload,
} from "./dashboardSlice";

export const getProfile = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<ProfilePayload> = await server.get(
        "/api/user/"
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);

export const getEncrypts = createAsyncThunk(
  "profile/encrypts",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<EncryptPayload[]> = await server.get(
        "/api/encrypt/"
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);

export const getDecrypts = createAsyncThunk(
  "profile/decrypts",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<DecryptPayload[]> = await server.get(
        "/api/decrypt/"
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);
