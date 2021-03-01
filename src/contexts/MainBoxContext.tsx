import React, { createContext, useContext, useState } from "react";
import ScreenType from "../enuns/ScreenType";

interface IMainBoxContext {
  screen: ScreenType;
  setScreen(value: ScreenType): void;
  isScreenToNotDisplayNavBars: boolean;
}

export const MainBoxContext = createContext<IMainBoxContext>(
  {} as IMainBoxContext
);

export const MainBoxProvider: React.FC = ({ children }) => {
  const [screen, setScreen] = useState(ScreenType.WELCOME);
  const isScreenToNotDisplayNavBars = (ScreenType.WELCOME ||
  ScreenType.CADASTROS ||
  ScreenType.CADASTROSFISICA ||
  ScreenType.CADASTROSFORNECEDOR ||
  ScreenType.CADASTROSJURIDICA) ? true : false;
  return (
    <MainBoxContext.Provider value={{ screen, setScreen, isScreenToNotDisplayNavBars }}>
      {children}
    </MainBoxContext.Provider>
  );
};

export function useMainBox() {
  return useContext(MainBoxContext);
}
