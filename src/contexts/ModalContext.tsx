import React, { createContext, useContext, useState } from "react";

interface IModalContext {}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
};

export function useModal() {
  return useContext(ModalContext);
}
