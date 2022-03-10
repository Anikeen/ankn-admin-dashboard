import { useState } from "react";
import { AuthContext } from "./context";
import { GlobalStyles } from "./styles/global";
import { Login } from "./views/auth/Login";

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) setIsAuth(true);
  });

  const signIn = (login: string, password: string) => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        setIsAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn }}>
      <GlobalStyles />
      <Login />
    </AuthContext.Provider>
  );
}

