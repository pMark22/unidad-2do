import { useState } from "react";
import { useNavigate } from "react-router";


export const LoginPage = () => {

  // Permite cambiar de página.
  const navigate = useNavigate();


  // ----------------------------------------------------
  // DATOS DEL FORMULARIO
  // ----------------------------------------------------

  const [form, setForm] = useState({
    username: "",
    password: "",
  });


  // Indica si estamos esperando al backend.
  const [loading, setLoading] = useState(false);


  // Guarda errores.
  const [error, setError] = useState("");


  // ----------------------------------------------------
  // CUANDO EL USUARIO ESCRIBE
  // ----------------------------------------------------

  const handleChange = (event) => {

    // Obtenemos el nombre y valor del input.
    const { name, value } = event.target;


    // Actualizamos el formulario.
    setForm({
      ...form,
      [name]: value,
    });
  };


  // ----------------------------------------------------
  // CUANDO SE ENVÍA EL LOGIN
  // ----------------------------------------------------

  const handleSubmit = async (event) => {

    // Evita recargar la página.
    event.preventDefault();

    setLoading(true);

    setError("");


    try {

      // Mandamos username y password al backend.
      const response = await fetch(
        "http://localhost:3000/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          // Convertimos el formulario a JSON.
          body: JSON.stringify(form),
        }
      );


      // Convertimos la respuesta a JavaScript.
      const data = await response.json();


      // Si el backend respondió con error...
      if (!response.ok) {

        // Mostramos el mensaje.
        setError(data.mensaje);

        return;
      }


      // ------------------------------------------------
      // LOGIN CORRECTO
      // ------------------------------------------------

      // Guardamos que el usuario está logueado.
      localStorage.setItem("isLogged", "true");


      // Guardamos también el username.
      //
      // data.usuario.username viene del backend.
      localStorage.setItem(
        "username",
        data.usuario.username
      );


      // Mandamos al usuario al Home.
      navigate("/home");

    } catch (error) {

      // Si no podemos comunicarnos con el backend.
      setError("No se pudo conectar con el servidor");

    } finally {

      setLoading(false);
    }
  };


  return (
    <>
      <h1>Login</h1>


      <form
        className="flex flex-col gap-1.5 mt-2"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          className="border"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />


        <input
          type="password"
          className="border"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />


        {error && (
          <p className="text-red-700 font-bold">
            {error}
          </p>
        )}


        <button
          className="bg-blue-400 rounded-2xl p-1"
          type="submit"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Login"}
        </button>

      </form>
    </>
  );
};