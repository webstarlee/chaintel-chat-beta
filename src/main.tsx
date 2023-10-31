import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeModeProvider } from "@/hooks/ThemeModeContext.tsx";
import { RootProvider } from "./hooks/RootContext.tsx";
import "@/styles//index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <RootProvider>
        <App />
      </RootProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);
