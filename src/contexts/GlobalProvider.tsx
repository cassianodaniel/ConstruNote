import React from "react";
import { LoadingProvider } from "./LoadingContext";
import { LayoutProvider } from "./LayoutContext";
import { ModalProvider } from "./ModalContext";
import { AuthProvider } from "./AuthContext";
import { StateProvider } from "./StateContext";

const Provider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <LayoutProvider>
        <AuthProvider>
          <ModalProvider>
            <StateProvider>
              <>{children}</>
            </StateProvider>
          </ModalProvider>
        </AuthProvider>
      </LayoutProvider>
    </LoadingProvider>
  );
};

export default Provider;
