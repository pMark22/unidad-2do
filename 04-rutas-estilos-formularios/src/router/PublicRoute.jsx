import { Navigate, Outlet } from "react-router";


export const PublicRoute = () => {

  // Comprobamos si hay una sesión iniciada.
  const isLogged = localStorage.getItem("isLogged");


  // Si ya está logueado...
  if (isLogged) {

    // Lo mandamos al Home.
    return <Navigate to="/home" />;
  }


  // Si no está logueado,
  // puede entrar a Login o Register.
  return <Outlet />;
};