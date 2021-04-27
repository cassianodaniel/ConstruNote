import React from 'react';
import { LoadingProvider } from './LoadingContext';
import { LayoutProvider } from './LayoutContext';
import { ModalProvider } from './ModalContext';
import { StateProvider } from './StateContext';

const Provider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <LayoutProvider>
        <ModalProvider>
          <StateProvider>
            <>{children}</>
          </StateProvider>
        </ModalProvider>
      </LayoutProvider>
    </LoadingProvider>
  );
};

export default Provider;
