import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/_lib/UserSlice";
import userDataReducer from "@/app/_lib/UserDataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userData: userDataReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
