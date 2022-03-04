import { createContext } from "react";

interface IAuthContext {
  isAuth: boolean;
  signIn: (login: string, password: string) => void;
}

export const AuthContext = createContext({} as IAuthContext);
