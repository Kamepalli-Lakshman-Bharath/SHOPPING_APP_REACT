"use client";
import { Inter } from "next/font/google";
import "./global.css";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
