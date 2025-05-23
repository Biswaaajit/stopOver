"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";

type StoreProviderProps = {
  children: React.ReactNode;
};

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          loading: {
            duration: Infinity,
            style: {
              background: "#9ba7a7f9",
              color: "black",
            },
          },
          success: {
            duration: 2000,
            style: {
              background: "#027291c4",
              color: "white",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "rgba(97, 7, 7, 0.705)",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}
