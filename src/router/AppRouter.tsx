import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from ".";
import { AuthContext } from "../context";

export const AppRouter = () => {

  const { isAuth } = useContext(AuthContext);

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route => <Route {...route} key={route.path} />)}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => <Route {...route} key={route.path} />)}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
  );
}
