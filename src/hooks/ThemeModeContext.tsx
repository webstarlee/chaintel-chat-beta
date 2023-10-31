import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from '@emotion/react';
import { light_theme, dark_theme } from "@/theme/index";
import { useEffectOnce } from "./useEffectOnce";

interface ThemeModeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
);

interface ThemeModeProviderProps {
  children: React.ReactNode;
}

export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({
  children,
}) => {
  const [darkmode, setDarkmode] = useState(true);

  useEffectOnce(() => {
    const dark_mode = sessionStorage.getItem("darkmode") || true;
    setDarkmode(dark_mode == "true"? true: false || true);
  })

  const toggleDarkmode = () => {
    setDarkmode((prev) => !prev);
    sessionStorage.setItem("darkmode", darkmode? "false": "true");
  };

  return (
    <ThemeModeContext.Provider value={{ darkmode, toggleDarkmode }}>
      <ThemeProvider theme={darkmode? dark_theme: light_theme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
};
