const getCharacterById = async () => {
  try {
    const url = "https://thesimpsonsapi.com/api/characters/5";
    const urlImage = "https://cdn.thesimpsonsapi.com/500";

    const response = await fetch(url);
    const data = await response.json();
    // TODO: desestructurar la informacion de data hasta tener la variable image solamente y que devuelva un console.log de la ruta completa
  } catch (error) {
    console.log(error);
    alert("Ocurrio un error inesperado");
  }
};

getCharacterById();
