import { createSlice } from "@reduxjs/toolkit";

import jwt_decode from "jwt-decode";
import { createUser, loginUser } from "./authActions";

export interface ResponsePayload {
  access: string;
  refresh: string;
}

export interface UserPayload {
  user_id: string;
  username: string;
}

interface InitialState {
  tokens: null | ResponsePayload;
  loading: boolean;
  user: UserPayload | null;
  error: string | null;
}

const userToken = localStorage.getItem("authTokens") ?? "";

const getUserInfo = () => {
  if (userToken) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { user_id, username } = jwt_decode<UserPayload>(
      JSON.parse(userToken).access
    );

    return {
      user_id,
      username,
    };
  }

  return null;
};

const initialState: InitialState = {
  tokens: userToken ? JSON.parse(userToken) : null,
  loading: false,
  user: getUserInfo(),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("authTokens");
      state.tokens = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.tokens = action.payload.tokens;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Something went wrong!";
    });

    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.tokens = action.payload.tokens;
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Something went wrong!";
    });
  },
});

export default authSlice.reducer;

export const { logout, setUser, setTokens } = authSlice.actions;
