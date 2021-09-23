import { UserType } from "../enums/UserType";
import { IClassification } from "./IClassification";
import { IDate } from "./IDate";
export interface IUser {
  name: string;
  userType: UserType;
  location: string; // Localização da obra
  quotation: string; // Cotação da obra
  quotationExpirationDate: IDate;
  quotationProgress: number;
  classification: IClassification; // Classificação do usuário
}
