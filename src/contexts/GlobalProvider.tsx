import React from "react";
import { LoadingProvider } from "./LoadingContext";
import { LayoutProvider } from "./LayoutContext";
import { ModalProvider } from "./ModalContext";
import { StateProvider } from "./StateContext";
import { AuthProvider } from "./AuthContext";

const Provider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <LayoutProvider>
          <ModalProvider>
            <StateProvider>
              <>{children}</>
            </StateProvider>
          </ModalProvider>
        </LayoutProvider>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default Provider;
