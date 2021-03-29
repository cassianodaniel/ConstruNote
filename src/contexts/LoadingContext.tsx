import React, { createContext, useContext, useState } from "react";

interface ILoadingContextData {
  isLoadingApp: boolean;
  setIsLoadingApp(value: boolean): void;
}

export const LoadingContext = createContext<ILoadingContextData>(
  {} as ILoadingContextData
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoadingApp, setIsLoadingApp] = useState(true);

  return (
    <LoadingContext.Provider
      value={{
        isLoadingApp,
        setIsLoadingApp,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  return useContext(LoadingContext);
}
