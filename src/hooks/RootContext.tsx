import React, { createContext, useContext, useState } from "react";

interface RootContextType {
  drawerWidth: number;
  sideOpenD: boolean;
  sideOpenM: boolean;
  settingOpen: boolean;
  toggleSideOpenD: () => void;
  toggleSideOpenM: () => void;
  toggleSettingOpen: () => void;
}

const RootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider: React.FC<RootProviderProps> = ({
  children,
}) => {
  const [drawerWidth] = useState<number>(260);
  const [sideOpenD, setSideOpenD] = useState(true);
  const [sideOpenM, setSideOpenM] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  const toggleSideOpenD = () => {
    setSideOpenD((prev) => !prev);
  };

  const toggleSideOpenM = () => {
    setSideOpenM((prev) => !prev);
  };

  const toggleSettingOpen = () => {
    setSettingOpen((prev) => !prev);
  };

  return (
    <RootContext.Provider
      value={{
        drawerWidth,
        sideOpenD,
        sideOpenM,
        settingOpen,
        toggleSideOpenD,
        toggleSideOpenM,
        toggleSettingOpen,
      }}>
        {children}
    </RootContext.Provider>
  );
};

export const useRoot = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRoot must be used within a RootProvider");
  }
  return context;
};
