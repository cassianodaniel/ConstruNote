import React from "react";
import { LoadingProvider } from "./LoadingContext";
import { LayoutProvider } from "./LayoutContext";
import { MainBoxProvider } from "./MainBoxContext";

const Provider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <LayoutProvider>
        <MainBoxProvider>
          <>{children}</>
        </MainBoxProvider>
      </LayoutProvider>
    </LoadingProvider>
  );
};

export default Provider;
