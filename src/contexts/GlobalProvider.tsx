import React from "react";
import { LoadingProvider } from "./LoadingContext";
import { LayoutProvider } from "./LayoutContext";
import { ModalProvider } from "./ModalContext";

const Provider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <LayoutProvider>
        <ModalProvider>
          <>{children}</>
        </ModalProvider>
      </LayoutProvider>
    </LoadingProvider>
  );
};

export default Provider;
