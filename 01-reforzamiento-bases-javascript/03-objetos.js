// * Los objetos se definen con llaves {}

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
};

// * Acceder a las propiedades de un objeto
// TODO: completar

// * Agregar una nueva propiedad
// TODO: completar

// * Modificar una propiedad existente
// TODO: completar

// * Eliminar una propiedad
// TODO: completar

// * Crear un objeto con una propiedad y pasarle un valor (en este caso un objeto)
// TODO: completar

// * Crear un objeto con el mismo nombre de la variable que contiene el valor de una persona
// TODO: completar

// ! no hacer mutaciones de un objeto ya existente mandando su referencia en un nuevo objeto
// let persona4 = persona;

// persona4.nombre = "Diego";

// console.log({ persona });
// console.log({ persona4 });

// * Para evitar mutaciones, crear una copia del objeto original con el operador spread ...
// TODO: completar con el operador spread

// * Tambien podemos combinar el operador spread y agregando nuevas propiedades
let persona6 = { ...persona, nombre: "correo@email.com" };

console.log(persona6);

const req = {
  user: {},
};

const payload = {
  id: 123,
  username: "agustin",
};

// AuthMiddleware
req.userLogged = payload;

// AdminMiddleware
req.userLogged.username;

// para acceder al valor una propiedad de un objeto pero con el nombre de la propiedad directa
// TODO: completar

// * Tambien tomar el valor de una variable y pasarle como nueva propiedad
const nuevaPropiedad = "tiene un valor";
// TODO: completar con nuevo objeto y nueva propiedad

// * o tambien tomar solamente el valor de una variable como propiedad
const clave = "telefono";
// TODO: completar con nueva propiedad que tenga su propio valor, pero que la clave sea el valor de la constante clave
