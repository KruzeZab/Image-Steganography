import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AxiosResponse } from "axios";
import server from "../../lib/axios/server";
import { type ResponsePayload } from "./encryptSlice";

interface EncryptMessageParams {
  pubkey: string;
  image: string;
  message: string;
}

export const encryptMessage = createAsyncThunk(
  "encrypt/encryptMessage",
  async (values: EncryptMessageParams, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<ResponsePayload> = await server.post(
        "api/encrypt/",
        {
          reciever_public_key: values.pubkey,
          message: values.message,
          original_image: values.image,
        },
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
