import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { App } from "./App.jsx";


// Buscamos el elemento "root"
// que existe en index.html.
createRoot(document.getElementById("root")).render(

  <StrictMode>

    {/* Acá arrancamos nuestra aplicación React */}
    <App />

  </StrictMode>,
);