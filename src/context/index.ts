import { createContext } from "react";
import { IUser } from "../types/user";

interface IAuthContext {
  isAuth: boolean;
  signIn: (login: string, password: string) => void;
  logout: () => void;
  user: IUser;
}

export const AuthContext = createContext({} as IAuthContext);
