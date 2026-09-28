import { useState } from "react";

export const useCounter = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  // manejar la logica para incrementar
  const handleIncrement = () => {
    setContador((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (contador <= 0) return;

    setContador((prevValue) => prevValue - 1);
  };

  const handleReset = () => {
    setContador(valorInicial);
  };

  return {
    handleIncrement,
    handleDecrement,
    handleReset,
    contador,
  };
};
