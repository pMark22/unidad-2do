import { BrowserRouter, Route, Routes } from "react-router";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";

import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";


export const AppRouter = () => {

  return (
    <BrowserRouter>

      <Routes>

        {/* -------------------------------------------
            RUTAS PÚBLICAS
            -------------------------------------------

            Si NO estás logueado podés entrar
            a Login y Register.
        */}

        <Route element={<PublicRoute />}>

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />

        </Route>


        {/* -------------------------------------------
            RUTAS PROTEGIDAS
            -------------------------------------------

            Para entrar a /home necesitás
            estar logueado.
        */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/home"
            element={<HomePage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};