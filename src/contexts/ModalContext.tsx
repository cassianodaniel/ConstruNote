import React, { createContext, useContext, useState } from "react";

interface IModalContext {
  showModalForwardMessageTo: any | undefined;
  setShowModalForwardMessageTo(value: any | undefined): void;
  showModalEditInfo: boolean;
  setShowModalEditInfo(value: boolean): void;
  showModalChangePassword: boolean;
  setShowModalChangePassword(value: boolean): void;
  showModalAddContact: boolean;
  setShowModalAddContact(value: boolean): void;
  showModalAddMember: boolean;
  setShowModalAddMember(value: boolean): void;
  showModalManageGroup: boolean;
  setShowModalManageGroup(value: boolean): void;
  showModalDevicesConfig: boolean;
  setShowModalDevicesConfig(value: boolean): void;
  showModalDialPad: boolean;
  setShowModalDialPad(val: boolean): void;
  showModalAddParticipant: boolean;
  setShowModalAddParticipant(val: boolean): void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [showModalForwardMessageTo, setShowModalForwardMessageTo] = useState<
    any | undefined
  >();

  const [showModalEditInfo, setShowModalEditInfo] = useState(false);

  const [showModalChangePassword, setShowModalChangePassword] = useState(false);

  const [showModalAddContact, setShowModalAddContact] = useState(false);

  const [showModalManageGroup, setShowModalManageGroup] = useState(false);

  const [showModalAddMember, setShowModalAddMember] = useState(false);

  const [showModalDevicesConfig, setShowModalDevicesConfig] = useState(false);

  const [showModalDialPad, setShowModalDialPad] = useState(false);

  const [showModalAddParticipant, setShowModalAddParticipant] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showModalForwardMessageTo,
        setShowModalForwardMessageTo,
        showModalEditInfo,
        setShowModalEditInfo,
        showModalChangePassword,
        setShowModalChangePassword,
        showModalAddContact,
        setShowModalAddContact,
        showModalAddMember,
        setShowModalAddMember,
        showModalManageGroup,
        setShowModalManageGroup,
        showModalDevicesConfig,
        setShowModalDevicesConfig,
        showModalDialPad,
        setShowModalDialPad,
        showModalAddParticipant,
        setShowModalAddParticipant
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}
