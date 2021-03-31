import React from "react";
import { LoadingProvider } from "./LoadingContext";
import { LayoutProvider } from "./LayoutContext";
import { ModalProvider } from "./ModalContext";
import { AuthProvider } from "./AuthContext";

const Provider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <LayoutProvider>
        <AuthProvider>
          <ModalProvider>
            <>{children}</>
          </ModalProvider>
        </AuthProvider>
      </LayoutProvider>
    </LoadingProvider>
  );
};

export default Provider;
