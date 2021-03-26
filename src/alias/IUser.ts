import { UserType } from "../enuns/UserType";

export interface IUser {
  nome: string;
  cliente: UserType;
  local: string;
  cotacao: string;
  vencimento: string;
}
