const personas = ["Juan", "Ana", "Pedro"];

// * Acceder a los elementos de un arreglo
// TODO: completar

// * Desestructuración de arreglos
// TODO: completar

// * Desestructuración en funciones
const funcionArreglo = () => {
  const funcionDentro = () => {
    console.log("Desde la funcion");
  };

  return ["Hola mundo", funcionDentro];
};

// TODO: completar desestructurando funcionArreglo()

// * Simulacion de una funcion useState
const useState = () => {
  return ["Maxi", () => console.log("Hola mundo")];
};

// TODO: utilizar el useState con desestructuración de arreglos
// TODO: el primer valor se va a llamar nombre
// TODO: el segundo valor se va a llamar setNombre
// TODO: por ultimo llamar al setNombre()
