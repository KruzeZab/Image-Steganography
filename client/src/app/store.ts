import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import encryptReducer from "../features/encrypt/encryptSlice";
import decryptReducer from "../features/decrypt/decryptSlice";
import profileReducer from "../features/dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    encrypt: encryptReducer,
    decrypt: decryptReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
