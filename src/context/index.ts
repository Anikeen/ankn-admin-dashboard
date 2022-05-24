import { createContext } from "react";
import { IUser } from "../types/user";

interface IAuthContext {
  isAuth: boolean;
  auth: any;
  setIsAuth: any;
  user: IUser;
}

export const AuthContext = createContext({} as IAuthContext);
