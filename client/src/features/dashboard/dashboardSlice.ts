import { createSlice } from "@reduxjs/toolkit";

import { getDecrypts, getEncrypts, getProfile } from "./dashboardActions";

export interface ProfilePayload {
  email: string;
  first_name: string;
  last_name: string;
  public_key: string;
  username: string;
}

export interface EncryptPayload {
  id: string;
  encrypted_image: string;
  message: string;
  reciever_public_key: string;
  original_image: string;
}

export interface DecryptPayload {
  id: string;
  encrypted_image: string;
  message: string;
}

interface InitialState {
  loading: boolean;
  profile: ProfilePayload | null;
  encrypts: null | EncryptPayload[];
  decrypts: null | DecryptPayload[];
  error: string | null;
}

const initialState: InitialState = {
  loading: false,
  profile: null,
  error: null,
  encrypts: null,
  decrypts: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      state.error = null;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Something went wrong!";
    });

    builder.addCase(getEncrypts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEncrypts.fulfilled, (state, action) => {
      state.loading = false;
      state.encrypts = action.payload;
      state.error = null;
    });
    builder.addCase(getEncrypts.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Something went wrong!";
    });

    builder.addCase(getDecrypts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getDecrypts.fulfilled, (state, action) => {
      state.loading = false;
      state.decrypts = action.payload;
      state.error = null;
    });
    builder.addCase(getDecrypts.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Something went wrong!";
    });
  },
});

export default profileSlice.reducer;
