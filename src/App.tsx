import { FC, useState } from "react";
import { AuthContext } from "./context";
import { GlobalStyles } from "./styles/global";
import { AppRouter } from "./router/AppRouter";
import { Login } from "./views/auth/Login";
import { Template } from "./components/Layout/Admin/Template";

import { IUser } from "./types/user";

interface IProps {
  auth: any;
  isAuthed: boolean;
  user: IUser;
}

export const App: FC<IProps> = ({ auth, isAuthed, user }) => {
  const [isAuth, setIsAuth] = useState(isAuthed);

  return (
    <AuthContext.Provider value={{ isAuth, auth, setIsAuth, user }}>
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

