const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  dni: 123456,
};

// * Desestructuración de objetos
// TODO: completar desestructurando dos propiedades de persona

// * Renombrar variable desestructurada
// TODO: desestructurar renombrando la propiedad desestructurada

// * Desestructuración en funciones (tambien agregando valores por defecto)
// TODO: completar desestructurando una funcion

// * utilizacion de funcion como useContext
const useContext = ({ nombre, apellido, edad }) => {
  return {
    nombreEstudiante: nombre,
    apellidoEstudiante: apellido,
    edadEstudiante: edad,
    role: "estudiante",
    domicilioEstudiante: {
      calle: "Av italia",
      numero: "1234",
    },
  };
};

// TODO: hacer desestructuracion del objeto domicilioEstudiante cuando desestructuramos de useContext(Persona)
