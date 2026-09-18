// * funcion declarativa
// console.log(saludar("maria"));

// function saludar(nombre) {
//   return "Hola, " + nombre;
// }

// saludar = "hola mundo desde el string";

// console.log(saludar());

// * algunas desventajas:
// * se puede llamar antes de ser declarada
// * se puede sobreescribir

// * funciones flecha (arrow functions)
// const saludar = (nombre) => {
//   return "Hola, " + nombre;
// };

// * ventajas de las funciones flecha
// * 1. Sintaxis más corta y concisa.
// * 2. Son ideales para funciones pequeñas y anónimas, como callbacks en métodos de arreglos (map, filter, etc.).
// * 3. Se puede simplificar aún más si solo tienen una línea de código y esa línea es un return (return implícito).

// * funcion que retorna un objeto
// TODO: completar

// * se puede utilizar return implícito si la función solo tiene una línea de código
// TODO: completar

// * si la función solo retorna un objeto, se puede simplificar más con un return implícito
// TODO: completar si es que se puede

// TODO: transformar la función getUser3 a una función flecha con return implícito
const getUser3 = () => ({
  id: 1,
  username: "Carlos",
});

const user2 = getUser3();
console.log(user2);
