import React, { createContext, useContext, useState } from "react";

interface ILayoutContextData {
  activeTab: string;
  setActiveTab(value: string): void;
  userSidebar: boolean;
  setUserSidebar(value: boolean): void;
}

export const LayoutContext = createContext<ILayoutContextData>(
  {} as ILayoutContextData
);

export const LayoutProvider: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = useState("chats");
  const [userSidebar, setUserSidebar] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        activeTab,
        setActiveTab,
        userSidebar,
        setUserSidebar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayout() {
  return useContext(LayoutContext);
}
