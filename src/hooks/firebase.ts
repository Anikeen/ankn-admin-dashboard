import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context";

interface ISignIn {
  (): (login: string, password: string, setPending: (status: boolean) => void) => void;
}

export const useFirebaseSignIn: ISignIn = () => {
  const { auth, setIsAuth } = useContext(AuthContext);

  return (login, password, setPending) => {
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
}

export const useFirebaseLogout = () => {
  const { auth, setIsAuth } = useContext(AuthContext);

  return () => {
    signOut(auth).then(() => {
      setIsAuth(false);
    }).catch((error) => {
      // An error happened.
    });
  }
}