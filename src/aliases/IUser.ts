import { UserType } from "../enums/UserType";
import { IClassification } from "./IClassification";
import { IDate } from "./IDate";
export interface IUser {
  id: number;
  name: string;
  userType: UserType;
  location: string;
  quotation: string;
  quotationExpirationDate: IDate;
  quotationProgress: number;
  classification: IClassification;
  profilePicture: string;
}
