// Importamos Express para crear nuestro servidor
import express from "express";

// Importamos CORS para permitir que React se comunique
// con nuestro backend aunque estén en puertos diferentes
import cors from "cors";

// Creamos la aplicación de Express
const app = express();

// Permitimos peticiones desde el frontend
app.use(cors());

// Permite que Express pueda recibir datos en formato JSON
// Por ejemplo: { username, email, password }
app.use(express.json());


// ----------------------------------------------------
// ARRAY DE USUARIOS
// ----------------------------------------------------

// Acá guardamos temporalmente los usuarios registrados.
//
// IMPORTANTE:
// Esto está en memoria, por lo tanto si apagamos el backend,
// los usuarios desaparecen.
const usuarios = [];


// ----------------------------------------------------
// GET /api/saludo
// ----------------------------------------------------

// Esta ruta fue nuestra primera prueba.
//
// Cuando React hace:
// fetch("http://localhost:3000/api/saludo")
//
// el backend responde con este JSON.
app.get("/api/saludo", (req, res) => {
  res.json({
    mensaje: "Hola desde el backend",
  });
});


// ----------------------------------------------------
// POST /api/register
// ----------------------------------------------------

// Esta ruta recibe los datos del formulario de registro.
app.post("/api/register", (req, res) => {

  // Sacamos username, email y password
  // de los datos enviados por React.
  const { username, email, password } = req.body;

  // Buscamos si ya existe un usuario con ese email.
  const usuarioExiste = usuarios.find(
    (usuario) => usuario.email === email
  );

  // Si encontramos uno, devolvemos un error.
  if (usuarioExiste) {
    return res.status(400).json({
      mensaje: "El email ya está registrado",
    });
  }

  // Creamos el nuevo usuario.
  const nuevoUsuario = {
    username,
    email,
    password,
  };

  // Lo agregamos al array.
  usuarios.push(nuevoUsuario);

  // Respondemos que el registro fue exitoso.
  res.status(201).json({
    mensaje: "Usuario registrado correctamente",
    usuario: nuevoUsuario,
  });
});


// ----------------------------------------------------
// POST /api/login
// ----------------------------------------------------

// Esta ruta recibe username y password
// para comprobar si el usuario existe.
app.post("/api/login", (req, res) => {

  // Obtenemos los datos enviados por React.
  const { username, password } = req.body;

  // Buscamos un usuario que tenga
  // exactamente ese username y password.
  const usuario = usuarios.find(
    (usuario) =>
      usuario.username === username &&
      usuario.password === password
  );

  // Si no encontramos ningún usuario,
  // devolvemos error 401.
  if (!usuario) {
    return res.status(401).json({
      mensaje: "Credenciales inválidas",
    });
  }

  // Si encontramos el usuario,
  // respondemos que el login fue correcto.
  res.json({
    mensaje: "Login correcto",
    usuario,
  });
});


// ----------------------------------------------------
// INICIAR SERVIDOR
// ----------------------------------------------------

// El servidor queda escuchando en el puerto 3000.
app.listen(3000, () => {
  console.log(
    "Backend funcionando en http://localhost:3000"
  );
});