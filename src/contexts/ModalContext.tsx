import React, { createContext, useContext, useState } from "react";

interface IModalContext {
  modalDetalhesProduto: boolean;
  setModalDetalhesProduto(value: boolean): void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalDetalhesProduto, setModalDetalhesProduto] = useState<boolean>(false);
  return <ModalContext.Provider value={{
    modalDetalhesProduto, setModalDetalhesProduto
  }}>{children}</ModalContext.Provider>;
};

export function useModal() {
  return useContext(ModalContext);
}
