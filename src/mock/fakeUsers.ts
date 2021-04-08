import { IUser } from "../aliases/IUser";
import { UserType } from "../enums/UserType";
import fakeProfilePicture1 from "../assets/images/users/avatar-1.jpg";
import fakeProfilePicture2 from "../assets/images/users/avatar-2.jpg";
import fakeProfilePicture3 from "../assets/images/users/avatar-3.jpg";
import fakeProfilePicture4 from "../assets/images/users/avatar-4.jpg";
import fakeProfilePicture5 from "../assets/images/users/avatar-5.jpg";
import fakeProfilePicture6 from "../assets/images/users/avatar-6.jpg";
import fakeProfilePicture7 from "../assets/images/users/avatar-7.jpg";
import fakeProfilePicture8 from "../assets/images/users/avatar-8.jpg";
import defaultAvatar from "../assets/images/users/default-avatar.png";

export const fakeUsers: IUser[] = [
  {
    id: 0,
    name: "Bananeiras Cassiano Chaves",
    userType: UserType.PESSOAFISICA,
    location: "Serraria",
    quotation: "J43OIJ2",
    quotationProgress: 56,
    profilePicture: fakeProfilePicture1 as string,
    quotationExpirationDate: {
      day: 26,
      month: 4,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: false,
      gold: true,
    },
  },
  {
    id: 1,
    name: "Solânea Santos Pereira",
    userType: UserType.PESSOAJURIDICA,
    location: "Borborema",
    quotation: "3289HJC",
    quotationProgress: 23,
    profilePicture: fakeProfilePicture2 as string,
    quotationExpirationDate: {
      day: 12,
      month: 6,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: true,
      gold: false,
    },
  },
  {
    id: 2,
    name: "Belém Martins Alves",
    userType: UserType.PESSOAFISICA,
    location: "Campina Grande",
    quotation: "309FJKS",
    quotationProgress: 12,
    profilePicture: fakeProfilePicture3 as string,
    quotationExpirationDate: {
      day: 26,
      month: 3,
      year: 2021,
    },
    classification: {
      bronze: true,
      silver: false,
      gold: false,
    },
  },
  {
    id: 3,
    name: "Guarabira Santos Cunha",
    userType: UserType.PESSOAFISICA,
    location: "Alagoa Grande",
    quotation: "3032JKS",
    quotationProgress: 21,
    profilePicture: fakeProfilePicture4 as string,
    quotationExpirationDate: {
      day: 12,
      month: 4,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: true,
      gold: false,
    },
  },
  {
    id: 4,
    name: "Casserengue Pessoa Martins",
    userType: UserType.PESSOAFISICA,
    location: "Paraíba",
    quotation: "32879JD",
    quotationProgress: 78,
    profilePicture: fakeProfilePicture5 as string,
    quotationExpirationDate: {
      day: 12,
      month: 6,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: true,
      gold: false,
    },
  },
  {
    id: 5,
    name: "Patos Broga",
    userType: UserType.PESSOAFISICA,
    location: "Minas Gerais",
    quotation: "3290DKJ",
    quotationProgress: 100,
    profilePicture: fakeProfilePicture6 as string,
    quotationExpirationDate: {
      day: 28,
      month: 6,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: false,
      gold: true,
    },
  },
  {
    id: 6,
    name: "Pirpirituba Cassiano Chaves",
    userType: UserType.PESSOAFISICA,
    location: "Serraria",
    quotation: "J43OIJ2",
    quotationProgress: 56,
    profilePicture: fakeProfilePicture7 as string,
    quotationExpirationDate: {
      day: 26,
      month: 4,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: false,
      gold: true,
    },
  },
  {
    id: 7,
    name: "Gurinhém Santos Pereira",
    userType: UserType.PESSOAJURIDICA,
    location: "Borborema",
    quotation: "3289HJC",
    quotationProgress: 23,
    profilePicture: fakeProfilePicture8 as string,
    quotationExpirationDate: {
      day: 12,
      month: 6,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: true,
      gold: false,
    },
  },
  {
    id: 8,
    name: "Casserengue Martins Alves",
    userType: UserType.PESSOAFISICA,
    location: "Campina Grande",
    quotation: "309FJKS",
    quotationProgress: 12,
    profilePicture: defaultAvatar as string,
    quotationExpirationDate: {
      day: 26,
      month: 3,
      year: 2021,
    },
    classification: {
      bronze: true,
      silver: false,
      gold: false,
    },
  },
  {
    id: 9,
    name: "Arara Santos Cunha",
    userType: UserType.PESSOAFISICA,
    location: "Alagoa Grande",
    quotation: "3032JKS",
    quotationProgress: 21,
    profilePicture: defaultAvatar as string,
    quotationExpirationDate: {
      day: 12,
      month: 4,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: true,
      gold: false,
    },
  },
  {
    id: 10,
    name: "Areia Martins",
    userType: UserType.PESSOAFISICA,
    location: "Paraíba",
    quotation: "32879JD",
    quotationProgress: 78,
    profilePicture: defaultAvatar as string,
    quotationExpirationDate: {
      day: 12,
      month: 6,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: true,
      gold: false,
    },
  },
  {
    id: 11,
    name: "Emerson Broga",
    userType: UserType.PESSOAFISICA,
    location: "Minas Gerais",
    quotation: "3290DKJ",
    quotationProgress: 100,
    profilePicture: defaultAvatar as string,
    quotationExpirationDate: {
      day: 28,
      month: 6,
      year: 2021,
    },
    classification: {
      bronze: false,
      silver: false,
      gold: true,
    },
  },
];
