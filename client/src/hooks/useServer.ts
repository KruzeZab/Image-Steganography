import axios, { type AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setTokens, setUser } from "../features/auth/authSlice";

const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;

interface JWTUser {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: string;
  username: string;
}

interface NewToken {
  access: string;
  refresh: string;
}

interface ResponsePayload {
  access: string;
}

const useServer = () => {
  const tokens = useAppSelector((state) => state.auth.tokens);

  const dispatch = useAppDispatch();

  if (!tokens) return axios.create({ baseURL: SERVER_URL });

  const server = axios.create({
    baseURL: SERVER_URL,
    headers: { Authorization: `Bearer ${tokens?.access}` },
  });

  server.interceptors.request.use(async (req) => {
    const user = jwt_decode<JWTUser>(tokens?.access || "");
    const isExpired = dayjs().isAfter(dayjs.unix(user.exp));

    if (!isExpired) return req;

    const response: AxiosResponse<ResponsePayload> = await axios.post(
      `${SERVER_URL}/api/user/token/refresh/`,
      {
        refresh: tokens?.refresh,
      }
    );

    const newToken: NewToken = { ...tokens, access: response.data.access };

    localStorage.setItem("authTokens", JSON.stringify(tokens));

    dispatch(setTokens(newToken));
    dispatch(setUser(jwt_decode<JWTUser>(newToken.access)));

    req.headers.Authorization = `Bearer ${newToken.access}`;
    return req;
  });

  return server;
};

export default useServer;
