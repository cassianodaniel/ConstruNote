import React, { createContext, useContext, useState } from "react";
import ScreenType from "../enums/ScreenType";

interface IMainBoxContext {
  screen: ScreenType;
  setScreen(value: ScreenType): void;
}

export const MainBoxContext = createContext<IMainBoxContext>(
  {} as IMainBoxContext
);

export const MainBoxProvider: React.FC = ({ children }) => {
  const [screen, setScreen] = useState(ScreenType.WELCOME);
  return (
    <MainBoxContext.Provider value={{ screen, setScreen }}>
      {children}
    </MainBoxContext.Provider>
  );
};

export function useMainBox() {
  return useContext(MainBoxContext);
}
