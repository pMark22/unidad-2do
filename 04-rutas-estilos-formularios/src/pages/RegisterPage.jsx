// useState nos permite guardar información que cambia
// dentro del componente.
import { useState } from "react";

// useNavigate permite cambiar de página
// mediante React Router.
import { useNavigate } from "react-router";


export const RegisterPage = () => {

  // Nos permite navegar a otra ruta.
  const navigate = useNavigate();


  // ----------------------------------------------------
  // DATOS DEL FORMULARIO
  // ----------------------------------------------------

  // Acá guardamos lo que escribe el usuario.
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });


  // Indica si estamos esperando una respuesta
  // del backend.
  const [loading, setLoading] = useState(false);


  // Guarda un mensaje de error.
  const [error, setError] = useState("");


  // ----------------------------------------------------
  // CUANDO EL USUARIO ESCRIBE
  // ----------------------------------------------------

  const handleChange = (event) => {

    // Sacamos el nombre del input y su valor.
    //
    // Por ejemplo:
    // name = "username"
    // value = "marcos"
    const { name, value } = event.target;


    // Actualizamos solamente el campo que cambió.
    setForm({
      ...form,
      [name]: value,
    });
  };


  // ----------------------------------------------------
  // CUANDO SE ENVÍA EL FORMULARIO
  // ----------------------------------------------------

  const handleSubmit = async (event) => {

    // Evita que el navegador recargue la página.
    event.preventDefault();


    // Mostramos que estamos cargando.
    setLoading(true);

    // Limpiamos errores anteriores.
    setError("");


    try {

      // Enviamos los datos al backend.
      const response = await fetch(
        "http://localhost:3000/api/register",
        {
          // Indicamos que estamos haciendo un POST.
          method: "POST",

          // Decimos que estamos enviando JSON.
          headers: {
            "Content-Type": "application/json",
          },

          // Convertimos nuestro objeto JavaScript
          // a JSON para enviarlo.
          body: JSON.stringify(form),
        }
      );


      // Convertimos la respuesta del backend
      // de JSON a objeto JavaScript.
      const data = await response.json();


      // response.ok es false si hubo un error HTTP.
      if (!response.ok) {

        // Mostramos el mensaje enviado por el backend.
        setError(data.mensaje);

        return;
      }


      // Si todo salió bien,
      // mandamos al usuario al login.
      navigate("/login");

    } catch (error) {

      // Este error ocurre, por ejemplo,
      // si el backend está apagado.
      setError("No se pudo conectar con el servidor");

    } finally {

      // Dejamos de mostrar "Cargando..."
      setLoading(false);
    }
  };


  // ----------------------------------------------------
  // HTML / JSX
  // ----------------------------------------------------

  return (
    <>
      <h1>Register</h1>

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
          type="email"
          className="border"
          placeholder="email"
          name="email"
          value={form.email}
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
          {loading ? "Cargando..." : "Register"}
        </button>

      </form>
    </>
  );
};