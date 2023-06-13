import { createSlice } from "@reduxjs/toolkit";

import { encryptMessage } from "./encryptActions";

export interface ResponsePayload {
  id: string;
  message: string;
  original_image: string;
  reciever_public_key: string;
  encrypted_image: string;
}

interface InitialState {
  loading: boolean;
  encrypted: ResponsePayload | null;
  error: string | null;
}

const initialState: InitialState = {
  loading: false,
  encrypted: null,
  error: null,
};

const encryptSlice = createSlice({
  name: "encrypt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(encryptMessage.pending, (state) => {
      state.loading = true;
      state.encrypted = null;
      state.error = null;
    });
    builder.addCase(encryptMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.encrypted = action.payload;
      state.error = null;
    });
    builder.addCase(encryptMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Something went wrong!";
    });
  },
});

export default encryptSlice.reducer;
