import React, { createContext, useContext, useState } from 'react';

interface ILayoutContextData {
  toggle: boolean;
  setToggle(value: boolean): void;
}

export const LayoutContext = createContext<ILayoutContextData>(
  {} as ILayoutContextData
);

export const LayoutProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <LayoutContext.Provider
      value={{
        toggle,
        setToggle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayout() {
  return useContext(LayoutContext);
}
