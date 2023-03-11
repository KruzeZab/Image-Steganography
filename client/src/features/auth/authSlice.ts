import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";

interface LoginUserParams {
  username: string;
  password: string;
}

interface ResponsePayload {
  access: string;
  refresh: string;
}

interface UserPayload {
  user_id: string;
  username: string;
}

interface InitialState {
  tokens: null | ResponsePayload;
  loading: boolean;
  user: UserPayload | null;
  error: string | null;
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

const userToken = localStorage.getItem("authTokens") ?? "";

const getUserInfo = () => {
  if (userToken) {
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
      console.log(action);
      state.error = (action.payload as string) || "Something went wrong";
    });
  },
});

export default authSlice.reducer;

export const { logout, setUser, setTokens } = authSlice.actions;
