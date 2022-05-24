import { createContext } from "react";
import { IUser } from "../types/user";

interface IAuthContext {
  isAuth: boolean;
  auth: any;
  setIsAuth: (state: boolean) => void;
  user: IUser;
}

export const AuthContext = createContext({} as IAuthContext);
