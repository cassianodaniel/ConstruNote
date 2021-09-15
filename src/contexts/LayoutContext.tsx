import React, { createContext, useContext, useState } from "react";

interface ILayoutContextData {
  toggle: boolean;
  setToggle(value: boolean): void;
  passos: number;
  setPassos(passo: number): void;
}

export const LayoutContext = createContext<ILayoutContextData>(
  {} as ILayoutContextData
);

export const LayoutProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [passos, setPassos] = useState<number>(1);
  return (
    <LayoutContext.Provider
      value={{
        toggle,
        setToggle,
        passos,
        setPassos,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayout() {
  return useContext(LayoutContext);
}
