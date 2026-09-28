import { useCounter } from "../hooks/useCounter";

export const Counter2 = () => {
  const { contador, handleIncrement, handleDecrement, handleReset } =
    useCounter(10);

  return (
    <>
      <h1>Contador: {contador}</h1>

      <button onClick={() => handleDecrement()}>-</button>
      <button onClick={() => handleIncrement()}>+</button>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
};
