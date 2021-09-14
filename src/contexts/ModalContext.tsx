import React, { createContext, useContext, useState } from "react";

interface IModalContext {
  modalDetalhesProduto: boolean;
  setModalDetalhesProduto(value: boolean): void;
  modalDetalhesProdutoPersonalizado: boolean;
  setModalDetalhesProdutoPersonalizado(value: boolean): void;
  isProdutoPersonalizado: boolean;
  setIsProdutoPersonalizado(value: boolean): void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalDetalhesProduto, setModalDetalhesProduto] = useState<boolean>(false);
  const [modalDetalhesProdutoPersonalizado, setModalDetalhesProdutoPersonalizado] = useState<boolean>(false);
  const [isProdutoPersonalizado, setIsProdutoPersonalizado] = useState<boolean>(false);
  return <ModalContext.Provider value={{
    modalDetalhesProduto, 
    setModalDetalhesProduto, 
    modalDetalhesProdutoPersonalizado, 
    setModalDetalhesProdutoPersonalizado,
    isProdutoPersonalizado,
    setIsProdutoPersonalizado
  }}>{children}</ModalContext.Provider>;
};

export function useModal() {
  return useContext(ModalContext);
}
