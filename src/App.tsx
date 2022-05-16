import { FC, useState } from "react";
import { AuthContext } from "./context";
import { GlobalStyles } from "./styles/global";
import { AppRouter } from "./router/AppRouter";
import { Login } from "./views/auth/Login";
import { Template } from "./components/Layout/Admin/Template";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { IUser } from "./types/user";

interface IProps {
  auth: any;
  isAuthed: boolean;
  user: IUser;
}

interface ISignIn {
  (login: string, password: string, setPending: (status: boolean) => void): void;
}

export const App: FC<IProps> = ({ auth, isAuthed, user }) => {
  const [isAuth, setIsAuth] = useState(isAuthed);

  const signIn: ISignIn = (login, password, setPending) => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        setPending(false);
        setIsAuth(true);
      })
      .catch((error) => {
        alert(error);
        setPending(false);
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

