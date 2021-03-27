import { IDate } from "../aliases/IDate";

export const ParseUserQuotationExpirationDate = (date: IDate) => {
  return date.day + "/" + date.month + "/" + date.year;
};
