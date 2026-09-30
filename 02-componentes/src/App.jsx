import { Contacto } from "./Contacto";
import { Inicio } from "./Inicio";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const App = () => {
  // fetch
  const nombre = "Marcos";

  return (
    <>
      <Navbar nombre={nombre} />
      <Inicio nombre={nombre} />
      {/* <Contacto /> */}
      <Footer />
    </>

    
  );
};
