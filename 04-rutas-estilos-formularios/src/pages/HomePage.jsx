import { useNavigate } from "react-router";

export const HomePage = () => {

  // Permite navegar a otra página desde nuestro código.
  const navigate = useNavigate();

  // Recuperamos el nombre del usuario que guardamos
  // en localStorage cuando inició sesión.
  const username = localStorage.getItem("username");

  // Función que se ejecuta al presionar
  // el botón "Cerrar sesión".
  const handleLogout = () => {

    // Eliminamos el dato que indica que
    // el usuario tiene una sesión iniciada.
    localStorage.removeItem("isLogged");

    // Eliminamos también el nombre guardado.
    localStorage.removeItem("username");

    // Mandamos al usuario nuevamente
    // a la página de login.
    navigate("/login");
  };

  return (
    <div>

      {/* Título de la página */}
      <h1>HomePage</h1>

      {/* Mostramos el nombre del usuario */}
      <p>Hola {username}</p>

      {/* Botón para cerrar sesión.
          Al hacer click ejecuta handleLogout. */}
      <button
        className="bg-red-500 text-white rounded-2xl p-2"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>

    </div>
  );
};