// Navigate permite redireccionar.
// Outlet representa la ruta que está siendo protegida.
import { Navigate, Outlet } from "react-router";


export const ProtectedRoute = () => {

  // Buscamos si existe el indicador de login.
  const isLogged = localStorage.getItem("isLogged");


  // Si NO está logueado...
  if (!isLogged) {

    // Lo mandamos al login.
    return <Navigate to="/login" />;
  }


  // Si está logueado,
  // permitimos que vea la página.
  return <Outlet />;
};