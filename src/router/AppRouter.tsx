import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from ".";

function AppRouter() {
  const isAuth: boolean = false;

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route => <Route {...route} key={route.path} />)}
        <Navigate to={'/'} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => <Route {...route} key={route.path} />)}
        <Navigate to={'/'} />
      </Routes>
  );
}

export default AppRouter;