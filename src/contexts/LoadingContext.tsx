import React, { createContext, useContext, useState, useEffect } from "react";

interface ILoadingContextData {
  isDisconnected: boolean;
  setDisconnected(value: boolean): void;
  isLoadingApp: boolean;
  setLoadingApp(value: boolean): void;
  isLoadingMedia: boolean;
  setIsLoadingMedia(value: boolean): void;
}

export const LoadingContext = createContext<ILoadingContextData>(
  {} as ILoadingContextData
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isDisconnected, setDisconnected] = useState(false);
  const [isLoadingApp, setLoadingApp] = useState(true);
  const [isLoadingMedia, setIsLoadingMedia] = useState(true);

  const init = () => {
    setTimeout(() => setLoadingApp(false), 1000);
  };

  useEffect(init, []);

  return (
    <LoadingContext.Provider
      value={{ isDisconnected, setDisconnected, isLoadingApp, setLoadingApp, isLoadingMedia, setIsLoadingMedia }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  return useContext(LoadingContext);
}
