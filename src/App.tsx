import { FC, useState } from "react";
import { AuthContext } from "./context";
import { GlobalStyles } from "./styles/global";
import { AppRouter } from "./router/AppRouter";
import { Login } from "./views/auth/Login";
import { Template } from "./components/Layout/Admin/Template";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { IUser } from "./types/user";

interface IApp {
  auth: any;
  isAuthed: boolean;
  user: IUser;
}

export const App: FC<IApp> = ({ auth, isAuthed, user }) => {
  const [isAuth, setIsAuth] = useState(isAuthed);

  const signIn = (login: string, password: string) => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        setIsAuth(true);
      })
      .catch((error) => {

      });
  }

  const logout = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn, logout, user }}>
      <GlobalStyles />
      {
        isAuth
          ?
          <Template>
            <AppRouter />
          </Template>
          :
          <Login />
      }
    </AuthContext.Provider>
  );
}

