import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AxiosResponse } from "axios";
import server from "../../lib/axios/server";
import { type ResponsePayload } from "./decryptSlice";

export const decryptMessage = createAsyncThunk(
  "decrypt/decryptMessage",
  async (file: File, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("encrypted_image", file);

      const response: AxiosResponse<ResponsePayload> = await server.post(
        "/api/decrypt/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);
