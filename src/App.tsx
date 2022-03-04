import { useState } from "react";
import { AuthContext } from "./context";
import { GlobalStyles } from "./styles/global";
import { Login } from "./views/auth/Login";


export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const signIn = (login: string, password: string) => {
    setIsAuth(true);
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn }}>
      <GlobalStyles />
      <Login />
    </AuthContext.Provider>
  );
}

