import { createSlice } from "@reduxjs/toolkit";

import { decryptMessage } from "./decryptActions";

export interface ResponsePayload {
  id: string;
  encrypted_image: string;
  message: string;
}

interface InitialState {
  loading: boolean;
  decrypted: ResponsePayload | null;
  error: string | null;
}

const initialState: InitialState = {
  loading: false,
  decrypted: null,
  error: null,
};

const decryptSlice = createSlice({
  name: "encrypt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(decryptMessage.pending, (state) => {
      state.loading = true;
      state.decrypted = null;
      state.error = null;
    });
    builder.addCase(decryptMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.decrypted = action.payload;
      state.error = null;
    });
    builder.addCase(decryptMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Something went wrong!";
    });
  },
});

export default decryptSlice.reducer;
