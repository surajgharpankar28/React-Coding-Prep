import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "./index.css";
import { Provider } from "react-redux";
import store from "./pages/Question_6/store";
import { ThemeProvider } from "./pages/Question_28/theme-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
