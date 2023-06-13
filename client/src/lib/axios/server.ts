import axios, { type AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { setTokens, setUser } from "../../features/auth/authSlice";

const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;

interface JWTUser {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: string;
  username: string;
}

interface Token {
  access: string;
  refresh: string;
}

interface ResponsePayload {
  access: string;
}

const server = axios.create({
  baseURL: SERVER_URL,
});

export const setupInterceptors = (store: any) => {
  server.interceptors.request.use(async (req) => {
    const dispatch = store.dispatch;
    const auth = store.getState().auth;
    const tokens: Token = auth.tokens;
    if (!tokens) return req;
    const user = jwt_decode<JWTUser>(tokens?.access || "");
    const isExpired = dayjs().isAfter(dayjs.unix(user.exp));

    if (!isExpired) {
      req.headers.Authorization = `Bearer ${tokens?.access}`;
      return req;
    }
    const response: AxiosResponse<ResponsePayload> = await axios.post(
      `${SERVER_URL}/api/user/token/refresh/`,
      {
        refresh: tokens?.refresh,
      }
    );
    const newToken: Token = { ...tokens, access: response.data.access };
    localStorage.setItem("authTokens", JSON.stringify(tokens));
    dispatch(setTokens(newToken));
    // eslint-disable-next-line
    const { user_id, username } = jwt_decode<JWTUser>(newToken.access);
    dispatch(setUser({ user_id, username }));
    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });
};

export default server;
