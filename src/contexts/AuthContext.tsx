import React, { createContext, useContext, useState } from "react";
import { userFormulary } from "../hooks/useForm";

interface IAuthContext {
  form: userFormulary;
  setForm(value: userFormulary): void;
}

export const IAuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [form, setForm] = useState<userFormulary>({
    genericAuthData: {
      login: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    specificAuthData: {
      userType: {
        role: "Funcionário",
      },
    },
  });
  return (
    <IAuthContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      {children}
    </IAuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(IAuthContext);
}
