import React, { createContext, useContext, useState } from "react";
import { fakeUsers } from "../mock/fakeUsers";
import { IUser } from "../aliases/IUser";

interface IAuthContext {
  users: IUser[];
  setUsers(value: IUser[]): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState(fakeUsers);
  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
